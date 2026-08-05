package com.cloudops.authservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloudops.authservice.entity.AppUser;
import com.cloudops.authservice.entity.LeaveRequest;
import com.cloudops.authservice.entity.LeaveStatus;

@Repository
public interface LeaveRepository extends JpaRepository<LeaveRequest, Long> {

    List<LeaveRequest> findByEmployee(AppUser employee);
    List<LeaveRequest> findByStatus(LeaveStatus status);

}