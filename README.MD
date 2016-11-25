# Facebook Messenger Platform Thread Settings Helper

Simple helper to ease Thread Settings Configuration

https://developers.facebook.com/docs/messenger-platform/thread-settings

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm install fb-thread-settings -g
```

## Options

### greeting="text" (optional)

Lets you set the greeting text:

https://developers.facebook.com/docs/messenger-platform/thread-settings/greeting-text


### getstarted (optional)

Enables the get started UI. The postback name is set to `getstarted`

https://developers.facebook.com/docs/messenger-platform/thread-settings/get-started-button  

### menu=[{type: "postback", title: "Menu item titel", payload: "postback value"}]

Lets you set the persistent menu (NOT IMPLEMENTED YET)


## Example Usage

```
fb-thread-settings --greeting=\"Your bot greeting text!\" --getstarted --token=*FB PAGE ACCESS TOKEN*
```

## Link the postaback with the Microsoft Bot Framework

```
// answer get started postback created by our tool
bot.beginDialogAction('getstarted', '/getstarted');

// define the dialog itself
bot.dialog('/getstarted', 
[
    (session) => 
    {
        session.endDialog(`HI ${session.message.user.name}! Nice to meet you!`);
    }
]);

```


## Check us out

[The Bot Makers](http://thebotmakers.com)

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/fb-thread-settings.svg
[npm-url]: https://www.npmjs.com/package/fb-thread-settings