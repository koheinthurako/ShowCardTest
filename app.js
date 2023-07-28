const container = document.querySelector(".container");
const detailBtn = document.querySelectorAll(".detailBtn");
const detailCard = document.querySelectorAll(".detailCard");
const closeBtn = document.querySelector(".closeBtn");
const cardBox = document.querySelector(".showCard");
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
    div.classList.add("animateIn");
    cardBox.append(div);
    box.classList.add("blur");

    let closeBtn = document.querySelectorAll(".closeBtn");
    closeBtn.forEach(btn => {
        btn.addEventListener('click', delCard);
    });

    saveNotesToLocalStorage();
}

function delCard() {
    let parentBox = this.parentNode.parentNode.parentNode;
    parentBox.classList.remove("animateIn");
    parentBox.classList.add("animateOut");
    setTimeout(() => {
        parentBox.remove();
        box.classList.remove("blur");
    }, 200);
    saveNotesToLocalStorage();
}

function saveNotesToLocalStorage() {
    const cards = [];
    const inputCards = document.querySelector(".detailCard");

    cards.push(inputCards);
    localStorage.setItem("notes", JSON.stringify(cards));
}

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem("inputCards");
    if (savedNotes) {
        const notes = JSON.parse(savedNotes);
        notes.forEach(note => {
            createCard(note);
        });
    }
}

loadNotesFromLocalStorage();

detailBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            createCard(btn.id)
        });
});


