const menu  = document.querySelector('nav ul');
const menuBtn  = document.querySelector('.menu-open');
const closeBtn  = document.querySelector('.close');
const scrollBtn = document.querySelector('.myskills-cta');
const pies = document.querySelectorAll('circle');
const animationElements = document.querySelectorAll('.rightinfo');
const programElements1 = document.querySelectorAll('.frontRow');
const programElements2 = document.querySelectorAll('.backRow');

const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        const animationClass = `animation${i+1}`;
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add(animationClass);
        } else {
            entries[i].target.classList.remove(animationClass);
        }
    }
},{threshold: 0.1}
);
const observer2 = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add('animate');
        } else {
            entries[i].target.classList.remove('animate');
        }
    }
},{threshold: 0.2}
);
for (let i = 0; i < programElements1.length; i++) {
observer2.observe(programElements1[i]);
}
for (let i = 0; i < programElements2.length; i++) {
observer2.observe(programElements2[i]);
}
for (let i = 0; i < animationElements.length; i++) {
observer2.observe(animationElements[i]);
}
for (let i = 0; i < pies.length; i++) {
observer.observe(pies[i])
}

menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})

function scrollToBottom() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
