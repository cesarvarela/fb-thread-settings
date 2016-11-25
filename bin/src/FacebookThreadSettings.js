"use strict";
var request = require('request');
var FacebookThreadSettings = (function () {
    function FacebookThreadSettings(TOKEN) {
        this.TOKEN = TOKEN;
    }
    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/greeting-text
    FacebookThreadSettings.prototype.setupGreeting = function (text) {
        var json = "{\n                \"setting_type\":\"greeting\",\n                \"greeting\":{  \n                    \"text\":\"" + text + "\"\n                }\n            }";
        this.threadSetup(JSON.parse(json));
    };
    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/get-started-button
    FacebookThreadSettings.prototype.setupGetStarted = function () {
        var json = "{\n                \"setting_type\":\"call_to_actions\",\n                \"thread_state\":\"new_thread\",\n                \"call_to_actions\":\n                [\n                    {\n                        \"payload\":\"action?getstarted\"\n                    }\n                ]\n            }";
        this.threadSetup(JSON.parse(json));
    };
    //SEE: https://developers.facebook.com/docs/messenger-platform/thread-settings/persistent-menu
    FacebookThreadSettings.prototype.setupMenu = function (text) {
        var json = "{\n                \"setting_type\" : \"call_to_actions\",\n                \"thread_state\" : \"existing_thread\",\n                \"call_to_actions\":[\n                    {\n                    \"type\":\"postback\",\n                    \"title\":\"reset\",\n                    \"payload\":\"action?reset\"\n                    }\n                ]\n            }";
        this.threadSetup(JSON.parse(json));
    };
    FacebookThreadSettings.prototype.log = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Updated:");
            console.log(body);
        }
        else {
            console.log("Failed:");
            console.log(body);
        }
    };
    FacebookThreadSettings.prototype.threadSetup = function (json) {
        // Start the request
        request({
            url: 'https://graph.facebook.com/v2.6/me/thread_settings?access_token=' + this.TOKEN,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            form: json
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("Updated:");
                console.log(body);
            }
            else {
                console.log("Failed:");
                console.log(body);
            }
        });
    };
    return FacebookThreadSettings;
}());
exports.FacebookThreadSettings = FacebookThreadSettings;
//# sourceMappingURL=FacebookThreadSettings.js.map