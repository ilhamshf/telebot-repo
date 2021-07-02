const tele = require('telegraf');

exports.run = async (client, message, args) => {
    const msg = message.update.message;
    try {
        
        message.replyWithMarkdown('Halo teman!\nLatensi Anda Pada Jaringan: *' + client.util.ping(msg.date, Date.now()) + 'ms*' );

    } catch (error) {
  
      return message.reply(`Something went wrong: ${error.message}`);
      // Restart the bot as usual. 
    }
  }
  
  exports.conf = {
    aliases: [],
    cooldown: 10
  }
  
  exports.help = {
    name: 'ping',
    description: 'Menampilkan pengetesan jaringan bot Ha.',
    usage: 'ping',
    example: 'ping'
  }