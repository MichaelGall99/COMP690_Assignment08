export async function fetchEmployees() {
    try {
        const response = await fetch('././data/employees.json'); 
        const employeeRecs = await response.json();
        return employeeRecs.employees
    } catch (e) {
        document.body.innerHTML = e.message
    }
}
