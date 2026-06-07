package com.ramosabogada.service;

import com.ramosabogada.dto.ContactRequest;

public interface EmailService {
    void sendContactEmail(ContactRequest request);
}
