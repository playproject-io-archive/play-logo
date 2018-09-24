var logo = require('./')

var opts = {
  urls: ['', 'https://i.imgur.com/Q4qAH30.jpg', 'https://i.imgur.com/sZK75ef.png'],  // if you have URL and color on the same position, URL overwrites it
  colors: ['red', 'blue', '']
}

var el = document.createElement('div')
el.style.width = '100px'
el.style.height = '100px'
el.appendChild(logo(opts))

document.body.appendChild(el)
