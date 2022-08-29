document.addEventListener('DOMContentLoaded', () => {
  const callImg = document.querySelectorAll('.oppo__colors__cal__img img');
  const callCont = document.querySelectorAll('.oppo__colors__cal__cont');
  const callBtn = document.querySelectorAll('.oppo__colors__cal__btn');
  const parrentCollors = document.querySelector('.oppo__colors');

  function hidenAll() {
    callImg.forEach(item => {
      item.style.display = "none";
    });
    callCont.forEach(item => {
      item.style.display = "none";
    });
  }

  function showenAll(i = 0) {
    callImg[i].style.display = "block";
    callCont[i].style.display = "block";
  }

  hidenAll();
  showenAll();

  parrentCollors.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('oppo__colors__cal__btn')) {
      callBtn.forEach((item, i) => {
        if (target == item && i < 1) {
          i+=1;
          hidenAll();
          showenAll(i);
        } else if (target == item && i >= 1) {
          i-=1;
          hidenAll();
          showenAll(i);
        }
      });
    }
  });

});