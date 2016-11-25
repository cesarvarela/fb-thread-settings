import * as request from 'request'
import * as restify from 'restify'

export class FacebookThreadSettings {

    TOKEN:string;

    constructor(TOKEN:string) {
        this.TOKEN = TOKEN;
    }

    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/greeting-text
    setupGreeting(text: string) {
        let json =
            `{
                "setting_type":"greeting",
                "greeting":{  
                    "text":"${text}"
                }
            }`

        this.threadSetup(JSON.parse(json));
    }

    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/get-started-button
    setupGetStarted() {
        let json =
            `{
                "setting_type":"call_to_actions",
                "thread_state":"new_thread",
                "call_to_actions":
                [
                    {
                        "payload":"action?getstarted"
                    }
                ]
            }`

        this.threadSetup(JSON.parse(json));
    }

    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/persistent-menu
    setupMenu(text: string) {
        let json =
            `{
                "setting_type" : "call_to_actions",
                "thread_state" : "existing_thread",
                "call_to_actions":[
                    {
                    "type":"postback",
                    "title":"reset",
                    "payload":"action?reset"
                    }
                ]
            }`

        this.threadSetup(JSON.parse(json));
    }

    log(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Updated:");
            console.log(body);
        } else {
            console.log("Failed:");
            console.log(body);
        }
    }


    threadSetup(json: any) {
        // Start the request
        request({
            url: 'https://graph.facebook.com/v2.6/me/thread_settings?access_token=' + this.TOKEN,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            form: json
        }, (error, response, body) => {

                if (!error && response.statusCode == 200) {
                    console.log("Updated:");
                    console.log(body);
                } else {
                    console.log("Failed:");
                    console.log(body);
                }
            })
    }
}