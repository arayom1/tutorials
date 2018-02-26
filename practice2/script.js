$(document).ready(function(){
    var red = "rgb(255, 0, 0)";
    var pink = "rgb(255, 192, 203)";
    var yellow = "rgb(255, 255, 0)";
    var blue = "rgb(0, 0, 255)";
    var green = "rgb(0, 128, 0)";
    var brown = "rgb(165, 42, 42)";
    
    
    
        $(".button1").click(function(){
            console.log("I have been clicked");
            if ($("#column1").css("background-color") === red ){
                console.log("setting color to pink");
                $("#column1").css("background-color", pink);

            }else{
                console.log("setting color to red");
                $("#column1").css("background-color", red);
            }
        });
   
  
    
    

    $(".button2").click(function(){
        console.log($("#column2").css("background-color"));
        if ($("#column2").css("background-color") === yellow){
            console.log("setting color to blue");
            $("#column2").css("background-color",blue);
        }else{
            console.log("setting color to yellow");
            $("#column2").css("background-color", yellow);
        }
 
    });
    
    
    
    
    $(".button3").click(function(){
        if ($("#column3").css("background-color") === green){
            $("#column3").css("background-color", brown);
        }else{
            $("#column3").css("background-color",green);
        }
       
    });

    $(".hi").click(function(){
        $("#test").hide();
    });
    /**
    
    */
});








/**
function redToPink() {
    document.getElementById("column1").style.backgroundColor = "pink"; 
}

function yellowToBlue() {  
    document.getElementById("column2").style.backgroundColor = "blue";
}

function greenToBrown() { 
    document.getElementById("column3").style.backgroundColor = "brown";   
}
*/