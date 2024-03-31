$(document).ready(function(){
    $(".switch_Signin").click(function(){
        $(".signin_form").removeClass("display-none");
        $(".signin_form").addClass("display-block");
        $(".signup_form").addClass("display-none");
        $(".switch_Signin").addClass("btnActive");
        $(".switch_Signup").removeClass("btnActive");
    });
    $(".switch_Signup").click(function(){
        $(".signup_form").removeClass("display-none");
        $(".signup_form").addClass("display-block");
        $(".signin_form").addClass("display-none");
        $(".switch_Signup").addClass("btnActive");
        $(".switch_Signin").removeClass("btnActive");
    });


    $("#signInpassIcon").click(function(){
        $("#signInpassIcon i").toggleClass("fa-eye fa-eye-slash");

        $($("#signInpassIcon").siblings()[1]).attr("type", function(index, attr){
            return attr == "password" ? "text" : "password";
        })
    })
    $("#signUpPassIcon").click(function(){
        $("#signUpPassIcon i").toggleClass("fa-eye fa-eye-slash");

        $($("#signUpPassIcon").siblings()[1]).attr("type", function(index, attr){
            return attr == "password" ? "text" : "password";
        })
    })
});