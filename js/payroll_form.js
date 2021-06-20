const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

const names = document.querySelector('#name');
const textError = document.querySelector('.text-error');
names.addEventListener('input', function() {
    try {
        (new EmployeePayrollData()).name = names.value;
        textError.textContent = "";
        
    } catch (e) {
        textError.textContent  = e;
    }
});

const date = document.querySelector('#date');
const textErrorDate = document.querySelector('.text-error-date');
date.addEventListener('input', function() {
    const startDate = new Date(Date.parse(document.querySelector('#day').value +" "+
                                          document.querySelector('#month').value +" "+ 
                                          document.querySelector('#year').value))
    try {
        (new EmployeePayrollData()).startDate = startDate;
        textErrorDate.textContent = "";
        
    } catch (e) {
        textErrorDate.textContent  = e;
    }
});

const save = () => {
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.name = names.value;
    alert(employeePayrollData.toString());
}


