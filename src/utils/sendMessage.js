var https = require('follow-redirects').https;
var fs = require('fs');

function sendMessage(phone,message) {
    var options = {
        'method': 'POST',
        'hostname': 'vjgy8m.api.infobip.com',
        'path': '/sms/2/text/advanced',
        'headers': {
            'Authorization': 'App 3c827aa89492bdbae5aeb06794a6bad7-48a43f41-126a-45ad-abcd-69402207109d',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    var postData = JSON.stringify({
        "messages": [
            {
                "destinations": [
                    {
                        "to": `${phone}`
                    }
                ],
                "from": "KWM",
                "text": `${message}`
            }
        ]
    });

    req.write(postData);

    req.end();
}

module.exports = sendMessage