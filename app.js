const container = document.querySelector(".container");
const detailBtn = document.querySelectorAll(".detailBtn");
const detailCard = document.querySelectorAll(".detailCard");
const closeBtn = document.querySelector(".closeBtn");
// const cardBox = document.querySelector(".showCard");
const box = document.querySelector(".box");

const cardsDetails = {
    developer: {
        role: "Frontend Web Developer",
        src: "./img/me 1.jpg",
        text: "Experienced web developer crafting innovative digital solutions with seamless collaboration for remarkable user experiences. Optimal performance, security, and cutting-edge technology drive my passion."
    },
    designer: {
        role: "Senior Graphic Designer",
        src: "./img/me 2.jpg",
        text: "Experienced senior graphic designer bringing creative concepts to life with captivating visuals. A keen eye for detail and a passion for innovative design. Collaborative and dedicated to delivering impactful results."
    },
    marketer: {
        role: "Digital Markerter",
        src: "./img/me 3.jpg",
        text: "Experienced digital marketer specializing in social media platforms. Proficient in managing brand presence, fostering meaningful connections with audiences. Stay updated on social trends, driving brand growth through innovative strategies."
    }
};


function createCard(id) {
    const {role, src, text} = cardsDetails[id];
    let div = document.createElement("div");

    div.classList.add("detailCard");
    div.innerHTML = `
        <div class="contentCard">
            <img src="${src}" alt="">
            <div class="cardContent">
                <h1>Thet Zaw Hein</h1>
                <h4>${role}</h4>
                <p>${text}</p>
            </div>
            <div class="cardBtns">
                <button class="closeBtn">Contact</button>
                <button class="closeBtn">Close</button>
            </div>
        </div>
    `;

    const detailBtn = document.getElementById(id);
    const parentCard = detailBtn.closest(".card");

    const parentRect = parentCard.getBoundingClientRect();

    

    if(window.innerWidth <= 600) {
        const cardPosX = parentRect.left / 2;
        const cardPosY = parentRect.top / 2;
        div.style.top = `${cardPosY}px`;
        div.style.left = `${cardPosX}px`;
    } else {
        div.style.top = "1%";
        div.style.left = `${100 / 3}%`;
    }

    div.classList.add("animateIn");
    document.body.appendChild(div);
    box.classList.add("blur");

    let closeBtn = document.querySelectorAll(".closeBtn");
    closeBtn.forEach(btn => {
        btn.addEventListener('click', delCard);
    });

}

function delCard() {
    let parentBox = this.parentNode.parentNode.parentNode;
    parentBox.classList.remove("animateIn");
    parentBox.classList.add("animateOut");
    setTimeout(() => {
        parentBox.remove();
        box.classList.remove("blur");
    }, 200);
}

detailBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            createCard(btn.id)
        });
});


