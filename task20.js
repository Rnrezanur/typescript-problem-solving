// Rate Limiter
function rateLimiter(limit, interval) {
    var calls = [];
    return function () {
        var now = Date.now();
        calls = calls.filter(function (time) { return now - time < interval; });
        if (calls.length < limit) {
            calls.push(now);
            console.log("Allowed");
        }
        else {
            console.log("Blocked");
        }
    };
}
