// Login Brute-Force Detection

function questionName(input) {
    // ADD YOUR CODE HERE
    // Destructure valid credentials and the array of login attempts from the input wrapper
    const [correctUser, correctPass, attemptsArray] = input;

    // const: For unchanging business rule thresholds
    const MAX_STRIKES = 3;

    // var: For global tracking counters and overall state management
    var currentStrikes = 0;
    var isLocked = false;
    var loginSuccessful = false;
    var logHistory = [];

    // let: Loop variable tracking the current index pointer
    let index = 0;
    let totalAttempts = attemptsArray.length;

    // Process login attempts using a do...while loop
    do {
        // Edge case safety check: if the attempts array is completely empty
        if (totalAttempts === 0) break;

        let attempt = attemptsArray[index];
        let attemptNum = index + 1;

        // 1. If the account is already locked, automatically reject all subsequent attempts
        if (isLocked === true) {
            logHistory.push(`Attempt ${attemptNum}: 🔒 ACCOUNT LOCKED - Rejected`);
        } else {
            // 2. Validate current attempt credentials using strict equality (===) and logical AND (&&)
            if (attempt.username === correctUser && attempt.password === correctPass) {
                loginSuccessful = true;
                logHistory.push(`Attempt ${attemptNum}: ✅ SUCCESS - Login Allowed`);
            } else {
                // 3. Increment consecutive strikes upon failure
                currentStrikes++;
                logHistory.push(`Attempt ${attemptNum}: ❌ FAILED - Strike ${currentStrikes}/${MAX_STRIKES}`);

                // 4. Trigger account lockout if threshold is met
                if (currentStrikes === MAX_STRIKES) {
                    isLocked = true;
                    logHistory.push(`🚨 ACCOUNT LOCKED`);
                }
            }
        }

        index++;

        // Break early if login succeeds; otherwise follow loop criteria constraints
        if (loginSuccessful) break;

    } while (index < totalAttempts);

    // 5. Build final system summary evaluation
    let finalStatus = "";
    if (loginSuccessful) {
        finalStatus = "SYSTEM STATUS: Access Granted.";
    } else if (isLocked) {
        finalStatus = "SYSTEM STATUS: Access Denied (Account Locked).";
    } else {
        finalStatus = "SYSTEM STATUS: Access Denied.";
    }

    // Construct the finalized text string, combining logs with a single trailing whitespace layout
    let answer = `${logHistory.join(" ")} ${finalStatus}`;
    return answer;
}
