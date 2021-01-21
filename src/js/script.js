// Slider
$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight:true,
        slidesToShow: 2,
        responsive:[{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
        
    });
});

// textarea 
// var textarea = document.querySelector('textarea');

// textarea.addEventListener('keyup', function(){
//   if (this.scrollTop > 0) {
//     this.style.height = this.scrollHeight + "px";
//   }
// });

//burgerMenu
function burgerMenu (selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let link = menu.find('.burger-menu__link');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    link.on('click', () => toggleMenu());

    function toggleMenu () {
        menu.toggleClass('burger-menu--active');

    }
}

burgerMenu ('.burger-menu')


// load new page 
if(window.location.toString().indexOf('services-family.html')>0) {
    if ( $(window).width() < 768 ) {
        window.onload = function()
            {
            window.scrollTo( 0, 750 );
            }
        }
}

if(window.location.toString().indexOf('services-rehabilitation.html')>0) {
    if ( $(window).width() < 768 ) {
        window.onload = function()
            {
            window.scrollTo( 0, 750 );
            }
        }
}

if(window.location.toString().indexOf('services-alko.html')>0) {
    if ( $(window).width() < 768 ) {
        window.onload = function()
            {
            window.scrollTo( 0, 750 );
            }
        }
}

if(window.location.toString().indexOf('services-nark.html')>0) {
    if ( $(window).width() < 768 ) {
        window.onload = function()
            {
            window.scrollTo( 0, 750 );
            }
        }
}

// Показ текста при нажатии на кнопку

$('.btn1').on('click', function(){
	$('.block1').css('display','inline');
	$('.block2').css('display','none');
	$('.block3').css('display','none');
    $('.block4').css('display','none');
    $('.dots1').css('display', 'none');
    $('.btn1').css('display','none');
    $('.btn2').css('display','block');
    $('.btn3').css('display','block');
    $('.btn4').css('display','block');
});
$('.btn2').on('click', function(){
	$('.block1').css('display','none');
	$('.block2').css('display','inline');
	$('.block3').css('display','none');
    $('.block4').css('display','none');
    $('.dots2').css('display', 'none');
    $('.btn1').css('display','block');
    $('.btn2').css('display','none');
    $('.btn3').css('display','block');
    $('.btn4').css('display','block');

});
$('.btn3').on('click', function(){
	$('.block1').css('display','none');
	$('.block2').css('display','none');
	$('.block3').css('display','inline');
    $('.block4').css('display','none');
    $('.dots3').css('display', 'none');
    $('.btn1').css('display','block');
    $('.btn2').css('display','block');
    $('.btn3').css('display','none');
    $('.btn4').css('display','block');
});
$('.btn4').on('click', function(){
	$('.block1').css('display','none');
	$('.block2').css('display','none');
	$('.block3').css('display','none');
    $('.block4').css('display','inline');
    $('.dots4').css('display', 'none');
    $('.btn1').css('display','block');
    $('.btn2').css('display','block');
    $('.btn3').css('display','block');
    $('.btn4').css('display','none');
});