let slideIndex = 0;
showSlides(slideIndex);

function plusDivs(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".lovetoo-card-detail");
    let slidesPerPage = 4;
    let startIndex = n * slidesPerPage;
    if (startIndex >= slides.length) {
        slideIndex = 0;
        startIndex = 0;
    }
    if (startIndex < 0) {
        slideIndex = Math.floor((slides.length - 1) / slidesPerPage);
        startIndex = slideIndex * slidesPerPage;
    }

    $(slides).hide();

    for (let i = startIndex; i < startIndex + slidesPerPage && i < slides.length; i++) {
        $(slides[i]).show();
    }
}