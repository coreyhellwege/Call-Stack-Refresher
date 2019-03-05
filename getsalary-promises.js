function getSalary(salary) {
  // This function returns a promise which we attach a callback to
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary);
    }, 1000);
  });
}

function getSalarySum() {
  return Promise.all([
    getSalary(35000),
    getSalary(40000),
    getSalary(55000),
    getSalary(75000),
    getSalary(105000)
  ]).then(salaries => {
    return salaries.reduce((previous, current) => previous + current, 0);
  });
}

function subtractTax(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 500);
  });
}

function subtractRent(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary - 5000);
    }, 500);
  });
}

function getDisposableIncome() {
  // chaining
  return getSalarySum().then(subtractTax).then(subtractRent);
}

getDisposableIncome().then(disposable => {
  console.log(disposable);
});