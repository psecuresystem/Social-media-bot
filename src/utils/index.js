const sendFacebook = require("./facebook");
const isKK = require("./isKK");
const sendMessage = require("./sendMessage");
const transformTextMobile = require("./transformTextMobile");
const transformTextWeb = require("./transformTextWeb");
const sendTw = require("./twitter");

module.exports = {
    isKK,
    transformTextMobile,
    sendMessage,
    transformTextWeb,
    sendFacebook,
    sendTw
}



