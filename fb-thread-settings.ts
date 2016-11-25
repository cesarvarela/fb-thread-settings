import { FacebookThreadSettings } from './src/FacebookThreadSettings';
let argv = require('minimist')(process.argv);

if (!argv.token) {
    console.log("Missing token, you must call the script as npm run fbsetup -- --token=*FB PAGE TOKEN HERE*")
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


