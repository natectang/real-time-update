const content = document.getElementById('content');
const eraStyles = document.getElementById('era-styles');

const lemonLoaf = `
  body {
    background-color: #008080;
    font-family: "Comic Sans MS", cursive;
    color: #FFFF00;
    text-align: center;
    background-image: url('https://butternutbakeryblog.com/wp-content/uploads/2022/05/lemon-loaf-cake-slices-1365x2048.jpg');
  }
  h1 {
    font-size: 48px;
    text-shadow: 2px 2px #FF00FF;
  }
  p {
    font-size: 18px;
  }
  #content {
    border: 5px dashed #FF00FF;
    padding: 20px;
    margin: 20px;
    background-color: #000080;
  }
`;

const chocochipBanana = `
  body {
    background-color: #008080;
    font-family: "Comic Sans MS", cursive;
    color: #FFFF00;
    text-align: center;
    background-image: url('https://butternutbakeryblog.com/wp-content/uploads/2018/11/chocolate-chip-banana-bread-sliced.jpg');
  }
  h1 {
    font-size: 48px;
    text-shadow: 2px 2px #FF00FF;
  }
  p {
    font-size: 18px;
  }
  #content {
    border: 5px dashed #FF00FF;
    padding: 20px;
    margin: 20px;
    background-color: #000080;
  }
`;

const yeastieBoyz = `
  <h1>YeastieBoyz!</h1>
  <marquee>Loaves on Loaves on Loaves</marquee>
`;

const ldClient = LDClient.initialize(process.env.LAUNCHDARKLY_CLIENT_SIDE_ID, {
  key: 'anonymous'
});


ldClient.on('change', function (flags) {
  console.log('flags changed:', flags);
  // add your feature behavior here...
  const showChocoBanana = ldClient.variation('yeastie-boyz', false);

  // add your feature behavior here...
  if (flags) {
    if (showChocoBanana) {
      content.innerHTML = yeastieBoyz;
      eraStyles.innerHTML = chocochipBanana;
    } else {
      content.innerHTML = yeastieBoyz;
      eraStyles.innerHTML = lemonLoaf;
    }
  }
});

