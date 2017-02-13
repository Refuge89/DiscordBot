var Discordie = require("discordie");
var client = new Discordie();

client.connect({
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
    e.message.channel.sendMessage("All available commands are: \n!Ping \n!Pong \n!Homepage \n!Commands \n!Help \n!wow \n!metin \n!ark \n!team");
}

if (e.message.content == "!homepage" || e.message.content == "!Homepage"){
    e.message.channel.sendMessage("https://blacknetwork.eu/community/");
}

if (e.message.content == "!help" || e.message.content == "!Help"){
    e.message.channel.sendMessage("What is the type of needed help? Type in one of the following Keyworks! \n!wow \n!metin \n!ark");
}

//wow help commands
if (e.message.content == "!wow" || e.message.content == "!WOW"){
    e.message.channel.sendMessage("All WoW related commands are: \n!wow realmlist \n!wow rates \n!wow connect \n!wow features");
}

if (e.message.content == "!wow realmlist"){
    e.message.channel.sendMessage("For our WotLK and Legion realm the realmlist is: logon.wow.blacknetwork.eu" 
    + " \n\n####################" 
    + " \n\nFor our MOP Realm the realmlist is: \nlogon.wow.blacknetwork.eu:3725.");
}


if (e.message.content == "!wow connect"){
    e.message.channel.sendMessage("How To Connect: " 
    + "\n Wotlk: https://blacknetwork.eu/wiki/wow/typhoon/" 
    + "\n MOP: https://blacknetwork.eu/wiki/wow/amaterasu/"
    + "\n Legion: https://blacknetwork.eu/wiki/wow/ptr/");
}

if (e.message.content == "!wow rates"){
    e.message.channel.sendMessage("Blizzlike Realms Rates are: \nXP-Rate: Not available due redesign of the Realm!");
}

//Metin
if (e.message.content == "!metin" || e.message.content == "!Metin"){
    var user = client.Users.find(u => u.username == "SkillarzHD");
    e.message.channel.sendMessage(user.mention + ", Metin commands are still missing. Please include the Commands asap! \nKind Regards!");
}


//ark evolved
if (e.message.content == "!ark" || e.message.content == "!Ark"){
    e.message.channel.sendMessage("All Ark related commands are: \n!ark connect");
}

if (e.message.content == "!ark connect"){
    e.message.channel.sendMessage("#########################" 
    + "\nHow To Connect: https://blacknetwork.eu/forums/t390-english-how-to-play-ark-survival-evolved-the-center/");
}


//team
if (e.message.content == "!team"){
    e.message.channel.sendMessage("A complete List of our Team members can be found here: https://blacknetwork.eu/staff/");
}

//test
if (e.message.content == "!test"){
const guild = client.Guilds.getBy("name", "Avarius");


	if (guild) {
         e.message.channel.sendMessage("https://blacknetwork.eu/community/");
         //e.message.client.message.sendMessage("Thanks for beeing a user of Avarius.net. Our Homepage is available: http://www.avarius.net !")
		// guild.voiceChannels returns an array
		
	}
    e.message.channel.sendMessage("https://blacknetwork.eu/community/");
	console.log("BN Server found!");
}

if (e.message.content == "!roles"){

  var member = e.message.member;
  member.sendDM("Test Message");
  console.log(member);
  // same as
  var member = e.message.author.memberOf(e.message.guild);

  const roleNames = member.roles.map(role => role.name);
  e.message.reply("Roles: " + (roleNames.join(", ") || "no roles"));


}


});



client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
    e.message.channel.sendMessage("Welcome on our Server! \nType !commands to get a List of all available Commands! \nIf you need Support, please use our SupportChannel");
});
