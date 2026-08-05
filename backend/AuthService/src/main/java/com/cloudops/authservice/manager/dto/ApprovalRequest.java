package com.cloudops.authservice.manager.dto;

public class ApprovalRequest {

    private Long leaveId;
    private String status;

    public Long getLeaveId() {
        return leaveId;
    }

    public void setLeaveId(Long leaveId) {
        this.leaveId = leaveId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}