// Dropdown
function selectGenre() {
    let value = document.getElementById("genre").value;
    let info = document.getElementById("genre-info");

    if (value === "comedy") {
        info.innerText = "Comedy movies make you laugh!";
    } 
    else if (value === "action") {
        info.innerText = "Action movies are full of excitement!";
    } 
    else if (value === "romance") {
        info.innerText = "Romance movies focus on love stories.";
    } 
    else if (value === "horror") {
        info.innerText = "Horror movies are scary and thrilling!";
    } 
    else {
        info.innerText = "";
    }
}


// Carousel
function activateSlide(number) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('slide-' + i).classList.remove('active');
    }
    document.getElementById('slide-' + number).classList.add('active');
}