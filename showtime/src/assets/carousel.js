function CarouselWork() {
    document.addEventListener('DOMContentLoaded', function () {
        var carousel = new bootstrap.Carousel(document.getElementById('carouselCategory'), {
            interval: false // Impede que o carrossel avance automaticamente
        });

        document.querySelector('#carouselCategory .carousel-control-next').addEventListener('click', function () {
            carousel.next(6); // Avança 6 itens
        });

        document.querySelector('#carouselCategory .carousel-control-prev').addEventListener('click', function () {
            carousel.prev(6); // Retrocede 6 itens
        });
    });
}