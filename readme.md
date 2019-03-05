# Call Stack

These examples explore the differences between synchronous and asynchronous JavaScript. 

There are three variations of a Disposable Income Calculator written in JavaScript.

## `getsalary-sync.js`

This first example is a version of the calculator made up of a series of synchronous methods.

## `getsalary-callbacks.js`

This example is a version of the calculator made up of asynchronous callback methods. It is designed to show callback hell. 

When run together, `getSalary()`, `subtractTax()` and `subtractRent()` all need callback methods. This creates the confusing, nested code in `getDisposableIncome()`.

Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. Callback hell occurs when people try to write JavaScript in a way where execution happens visually from top to bottom. Lots of people make this mistake! In other languages like C, Ruby or Python there is the expectation that whatever happens on line 1 will finish before the code on line 2 starts running and so on down the file. As you will learn, JavaScript is different.

### What are callbacks?

Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when downloading things, reading files, talking to databases, etc.

## `getsalary-promises.js`

This example refactors the callback version, using promises. It also modifies the calculator to add multiple salaries to the calculation, using the `Promise.all()` method.

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Unlike the "old-style", passed-in callbacks version, a promise comes with some guarantees:

- Callbacks will never be called before the completion of the current run of the JavaScript event loop.
- Callbacks added with `.then()` even after the success or failure of the asynchronous operation, will be called.
- Multiple callbacks may be added by calling `.then()` several times. Each callback is executed one after another, in the order in which they were inserted.

One of the great things about using promises is chaining. Chaining is executing two or more asynchronous operations back to back

`.then()` is a method on a promise object that puts a callback in the promise chain. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

The `Promise.all()` method returns a single Promise that resolves when all of the promises passed as an iterable have resolved, or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

---

### Credits:

https://www.youtube.com/watch?v=RRgAdi3gX-s

### Other Resources:

http://callbackhell.com

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

