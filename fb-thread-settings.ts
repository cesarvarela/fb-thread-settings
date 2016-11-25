#!/usr/bin/env node

import { FacebookThreadSettings } from './src/FacebookThreadSettings';
import * as chalk from 'chalk'

let argv = require('minimist')(process.argv);

if (!argv.token) {
    console.log(
    `
        ${chalk.bold('Missing token, you must call the script as:')}

        fb-thread-settings --token=*FB PAGE TOKEN HERE* --getstarted --greeting="*TEXT HERE*"
    `)
}
else {
    let fbts = new FacebookThreadSettings(argv.token)

    if (argv.getstarted) {
        console.log("Setting up getting started")
        fbts.setupGetStarted()
    }
    else {
        console.log("Add --getstarted arg to set get stated button")
    }

    if (argv.greeting) {
        console.log("Setting up greeting text", argv.greeting)
        fbts.setupGreeting(argv.greeting)
    }
    else {
        console.log("Add --greeting=\"*TEXT HERE*\" arg to set the greeting text")
    }
}


