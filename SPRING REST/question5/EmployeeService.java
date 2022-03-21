package Question5;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service

public class EmployeeService {
	 private List<Employee> emp = new ArrayList<>(Arrays.asList(
	            new Employee("01","RISHABH","IT","Sr. Developer","8LPA"),
	            new Employee("02","NEHA","Analytics","Sr. Analyst","9LPA"),
	            new Employee("03","SARTHAK","HR","HR Head","2LPA"),
	            new Employee("04","SPANDHAN","Purchase","Purchase Head","5LPA")
	    ));

	    public List<Employee> getAllEmployees()
	    {
	        return emp;
	    }

	    public Employee getEmployee(String employeeId)
	    {
	        return emp.stream().filter(t->t.getEmployeeId().equals(employeeId)).findFirst().get();
	    }

	    public void addEmployee(Employee employee)
	    {
	        emp.add(employee);
	    }

	    public void deleteEmployee(String employeeId)
	    {
	        emp.removeIf(t->t.getEmployeeId().equals(employeeId));
	    }

	    public void updateEmployee(String employeeId, Employee employee)
	    {
	        for (int i=0;i<emp.size();i++)
	        {
	            Employee t = emp.get(i);
	            if(t.getEmployeeId().equals(employeeId))
	            {
	                emp.set(i,employee);
	                return;
	            }
	        }
	    }
	}


