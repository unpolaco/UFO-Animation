document.addEventListener("DOMContentLoaded", function () {
  const animBg = new AnimBg('.anim')
  document.addEventListener('mousemove', (event) => animBg.listenCursorMove(event))
})

