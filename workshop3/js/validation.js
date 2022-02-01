$(document).ready(()=>{
  
    $('#usercheck').hide();
    $('#passcheck').hide();
    $('#conpasscheck').hide();

    var user_err = true;
    var pass_err = true;
    var conpass_err = true;

    $('#usernames').keyup(()=>{
        firstname_check();
    });

    function firstname_check() {
        var user_val = $('#usernames').val();

        if(user_val.length == '') {
           
            $('#usercheck').show();
            $('#usercheck').html("**Please fill the First Name");
            $('#usercheck').focus();
            $('#usercheck').css("color","red");
            user_err = false;
            return false;

        }else{
            $('#usercheck').hide();
        }
        if((user_val === 'string' ) || (user_val  instanceof String)) {
           
            $('#usercheck').show();
            $('#usercheck').html("**First name should be a String");
            $('#usercheck').focus();
            $('#usercheck').css("color","red");
            user_err = false;
            return false;
    
        }else{
            $('#usercheck').hide();
        }
    }  


    //last name check
    $('#lastnames').keyup(()=>{
        lastname_check();
    });

    function lastname_check() {
        var user_val = $('#lastnames').val();

        if(user_val.length == '') {
           
            $('#lastNamecheck').show();
            $('#lastNamecheck').html("**Please fill the Last Name");
            $('#lastNamecheck').focus();
            $('#lastNamecheck').css("color","red");
            user_err = false;
            return false;

        }else{
            $('#lastNamecheck').hide();
        }
        if((user_val === 'string' ) || (user_val  instanceof String)) {
           
            $('#lastNamecheck').show();
            $('#lastNamecheck').html("**Last name should be a String");
            $('#lastNamecheck').focus();
            $('#lastNamecheck').css("color","red");
            user_err = false;
            return false;
    
        }else{
            $('#lastNamecheck').hide();
        }
    }

    // date of birth check

    $('#birthdates').keyup(()=>{
        
        birth_check();
    });

    function birth_check(){

        var passwrdstr = $('#birthdates').val();

        if(passwrdstr.length == ''){
            $('#birthcheck').show();
            $('#birthcheck').html("**Please fill the Birth years");
            $('#birthcheck').focus();
            $('#birthcheck').css("color","red");
            pass_err = false;
            return false;

        }else{
            $('#birthcheck').hide();
        }

        if(passwrdstr.length <2000 ) {
           
            $('#birthcheck').show();
            $('#birthcheck').html("**birth age should be less than 2000");
            $('#birthcheck').focus();
            $('#birthcheck').css("color","red");
            user_err = false;
            return false;
    
        }else{
            $('#birthcheck').hide();
        }

        }

        
    
    $('submitBtn').click(()=>{

        user_err = true;
    pass_err = true;
    conpass_err = true;

    username_check();
    password_check();
    conPassword();

    if((user_err == true) && (pass_err == true) && (conpass_err == true)) {
          
        return true;
    } else {
        return false;
    }

    })


});