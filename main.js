function generateNewQR() {
  const session = Math.random().toString(36).substring(2, 8);
  const link = `https://github.com/Morina-Hafssa/presence-form/form.html?session=${session}`;
  QRCode.toCanvas(document.getElementById('qrcode'), link, (err) => {
    if (err) console.error(err);
  });
}

generateNewQR();
setInterval(generateNewQR, 60000); // change every 60s , refresh auto
