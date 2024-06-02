const containers = document.querySelectorAll('.lowerMidContainer, .lowerMidContainer2, .lowerMidContainer3');

const mainImage = document.getElementById('mainImage');

containers.forEach(container => {
    container.addEventListener('click', function() {

        containers.forEach(cont => {
            cont.style.backgroundColor = '#F6F6F6';
            const childElements = cont.querySelectorAll('*');
            childElements.forEach(child => child.style.color = 'black');
        });

        this.style.backgroundColor = '#FF3147';
        const childElements = this.querySelectorAll('*');
        childElements.forEach(child => child.style.color = '#F6F6F6');
        
        const newSrc = container.getAttribute('src');
        mainImage.setAttribute('src', newSrc);
    });
});



/*POP UP CODE */


const contactBtn = document.querySelector('.contactButton');
const popUp = document.querySelector('.popUpForm');

contactBtn.addEventListener('click', function() {
      popUp.style.display = 'block';
});


function goToURL() {
    window.location.href = 'https://www.fylehq.com/';
}