package com.cloudops.authservice.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cloudops.authservice.dto.LoginRequest;
import com.cloudops.authservice.dto.LoginResponse;
import com.cloudops.authservice.dto.RegisterRequest;
import com.cloudops.authservice.entity.AppUser;
import com.cloudops.authservice.entity.Role;
import com.cloudops.authservice.repository.AppUserRepository;
import com.cloudops.authservice.security.JWTService;
import com.cloudops.authservice.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AppUserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JWTService jwtService;

    @Override
    public AppUser register(RegisterRequest request) {

        AppUser user = new AppUser();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.valueOf(request.getRole().toUpperCase()));

        return repository.save(user);
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        Optional<AppUser> optionalUser = repository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {
            throw new BadCredentialsException("Invalid Email");
        }

        AppUser user = optionalUser.get();

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getRole().name(),
                "Login Successful"
        );
    }
}