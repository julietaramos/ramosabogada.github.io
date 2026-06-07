package com.ramosabogada.controller;

import com.ramosabogada.dto.ContactRequest;
import com.ramosabogada.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "${cors.allowed-origins}")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> sendContact(@Valid @RequestBody ContactRequest request) {
        emailService.sendContactEmail(request);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Mensaje enviado correctamente"
        ));
    }
}
