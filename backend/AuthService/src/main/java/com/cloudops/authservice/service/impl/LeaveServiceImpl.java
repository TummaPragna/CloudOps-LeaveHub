package com.cloudops.authservice.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudops.authservice.dto.ApplyLeaveRequest;
import com.cloudops.authservice.entity.AppUser;
import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.entity.LeaveStatus;
import com.cloudops.authservice.repository.AppUserRepository;
import com.cloudops.authservice.repository.LeaveRepository;
import com.cloudops.authservice.service.LeaveService;
import com.cloudops.authservice.dto.DashboardStats;

@Service
public class LeaveServiceImpl implements LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public LeaveRequest applyLeave(ApplyLeaveRequest request) {

        AppUser employee = appUserRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        LeaveRequest leave = new LeaveRequest();

        leave.setEmployee(employee);
        leave.setLeaveType(request.getLeaveType());
        leave.setStartDate(request.getStartDate());
        leave.setEndDate(request.getEndDate());
        leave.setReason(request.getReason());
        leave.setStatus(LeaveStatus.PENDING);
        leave.setAppliedDate(LocalDate.now());

        return leaveRepository.save(leave);
    }

    @Override
    public List<LeaveRequest> getMyLeaves(String email) {

        AppUser employee = appUserRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        return leaveRepository.findByEmployee(employee);
    }
    @Override
    public DashboardStats getDashboardStats(String email) {

        AppUser employee = appUserRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        long total = leaveRepository.countByEmployee(employee);

        long pending = leaveRepository.countByEmployeeAndStatus(employee, LeaveStatus.PENDING);

        long approved = leaveRepository.countByEmployeeAndStatus(employee, LeaveStatus.APPROVED);

        long rejected = leaveRepository.countByEmployeeAndStatus(employee, LeaveStatus.REJECTED);

        return new DashboardStats(
                total,
                pending,
                approved,
                rejected
        );

    }

}