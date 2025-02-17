const { LocalAuth } = require('whatsapp-web.js');

const { Client } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');
const qrcode = require('qrcode');

const client = new Client({
  authStrategy: new LocalAuth({
    filePath: './auth_info.json'
  })
});

client.on('qr', (qr) => {
  qrcode.toDataURL(qr, (err, qrCode) => {
    if (err) {
      console.error(err);
    } else {
      (async () => {
        const browser = await puppeteer.launch({ headless: false });
        console.log('Navegador aberto');
        const page = await browser.newPage();
        await page.goto(`data:text/html,<html><body><img src="${qrCode}" /></body></html>`);
        await page.screenshot({ path: 'qr-code.png' });
        // await browser.close(); // Comente essa linha para manter o navegador aberto
      })();
    }
  });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', msg => {
  console.log('Mensagem recebida:', msg.body);
  console.log('Mensagem em minúscula:', msg.body.toLowerCase());

  if (msg.body.toLowerCase().includes('ping')) {
    msg.reply('Piracaiasoft: Olá! Tudo bem? Estamos aqui para ajudar. \nSelecione uma opção abaixo: \n\n \nA NFE \nB SAT \nC NFCE \nD BOLETO \nE IMPRESSORA \nF DUVIDAS    \nG OUTROS    \n\nDigite a letra correspondente à sua escolha.                                        ');
  }

  if (msg.body.toLowerCase().includes('a')) {
    msg.reply('Só um momento, já vamos te atender \n\n\nNFE');
    
  }

  if (msg.body.toLowerCase().includes('b')) {
    msg.reply('Só um momento, já vamos te atender ');
    
  }

  if (msg.body.toLowerCase().includes('c')) {
    msg.reply('Só um momento, já vamos te atender');
    
  }

  if (msg.body.toLowerCase().includes('d')) {
    msg.reply('Só um momento, já vamos te atender');
    
  }

  if (msg.body.toLowerCase().includes('e')) {
    msg.reply('Só um momento, já vamos te atender');
    
  }

  if (msg.body.toLowerCase().includes('F')) {
    msg.reply('Só um momento, já vamos te atender');
    

  if (msg.body.toLowerCase().includes('g')) {
    msg.reply('Só um momento, já vamos te atender');
    
  }
}  
});


client.initialize();