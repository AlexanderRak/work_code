function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id='+city+'&ids=474263, 90967, 322493, 255523, 196373, 355483, 295343, 68495, 454393, 384893, 327253, 293753, 342433, 71689, 379793, 80580, 64737, 153343, 474013, 226103, 367853, 266573, 319343, 395893, 34486, 414433, 315893, 254783, 305073, 298883'
$.ajax({ url: priceUrl,
    type: 'get',
    success: function(output) {
      var resp = JSON.parse(output);
                    //var pr1 = resp['474263']['price'];
                    var pr1_ = resp['474263']['special_price'];
                    var pr2 = resp['90967']['price'];
                    var pr2_ = resp['90967']['special_price'];
                    var pr3 = resp['322493']['price'];
                    var pr3_ = resp['322493']['special_price'];
                    //var pr4 = resp['255523']['price'];
                    var pr4_ = resp['255523']['special_price'];

                    var pr44 = resp['266573']['price'];
                    var pr44_ = resp['266573']['special_price'];
                    var pr55 = resp['319343']['price'];
                    var pr55_ = resp['319343']['special_price'];

                    //var pr5 = resp['196373']['price'];
                    var pr5_ = resp['196373']['special_price'];
                    //var pr6 = resp['355483']['price'];
                    var pr6_ = resp['355483']['special_price'];
                    var pr7 = resp['295343']['price'];
                    var pr7_ = resp['295343']['special_price'];
                    var pr8 = resp['68495']['price'];
                    var pr8_ = resp['68495']['special_price'];

                    var pr88 = resp['395893']['price'];
                    var pr88_ = resp['395893']['special_price'];
                    //var pr888 = resp['34486']['price'];
                    var pr888_ = resp['34486']['special_price'];

                    var pr9 = resp['454393']['price'];
                    var pr9_ = resp['454393']['special_price'];
                    //var pr10 = resp['384893']['price'];
                    var pr10_ = resp['384893']['special_price'];
                    var pr11 = resp['327253']['price'];
                    var pr11_ = resp['327253']['special_price'];
                    var pr12 = resp['293753']['price'];
                    var pr12_ = resp['293753']['special_price'];
                    //var pr13 = resp['342433']['price'];
                    var pr13_ = resp['342433']['special_price'];
                    var pr14 = resp['71689']['price'];
                    var pr14_ = resp['71689']['special_price'];

                    var pr144 = resp['414433']['price'];
                    var pr144_ = resp['414433']['special_price'];
                    var pr1444 = resp['315893']['price'];
                    var pr1444_ = resp['315893']['special_price'];
                    var pr14444 = resp['254783']['price'];
                    var pr14444_ = resp['254783']['special_price'];

                    var pr15 = resp['379793']['price'];
                    var pr15_ = resp['379793']['special_price'];
                    //var pr16 = resp['80580']['price'];
                    var pr16_ = resp['80580']['special_price'];
                    var pr17 = resp['64737']['price'];
                    var pr17_ = resp['64737']['special_price'];
                    var pr18 = resp['153343']['price'];
                    var pr18_ = resp['153343']['special_price'];

                    var pr188 = resp['305073']['price'];
                    var pr188_ = resp['305073']['special_price'];
                    var pr1888 = resp['298883']['price'];
                    var pr1888_ = resp['298883']['special_price'];

                    var pr19 = resp['474013']['price'];
                    var pr19_ = resp['474013']['special_price'];
                    //var pr20 = resp['226103']['price'];
                    var pr20_ = resp['226103']['special_price'];
                    var pr21 = resp['367853']['price'];
                    var pr21_ = resp['367853']['special_price'];


                    //document.getElementById("price1").innerHTML = pr1;
                    document.getElementById("price1_").innerHTML = pr1_;
                    document.getElementById("price2").innerHTML = pr2;
                    document.getElementById("price2_").innerHTML = pr2_;
                    document.getElementById("price3").innerHTML = pr3;
                    document.getElementById("price3_").innerHTML = pr3_;
                    //document.getElementById("price4").innerHTML = pr4;
                    document.getElementById("price4_").innerHTML = pr4_;

                    document.getElementById("price44").innerHTML = pr44;
                    document.getElementById("price44_").innerHTML = pr44_;
                    document.getElementById("price55").innerHTML = pr55;
                    document.getElementById("price55_").innerHTML = pr55_;

                    //document.getElementById("price5").innerHTML = pr5;
                    document.getElementById("price5_").innerHTML = pr5_;
                    //document.getElementById("price6").innerHTML = pr6;
                    document.getElementById("price6_").innerHTML = pr6_;
                    document.getElementById("price7").innerHTML = pr7;
                    document.getElementById("price7_").innerHTML = pr7_;
                    document.getElementById("price8").innerHTML = pr8;
                    document.getElementById("price8_").innerHTML = pr8_;

                    document.getElementById("price88").innerHTML = pr88;
                    document.getElementById("price88_").innerHTML = pr88_;
                    //document.getElementById("price888").innerHTML = pr888;
                    document.getElementById("price888_").innerHTML = pr888_;

                    document.getElementById("price9").innerHTML = pr9;
                    document.getElementById("price9_").innerHTML = pr9_;
                    //document.getElementById("price10").innerHTML = pr10;
                    document.getElementById("price10_").innerHTML = pr10_;
                    document.getElementById("price11").innerHTML = pr11;
                    document.getElementById("price11_").innerHTML = pr11_;
                    document.getElementById("price12").innerHTML = pr12;
                    document.getElementById("price12_").innerHTML = pr12_;
                    //document.getElementById("price13").innerHTML = pr13;
                    document.getElementById("price13_").innerHTML = pr13_;
                    document.getElementById("price14").innerHTML = pr14;
                    document.getElementById("price14_").innerHTML = pr14_;

                    document.getElementById("price144").innerHTML = pr144;
                    document.getElementById("price144_").innerHTML = pr144_;
                    document.getElementById("price1444").innerHTML = pr1444;
                    document.getElementById("price1444_").innerHTML = pr1444_;
                    document.getElementById("price14444").innerHTML = pr14444;
                    document.getElementById("price14444_").innerHTML = pr14444_;

                    document.getElementById("price15").innerHTML = pr15;
                    document.getElementById("price15_").innerHTML = pr15_;
                    //document.getElementById("price16").innerHTML = pr16;
                    document.getElementById("price16_").innerHTML = pr16_;
                    document.getElementById("price17").innerHTML = pr17;
                    document.getElementById("price17_").innerHTML = pr17_;
                    document.getElementById("price18").innerHTML = pr18;
                    document.getElementById("price18_").innerHTML = pr18_;

                    document.getElementById("price188").innerHTML = pr188;
                    document.getElementById("price188_").innerHTML = pr188_;
                    document.getElementById("price1888").innerHTML = pr1888;
                    document.getElementById("price1888_").innerHTML = pr1888_;

                    document.getElementById("price19").innerHTML = pr19;
                    document.getElementById("price19_").innerHTML = pr19_;
                    //document.getElementById("price20").innerHTML = pr20;
                    document.getElementById("price20_").innerHTML = pr20_;
                    document.getElementById("price21").innerHTML = pr21;
                    document.getElementById("price21_").innerHTML = pr21_;


               }
          });