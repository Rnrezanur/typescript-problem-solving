// Rate Limiter

function rateLimiter(limit: number, interval: number) {
  let calls: number[] = [];

  return function () {
    const now = Date.now();

    calls = calls.filter(time => now - time < interval);

    if (calls.length < limit) {
      calls.push(now);
      console.log("Allowed");
    } else {
      console.log("Blocked");
    }
  };
}

// Example input
const limitedFunction = rateLimiter(3, 1000);

// Example calls
limitedFunction();
limitedFunction();
limitedFunction();
limitedFunction();
limitedFunction();