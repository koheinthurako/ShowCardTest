const container = document.querySelector(".container");
const detailBtn = document.querySelectorAll(".detailBtn");
const detailCard = document.querySelector(".detailCard");
const closeBtn = document.querySelector(".closeBtn");

function showCard(id) {
    if(id == 1) {
        detailCard.classList.remove("hide");
        detailCard.classList.add("show");
        container.classList.add("blur");
    } else if(id == 2) {
        detailCard.classList.remove("hide");
        detailCard.classList.add("show");
        container.classList.add("blur");
    } else if(id == 3) {
        detailCard.classList.remove("hide");
        detailCard.classList.add("show");
        container.classList.add("blur");
    } else {
        detailCard.classList.remove("show");
        detailCard.classList.add("hide");
        container.classList.remove("blur");
    }
}



// detailBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         showCard();
//     });
// });

detailBtn.forEach(btn => {
        btn.addEventListener('click', detailBtn => {
            showCard(detailCard.id);
        });
});

closeBtn.addEventListener('click', showCard);

