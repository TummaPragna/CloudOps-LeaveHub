package com.cloudops.authservice.manager.service;

import java.util.List;

import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.manager.dto.ApprovalRequest;

public interface ManagerService {

	List<LeaveRequest> getPendingLeaves();

	LeaveRequest updateLeaveStatus(ApprovalRequest request);
}