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
    if (e.message.content == "!ping" || e.message.content == "!Ping" ){
        e.message.channel.sendMessage("pong");
    }


    if (e.message.content == "!pong" || e.message.content == "!Pong" ){
        e.message.channel.sendMessage("ping");
    }

if (e.message.content == "!commands" || e.message.content == "!Commands" ){
    e.message.channel.sendMessage("All available commands are: \n!Ping \n!Pong \n!Homepage \n!Commands \n!Help \n!wow \n!metin \nark \n!team");
}

if (e.message.content == "!homepage" || e.message.content == "!Homepage"){
    e.message.channel.sendMessage("avarius.net");
}

if (e.message.content == "!help" || e.message.content == "!Help"){
    e.message.channel.sendMessage("What is the type of needed help? Type in one of the following Keyworks! \n!wow \n!metin2 \n!ark");
}

//wow help commands
if (e.message.content == "!wow" || e.message.content == "!WOW"){
    e.message.channel.sendMessage("All WoW related commands are: \n!wow realmlist \n!wow rates \n!wow features");
}

if (e.message.content == "!wow realmlist"){
    e.message.channel.sendMessage("For our WotLK and Legion realm the realmlist is: \nlogon.wow.blacknetwork.eu \n\n#################### \n\nFor our MOP Realm the realmlist is \nlogon.wow.blacknetwork.eu:3725.");
}


if (e.message.content == "!wow rates"){
    e.message.channel.sendMessage("Blizzlike Realms Rates are: \nXP-Rate: Not available due redesign of the Realm!");
}

if (e.message.content == "!metin" || e.message.content == "!Metin"){
    e.message.channel.sendMessage("All Metin related commands are: \n!metin realmlist \n!metin rates \n!metin features");
}


//ark evolved
if (e.message.content == "!ark" || e.message.content == "!Ark"){
    e.message.channel.sendMessage("All Ark related commands are: \n!ark connect");
}


});

//metin2


client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
    e.message.channel.sendMessage("Welcome on our Server! \nType !commands to get a List of all available Commands! \nIf you need Support, please use our SupportChannel");
});
