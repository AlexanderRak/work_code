// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl3 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=537523,1002043,1043323';
$.ajax({
   url: priceUrl3,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr40 = resp['1002043']['price'];
      var pr41 = resp['537523']['price'];
      var pr57 = resp['1043323']['price'];

      document.getElementById("sku-1609548").innerHTML = pr40;
      document.getElementById("sku-1397152").innerHTML = pr41;
      document.getElementById("sku-1609546").innerHTML = pr57;
   }
});

//
// ]]></script>