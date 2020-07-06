// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=125053,125063,125103,424493,1043323';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr26 = resp['125053']['price'];
      var pr27 = resp['125063']['price'];
      var pr28 = resp['125103']['price'];
      var pr29 = resp['424493']['price'];
      var pr57 = resp['1043323']['price'];
      

      document.getElementById("sku-1227118").innerHTML = pr26;
      document.getElementById("sku-1227119").innerHTML = pr27;
      document.getElementById("sku-1227120").innerHTML = pr28;
      document.getElementById("sku-1365723").innerHTML = pr29;
      document.getElementById("sku-1609546").innerHTML = pr57;

   }
});

//
// ]]></script>