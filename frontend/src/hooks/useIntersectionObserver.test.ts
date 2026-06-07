import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createElement } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

const mockObserve = vi.fn()
const mockUnobserve = vi.fn()

let capturedCallback: IntersectionObserverCallback

beforeEach(() => {
  vi.clearAllMocks()
  capturedCallback = undefined as unknown as IntersectionObserverCallback
  vi.stubGlobal('IntersectionObserver', vi.fn((cb: IntersectionObserverCallback) => {
    capturedCallback = cb
    return {
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: vi.fn(),
    }
  }))
})

function TestComponent({ onVisible }: { onVisible: (v: boolean) => void }) {
  const { ref, isVisible } = useIntersectionObserver()
  onVisible(isVisible)
  return createElement('div', { ref, 'data-testid': 'target' })
}

describe('useIntersectionObserver', () => {
  it('starts as not visible', () => {
    let visible = true
    render(createElement(TestComponent, { onVisible: (v) => { visible = v } }))
    expect(visible).toBe(false)
  })

  it('calls observe on the target element', () => {
    render(createElement(TestComponent, { onVisible: () => {} }))
    expect(mockObserve).toHaveBeenCalledWith(screen.getByTestId('target'))
  })

  it('becomes visible when intersection fires', () => {
    const visibleValues: boolean[] = []
    render(createElement(TestComponent, { onVisible: (v) => visibleValues.push(v) }))

    act(() => {
      capturedCallback(
        [{ isIntersecting: true }] as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      )
    })

    expect(visibleValues[visibleValues.length - 1]).toBe(true)
  })

  it('unobserves after becoming visible (triggerOnce=true)', () => {
    render(createElement(TestComponent, { onVisible: () => {} }))

    act(() => {
      capturedCallback(
        [{ isIntersecting: true }] as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      )
    })

    expect(mockUnobserve).toHaveBeenCalled()
  })
})
