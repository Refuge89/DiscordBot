var Discordie = require("discordie");
var client = new Discordie();

client.connect({
  // replace this sample token
  token: "Mjc5OTQ3Mzk1MTc1ODA5MDI1.C4CuwQ.M53C-HsnBUoGTGb5InMt-8dVqsg"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.content == "!ping"){
        e.message.channel.sendMessage("pong");
    }


    if (e.message.content == "!pong"){
        e.message.channel.sendMessage("ping");
    }

if (e.message.content == "!commands"){
    e.message.channel.sendMessage("All available commands are: \nPing \nPong");
}

if (e.message.content == "!realmlist"){
    e.message.channel.sendMessage("avarius.net");
}

});