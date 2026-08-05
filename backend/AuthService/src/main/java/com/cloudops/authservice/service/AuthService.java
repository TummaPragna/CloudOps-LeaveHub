package com.cloudops.authservice.service;

import com.cloudops.authservice.dto.LoginRequest;
import com.cloudops.authservice.dto.LoginResponse;
import com.cloudops.authservice.dto.RegisterRequest;
import com.cloudops.authservice.entity.AppUser;

public interface AuthService {

    AppUser register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}