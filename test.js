const getMessage = require("./script");

if (getMessage() === "Hello CI") {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}