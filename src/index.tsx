import './index.css';

window.addEventListener('my-event', () => {
    alert('My event!')
})

const button = document.getElementById('main')
button!.addEventListener('click', () => {
    const event = new Event('my-event');
    window.dispatchEvent(event)
})

