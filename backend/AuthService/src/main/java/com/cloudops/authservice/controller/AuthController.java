package com.cloudops.authservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cloudops.authservice.dto.LoginRequest;
import com.cloudops.authservice.dto.LoginResponse;
import com.cloudops.authservice.dto.RegisterRequest;
import com.cloudops.authservice.entity.AppUser;
import com.cloudops.authservice.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public AppUser register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}