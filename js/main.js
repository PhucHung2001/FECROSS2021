function initMap(){
    const loc = { lat: 42.361145, lng: -71.057083};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 14,
        center: loc
    }
    );
    const marker = new google.maps.Market({ position: loc, map:
    map});
}
// Sticky menu bg
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.8;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});


















// Smooth Scroolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }

});