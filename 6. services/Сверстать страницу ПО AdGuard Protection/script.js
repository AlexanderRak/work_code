document.addEventListener('DOMContentLoaded', () => {
  //Tabs
  const parentSlide = document.querySelector('.slider'),
        slideBtn = document.querySelectorAll('.slide_btn'),
        slideCont = document.querySelectorAll('.slide_cont'),
        textSlide = document.querySelectorAll('.slide_txt');

  function hideSlide() {
    slideCont.forEach(item => {
      item.classList.add('hide_protect', 'fade');
      item.classList.remove('show_protect');
    });

    slideBtn.forEach(item => {
      item.classList.remove('hide_protect');
    });
  }

  function showSlide(i = 0) {
    slideCont[i].classList.add('show_protect', 'fade');
    slideCont[i].classList.remove('hide_protect');
    slideBtn[i].classList.add('hide_protect', 'fade');

    let a = i++;
    const widthSlideBtn = slideBtn[a].offsetWidth;
    if (widthSlideBtn < 185) {
      textSlide.forEach(item => {
        item.classList.add('rotate_txt');
      });
    }
  }
  

  hideSlide();

  parentSlide.addEventListener('click', (event) => {
    const target = event.target;
    const slideImg = document.querySelectorAll('.slide_img img'),
          slideTxt = document.querySelectorAll('.slide_txt span'),
          ParentslideImg = document.querySelectorAll('.slide_img');

          function circle(arg) {
            arg.forEach((item, i) => {
              if (target == item) {
                hideSlide();
                showSlide(i);
              }
            });
          }
    if (target && target.classList.contains('slide_btn')) {
      circle(slideBtn);
    } else {
      circle(slideImg);
      circle(slideTxt);
      circle(ParentslideImg);
    }
  });

  //Блокировщик рекламы

  const blockerSlide = document.querySelectorAll('.blocker_slide'),
        blockerBtn = document.querySelectorAll('.blocker_btn'),
        parentBlocker = document.querySelector('.blocker');

  function hideBlockerSlide() {
    blockerSlide.forEach(item => {
      item.classList.add('hide_protect', 'fade');
      item.classList.remove('show_protect');
    });

    blockerBtn.forEach(item => {
      item.classList.remove('blocker_nav_active', 'fade');
    });
  }

  function showBlockerSlide(i = 0) {

    if (i <= 1) {
      blockerSlide[i].classList.add('show_protect', 'fade');
      blockerSlide[2].classList.add('show_protect', 'fade');
      blockerSlide[2].classList.remove('hide_protect');
      blockerSlide[i].classList.remove('hide_protect');
      blockerBtn[i].classList.add('blocker_nav_active', 'fade');
      blockerBtn[2].classList.add('blocker_nav_active', 'fade');
    } else {
      blockerSlide[i].classList.add('show_protect', 'fade');
      blockerSlide[0].classList.add('show_protect', 'fade');
      blockerSlide[0].classList.remove('hide_protect');
      blockerSlide[i].classList.remove('hide_protect');
      blockerBtn[i].classList.add('blocker_nav_active', 'fade');
      blockerBtn[0].classList.add('blocker_nav_active', 'fade');
    }

  }

  hideBlockerSlide();
  showBlockerSlide();

  parentBlocker.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('blocker_btn')) {
      blockerBtn.forEach((item, i) => {
        if(target == item){
          hideBlockerSlide();
          showBlockerSlide(i);
        }
      });
    }
  });
  
  // табы windows и android

  const systemNavBtnWindows = document.querySelectorAll('.system_nav_btn_windows'),
        systemNavBtnAndroid = document.querySelectorAll('.system_nav_btn_android'),
        parentNav = document.querySelector('.system_nav'),
        parentAndroid = document.querySelectorAll('.android');

  function hideSystemNav(arg) {
    arg.forEach(item => {
      item.classList.remove('system_nav_active');
      item.classList.add('system_nav_not_active');
    });

    parentAndroid.forEach(itemTwo => {
      itemTwo.classList.remove('system_nav_active');
      itemTwo.classList.add('system_nav_not_active');
    });
  }


  hideSystemNav(systemNavBtnWindows);
  hideSystemNav(systemNavBtnAndroid);

  function showSystemNavBtnAndroid(i = 0) {
    parentAndroid[i].classList.remove('system_nav_not_active');
  }

  function showSystemNavBtn(arg, i = 0) {
    arg[i].classList.remove('system_nav_not_active');
    arg[i].classList.add('system_nav_active', 'fade');
    // showSystemNavBtnAndroid(i);
  }

  showSystemNavBtn(systemNavBtnWindows, 1);
  showSystemNavBtn(systemNavBtnAndroid);
  showSystemNavBtnAndroid();

  parentNav.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('system_nav_btn_windows')) {
      systemNavBtnWindows.forEach(item => {
        if (item == target) {
          hideSystemNav(systemNavBtnAndroid);
          hideSystemNav(systemNavBtnWindows);
          showSystemNavBtn(systemNavBtnAndroid, 0);
          showSystemNavBtnAndroid(0);
          showSystemNavBtn(systemNavBtnWindows, 1);
        }
      });
    } else if (target && target.classList.contains('system_nav_btn_android')) {
      systemNavBtnAndroid.forEach(item => {
        if (item == target) {
          hideSystemNav(systemNavBtnAndroid);
          hideSystemNav(systemNavBtnWindows);
          showSystemNavBtn(systemNavBtnWindows, 0);
          showSystemNavBtn(systemNavBtnAndroid, 1);
          showSystemNavBtnAndroid(1);
        }
      });
    }
  });
  
});