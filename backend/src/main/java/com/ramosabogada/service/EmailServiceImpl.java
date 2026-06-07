package com.ramosabogada.service;

import com.ramosabogada.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;
    private final String recipientEmail;
    private final String senderEmail;

    public EmailServiceImpl(
        JavaMailSender mailSender,
        @Value("${mail.recipient}") String recipientEmail,
        @Value("${spring.mail.username}") String senderEmail
    ) {
        this.mailSender = mailSender;
        this.recipientEmail = recipientEmail;
        this.senderEmail = senderEmail;
    }

    @Override
    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(senderEmail);
        message.setTo(recipientEmail);
        message.setSubject("Consulta desde ramosabogada.github.io");
        message.setText(buildEmailBody(request));
        mailSender.send(message);
    }

    private String buildEmailBody(ContactRequest request) {
        return String.format("""
            Nombre: %s
            Email: %s

            Mensaje:
            %s
            """, request.name(), request.email(), request.message());
    }
}
