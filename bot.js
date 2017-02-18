var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "Mjc5OTQ3Mzk1MTc1ODA5MDI1.C4CuwQ.M53C-HsnBUoGTGb5InMt-8dVqsg",
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
    bot.setPresence({
        game: {
            name: "World of Warcraft"
        }
    });

});
 
function sendPMMessage(userID,message){
    bot.sendMessage({
            to: userID,
            message: message
        });
}

function sendChannelMsg(channelID,message){
    bot.sendMessage({
            to: channelID,
            message: message
        });
}

bot.on("channelCreate",function(channelID){
    sendChannelMsg("New channel created");
})

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "!help") {    
        bot.moveUserTo({
            userID: userID,
            channelID: channelID
        })    
        sendPMMessage(userID,"What is the type of needed help? Type in one of the following Keyworks! \n!wow \n!metin \n!ark");
      }

    if (message == "!commands" || message == "!Commands") {
        
        sendPMMessage(userID,"All available commands are: \n!Ping \n!Pong \n!Homepage \n!Commands \n!Help \n!wow \n!metin \n!ark \n!team \n!avarius");      
    }

    if (message == "!Homepage" || message == "!homepage") {
        
        sendPMMessage(userID,"www.avarius.net");       
    }

    if (message == "!Ping" || message == "!ping") {
        
        sendPMMessage(userID,"pong");       
    }

    if (message == "!Pong" || message == "!pong") {
        
        sendPMMessage(userID,"ping");       
    }

//wow
    if (message == "!wow" || message == "!WoW") {
       
       sendPMMessage(userID,"All WoW related commands are: \n!wow realmlist \n!wow rates \n!wow connect \n!wow features \n!wow docu");
    }

    if (message == "!wow realmlist") {
       sendPMMessage(userID, "For our WotLK and Legion realm the realmlist is: \nlogon.wow.blacknetwork.eu" 
            + " \n\n####################" 
            + " \n\nFor our MOP Realm the realmlist is: \nlogon.wow.blacknetwork.eu:3725.");
    }

    if (message == "!wow connect") {
       sendPMMessage(userID, "How To Connect: " 
            + "\n Wotlk: https://blacknetwork.eu/wiki/wow/typhoon/" 
            + "\n MOP:https://blacknetwork.eu/wiki/wow/windwalkers/"
            + "\n Legion: https://blacknetwork.eu/wiki/wow/ptr/");
    }

    if (message == "!wow docu") {
        sendPMMessage(userID,"WotLK Documentation can be found here: \nhttp://avarius.net/index.php/projects/9-avarius-wotlk-core/2-wotlk-documentation");
    }

    if (message == "!wow rates") {
        sendPMMessage(userID,"Blizzlike Realms Rates are: \nXP-Rate: Not available due redesign of the Realm!");
    }




//metin

      if (message == "!metin" || message == "!METIN"  || message == "!metin2") {
          sendPMMessage(userID, "Metin commands are still missing. Please include the Commands asap! \nKind Regards!");
       }



//ark
    if (message == "!ark") {
        sendPMMessage(userID,"All Ark related commands are: \n!ark connect");
    }


    if (message == "!ark connect") {
        sendPMMessage(userID,"How To Connect: https://blacknetwork.eu/forums/t390-english-how-to-play-ark-survival-evolved-the-center/");
    }

//team
     if (message == "!team") {
        sendPMMessage(userID,"A complete List of our Team members can be found here: https://blacknetwork.eu/staff/");
    }


    //Testcommands
    if (message == "!test") {
        sendChannelMsg(channelID,"test");
    }

});