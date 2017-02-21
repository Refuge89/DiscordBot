var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "Mjc5OTQ3Mzk1MTc1ODA5MDI1.C4CuwQ.M53C-HsnBUoGTGb5InMt-8dVqsg",
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
    bot.setPresence({
        game: {
            name: "For help type !help"
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
    if (message === "!help" || message == "hilfe") {    
        bot.moveUserTo({
            userID: userID,
            channelID: channelID
        })    
        sendPMMessage(userID,"What is the type of needed help? Type in one of the following Keyworks! \n!wow \n!metin \n!ark");
      }


//Hello
    if (message == "hallo" ||message == "hi" || message == "hello") {
        sendChannelMsg(channelID,"Willkommen auf dem Black Network Discord."); 
        sendChannelMsg(channelID,"Welcome on Black Network Discord.");
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
       
       sendPMMessage(userID,"All WoW related commands are: \n!wotlk \n!legion \n!mop \n!wow realmlist \n!wow connect");
    }

     if (message == "!wotlk") {
       
       sendPMMessage(userID,"All WotLK related commands are: \n!wotlk rates \n!wotlk features \n!wotlk docu \n!wotlk xpsystem");
    }

     if (message == "!legion") {
       sendPMMessage(userID,"All Legion related commands are: \n!legion rates \n!legion quickcommands");
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

//wotlk
    if (message == "!wotlk docu") {
        sendPMMessage(userID,"WotLK Documentation can be found here: \nhttp://avarius.net/index.php/projects/9-avarius-wotlk-core/2-wotlk-documentation");
    }

    if (message == "!wotlk rates") {
        sendPMMessage(userID,"Blizzlike Realms Rates are: \nXP-Rate: Not available due redesign of the Realm!");
    }

    if (message == "!wotlk features") {
        sendPMMessage(userID,"There are different Features on our WoW Realms! More Informations on our Homepage or in Docu!");
    }

    if (message == "!wotlk reportsystem") {
        sendPMMessage(userID,"Type .report quest [Shift-Click on the Quest in the Questlog],Your Reportmessage\nHint: Questname and Errormessage must be seperated with a comma!! If not, the command will not work! ");
        sendPMMessage(userID,"Only Quests are reportable at this time! Item and Spellreports are in construction.");
        sendPMMessage(userID,"Do you have any further questions? Contact: Exitare");
    }

     if (message == "!wotlk xpsystem") {
        sendPMMessage(userID,"Just type in .xprate and have fun with a variable XP Rate!");
        sendPMMessage(userID,"Do you have any further questions? Contact: Exitare");
    }

//legion
 if (message == "!legion quickcommands") {
        sendPMMessage(userID,"Just type in .ex and all commands are listed in your Client!");
        sendPMMessage(userID,"Do you have any further questions? Contact: Exitare");
    }

 if (message == "!legion rates") {
        sendPMMessage(userID,"Legion Realm Rates are: \nXP-Rate: Not available due redesign of the Realm!");
    }



//metin

      if (message == "!metin" || message == "!METIN"  || message == "!metin2") {
          sendPMMessage(userID, "All Metin2 related commands are: \n!mt2 bugtracker \n!mt2 rates \n!mt2 connect \n!mt2 homepage \n!mt2 forums \n!mt2 features \n!mt2 team");
       }

    if (message == "!mt2 rates") {
       sendPMMessage(userID, "Metin2 Rates: " 
            + "\nEXP: 100%" 
            + "\nDrop: 100%"
            + "\nYang Drop: 100%");
    }
	
    if (message == "!mt2 connect") {
       sendPMMessage(userID, "How To Connect: " 
            + "\n1. Account: https://account.blacknetwork.eu" 
            + "\n2. Clientdownload: https://blacknetwork.eu/files/file/4-alcatraz-client/"
       )}
	
    if (message == "!mt2 homepage") {
        sendPMMessage(userID,"https://blacknetwork.eu/mt2/");
    }
	
    if (message == "!mt2 forum") {
        sendPMMessage(userID,"https://blacknetwork.eu/forums/f76-alcatraz/");
    }
	
    if (message == "!mt2 features") {
        sendPMMessage(userID,"coming soon @SkillarzHD");
    }

    if (message == "!mt2 team") {
       sendPMMessage(userID, "Metin2 Team: " 
            + "\nMT2 Alcatraz-Leitung = Sakesan" 
            + "\nMT2 Alcatraz-DEV = Nyor"
			+ "\nMT2 DEV = SkillarzHD"
			+ "\nMT2 Alcatraz-SGM =  Lice"
			+ "\nMT2 Alcatraz-GM = Delya" 
       )}
	
    if (message == "!mt2 bugtracker") {
        sendPMMessage(userID,"https://bugs.blacknetwork.eu/my_view_page.php");
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