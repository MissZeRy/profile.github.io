let sections = document.querySelectorAll('section');

window.onscroll = () => {
    const triger = (window.innerHeight / 5) * 3
    sections.forEach(sec => {
        let topBox = sec.getBoundingClientRect().top;

        if(topBox < triger){
            sec.classList.add('active');
        }else if (topBox >= triger+200){
            sec.classList.remove('active');
        }

    })

}


