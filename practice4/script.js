$(document).ready(function(){
    
    $("#submit").click(function(){
        var firstName = $("#fName").val();
        var lastName = $("#lName").val();
        var age = $("#age").val();
        var gender = $('input[name=gender]:checked').val();
        //var letters = $("#nLetters").val(); 

        if($('#nLetters').is(":checked")){
            console.log("checked");
            var letter = "we will send you newsletter";
        }else if(!$('#nLetters').is(":checked")){
            console.log("not checked");
            var letter = "we will not send you newsletter";
        }
        
        if (firstName.length === 0){
            console.log("first name is empty");
            alert('first name can not be left blank');
        }else if ($.isNumeric(firstName)){
            console.log("first name is number");
            alert('first name can not be a number'); 
        }else if (lastName.length === 0){
            console.log("empty");
            alert('last name can not be left blank'); 
        }else if ($.isNumeric(lastName)){
            console.log("last name is number");
            alert('last name can not be a number');
        }else if (age.length === 0){
            console.log("empty");
            alert('age can not be left blank'); 
        }else if (parseFloat(age) < 18){
            console.log("underage");
            alert('you should be over 18');
        }else if (!$("input[name='gender']:checked").val()) {     
            console.log("must be checked");
            alert('gender must be checked');  
        }else{
            console.log("not empty");
            var output = "Thanks for signing up. Here are your details. \n First Name : " + firstName + "\n Last Name : " + lastName + "\n Age : " + age + "\n Gender : " + gender + "\n" + letter;
            
            $("#result").val(output);
        }

});
    
});