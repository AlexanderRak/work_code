

let content = document.querySelectorAll(".krasch-live__collected-money__content-item");
let btn = document.querySelectorAll(".krasch-live__collected-money__btn-item");

function hideContentCollectedMoney(content, btn) {

   content.forEach(function (elementItem, iterItem) {
      if (iterItem == 0) {
         elementItem.classList.add("active-content");
      } else {
         elementItem.classList.add("hide-content");
      }
   });

   btn.forEach(function (elementBtn, iterBtn) {
      if (iterBtn == 0) {
         elementBtn.classList.add("active-btn");
      } else {
         elementBtn.classList.add("notactive-btn");
      }
   });

}

function openContentCollectedMoney(btn) {

   btn.forEach(function (elementBtn, index) {
      elementBtn.addEventListener("click", function () {
         toggleContentCollectedMoney(index);
      });
   });

}

function toggleContentCollectedMoney(index) {
   content.forEach(function (block, iter) {
      if (iter === index) {
         if (block.classList.contains("hide-content")) {
            block.classList.remove("hide-content");
            block.classList.add("active-content");
         } else {
            block.classList.add("hide-content");
            block.classList.remove("active-content");
         }
      } else {
         block.classList.add("hide-content");
         block.classList.remove("active-content");
      }
   });
   btn.forEach(function (block, iter) {
      if (iter === index) {
         if (block.classList.contains("notactive-btn")) {
            block.classList.remove("notactive-btn");
            block.classList.add("active-btn");
         } else {
            block.classList.add("notactive-btn");
            block.classList.remove("active-btn");
         }
      } else {
         block.classList.add("notactive-btn");
         block.classList.remove("active-btn");
      }
   });
}

hideContentCollectedMoney(content, btn);
openContentCollectedMoney(btn);