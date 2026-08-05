package com.cloudops.authservice.service;

import java.util.List;

import com.cloudops.authservice.dto.ApplyLeaveRequest;
import com.cloudops.authservice.entity.LeaveRequest;

public interface LeaveService {

    LeaveRequest applyLeave(ApplyLeaveRequest request);

    List<LeaveRequest> getMyLeaves(String email);

}