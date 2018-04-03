$(document).ready(function(){
    
    $("#check").click(function(){
        var yellow = "rgb(255, 255, 0)";
        var white  = "rgb(255, 255, 255)";
        var lightBlue = "rgb(173, 216, 230)";
        var pink = "rgb(255, 192, 203)";
        var orange = "rgb(255, 165, 0)";
        var red = "rgb(255, 0, 0)";
        var black = "rgb(0, 0, 0)"
        
        $(".tableCol").css("background-color", white);
        $(".tableCol").css("border-color", black);
        
        $(".tableCol:nth-child(7)").css("background-color", lightBlue);
        $(".tableCol:nth-child(1)").css("background-color", pink);
        
        var dayNumber = $("#inputNumber").val();
        console.log(dayNumber);
        
        switch(dayNumber){
            case "1":
                $(".tableCol:eq(4)").css("background-color", yellow);
                $(".tableCol:eq(4)").css("border-color", red);
                console.log("to yellow");
                break;
            case "2":
                $(".tableCol:eq(5)").css("background-color", yellow);
                $(".tableCol:eq(5)").css("border-color", red);
                break;
            case "3":
                $(".tableCol:eq(6)").css("background-color", yellow); 
                $(".tableCol:eq(6)").css("border-color", red);
                break;
            case "4":
                $(".tableCol:eq(7)").css("background-color", yellow);
                $(".tableCol:eq(7)").css("border-color", red);
                break;
            case "5":
                $(".tableCol:eq(8)").css("background-color", yellow);
                $(".tableCol:eq(8)").css("border-color", red);
                break;
            case "6":
                $(".tableCol:eq(9)").css("background-color", yellow);
                $(".tableCol:eq(9)").css("border-color", red);
                break;
            case "7":
                $(".tableCol:eq(10)").css("background-color", yellow); 
                $(".tableCol:eq(10)").css("border-color", red);
                break;
            case "8":
                $(".tableCol:eq(11)").css("background-color", yellow);
                $(".tableCol:eq(11)").css("border-color", red);
                break;
            case "9":
                $(".tableCol:eq(12)").css("background-color", yellow);
                $(".tableCol:eq(12)").css("border-color", red);
                break;
            case "10":
                $(".tableCol:eq(13)").css("background-color", yellow);
                $(".tableCol:eq(13)").css("border-color", red);
                break;
            case "11":
                $(".tableCol:eq(14)").css("background-color", yellow);
                $(".tableCol:eq(14)").css("border-color", red);
                break;
            case "12":
                $(".tableCol:eq(15)").css("background-color", yellow);
                $(".tableCol:eq(15)").css("border-color", red);
                break;
            case "13":
                $(".tableCol:eq(16)").css("background-color", yellow);
                $(".tableCol:eq(16)").css("border-color", red);
                break;
            case "14":
                $(".tableCol:eq(17)").css("background-color", yellow);
                $(".tableCol:eq(17)").css("border-color", red);
                break;
            case "15":
                $(".tableCol:eq(18)").css("background-color", yellow);
                $(".tableCol:eq(18)").css("border-color", red);
                break;
            case "16":
                $(".tableCol:eq(19)").css("background-color", yellow);
                $(".tableCol:eq(19)").css("border-color", red);
                break;
            case "17":
                $(".tableCol:eq(20)").css("background-color", yellow);
                $(".tableCol:eq(20)").css("border-color", red);
                break;
            case "18":
                $(".tableCol:eq(21)").css("background-color", yellow);
                $(".tableCol:eq(21)").css("border-color", red);
                break;
            case "19":
                $(".tableCol:eq(22)").css("background-color", yellow);
                $(".tableCol:eq(22)").css("border-color", red);
                break;
            case "20":
                $(".tableCol:eq(23)").css("background-color", yellow);
                $(".tableCol:eq(23)").css("border-color", red);
                break;
            case "21":
                $(".tableCol:eq(24)").css("background-color", yellow);
                $(".tableCol:eq(24)").css("border-color", red);
                break;
            case "22":
                $(".tableCol:eq(25)").css("background-color", yellow);
                $(".tableCol:eq(25)").css("border-color", red);
                break;
            case "23":
                $(".tableCol:eq(26)").css("background-color", yellow);
                $(".tableCol:eq(26)").css("border-color", red);
                break;
            case "24":
                $(".tableCol:eq(27)").css("background-color", yellow);
                $(".tableCol:eq(27)").css("border-color", red);
                break;
            case "25":
                $(".tableCol:eq(28)").css("background-color", yellow);
                $(".tableCol:eq(28)").css("border-color", red);
                break;
            case "26":
                $(".tableCol:eq(29)").css("background-color", yellow);
                $(".tableCol:eq(29)").css("border-color", red);
                break;
            case "27":
                $(".tableCol:eq(30)").css("background-color", yellow);
                $(".tableCol:eq(30)").css("border-color", red);
                break;
            case "28":
                $(".tableCol:eq(31)").css("background-color", yellow);
                $(".tableCol:eq(31)").css("border-color", red);
                break;
            case "29":
                $(".tableCol:eq(32)").css("background-color", yellow);
                $(".tableCol:eq(32)").css("border-color", red);
                break;
            case "30":
                $(".tableCol:eq(33)").css("background-color", yellow);
                $(".tableCol:eq(33)").css("border-color", red);
                break;
            case "31":
                $(".tableCol:eq(34)").css("background-color", yellow);
                $(".tableCol:eq(34)").css("border-color", red);
                break;
            default:
                console.log("invalid number");       
        }
        
        /*
        //second option
        
        if(dayNumber == 1){
            $(".tableCol:eq(4)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 2){
            $(".tableCol:eq(5)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 3){
            $(".tableCol:eq(6)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 4){
            $(".tableCol:eq(7)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 5){
            $(".tableCol:eq(8)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 6){
            $(".tableCol:eq(9)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 7){
            $(".tableCol:eq(10)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 8){
            $(".tableCol:eq(11)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 9){
            $(".tableCol:eq(12)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 10){
            $(".tableCol:eq(13)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 11){
            $(".tableCol:eq(14)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 12){
            $(".tableCol:eq(15)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 13){
            $(".tableCol:eq(16)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 14){
            $(".tableCol:eq(17)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 15){
            $(".tableCol:eq(18)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 16){
            $(".tableCol:eq(19)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 17){
            $(".tableCol:eq(20)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 18){
            $(".tableCol:eq(21)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 19){
            $(".tableCol:eq(22)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 20){
            $(".tableCol:eq(23)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 21){
            $(".tableCol:eq(24)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 22){
            $(".tableCol:eq(25)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 23){
            $(".tableCol:eq(26)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 24){
            $(".tableCol:eq(27)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 25){
            $(".tableCol:eq(28)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 26){
            $(".tableCol:eq(29)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 27){
            $(".tableCol:eq(30)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 28){
            $(".tableCol:eq(31)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 29){
            $(".tableCol:eq(32)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 30){
            $(".tableCol:eq(33)").css("background-color", yellow);
            console.log("to yellow");   
        }else if(dayNumber == 31){
            $(".tableCol:eq(34)").css("background-color", yellow);
            console.log("to yellow");   
        }else{
            console.log("invalid number");
        }
        */
    });
    
    
});

