# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections resulting from errors within asynchronous middleware.  The example showcases a POST endpoint that processes data asynchronously.  An error is intentionally thrown if the input value exceeds 100. However, because the error occurs within a `setTimeout` callback (and is not wrapped properly), the error is not handled by Express.js and will result in a crash.

The solution shows how to properly handle this error, preventing the application from crashing and providing graceful error handling.

## How to reproduce

1. Clone this repository.
2. Run `npm install`
3. Run `node bug.js`
4. Send a POST request to `http://localhost:3000/data` with a JSON payload where `value` is greater than 100.  Observe the crash and unhandled promise rejection.
5. Run `node bugSolution.js` and repeat step 4. Observe that the error is now handled gracefully, and the application does not crash.