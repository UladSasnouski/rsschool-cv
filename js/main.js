$(function(){

    $(' .sliderInner' ).slick({
        nextArrow: '<button type="button" class="slickBtn slick-next"></button>',
        prevArrow: '<button type="button" class="slickBtn slick-prev"></button>',
        infinite: true
    });



    $(function() {
        $(".sliderPhone5 img, .sliderPhone4 img").mouseover(function(){
            $('.sliderPhone3 img, .slickBtn').css('opacity', '0.2');
        });
        $(".sliderPhone5 img, .sliderPhone4 img").mouseout(function(){
            $('.sliderPhone3 img, .slickBtn').css('opacity', '1');
        });

        $(".sliderPhone1 img").mouseover(function(){
            $('.sliderPhone2 img, .slickBtn').css('opacity', '0.2');
        });
        $(".sliderPhone1 img").mouseout(function(){
            $('.sliderPhone2 img, .slickBtn').css('opacity', '1');
        });

        $(".sliderPhone2 img").mouseover(function(){
            $('.sliderPhone1 img, .slickBtn').css('opacity', '0.2');
        });
        $(".sliderPhone2 img").mouseout(function(){
            $('.sliderPhone1 img, .slickBtn').css('opacity', '1');
        });

        $(".sliderPhone3 img").mouseover(function(){
            $('.slickBtn').css('opacity', '0.2');
        });
        $(".sliderPhone3 img").mouseout(function(){
            $('.slickBtn').css('opacity', '1');
        });
    });

    $(function() {

        let filter = $("[data-filter]");

        filter.on("click", function(event) {
            event.preventDefault();

            let cat = $(this).data('filter');

            if (cat == 'all') {
                $("[data-cat]").removeClass("hide");
                $("[data-cat]").addClass('tabsItemHide');
                var a = $("#tabsItems > div").remove().toArray();
                for (var i = a.length - 1; i >= 1; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var bi = a[i];
                    var bj = a[j];
                    a[i] = bj;
                    a[j] = bi;
                }
                $("#tabsItems").append(a);
            } else {
                $("[data-cat]").each(function() {

                    let workCat = $(this).data('cat');

                    if (workCat != cat) {
                        $(this).addClass('hide');
                        $(this).addClass('tabsItemHide');
                    } else {
                        $(this).removeClass('hide');
                        $(this).removeClass('tabsItemHide');
                        var a = $("#tabsItems > div").remove().toArray();
                        for (var i = a.length - 1; i >= 1; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var bi = a[i];
                            var bj = a[j];
                            a[i] = bj;
                            a[j] = bi;
                        }
                        $("#tabsItems").append(a);
                    }
                });
            }
        });


    });

    $(document).on('click', '.menu ul li', function(){
        $(this).addClass('active').siblings().removeClass('active')
    })




});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

  window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.menu a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});


const header = document.querySelector('.header')
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("activeHead");
  } else {
    header.classList.remove("activeHead");
  }
});    

$('.scrollto a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

$(function() {
    if($(".sliderItem1").hasClass("slick-active")) {
        $('.slider').css('background-color', '#F06C64');
        $('.slider').css('border-bottom', '#EA676B 5px solid');
    }
});


$(document).on('click', '.slickBtn', function(){
    if($(".sliderItem1").hasClass("slick-active")) {
        $('.slider').css('background-color', '#F06C64');
        $('.slider').css('border-bottom', '#EA676B 5px solid');
    } else if (!$(".sliderItem1").hasClass("slick-active")) {
        $('.slider').css('background-color', '#648BF0');
        $('.slider').css('border-bottom', '#ffffff 5px solid');
    }
})