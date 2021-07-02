module.exports = async (client, ctx) => {

    ctx.replyWithAnimation('https://i.pinimg.com/originals/a3/e9/ff/a3e9ffb293d369deb48f22a38f35250b.gif', { 
        reply_markup: {
            inline_keyboard: [[{text: 'Inline', callback_data: 'inline'}], [{text: 'Prefix', callback_data: 'prefix'}]]
        },
        caption: 'Hai Selamat datang di Bot Ha! (@ilhamshf) ❤\n\nBot Ha memiliki dua cara untuk menggunakan fitur-fitur yang ada di Platform ini.\n\nSilahkan klik tombol yang tersedia untuk melihat secara detail!\n\nDukung Projek ini supaya bisa terus berkembang!\n\nProjek ini tentu saja dibuat dengan java script:\nProject ini dihosting di RDP\n\nAda Masalah pada bot? silahkan laporkan ke Developer Bot Ha!\nwa.me/6289668128700\n@hamshff',
        disable_web_page_preview: true
    });
    
    console.log(`${ctx.message.from.username}(${ctx.message.from.id}) ran start`);
}