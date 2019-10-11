function DXMEffect (element, options) {
  let data = {}
  let dataLang = element.getAttribute('data-dxmeffect')
  let dataSpeed = element.getAttribute('data-dxmeffect-speed')
  let dataDelay = element.getAttribute('data-dxmeffect-delay')
  let dataAfter = element.getAttribute('data-dxmeffect-after')
  let dataStartDelay = element.getAttribute('data-dxmeffect-start-delay')

  element.style.whiteSpace = 'pre'

  if (dataSpeed !== null && dataLang.length !== 0) data.lang = dataLang
  if (dataSpeed !== null) data.speed = Number(dataSpeed)
  if (dataDelay !== null) data.delay = Number(dataDelay)
  if (dataAfter) data.after = dataAfter
  if (dataStartDelay !== null) data.startDelay = dataStartDelay

  this.options = {
    lang: 'en',
    speed: 20,
    delay: 100,
  }

  this.options = Object.assign(this.options, options, data)
  this.element = element
  this.text = this.element.textContent
  this.substitution = ''
  this.state = false
  this.shuffleProps = []
  this.reinstateProps = []
  this.element.textContent = [].map.call(this.text, function(v) { return v === '\n' ? '\n' : " " }).join("")
}

DXMEffect.prototype = {
  constructor: DXMEffect,
  init: function () {
    let self = this

    if (self.options.startDelay) {
      const delay = self.options.startDelay
      self.options.startDelay = null
      setTimeout(function() {
        self.init()
      }, delay)

      return
    }

    if (self.options.after) {
      const beforeElem = document.querySelector(self.options.after)
      const complete = beforeElem.getAttribute('data-dxmeffect-complete')
      if (!complete || complete === 'false') {
        beforeElem.addEventListener('onComplete', function() {
          self.init()
        })

        return
      }
    }

    if (self.state) return

    self.clearShuffleTimer()
    self.clearReinstateTimer()

    self.state = true
    this.element.setAttribute('data-dxmeffect-complete', false)
    self.substitution = ''
    self.shuffleProps = []
    self.reinstateProps = []

    let shuffleTimer = setInterval(function () {
      self.shuffle()
    }, self.options.speed)

    let reinstateTimer = setInterval(function () {
      self.reinstate()
    }, self.options.delay)

    self.shuffleProps = shuffleTimer
    self.reinstateProps = reinstateTimer
  },

  shuffle: function () {
    this.element.textContent = this.substitution

    let textLength = this.text.length
    let substitutionLength = this.substitution.length

    if ((textLength - substitutionLength) > 0) {
      this.element.textContent = this.element.textContent + this.randomStr() + 
      ((textLength - substitutionLength) > 1 ?
        [].map.call(this.text.substr(substitutionLength + 1), function(v) { return v === '\n' ? '\n' : " " }).join("")
        : "")
    } else {
      this.clearShuffleTimer()
    }
  },

  reinstate: function () {
    let textLength = this.text.length
    let substitutionLength = this.substitution.length

    if (substitutionLength < textLength) {
      this.substitution = this.text.substr(0, substitutionLength + (this.text.substr(substitutionLength + 1, 1) === '\n' ? 2 : 1))
    } else {
      this.element.setAttribute('data-dxmeffect-complete', true)
      this.element.dispatchEvent(new Event('onComplete'))
      this.clearReinstateTimer()
    }

    this.state = false
  },

  clearShuffleTimer: function () {
    return clearInterval(this.shuffleProps)
  },

  clearReinstateTimer: function () {
    return clearInterval(this.reinstateProps)
  },

  randomStr: function () {
    let str
    switch (this.options.lang) {
      case 'en':
        str = String.fromCharCode(33 + Math.round(Math.random() * 92))
        break
      case 'ja':
        str = String.fromCharCode(19968 + Math.round(Math.random() * 80))
        break

      case 'ja-hiragana':
        str = String.fromCharCode(12352 + Math.round(Math.random() * 50))
        break

      case 'ja-katakana':
        str = String.fromCharCode(12448 + Math.round(Math.random() * 84))
        break
    }
    return str
  },
}