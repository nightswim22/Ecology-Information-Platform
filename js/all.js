//back-to-top
$(document).on('click', '.back-top', function () {
    fullpage_api.moveTo('home');
});


new fullpage('#fullpage', {
    //options here

    autoScrolling: true,
    scrollHorizontally: true,
    paddingTop: '155px',
    anchors: ['home', 'anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
    menu: '#menu',
    //verticalCentered: false,
    css3: false,
    navigation: true,
    //bigSectionsDestination: 'top',
    onLeave: function () {
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function () {
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function () {
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function () {
        jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }

});


AOS.init({
    // Global settings:
    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    mirror: true,

});





