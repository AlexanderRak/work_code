   function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
   }
   var city = getCookie('active_city_id');
   var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=50356, 630873, 519113, 633683, 581473, 598763, 291463, 581983, 40851, 375083, 40725, 781203'
   $.ajax({
      url: priceUrl,
      type: 'get',
      success: function (output) {
         var resp = JSON.parse(output);

         //ПЕРВА ГРУППА
         //первый товар
         var pr1 = resp['50356']['price'];
         var pr1_ = resp['50356']['special_price'];

         //document.getElementById("price1").innerHTML = pr1;
         document.getElementById("price1_").innerHTML = pr1_;

         //второй товар
         var pr2 = resp['630873']['price'];
         var pr2_ = resp['630873']['special_price'];

         //document.getElementById("price2").innerHTML = pr2;
         document.getElementById("price2_").innerHTML = pr2_;

         //третий товар
         var pr3 = resp['519113']['price'];
         var pr3_ = resp['519113']['special_price'];

         //document.getElementById("price3").innerHTML = pr3;
         document.getElementById("price3_").innerHTML = pr3_;

         //четвёртый товар
         var pr4 = resp['633683']['price'];
         var pr4_ = resp['633683']['special_price'];

         //document.getElementById("price4").innerHTML = pr4;
         document.getElementById("price4_").innerHTML = pr4_;

         //ВТОРАЯ ГРУППА
         //первый товар
         var pr5 = resp['581473']['price'];
         var pr5_ = resp['581473']['special_price'];

         //document.getElementById("price5").innerHTML = pr5;
         document.getElementById("price5_").innerHTML = pr5_;

         //второй товар
         var pr6 = resp['598763']['price'];
         var pr6_ = resp['598763']['special_price'];

         //document.getElementById("price6").innerHTML = pr6;
         document.getElementById("price6_").innerHTML = pr6_;

         //третий товар
         var pr7 = resp['291463']['price'];
         var pr7_ = resp['291463']['special_price'];

         //document.getElementById("price7").innerHTML = pr7;
         document.getElementById("price7_").innerHTML = pr7_;

         //четвёртый товар
         var pr8 = resp['581983']['price'];
         var pr8_ = resp['581983']['special_price'];

         //document.getElementById("price8").innerHTML = pr8;
         document.getElementById("price8_").innerHTML = pr8_;

         //ТРЕТЬЯ ГРУППА
         //первый товар
         var pr9 = resp['40851']['price'];
         var pr9_ = resp['40851']['special_price'];

         //document.getElementById("price9").innerHTML = pr9;
         document.getElementById("price9_").innerHTML = pr9_;

         //второй товар
         var pr10 = resp['375083']['price'];
         var pr10_ = resp['375083']['special_price'];

         //document.getElementById("price10").innerHTML = pr10;
         document.getElementById("price10_").innerHTML = pr10_;

         //третий товар
         var pr11 = resp['40725']['price'];
         var pr11_ = resp['40725']['special_price'];

         //document.getElementById("price11").innerHTML = pr11;
         document.getElementById("price11_").innerHTML = pr11_;

         //четвёртый товар
         var pr12 = resp['781203']['price'];
         var pr12_ = resp['781203']['special_price'];

         //document.getElementById("price12").innerHTML = pr12;
         document.getElementById("price12_").innerHTML = pr12_;

      }
   });