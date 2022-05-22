const venom = require('venom-bot');
const express = require('express');
const app = express()
const KWM_GROUP_ID = '2348068693184-1546247429@g.us'
const {isKK,sendMessage,transformTextMobile,transformTextWeb, sendFacebook, sendTw} = require('./utils')
const puppeteer = require('puppeteer')

let phone_numbers = [
    '2348112907883',
    '2348174024547',
    '2348096103720'
]
venom.create('sales')
  .then((client) => {
      start(client)
      app.listen(3000,'localhost', () => {
        console.log('listening on http://localhost:3000/')
        })
    })
  .catch((erro) => {
    console.log(erro);
  });

let kingdomKeys = []

function start(client) {
    client.onMessage(async (message) => {
        if(message.body.length < 285) {
            mobileFormat = transformTextMobile(message.body).replaceAll('*','').replaceAll('_','')
            webFormat = transformTextWeb(message.body)
            let final = webFormat.replaceAll(' ','&nbsp;').replace('\n','<br />').replace('\n','<br />').replace('\n','<br />').replace('\n','<br />').replace('\n','<br />').replace('\n','<br />').replace('\n','<br />').replace('"','<br /><br />"').replace('"','"<br /><br />').replace('PRAYER','<br /><br /><br />PRAYER<br />')
            let text = `
                <p>
                    ${final}
                </p>
            `
            kingdomKeys.push(text)
            phone_numbers.forEach(num => {
                sendMessage(num,message.body.replaceAll('*','').replaceAll('_',''))
            })
            sendFacebook(message.body)
            sendTw(message.body)
        }
    });
}


app.get('/',(req,res) => {
    console.log(kingdomKeys)
    res.send(`
        <p>
            ${kingdomKeys}
        </p>
    `)
})