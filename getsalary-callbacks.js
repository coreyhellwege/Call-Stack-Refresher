// Imagine getSalary() retrieves data for salary from an API
// We will need a callback to run when we get the salary

function getSalary(callback) {
  // setTimeout simulates a network request which takes 1 second to retrieve the salary data
  setTimeout(() => {
    callback(33000);
  }, 1000);
}

function subtractTax(salary, callback) {
  setTimeout(() => {
    callback(salary * 0.75);
  }, 1000);
}

function subtractRent(salary, callback) {
  setTimeout(() => {
    callback(salary - 5000);
  }, 1000);
}

function getDisposableIncome(callback) {
  getSalary(salary1 => {
    subtractTax(salary1, salary2 => {
      subtractRent(salary2, salary3 => {
        callback(salary3)
      });
    });
  });
}

getDisposableIncome(disposable => {
  console.log(disposable);
})