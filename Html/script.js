const BUTTON = document.querySelector('button')
const EMBED = document.querySelector('embed')

const toggleFullscreen = () => {
  if (document.fullscreenElement)
    document.exitFullscreen()
  else
    EMBED.requestFullscreen()
}

BUTTON.addEventListener('click', toggleFullscreen)

const onChange = () => {
  DIV.className = document.fullscreenElement ? 'fullscreen' : ''
}

document.addEventListener('fullscreenchange', onChange)