(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./":2}],2:[function(require,module,exports){
module.exports = logo

function logo (opts) {
  var colors = opts.colors
  var urls = opts.urls

  var scale = 3
  var scaleX = 1 * scale
  var scaleY = 1 * scale
  var X = { OL: 0, ML: 26, IL: 52, CE: 78,
            IR: 104, MR: 130, OR: 156 }
  var Y = { OT: 0, MT: 30, OTLR: 45, IT: 60, ITLR: 75, CE: 90,
            IBLR: 105, IB: 120, OBLR: 135, MB: 150, OB: 180 }
  Object.keys(X).forEach(x => X[x] = X[x] * scaleX)
  Object.keys(Y).forEach(y => Y[y] = Y[y] * scaleY)
  // ----------------------------------------------------------------------------
  var                          oT=`${X.CE},${Y.OT}`
  var                          mT=`${X.CE},${Y.MT}`
  var oTL=`${X.OL},${Y.OTLR}`,                          oTR=`${X.OR},${Y.OTLR}`
  var    mTL=`${X.ML},${Y.IT}`,iT=`${X.CE},${Y.IT}`,mTR=`${X.MR},${Y.IT}`
  var              iTL=`${X.IL},${Y.ITLR}`, iTR=`${X.IR},${Y.ITLR}`
  var                          iC=`${X.CE},${Y.CE}`
  var              iBL=`${X.IL},${Y.IBLR}`, iBR=`${X.IR},${Y.IBLR}`
  var    mBL=`${X.ML},${Y.IB}`,iB=`${X.CE},${Y.IB}`,mBR=`${X.MR},${Y.IB}`
  var oBL=`${X.OL},${Y.OBLR}`,                          oBR=`${X.OR},${Y.OBLR}`
  var                          mB=`${X.CE},${Y.MB}`
  var                          oB=`${X.CE},${Y.OB}`

  const polygon = (points, opts) => {
    if (opts.fillType === 'url') {
      return `<polygon style="fill:url(${opts.fill});stroke:black;stroke-width:2;"   points="${points.join(' ')}"></polygon>`
    } else {
      return `<polygon style="fill:${opts.fill};stroke:black;stroke-width:2;" points="${points.join(' ')}"></polygon>`
    }
  }
  const outerleft = polygon([oT, mT, mTL, mBL, oBL, oTL], getFill(0))
  const innerLeft = polygon([iT, iC, iBL, iTL], getFill(0))
  const middleRight = polygon([mTR, mBR, mB, iB, iBR, iTR], getFill(0))
  const outerRight = polygon([oT,oTR,oBR,mBR,mTR,mT], getFill(1))
  const innerRight = polygon([iT,iTR,iBR,iC], getFill(1))
  const middleLeft = polygon([mTL,iTL,iBL,iB,mB,mBL], getFill(1))
  const middleTop = polygon([mT,mTR,iTR,iT,iTL,mTL], getFill(2))
  const innerBottom = polygon([iC,iBR,iB,iBL], getFill(2))
  const outerBottom = polygon([mBR,oBR,oB,oBL,mBL,mB,mBR], getFill(2))

  var fills = []
  function getFill (pos) {
    if (urls[pos]) { return { fillType: 'url' , fill: `#img${pos}` } }
    else if (colors[pos]) { return { fillType: 'color', fill: colors[pos] } }
    else { return { fillType: 'noFill' , fill: 'transparent' } }
  }

  var el = document.createElement('div')
  el.innerHTML = `
    <svg viewBox="0 -5 450 550" style="width: 100%; height: 100%;">
      <defs>
        ${urls.map((url, i) => url ? `
          <pattern id="img${i}" patternUnits="objectBoundingBox" width="1" height="1">
            <image xlink:href="${url}" x="0" y="0"/>
          </pattern>
        ` : '').join('')}
      </defs>
      ${outerleft}                                    ${outerRight}
                             ${middleTop}
          ${middleLeft}${innerLeft}${innerRight}${middleRight}
                            ${innerBottom}
                            ${outerBottom}
    </svg>`
  return el.children[0]
}

},{}]},{},[1]);
