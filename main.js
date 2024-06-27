const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return

    document.querySelectorAll('audio').forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });

    
    audio.currentTime = 0;
    audio.play();
    
    const duration = 1500;
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, duration);

    key.classList.add('playing')
}

const removeTransition = e => {
    if(e.propertyName !== 'transform') return;
     e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key=> key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)