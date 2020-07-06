// <![CDATA[
function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
/*******1***** */

var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007357&left=1498354&rigths=1205988';
$.ajax({
  url: priceUrl,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    /*if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }*/


    var l_1 = resp['1498354'];
    var r_1 = resp['1205988'];
    var priceBndl_1 = resp['price'];

    document.getElementById("right1").innerHTML = r_1 + "<sup> грн</sup>";
    document.getElementById("left1").innerHTML = l_1 + "<sup> грн</sup>";
    document.getElementById("priceBndl1").innerHTML = priceBndl_1 + "<sup> грн</sup>";
  }
});

/*******2***** */

var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007388&left=1498358&rigths=1498360';
$.ajax({
  url: priceUrl,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    /*if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }*/


    var l_2 = resp['1498358'];
    var r_2 = resp['1498360'];
    var priceBndl_2 = resp['price'];

    document.getElementById("right2").innerHTML = r_2 + "<sup> грн</sup>";
    document.getElementById("left2").innerHTML = l_2 + "<sup> грн</sup>";
    document.getElementById("priceBndl2").innerHTML = priceBndl_2 + "<sup> грн</sup>";
  }
});

/*******3***** */

var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007397&left=1449609&rigths=1295926';
$.ajax({
  url: priceUrl,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    /*if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }*/


    var l_3 = resp['1449609'];
    var r_3 = resp['1295926'];
    var priceBndl_3 = resp['price'];

    document.getElementById("right3").innerHTML = r_3 + "<sup> грн</sup>";
    document.getElementById("left3").innerHTML = l_3 + "<sup> грн</sup>";
    document.getElementById("priceBndl3").innerHTML = priceBndl_3 + "<sup> грн</sup>";
  }
});

/*******4***** */

var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007399&left=1449609&rigths=1440286';
$.ajax({
  url: priceUrl,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    /*if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }*/


    var l_4 = resp['1449609'];
    var r_4 = resp['1440286'];
    var priceBndl_4 = resp['price'];

    document.getElementById("right4").innerHTML = r_4 + "<sup> грн</sup>";
    document.getElementById("left4").innerHTML = l_4 + "<sup> грн</sup>";
    document.getElementById("priceBndl4").innerHTML = priceBndl_4 + "<sup> грн</sup>";
  }
});

/* *****5***** */
var priceUrl = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00007401&left=1449609&rigths=1440290';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);
      if (resp['price'] == 0) {
         document.getElementById("bandl5").style.display = "none";
      }


      var l_5 = resp['1449609'];
      var r_5 = resp['1440290'];
      var priceBndl_5 = resp['price'];

      document.getElementById("right5").innerHTML = r_5 + "<sup> грн</sup>";
      document.getElementById("left5").innerHTML = l_5 + "<sup> грн</sup>";
      document.getElementById("priceBndl5").innerHTML = priceBndl_5 + "<sup> грн</sup>";
   }
});

//]]>