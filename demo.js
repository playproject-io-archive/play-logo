var logo = require('./')

var opts = {
  urls: ['', 'https://i.imgur.com/Q4qAH30.jpg', 'https://i.imgur.com/sZK75ef.png'],  // if you have URL and color on the same position, URL overwrites it
  colors: ['red', 'blue', '']
}

document.body.appendChild(logo(opts))
