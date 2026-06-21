// Response Time SLA Analyzer
function questionName(input) {
    // ADD YOUR CODE HERE
    const responseTimes = input;
    const totalRequests = responseTimes.length;
    const SLA_LIMIT = 500;

    // Handle edge case for empty input array
    if (totalRequests === 0) {
        return "Total Requests: 0 Min Response: 0ms Max Response: 0ms SLA Breaches: 0 (0.00%) Overall Status: ✅ SLA PASSED";
    }

    // Initialize trackers with the first element of the array
    let min = responseTimes[0];
    let max = responseTimes[0];
    let totalSum = 0;
    let breachCount = 0;

    let i = 0;
    // Process the elements sequentially using a while loop
    while (i < totalRequests) {
        let currentTime = responseTimes[i];

        // 1. Track minimum value
        if (currentTime < min) {
            min = currentTime;
        }

        // 2. Track maximum value
        if (currentTime > max) {
            max = currentTime;
        }

        // 3. Track SLA breaches (> 500ms)
        if (currentTime > SLA_LIMIT) {
            breachCount++;
        }

        // 4. Accumulate sum for average calculation
        totalSum += currentTime;

        i++; // Increment pointer
    }

    // Calculate breach percentage formatted to two decimal places
    let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

    // Use a ternary operator to establish overall SLA health status
    let overallStatus = (breachCount > 0) ? "❌ SLA VIOLATED" : "✅ SLA PASSED";

    // Construct the exact expected output string
    let answer = `Total Requests: ${totalRequests} Min Response: ${min}ms Max Response: ${max}ms SLA Breaches: ${breachCount} (${breachPercentage}%) Overall Status: ${overallStatus}`;

    return answer;
}
