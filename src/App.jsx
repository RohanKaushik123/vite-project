import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: ""
  });
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5100/employees";

  const getEmployees = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Unable to load employees");
      }

      const data = await response.json();
      setEmployees(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addEmployee = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, salary: Number(formData.salary) })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Unable to add employee");
      }

      setFormData({ name: "", department: "", salary: "" });
      await getEmployees();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (!response.ok) {
        throw new Error("Unable to delete employee");
      }

      await getEmployees();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <form onSubmit={addEmployee}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id || emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>${emp.salary}</td>
              <td>
                <button onClick={() => deleteEmployee(emp._id || emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;