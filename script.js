let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;

        if (top >= offset) {
            sec.classList.add('active');
        } else if (top <= offset - 550) {
            sec.classList.remove('active');
        }
    })

}


