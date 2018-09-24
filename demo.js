var logo = require('./')

var opts = {
  urls: ['', 'https://i.imgur.com/Q4qAH30.jpg', 'https://i.imgur.com/Q4qAH30.jpg'],  // if you have URL and color on the same position, URL overwrites it
  colors: ['red', 'blue', '']
}

var el = document.createElement('div')
el.innerHTML = logo(opts)

document.body.appendChild(el)
