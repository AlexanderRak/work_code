$(document).ready(function () {
   $("fieldset input").click(function () {
      $("fieldset label.error").remove()
   });

   $("#valid_form").validate({
      rules: {
         yourname: {
            required: true,
         },
         yourcity: {
            required: true
         },
         yourmail: {
            required: true,
            email: true
         },
         younember: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 12
         }
      },
      messages: {
         yourname: {
            required: "Обезательное поле."
         },
         younember: {
            required: "Обезательное поле.",
            number: "Введите только цыфры.",
            minlength: "В поле должно быть минимум 10 символов",
            maxlength: "В поле должно быть максимум 13 символов"
         },
         yourmail: {
            required: "Обезательное поле.",
            email: "Поле должно содержать символ @"
         },
         yourcity: {
            required: "Обезательное поле."
         }
      },
      errorPlacement: function (error, element) {
         if (element.attr("name") == "yourname") error.insertAfter($("input[name=yourname]"));
         if (element.attr("name") == "yourcity") error.insertAfter($("input[name=yourcity]"));
         if (element.attr("name") == "younember") error.insertAfter($("input[name=younember]"));
         if (element.attr("name") == "yourmail") error.insertAfter($("input[name=yourmail]"));
      },
      submitHandler: function (form) {
         function sendAjaxForm(result_form, ajax_form) {
            let people = {
               numbertel: '',
               email: '',
               sity: '',
               yourname_rw: ''
            };
            people.numbertel = $('#number_rw').val();
            people.email = $('#email_rw').val();
            people.sity = $('#city_rw').val();
            people.yourname_rw = $('#yourname_rw').val();

            $.ajax({
               url: "https://www.corezoid.com/api/1/json/public/639985/565970e90fa751c5673165a43e764a99590b0062",
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
               },
               type: "POST", //метод отправки
               dataType: "json", //формат данных
               data: JSON.stringify(people), // Сеарилизуем объект
               success: console.log('done')
            });
            var none_form = document.getElementById("form-submit-none").style.display = "none";
            var block_text = document.getElementById("text-submit-block").style.display = "block";
         }
         sendAjaxForm();
      }
   });
})