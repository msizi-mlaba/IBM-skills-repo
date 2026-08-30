/* Define variables and if else statement for userRole and accessLevel  */
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

/* Define variables and nested if else statements for isLoggedIn and userMessage */
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!"   
    } else {
        userMessage = "Welcome, User!";
    }

} else {
    userMessage = "Please log in to access the system.";
}