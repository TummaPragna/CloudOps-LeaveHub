package com.cloudops.authservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cloudops.authservice.dto.ApplyLeaveRequest;
import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.service.LeaveService;
import com.cloudops.authservice.dto.DashboardStats;

@RestController
@RequestMapping("/leave")
@CrossOrigin(origins = "http://localhost:5173")
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
    @GetMapping("/stats")
    public DashboardStats getStats(@RequestParam String email) {

        return leaveService.getDashboardStats(email);

    }
    @GetMapping("/recent")
    public List<LeaveRequest> getRecentLeaves(@RequestParam String email) {

        return leaveService.getMyLeaves(email);

    }
    @GetMapping("/dashboard-stats")
    public DashboardStats getDashboardStats(@RequestParam String email) {
        return leaveService.getDashboardStats(email);
    }

}