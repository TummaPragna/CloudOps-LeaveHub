package com.cloudops.authservice.manager.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.manager.dto.ApprovalRequest;
import com.cloudops.authservice.repository.LeaveRepository;
import com.cloudops.authservice.manager.service.ManagerService;
import com.cloudops.authservice.entity.LeaveStatus;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private LeaveRepository repository;

    @Override
    public List<LeaveRequest> getPendingLeaves() {

    	return repository.findByStatus(LeaveStatus.PENDING);
    }

    @Override
    public LeaveRequest updateLeaveStatus(ApprovalRequest request) {

        LeaveRequest leave = repository.findById(request.getLeaveId()).orElseThrow();

        leave.setStatus(LeaveStatus.valueOf(request.getStatus().toUpperCase()));

        return repository.save(leave);
    }

}