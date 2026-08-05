package com.cloudops.authservice.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.manager.service.ManagerService;
import com.cloudops.authservice.manager.dto.ApprovalRequest;

@RestController
@RequestMapping("/manager")
public class ManagerController {

    @Autowired
    private ManagerService service;

    @GetMapping("/pending")
    public List<LeaveRequest> pendingLeaves() {

        return service.getPendingLeaves();
    }

    @PostMapping("/approve")
    public LeaveRequest approveLeave(@RequestBody ApprovalRequest request) {

        return service.updateLeaveStatus(request);
    }

}