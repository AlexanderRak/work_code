document.addEventListener('DOMContentLoaded', () => {
  /*for tabs*/

  const tabs = document.querySelectorAll('.display__nav__flex__tab__item'),
    tabsParent = document.querySelector('.display__nav__flex__tab'),
    txts = document.querySelectorAll('.display__nav__flex__txt__item'),
    markers = document.querySelectorAll('.display__nav__flex__list li');

  function show__all(i = 0) {
    tabs[i].classList.add('active__btn');
    txts[i].classList.add('active__txt', 'fade');
    markers[i].classList.add('active', 'fade');
    markers[i + 5].classList.add('active', 'fade');
  };

  function hide__all() {
    tabs.forEach(element => {
      element.classList.remove('active__btn');
    });

    txts.forEach(element => {
      element.classList.remove('active__txt', 'fade');
    });

    markers.forEach(element => {
      element.classList.remove('active', 'fade');
    });
  }

  hide__all();
  show__all();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('display__nav__flex__tab__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hide__all();
          show__all(i);
        }
      });
    }
  });

  /*for nozzles*/

  const image = document.querySelectorAll('.nasadki__img img'),
    hTxt = document.querySelectorAll('.nasadki__head__js'),
    txt = document.querySelectorAll('.nasadki__txt'),
    iNavParent = document.querySelector('.nasadki__list'),
    iNav = document.querySelectorAll('.nasadki__list__nav');

  function hide__n() {
    image.forEach(element => {
      element.classList.add('hide__img');
    });

    hTxt.forEach(element => {
      element.classList.add('hide__img');
    });

    txt.forEach(element => {
      element.classList.add('hide__img');
    });

    iNav.forEach(element => {
      element.classList.add('noactive__image');
    });
  }

  function show__n(i = 0) {
    image[i].classList.remove('hide__img');
    image[i].classList.add('fade');
    hTxt[i].classList.remove('hide__img');
    hTxt[i].classList.add('fade');
    txt[i].classList.remove('hide__img');
    txt[i].classList.add('fade');
    iNav[i].classList.remove('noactive__image');
    iNav[i].classList.add('fade');
  }

  hide__n();
  show__n();

  iNavParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('nasadki__list__nav')) {
      iNav.forEach((item, i) => {
        if (target == item) {
          hide__n();
          show__n(i);
        }
      });
    }
  });

  /*for parallax on mouse move*/

  window.onload = function () {
    const parallaxParent = document.querySelector('._parallax__wrap');

    if (parallaxParent) {
      // const forParallax = 100;

      let thresholdSets = [];
      for (let i = 0; i <= 1.0; i += 0.005) {
        thresholdSets.push(i);
      }
      const callback = function (entries, observer) {
        const scrollTopProcent = window.pageYOffset / parallaxParent.offsetHeight * 100;
        setParallaxItemsStyle(scrollTopProcent);
      };

      const observer = new IntersectionObserver(callback, {
        threshold: thresholdSets
      });

      observer.observe(document.querySelector('._parallax__wrap'));

      function setParallaxItemsStyle(scrollTopProcent) {
        if (window.matchMedia("(min-width: 575px)").matches) {
          parallaxParent.style.cssText = `transform: translate(${0}%,${scrollTopProcent / 20}%);`;
        } else {
          parallaxParent.style.cssText = `transform: translate(-${(scrollTopProcent / 80)*10}px,${0}%);`;
        }
      }
    }
  };

  /*for animation*/

  let animItems = document.querySelectorAll('._animation');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_anim__active');
        } else {
          animItem.classList.remove('_anim__active');
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    animOnScroll();
  }
});

/*for video*/

document.addEventListener('DOMContentLoaded', () => {
  let jStop = 0;
  const vidos = document.getElementById('video__a');
  const vidosTwo = document.getElementById('chef__vidos');
  let videoVisible = function (target) {
    let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom) {
      target.play();
    } else {
      target.pause();
    };
  };
  
  let videoVisibleTwo = function (targetTwo) {
    let targetTwoPosition = {
      top: window.pageYOffset + targetTwo.getBoundingClientRect().top,
      bottom: window.pageYOffset + targetTwo.getBoundingClientRect().bottom
    },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
    
    if (targetTwoPosition.bottom > windowPosition.top &&
      targetTwoPosition.top < windowPosition.bottom) {
        
        while (jStop < 1) {
          targetTwo.setAttribute("autoplay", true);
          targetTwo.play();
          jStop++;
        }
      }
  };



  window.addEventListener('scroll', function () {
    videoVisible(vidos);
    videoVisibleTwo(vidosTwo);
  });

  videoVisible(vidos);
  videoVisibleTwo(vidosTwo);
});
// document.addEventListener('DOMContentLoaded', () => {
//   const vidos = document.getElementById('video__a');
//   const vidosTwo = document.getElementById('chef__vidos');
//   let videoVisible = function (target, targetTwo) {
//     let targetPosition = {
//       top: window.pageYOffset + target.getBoundingClientRect().top,
//       bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     },
//       targetPositionTwo = {
//         topTwo: window.pageYOffset + targetTwo.getBoundingClientRect().top,
//         bottomTwo: window.pageYOffset + targetTwo.getBoundingClientRect().bottom
//       },
//       windowPosition = {
//         top: window.pageYOffset,
//         bottom: window.pageYOffset + document.documentElement.clientHeight
//       };

//     if (targetPosition.bottom > windowPosition.top &&
//       targetPosition.top < windowPosition.bottom) {
//       target.play();
//     } else {
//       target.pause();
//     };

//     let j = 0
    
//     if (targetPositionTwo.bottomTwo > windowPosition.top &&
//       targetPositionTwo.topTwo < windowPosition.bottom) {
//       targetTwo.play();
//     }
//   };

//   window.addEventListener('scroll', function () {
//     videoVisible(vidos, vidosTwo);
//   });

//   videoVisible(vidos, vidosTwo);
// });


(function ($) {
  /*for autoplay video */
  $(document).on('general-tab-open', () => {
    document.querySelectorAll('.autoplay-video').forEach((element) => {
      element.play();
    })
  });
  /* for slick */
  $(document).ready(function () {
    $('.allinone__slider__cont').slick({
      centerMode: true,
      dots: false,
      asNavFor: ".allinone__img, .allinone__cont__txt__slider",
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1999,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0px',
        }
      }
      ]
    });

    $('.allinone__img').slick({
      slidesToShow: 1,
      asNavFor: ".allinone__slider__cont ",
      arrows: false,
      dots: false,
      fade: true,
      draggable: false,
      swipe: false
    });

    $('.allinone__cont__txt__slider').slick({
      slidesToShow: 1,
      asNavFor: ".allinone__slider__cont, .allinone__img",
      arrows: false,
      dots: false,
      fade: true,
      draggable: false,
      centerMode: true,
      centerPadding: '0px',
      swipe: false
    });
    /*$('.slick-next').mousemove(function () {
      $('.allinone__slider__cont').slick('next');
    });
    $('.slick-prev').mousemove(function () {
      $('.allinone__slider__cont').slick('prev');
    });*/
  });
})(jQuery);