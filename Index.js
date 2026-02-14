
const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.TOKEN;

client.once('ready', () => {
    console.log(`Bot online: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if(message.content === "!ping") {
        message.reply("Pong!");
    }

    if(message.content === ";coletar") {
        const attachment = new AttachmentBuilder('exemplo-jogador.png');
        message.reply({ files: [attachment] });
    }
});

client.login(TOKEN);MTQ3MjI2NzA4MjUzOTQ3MDg4OQ.GabBIq.9f4Yo5BGaWY6zE1x0gSTc-UCTLsS_qv3RssJHY
