function generateNewQR() {
  const session = Math.random().toString(36).substring(2, 8);
  const link = `https://morina-hafssa.github.io/presence-form/form.html?session=${session}`;
  QRCode.toCanvas(document.getElementById('qrcode'), link, (err) => {
    if (err) console.error(err);
  });
}

generateNewQR();
setInterval(generateNewQR, 600000); // change every 60s , refresh auto
