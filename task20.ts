// Rate Limiter


function rateLimiter(limit: number, interval: number) {
  let calls: number[] = [];

  return () => {
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