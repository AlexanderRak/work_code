// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522683,1522693,683033,683043';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr6 = resp['1522683']['price'];
      var pr7 = resp['1522693']['price'];
      var pr24 = resp['683033']['price'];
      var pr25 = resp['683043']['price'];

      document.getElementById("sku-1700029").innerHTML = pr6;
      document.getElementById("sku-1700031").innerHTML = pr7;
      document.getElementById("sku-1444165").innerHTML = pr24;
      document.getElementById("sku-1444167").innerHTML = pr25;


   }
});

var priceUrl33 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522473,1522463,1522453,1248503';
$.ajax({
   url: priceUrl33,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['1522453']['price'];
      var pr40 = resp['1522463']['price'];
      var pr41 = resp['1522473']['price'];
      var pr344 = resp['1248503']['price'];
      
      document.getElementById("sku-1696532").innerHTML = pr36;
      document.getElementById("sku-1696535").innerHTML = pr40;
      document.getElementById("sku-1696537").innerHTML = pr41;
      document.getElementById("sku-1309388").innerHTML = pr344;

   }
});


var priceUrl341megogo = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=2529353,2529363,2529373';
$.ajax({
   url: priceUrl341megogo,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['2529353']['price'];
      var pr40 = resp['2529363']['price'];
      var pr41 = resp['2529373']['price'];
      
      document.getElementById("sku-1815651").innerHTML = pr36;
      document.getElementById("sku-1815653").innerHTML = pr40;
      document.getElementById("sku-1815654").innerHTML = pr41;

   }
});

//
// ]]></script>