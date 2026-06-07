package com.ramosabogada.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
    @NotBlank(message = "El nombre es requerido")
    @Size(max = 100, message = "El nombre no puede superar los 100 caracteres")
    String name,

    @NotBlank(message = "El email es requerido")
    @Email(message = "El formato del email no es válido")
    String email,

    @NotBlank(message = "El mensaje es requerido")
    @Size(max = 2000, message = "El mensaje no puede superar los 2000 caracteres")
    String message
) {}
