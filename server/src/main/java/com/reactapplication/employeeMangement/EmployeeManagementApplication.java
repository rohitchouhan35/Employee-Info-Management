package com.reactapplication.employeeMangement;

import com.reactapplication.employeeMangement.model.Employee;
import com.reactapplication.employeeMangement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		System.out.println("Hello World!");
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Ramesh");
//		employee.setLastName("Babu");
//		employee.setEmailId("ramesh@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("John");
//		employee1.setLastName("Cena");
//		employee1.setEmailId("cena@gmail.com");
//		employeeRepository.save(employee1);
	}
}
