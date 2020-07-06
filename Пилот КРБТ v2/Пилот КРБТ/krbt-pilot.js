// <![CDATA[
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');

var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007013&left=1010592&rigths=1244196';
$.ajax({
  url: priceUrl,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }


    var l_1 = resp['1010592'];
    var r_1 = resp['1244196'];
    var priceBndl_1 = resp['price'];

    document.getElementById("right1").innerHTML = r_1 + "<sup> грн</sup>";
    document.getElementById("left1").innerHTML = l_1 + "<sup> грн</sup>";
    document.getElementById("priceBndl1").innerHTML = priceBndl_1 + "<sup> грн</sup>";
  }
});


var priceUrl2 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006396&left=1097458&rigths=1223463';
$.ajax({
  url: priceUrl2,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl2").style.display = "none";
    }


    var l_2 = resp['1097458'];
    var r_2 = resp['1223463'];
    var priceBndl_2 = resp['price'];

    document.getElementById("right2").innerHTML = r_2 + "<sup> грн</sup>";
    document.getElementById("left2").innerHTML = l_2 + "<sup> грн</sup>";
    document.getElementById("priceBndl2").innerHTML = priceBndl_2 + "<sup> грн</sup>";
  }
});


var priceUrl3 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006704&left=1406521&rigths=1365858';
$.ajax({
  url: priceUrl3,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl3").style.display = "none";
    }


    var l_3 = resp['1406521'];
    var r_3 = resp['1365858'];
    var priceBndl_3 = resp['price'];

    document.getElementById("right3").innerHTML = r_3 + "<sup> грн</sup>";
    document.getElementById("left3").innerHTML = l_3 + "<sup> грн</sup>";
    document.getElementById("priceBndl3").innerHTML = priceBndl_3 + "<sup> грн</sup>";
  }
});

var priceUrl4 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006704&left=1375996&rigths=1365858';
$.ajax({
  url: priceUrl4,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl4").style.display = "none";
    }


    var l_4 = resp['1375996'];
    var r_4 = resp['1365858'];
    var priceBndl_4 = resp['price'];

    document.getElementById("right4").innerHTML = r_4 + "<sup> грн</sup>";
    document.getElementById("left4").innerHTML = l_4 + "<sup> грн</sup>";
    document.getElementById("priceBndl4").innerHTML = priceBndl_4 + "<sup> грн</sup>";
  }
});

var priceUrl5 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007013&left=1044777&rigths=1244196';
$.ajax({
  url: priceUrl5,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl5").style.display = "none";
    }



    var l_5 = resp['1044777'];
    var r_5 = resp['1244196'];
    var priceBndl_5 = resp['price'];

    document.getElementById("right5").innerHTML = r_5 + "<sup> грн</sup>";
    document.getElementById("left5").innerHTML = l_5 + "<sup> грн</sup>";
    document.getElementById("priceBndl5").innerHTML = priceBndl_5 + "<sup> грн</sup>";
  }
});
/*
var priceUrl52 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006971&left=1449610&rigths=1208072';
$.ajax({ url: priceUrl52,
         type: 'get',
         success: function(output) {
                    var resp = JSON.parse(output);
                    if(resp['price'] == 0){
                        document.getElementById("bandl52").style.display = "none";
                      }
                    

                    
                    var l_52 = resp['1449610'];
                    var r_52 = resp['1208072'];
                    var priceBndl_52 = resp['price'];

                    document.getElementById("right52").innerHTML = r_52+"<sup> грн</sup>";
                    document.getElementById("left52").innerHTML = l_52+"<sup> грн</sup>";
                    document.getElementById("priceBndl52").innerHTML = priceBndl_52+"<sup> грн</sup>";
         }           
});
*/

var priceUrl53 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1449615&rigths=1010592';
$.ajax({
  url: priceUrl53,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl53").style.display = "none";
    }



    var l_53 = resp['1449615'];
    var r_53 = resp['1010592'];
    var priceBndl_53 = resp['price'];

    document.getElementById("right53").innerHTML = r_53 + "<sup> грн</sup>";
    document.getElementById("left53").innerHTML = l_53 + "<sup> грн</sup>";
    document.getElementById("priceBndl53").innerHTML = priceBndl_53 + "<sup> грн</sup>";
  }
});

var priceUrl54 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1244196&rigths=1029135';
$.ajax({
  url: priceUrl54,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl54").style.display = "none";
    }



    var l_54 = resp['1244196'];
    var r_54 = resp['1029135'];
    var priceBndl_54 = resp['price'];

    document.getElementById("right54").innerHTML = r_54 + "<sup> грн</sup>";
    document.getElementById("left54").innerHTML = l_54 + "<sup> грн</sup>";
    document.getElementById("priceBndl54").innerHTML = priceBndl_54 + "<sup> грн</sup>";
  }
});

var priceUrl55 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007014&left=1296818&rigths=1303388';
$.ajax({
  url: priceUrl55,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl55").style.display = "none";
    }



    var l_55 = resp['1296818'];
    var r_55 = resp['1303388'];
    var priceBndl_55 = resp['price'];

    document.getElementById("right55").innerHTML = r_55 + "<sup> грн</sup>";
    document.getElementById("left55").innerHTML = l_55 + "<sup> грн</sup>";
    document.getElementById("priceBndl55").innerHTML = priceBndl_55 + "<sup> грн</sup>";
  }
});


var priceUrl57 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007008&left=0993355&rigths=1471469';
$.ajax({
  url: priceUrl57,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl57").style.display = "none";
    }



    var l_57 = resp['0993355'];
    var r_57 = resp['1471469'];
    var priceBndl_57 = resp['price'];

    document.getElementById("right57").innerHTML = r_57 + "<sup> грн</sup>";
    document.getElementById("left57").innerHTML = l_57 + "<sup> грн</sup>";
    document.getElementById("priceBndl57").innerHTML = priceBndl_57 + "<sup> грн</sup>";
  }
});


// var priceUrl58 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1450774&rigths=1296820';
// $.ajax({ url: priceUrl58,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl58").style.display = "none";
//                       }



//                     var l_58 = resp['1450774'];
//                     var r_58= resp['1296820'];
//                     var priceBndl_58 = resp['price'];

//                     document.getElementById("right58").innerHTML = r_58+"<sup> грн</sup>";
//                     document.getElementById("left58").innerHTML = l_58+"<sup> грн</sup>";
//                     document.getElementById("priceBndl58").innerHTML = priceBndl_58+"<sup> грн</sup>";
//          }           
// });



// var priceUrl59 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1449615&rigths=1010591';
// $.ajax({ url: priceUrl59,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl59").style.display = "none";
//                       }



//                     var l_59 = resp['1449615'];
//                     var r_59= resp['1010591'];
//                     var priceBndl_59 = resp['price'];

//                     document.getElementById("right59").innerHTML = r_59+"<sup> грн</sup>";
//                     document.getElementById("left59").innerHTML = l_59+"<sup> грн</sup>";
//                     document.getElementById("priceBndl59").innerHTML = priceBndl_59+"<sup> грн</sup>";
//          }           
// });



var priceUrl60 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1349142&rigths=1406521';
$.ajax({
  url: priceUrl60,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl60").style.display = "none";
    }



    var l_60 = resp['1349142'];
    var r_60 = resp['1406521'];
    var priceBndl_60 = resp['price'];

    document.getElementById("right60").innerHTML = r_60 + "<sup> грн</sup>";
    document.getElementById("left60").innerHTML = l_60 + "<sup> грн</sup>";
    document.getElementById("priceBndl60").innerHTML = priceBndl_60 + "<sup> грн</sup>";
  }
});

var priceUrl61 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1244196&rigths=1296820';
$.ajax({
  url: priceUrl61,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl61").style.display = "none";
    }



    var l_61 = resp['1244196'];
    var r_61 = resp['1296820'];
    var priceBndl_61 = resp['price'];

    document.getElementById("right61").innerHTML = r_61 + "<sup> грн</sup>";
    document.getElementById("left61").innerHTML = l_61 + "<sup> грн</sup>";
    document.getElementById("priceBndl61").innerHTML = priceBndl_61 + "<sup> грн</sup>";
  }
});

var priceUrl62 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1449615&rigths=1296820';
$.ajax({
  url: priceUrl62,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl62").style.display = "none";
    }



    var l_62 = resp['1449615'];
    var r_62 = resp['1296820'];
    var priceBndl_62 = resp['price'];

    document.getElementById("right62").innerHTML = r_62 + "<sup> грн</sup>";
    document.getElementById("left62").innerHTML = l_62 + "<sup> грн</sup>";
    document.getElementById("priceBndl62").innerHTML = priceBndl_62 + "<sup> грн</sup>";
  }
});


var priceUrl63 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007014&left=1296818&rigths=1244196';
$.ajax({
  url: priceUrl63,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl63").style.display = "none";
    }



    var l_63 = resp['1296818'];
    var r_63 = resp['1244196'];
    var priceBndl_63 = resp['price'];

    document.getElementById("right63").innerHTML = r_63 + "<sup> грн</sup>";
    document.getElementById("left63").innerHTML = l_63 + "<sup> грн</sup>";
    document.getElementById("priceBndl63").innerHTML = priceBndl_63 + "<sup> грн</sup>";
  }
});


var priceUrl64 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007014&left=1296818&rigths=1449615';
$.ajax({
  url: priceUrl64,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl64").style.display = "none";
    }



    var l_64 = resp['1296818'];
    var r_64 = resp['1449615'];
    var priceBndl_64 = resp['price'];

    document.getElementById("right64").innerHTML = r_64 + "<sup> грн</sup>";
    document.getElementById("left64").innerHTML = l_64 + "<sup> грн</sup>";
    document.getElementById("priceBndl64").innerHTML = priceBndl_64 + "<sup> грн</sup>";
  }
});

var priceUrl65 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1450774&rigths=1029135';
$.ajax({
  url: priceUrl65,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl65").style.display = "none";
    }



    var l_65 = resp['1450774'];
    var r_65 = resp['1029135'];
    var priceBndl_65 = resp['price'];

    document.getElementById("right65").innerHTML = r_65 + "<sup> грн</sup>";
    document.getElementById("left65").innerHTML = l_65 + "<sup> грн</sup>";
    document.getElementById("priceBndl65").innerHTML = priceBndl_65 + "<sup> грн</sup>";
  }
});


// var priceUrl66 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007014&left=1450774&rigths=1296818';
// $.ajax({ url: priceUrl66,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl66").style.display = "none";
//                       }



//                     var l_66 = resp['1450774'];
//                     var r_66 = resp['1296818'];
//                     var priceBndl_66 = resp['price'];

//                     document.getElementById("right66").innerHTML = r_66+"<sup> грн</sup>";
//                     document.getElementById("left66").innerHTML = l_66+"<sup> грн</sup>";
//                     document.getElementById("priceBndl66").innerHTML = priceBndl_66+"<sup> грн</sup>";
//          }           
// });


// var priceUrl6 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00005514&left=1134338&rigths=1345775';
// $.ajax({ url: priceUrl6,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                           document.getElementById("bandl6").style.display = "none";
//                       }



//                     var l_6 = resp['1134338'];
//                     var r_6 = resp['1345775'];
//                     var priceBndl_6 = resp['price'];

//                     document.getElementById("right6").innerHTML = r_6+"<sup> грн</sup>";
//                     document.getElementById("left6").innerHTML = l_6+"<sup> грн</sup>";
//                     document.getElementById("priceBndl6").innerHTML = priceBndl_6+"<sup> грн</sup>";
//         }            
// });

// var priceUrl7 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1349142&rigths=1341074';
// $.ajax({ url: priceUrl7,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl7").style.display = "none";
//                       }



//                     var l_7 = resp['1349142'];
//                     var r_7 = resp['1341074'];
//                     var priceBndl_7 = resp['price'];

//                     document.getElementById("right7").innerHTML = r_7+"<sup> грн</sup>";
//                     document.getElementById("left7").innerHTML = l_7+"<sup> грн</sup>";
//                     document.getElementById("priceBndl7").innerHTML = priceBndl_7+"<sup> грн</sup>";
//              }       
// });

var priceUrl8 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006980&left=980335&rigths=1305811';
$.ajax({
  url: priceUrl8,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl8").style.display = "none";
    }

    //


    var l_8 = resp['980335'];
    var r_8 = resp['1305811'];
    var priceBndl_8 = resp['price'];

    document.getElementById("right8").innerHTML = r_8 + "<sup> грн</sup>";
    document.getElementById("left8").innerHTML = l_8 + "<sup> грн</sup>";
    document.getElementById("priceBndl8").innerHTML = priceBndl_8 + "<sup> грн</sup>";
  }
});


var priceUrl101 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006972&left=1440290&rigths=1449609';
$.ajax({
  url: priceUrl101,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl101").style.display = "none";
    }

    //var pr1 = resp['332643']['price'];
    //var pr1_ = resp['332643']['special_price'];



    var l_101 = resp['1440290'];
    var r_101 = resp['1449609'];
    var priceBndl_101 = resp['price'];

    document.getElementById("right101").innerHTML = r_101 + "<sup> грн</sup>";
    document.getElementById("left101").innerHTML = l_101 + "<sup> грн</sup>";
    document.getElementById("priceBndl101").innerHTML = priceBndl_101 + "<sup> грн</sup>";
  }
});
var priceUrl102 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006981&left=990590&rigths=1067820';
$.ajax({
  url: priceUrl102,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl102").style.display = "none";
    }





    var l_102 = resp['990590'];
    var r_102 = resp['1067820'];
    var priceBndl_102 = resp['price'];

    document.getElementById("right102").innerHTML = r_102 + "<sup> грн</sup>";
    document.getElementById("left102").innerHTML = l_102 + "<sup> грн</sup>";
    document.getElementById("priceBndl102").innerHTML = priceBndl_102 + "<sup> грн</sup>";
  }
});
var priceUrl103 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00005515&left=1193650&rigths=1134338';
$.ajax({
  url: priceUrl103,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl103").style.display = "none";
    }


    var l_103 = resp['1193650'];
    var r_103 = resp['1134338'];
    var priceBndl_103 = resp['price'];

    document.getElementById("right103").innerHTML = r_103 + "<sup> грн</sup>";
    document.getElementById("left103").innerHTML = l_103 + "<sup> грн</sup>";
    document.getElementById("priceBndl103").innerHTML = priceBndl_103 + "<sup> грн</sup>";
  }
});

var priceUrl104 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1067820&rigths=1433343';
$.ajax({
  url: priceUrl104,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl104").style.display = "none";
    }

    var l_104 = resp['1067820'];
    var r_104 = resp['1433343'];
    var priceBndl_104 = resp['price'];

    document.getElementById("right104").innerHTML = r_104 + "<sup> грн</sup>";
    document.getElementById("left104").innerHTML = l_104 + "<sup> грн</sup>";
    document.getElementById("priceBndl104").innerHTML = priceBndl_104 + "<sup> грн</sup>";
  }
});
// var priceUrl105 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1067820&rigths=1433344';
// $.ajax({ url: priceUrl105,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl105").style.display = "none";
//                       }

//                     var l_105 = resp['1067820'];
//                     var r_105 = resp['1433344'];
//                     var priceBndl_105 = resp['price'];

//                     document.getElementById("right105").innerHTML = r_105+"<sup> грн</sup>";
//                     document.getElementById("left105").innerHTML = l_105+"<sup> грн</sup>";
//                     document.getElementById("priceBndl105").innerHTML = priceBndl_105+"<sup> грн</sup>";
//               }      
// });

var priceUrl106 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1306710&rigths=1341074';
$.ajax({
  url: priceUrl106,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl106").style.display = "none";
    }

    var l_106 = resp['1306710'];
    var r_106 = resp['1341074'];
    var priceBndl_106 = resp['price'];

    document.getElementById("right106").innerHTML = r_106 + "<sup> грн</sup>";
    document.getElementById("left106").innerHTML = l_106 + "<sup> грн</sup>";
    document.getElementById("priceBndl106").innerHTML = priceBndl_106 + "<sup> грн</sup>";
  }
});

// var priceUrl107 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1067820&rigths=990590';
// $.ajax({ url: priceUrl107,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl107").style.display = "none";
//                       }

//                     var l_107 = resp['1067820'];
//                     var r_107 = resp['990590'];
//                     var priceBndl_107 = resp['price'];

//                     document.getElementById("right107").innerHTML = r_107+"<sup> грн</sup>";
//                     document.getElementById("left107").innerHTML = l_107+"<sup> грн</sup>";
//                     document.getElementById("priceBndl107").innerHTML = priceBndl_107+"<sup> грн</sup>";
//               }      
// });


var priceUrl109 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=0990591&rigths=1305811';
$.ajax({
  url: priceUrl109,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl109").style.display = "none";
    }

    var l_109 = resp['0990591'];
    var r_109 = resp['1305811'];
    var priceBndl_109 = resp['price'];

    document.getElementById("right109").innerHTML = r_109 + "<sup> грн</sup>";
    document.getElementById("left109").innerHTML = l_109 + "<sup> грн</sup>";
    document.getElementById("priceBndl109").innerHTML = priceBndl_109 + "<sup> грн</sup>";
  }
});

var priceUrl110 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1449615&rigths=1151006';
$.ajax({
  url: priceUrl110,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl110").style.display = "none";
    }

    var l_110 = resp['1449615'];
    var r_110 = resp['1151006'];
    var priceBndl_110 = resp['price'];

    document.getElementById("right110").innerHTML = r_110 + "<sup> грн</sup>";
    document.getElementById("left110").innerHTML = l_110 + "<sup> грн</sup>";
    document.getElementById("priceBndl110").innerHTML = priceBndl_110 + "<sup> грн</sup>";
  }
});

var priceUrl111 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1244196&rigths=1151006';
$.ajax({
  url: priceUrl111,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl111").style.display = "none";
    }

    var l_111 = resp['1244196'];
    var r_111 = resp['1151006'];
    var priceBndl_111 = resp['price'];

    document.getElementById("right111").innerHTML = r_111 + "<sup> грн</sup>";
    document.getElementById("left111").innerHTML = l_111 + "<sup> грн</sup>";
    document.getElementById("priceBndl111").innerHTML = priceBndl_111 + "<sup> грн</sup>";
  }
});


var priceUrl112 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1306710&rigths=1406521';
$.ajax({
  url: priceUrl112,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl112").style.display = "none";
    }

    var l_112 = resp['1306710'];
    var r_112 = resp['1406521'];
    var priceBndl_112 = resp['price'];

    document.getElementById("right112").innerHTML = r_112 + "<sup> грн</sup>";
    document.getElementById("left112").innerHTML = l_112 + "<sup> грн</sup>";
    document.getElementById("priceBndl112").innerHTML = priceBndl_112 + "<sup> грн</sup>";
  }
});


var priceUrl113 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007012&left=1450774&rigths=1151006';
$.ajax({
  url: priceUrl113,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl113").style.display = "none";
    }

    var l_113 = resp['1450774'];
    var r_113 = resp['1151006'];
    var priceBndl_113 = resp['price'];

    document.getElementById("right113").innerHTML = r_113 + "<sup> грн</sup>";
    document.getElementById("left113").innerHTML = l_113 + "<sup> грн</sup>";
    document.getElementById("priceBndl113").innerHTML = priceBndl_113 + "<sup> грн</sup>";
  }
});

var priceUrl114 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1349142&rigths=1341074';
$.ajax({
  url: priceUrl114,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl114").style.display = "none";
    }

    var l_114 = resp['1349142'];
    var r_114 = resp['1341074'];
    var priceBndl_114 = resp['price'];

    document.getElementById("right114").innerHTML = r_114 + "<sup> грн</sup>";
    document.getElementById("left114").innerHTML = l_114 + "<sup> грн</sup>";
    document.getElementById("priceBndl114").innerHTML = priceBndl_114 + "<sup> грн</sup>";
  }
});

var priceUrl115 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1067820&rigths=1005337';
$.ajax({
  url: priceUrl115,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl115").style.display = "none";
    }

    var l_115 = resp['1067820'];
    var r_115 = resp['1005337'];
    var priceBndl_115 = resp['price'];

    document.getElementById("right115").innerHTML = r_115 + "<sup> грн</sup>";
    document.getElementById("left115").innerHTML = l_115 + "<sup> грн</sup>";
    document.getElementById("priceBndl115").innerHTML = priceBndl_115 + "<sup> грн</sup>";
  }
});

var priceUrl116 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1005337&rigths=1305811';
$.ajax({
  url: priceUrl116,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl116").style.display = "none";
    }

    var l_116 = resp['1005337'];
    var r_116 = resp['1305811'];
    var priceBndl_116 = resp['price'];

    document.getElementById("right116").innerHTML = r_116 + "<sup> грн</sup>";
    document.getElementById("left116").innerHTML = l_116 + "<sup> грн</sup>";
    document.getElementById("priceBndl116").innerHTML = priceBndl_116 + "<sup> грн</sup>";
  }
});

/*
var priceUrl12 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1306710&rigths=1216052';
$.ajax({ url: priceUrl12,
         type: 'get',
         success: function(output) {
                    var resp = JSON.parse(output);
                    if(resp['price'] == 0){
                        document.getElementById("bandl12").style.display = "none";
                      }
                    
                    //var pr1 = resp['332643']['price'];
                    //var pr1_ = resp['332643']['special_price'];


                    
                    var l_12 = resp['1306710'];
                    var r_12 = resp['1216052'];
                    var priceBndl_12 = resp['price'];

                    document.getElementById("right12").innerHTML = r_12+"<sup> грн</sup>";
                    document.getElementById("left12").innerHTML = l_12+"<sup> грн</sup>";
                    document.getElementById("priceBndl12").innerHTML = priceBndl_12+"<sup> грн</sup>";
          }          
});
*/

var priceUrl151 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006972&left=1440290&rigths=1457759';
$.ajax({
  url: priceUrl151,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl151").style.display = "none";
    }

    var l_151 = resp['1440290'];
    var r_151 = resp['1457759'];
    var priceBndl_151 = resp['price'];

    document.getElementById("right151").innerHTML = r_151 + "<sup> грн</sup>";
    document.getElementById("left151").innerHTML = l_151 + "<sup> грн</sup>";
    document.getElementById("priceBndl151").innerHTML = priceBndl_151 + "<sup> грн</sup>";
  }
});
var priceUrl152 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006986&left=1067820&rigths=1366551';
$.ajax({
  url: priceUrl152,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl152").style.display = "none";
    }


    var l_152 = resp['1067820'];
    var r_152 = resp['1366551'];
    var priceBndl_152 = resp['price'];

    document.getElementById("right152").innerHTML = r_152 + "<sup> грн</sup>";
    document.getElementById("left152").innerHTML = l_152 + "<sup> грн</sup>";
    document.getElementById("priceBndl152").innerHTML = priceBndl_152 + "<sup> грн</sup>";
  }
});

/*
var priceUrl154 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1067820&rigths=1008472';
$.ajax({ url: priceUrl154,
         type: 'get',
         success: function(output) {
                    var resp = JSON.parse(output);
                    if(resp['price'] == 0){
                        document.getElementById("bandl154").style.display = "none";
                      }
                    
                    
                    var l_154 = resp['1067820'];
                    var r_154 = resp['1008472'];
                    var priceBndl_154 = resp['price'];

                    document.getElementById("right154").innerHTML = r_154+"<sup> грн</sup>";
                    document.getElementById("left154").innerHTML = l_154+"<sup> грн</sup>";
                    document.getElementById("priceBndl154").innerHTML = priceBndl_154+"<sup> грн</sup>";
          }          
});
*/
/*
var priceUrl155 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1305811&rigths=1008472';
$.ajax({ url: priceUrl155,
         type: 'get',
         success: function(output) {
                    var resp = JSON.parse(output);
                    if(resp['price'] == 0){
                        document.getElementById("bandl155").style.display = "none";
                      }
                    
                    
                    var l_155 = resp['1305811'];
                    var r_155 = resp['1008472'];
                    var priceBndl_155 = resp['price'];

                    document.getElementById("right155").innerHTML = r_155+"<sup> грн</sup>";
                    document.getElementById("left155").innerHTML = l_155+"<sup> грн</sup>";
                    document.getElementById("priceBndl155").innerHTML = priceBndl_155+"<sup> грн</sup>";
          }          
});  
*/

// var priceUrl156 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1369492&rigths=990590';
// $.ajax({ url: priceUrl156,
//          type: 'get',
//          success: function(output) {
//                     var resp = JSON.parse(output);
//                     if(resp['price'] == 0){
//                         document.getElementById("bandl156").style.display = "none";
//                       }


//                     var l_156 = resp['1369492'];
//                     var r_156 = resp['990590'];
//                     var priceBndl_156 = resp['price'];

//                     document.getElementById("right156").innerHTML = r_156+"<sup> грн</sup>";
//                     document.getElementById("left156").innerHTML = l_156+"<sup> грн</sup>";
//                     document.getElementById("priceBndl156").innerHTML = priceBndl_156+"<sup> грн</sup>";
//           }          
// }); 
/*
var priceUrl157 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1369492&rigths=1008472';
$.ajax({ url: priceUrl157,
         type: 'get',
         success: function(output) {
                    var resp = JSON.parse(output);
                    if(resp['price'] == 0){
                        document.getElementById("bandl157").style.display = "none";
                      }
                    
                    
                    var l_157 = resp['1369492'];
                    var r_157 = resp['1008472'];
                    var priceBndl_157 = resp['price'];

                    document.getElementById("right157").innerHTML = r_157+"<sup> грн</sup>";
                    document.getElementById("left157").innerHTML = l_157+"<sup> грн</sup>";
                    document.getElementById("priceBndl157").innerHTML = priceBndl_157+"<sup> грн</sup>";
          }          
});   
*/


var priceUrl159 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006703&left=1306710&rigths=1216052';
$.ajax({
  url: priceUrl159,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl159").style.display = "none";
    }


    var l_159 = resp['1306710'];
    var r_159 = resp['1216052'];
    var priceBndl_159 = resp['price'];

    document.getElementById("right159").innerHTML = r_159 + "<sup> грн</sup>";
    document.getElementById("left159").innerHTML = l_159 + "<sup> грн</sup>";
    document.getElementById("priceBndl159").innerHTML = priceBndl_159 + "<sup> грн</sup>";
  }
});


var priceUrl158 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00006979&left=1369492&rigths=0990590';
$.ajax({
  url: priceUrl158,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl158").style.display = "none";
    }


    var l_158 = resp['1369492'];
    var r_158 = resp['0990590'];
    var priceBndl_158 = resp['price'];

    document.getElementById("right158").innerHTML = r_158 + "<sup> грн</sup>";
    document.getElementById("left158").innerHTML = l_158 + "<sup> грн</sup>";
    document.getElementById("priceBndl158").innerHTML = priceBndl_158 + "<sup> грн</sup>";
  }
});
//]]>



