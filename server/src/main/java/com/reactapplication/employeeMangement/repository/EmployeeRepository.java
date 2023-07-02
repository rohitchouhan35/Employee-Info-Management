package com.reactapplication.employeeMangement.repository;

import com.reactapplication.employeeMangement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
}
