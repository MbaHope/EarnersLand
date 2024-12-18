let menu = document.getElementById('menu');
let show = document.getElementById('show');
let hidden = document.getElementById('cancel');

show.addEventListener('click', function () {
    menu.style.display = "block";
    show.style.display = 'none';
    hidden.style.display = 'block';
});
hidden.addEventListener('click', () => {
    menu.style.display = 'none';
    show.style.display = 'block';
    hidden.style.display = 'none';
})


// ====================FAQ SECTION ==================
const faqs = document.querySelectorAll(".faqs");

faqs.forEach(faq => {
    const question = faq.querySelector(".faq");
    question.addEventListener("click", () => {
        // Close all other FAQs
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});

// ================BACK TO TOP BUTTON ==================
var backToTopContainer = document.querySelector(".backToTopContainer");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        
       backToTopContainer.style.opacity = "1";
    } else {
        backToTopContainer.style.opacity = "0";
    }
});

// function getWidth(){
//     alert(window.innerHeight)
// }