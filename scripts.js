window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 100) {
        header.style.background = '#191919'
      } else {
        header.style.background = 'transparent'
      }
})

function abrirPDF() {
  window.open('CURRÍCULO JOSÉ FELIPE.pdf', '_blank');
}