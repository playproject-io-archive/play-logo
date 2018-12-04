var logo = require('./')

var opts = {
  // if you have URL and color on the same position, URL overwrites it
  urls: ['', 'https://i.imgur.com/Q4qAH30.jpg', 'https://i.imgur.com/sZK75ef.png'],
  colors: ['red', 'blue', '']
}

var el = document.createElement('div')
el.style.width = '900px'
el.style.height = '900px'
el.appendChild(logo(opts))

document.body.appendChild(el)
