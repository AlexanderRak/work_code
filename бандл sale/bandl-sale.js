// <![CDATA[
function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
/*******1***** */

var priceUrl1 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00009548&left=1575576&rigths=1295926';
$.ajax({
  url: priceUrl1,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl1").style.display = "none";
    }


    var l_1 = resp['1498354'];
    var r_1 = resp['1205988'];
    var priceBndl_1 = resp['price'];

    document.getElementById("right1").innerHTML = r_1 + "<sup> грн</sup>";
    document.getElementById("left1").innerHTML = l_1 + "<sup> грн</sup>";
    document.getElementById("priceBndl1").innerHTML = priceBndl_1 + "<sup> грн</sup>";
  }
});

/*******2***** */

var priceUrl2 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00009550&left=1575576&rigths=1205988';
$.ajax({
  url: priceUrl2,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl2").style.display = "none";
    }


    var l_2 = resp['1498358'];
    var r_2 = resp['1498360'];
    var priceBndl_2 = resp['price'];

    document.getElementById("right2").innerHTML = r_2 + "<sup> грн</sup>";
    document.getElementById("left2").innerHTML = l_2 + "<sup> грн</sup>";
    document.getElementById("priceBndl2").innerHTML = priceBndl_2 + "<sup> грн</sup>";
  }
});

/*******3***** */

var priceUrl3 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00009551&left=1575576&rigths=1318311';
$.ajax({
  url: priceUrl3,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl3").style.display = "none";
    }


    var l_3 = resp['1449609'];
    var r_3 = resp['1295926'];
    var priceBndl_3 = resp['price'];

    document.getElementById("right3").innerHTML = r_3 + "<sup> грн</sup>";
    document.getElementById("left3").innerHTML = l_3 + "<sup> грн</sup>";
    document.getElementById("priceBndl3").innerHTML = priceBndl_3 + "<sup> грн</sup>";
  }
});

/*******4***** */

var priceUrl4 = 'https://comfy.ua/online_remains/product/bundle_price.php?bundle_id=00009552&left=1575576&rigths=1440290';
$.ajax({
  url: priceUrl4,
  type: 'get',
  success: function (output) {
    var resp = JSON.parse(output);
    if (resp['price'] == 0) {
      document.getElementById("bandl4").style.display = "none";
    }


    var l_4 = resp['1449609'];
    var r_4 = resp['1440286'];
    var priceBndl_4 = resp['price'];

    document.getElementById("right4").innerHTML = r_4 + "<sup> грн</sup>";
    document.getElementById("left4").innerHTML = l_4 + "<sup> грн</sup>";
    document.getElementById("priceBndl4").innerHTML = priceBndl_4 + "<sup> грн</sup>";
  }
});

//]]>