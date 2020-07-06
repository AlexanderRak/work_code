function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id='+city+'&ids=344693, 585533, 322213, 269343, 178863, 584363'
$.ajax({ url: priceUrl,
    type: 'get',
    success: function(output) {
      var resp = JSON.parse(output);
                    var pr1 = resp['344693']['price'];
                    var pr1_ = resp['344693']['special_price'];
                    var pr2 = resp['585533']['price'];
                    var pr2_ = resp['585533']['price'];
                    var pr3 = resp['322213']['price'];
                    var pr3_ = resp['322213']['price'];
                    var pr4 = resp['269343']['price'];
                    var pr4_ = resp['269343']['price'];
                    var pr5 = resp['178863']['price'];
                    var pr5_ = resp['178863']['price'];
                    var pr6 = resp['584363']['price'];
                    var pr6_ = resp['584363']['price'];

                    document.getElementById("price1").innerHTML = pr1;
                    document.getElementById("price1_").innerHTML = pr1_;
                    document.getElementById("price2").innerHTML = pr2;
                    document.getElementById("price2_").innerHTML = pr2_;
                    document.getElementById("price3").innerHTML = pr3;
                    document.getElementById("price3_").innerHTML = pr3_;
                    document.getElementById("price4").innerHTML = pr4;
                    document.getElementById("price4_").innerHTML = pr4_;
                    document.getElementById("price5").innerHTML = pr5;
                    document.getElementById("price5_").innerHTML = pr5_;
                    document.getElementById("price6").innerHTML = pr6;
                    document.getElementById("price6_").innerHTML = pr6_;

               }
          });