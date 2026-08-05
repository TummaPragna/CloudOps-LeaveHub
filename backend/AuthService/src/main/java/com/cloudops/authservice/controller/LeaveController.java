package com.cloudops.authservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cloudops.authservice.dto.ApplyLeaveRequest;
import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.service.LeaveService;

@RestController
@RequestMapping("/leave")
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @PostMapping("/apply")
    public LeaveRequest applyLeave(@RequestBody ApplyLeaveRequest request) {
        return leaveService.applyLeave(request);
    }

    @GetMapping("/my-leaves")
    public List<LeaveRequest> getMyLeaves(@RequestParam String email) {
        return leaveService.getMyLeaves(email);
    }
}