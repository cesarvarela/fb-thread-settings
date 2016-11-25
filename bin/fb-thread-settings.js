#!/usr/bin/env node
"use strict";
var FacebookThreadSettings_1 = require('./src/FacebookThreadSettings');
var chalk = require('chalk');
var argv = require('minimist')(process.argv);
if (!argv.token) {
    console.log("\n        " + chalk.bold('Missing token, you must call the script as:') + "\n\n        fb-thread-settings --token=*FB PAGE TOKEN HERE* --getstarted --greeting=\"*TEXT HERE*\"\n    ");
}
else {
    var fbts = new FacebookThreadSettings_1.FacebookThreadSettings(argv.token);
    if (argv.getstarted) {
        console.log("Setting up getting started");
        fbts.setupGetStarted();
    }
    else {
        console.log("Add --getstarted arg to set get stated button");
    }
    if (argv.greeting) {
        console.log("Setting up greeting text", argv.greeting);
        fbts.setupGreeting(argv.greeting);
    }
    else {
        console.log("Add --greeting=\"*TEXT HERE*\" arg to set the greeting text");
    }
}
//# sourceMappingURL=fb-thread-settings.js.map