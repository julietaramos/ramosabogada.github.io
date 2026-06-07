package com.ramosabogada.service;

import com.ramosabogada.dto.ContactRequest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class EmailServiceImplTest {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private EmailServiceImpl emailService;

    private static final String RECIPIENT = "sramoslegal95@gmail.com";
    private static final String SENDER = "noreply@ramosabogada.com";

    void setUp() {
        ReflectionTestUtils.setField(emailService, "recipientEmail", RECIPIENT);
        ReflectionTestUtils.setField(emailService, "senderEmail", SENDER);
    }

    @Test
    void sendContactEmail_sendsMailWithCorrectRecipient() {
        setUp();
        var request = new ContactRequest("Ana García", "ana@mail.com", "Necesito asesoramiento");

        emailService.sendContactEmail(request);

        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(mailSender).send(captor.capture());

        SimpleMailMessage sent = captor.getValue();
        assertThat(sent.getTo()).contains(RECIPIENT);
        assertThat(sent.getSubject()).contains("ramosabogada.github.io");
        assertThat(sent.getText()).contains("Ana García");
        assertThat(sent.getText()).contains("ana@mail.com");
        assertThat(sent.getText()).contains("Necesito asesoramiento");
    }
}
