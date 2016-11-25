#!/usr/bin/env node
"use strict";
var FacebookThreadSettings_1 = require('./src/FacebookThreadSettings');
var argv = require('minimist')(process.argv);
if (!argv.token) {
    console.log("Missing token, you must call the script as npm run");
    console.log("fb-thread-settings -- --token=*FB PAGE TOKEN HERE*");
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