// JavaScript is a single thread language, meaning only only one of these call stacks can be executed at any given time.

function step1() {
  step2();
}

function step2() {
  step3();
}

function step3() {
  step4();
}

function step4() {
  debugger;
}

step1();

