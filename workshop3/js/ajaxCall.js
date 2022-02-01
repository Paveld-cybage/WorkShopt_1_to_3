
$(document).ready(()=>{

    $("#button").click(function () {
        var userName = $("#username").val();
        var password = $("#password").val();
        authenticate(userName,password);
    });

    function authenticate(userName, password) {

        $.ajax
        ({
            type: "POST",
            //the url where you want to sent the userName and password to
            url: "http://myjson.dit.upm.es/api/bins/j3g3",
            dataType: 'json',
            async: false,
            //json object to sent to the authentication url
            //data: {"username": "' + userName + '", "password" : "' + password + '"},
            data: {username: userName, password: password},
            success: function (data) {
                //do any process for successful authentication here
                alert('Login status: ' + data.status);
                window.location="http://127.0.0.1:5500/html/SecondPage.html"
            }
         })
    };
})




