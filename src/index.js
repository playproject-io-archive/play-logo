module.exports = logo

function logo (colors) {
  const polygon = (points, url, color) => {
  if (!color) {
    return `<polygon style="fill:url(${url});stroke:black;stroke-width:2;"   points="${points.join(' ')}"></polygon>`}
  else {
    return `<polygon style="fill:${color};stroke:black;stroke-width:2;" points="${points.join(' ')}"></polygon>`
  }
}

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

const outerleft = polygon([oT, mT, mTL, mBL, oBL, oTL], '#img1', colors[0])
const innerLeft = polygon([iT, iC, iBL, iTL], '#img1', colors[0])
const middleRight = polygon([mTR, mBR, mB, iB, iBR, iTR], '#img1', colors[0])
const outerRight = polygon([oT,oTR,oBR,mBR,mTR,mT], '#img2', colors[1])
const innerRight = polygon([iT,iTR,iBR,iC], '#img2', colors[1])
const middleLeft = polygon([mTL,iTL,iBL,iB,mB,mBL], '#img2', colors[1])
const middleTop = polygon([mT,mTR,iTR,iT,iTL,mTL], '#img3', colors[3])
const innerBottom = polygon([iC,iBR,iB,iBL], '#img3', colors[3])
const outerBottom = polygon([mBR,oBR,oB,oBL,mBL,mB,mBR], '#img3', colors[3])

return `
  <svg width="100" height="500" viewBox="0 -20 600 700">
    <defs>
      <pattern id="img1" patternUnits="objectBoundingBox" width="1" height="1">
        <image xlink:href="https://i.imgur.com/fbTLZSo.jpg" x="0" y="0"/>
      </pattern>
      <pattern id="img2" patternUnits="objectBoundingBox" width="1" height="1">
        <image xlink:href="https://i.imgur.com/Q4qAH30.jpg" x="-1600" y="-600"/>
      </pattern>
      <pattern id="img3" patternUnits="objectBoundingBox" width="1" height="1">
        <image xlink:href="https://i.imgur.com/sZK75ef.png" x="0" y="0"/>
      </pattern>
    </defs>
    ${outerleft}                                    ${outerRight}
                           ${middleTop}
        ${middleLeft}${innerLeft}${innerRight}${middleRight}
                          ${innerBottom}
                          ${outerBottom}
  </svg>`
}
