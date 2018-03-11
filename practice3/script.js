$(document).ready(function(){  
    
    var $in1 = $("#input1");
    var $in2 = $("#input2");
    
    $($in1).keyup(function(){
        //console.log("key up");
        var $in1 = parseFloat($(this).val());
        //console.log($in1); 
    });
    
    $($in2).keyup(function(){
        //console.log("key up");
        var $in2 = parseFloat($(this).val());
        //console.log($in2);
    });
    
    $("#add").click(function(){
        //console.log("I have been clicked");
        var output = parseFloat($in1.val()) + parseFloat($in2.val());
        //!isNaN(addOutput) ? $("#addOutput").val(addOutput) : "";
        $("#addOutput").val(output);
        //console.log(parseFloat($in1.val())+parseFloat($in2.val()));   
    });
    
    var $inpt1 = $("#subInput1");
    var $inpt2 = $("#subInput2");
    
    $($inpt1).keyup(function(){
        var $inpt1 = parseFloat($(this).val());
    });
    
    $($inpt2).keyup(function(){
        var $inpt2 = parseFloat($(this).val());
    });
    
    $("#subtract").click(function(){
        var output = parseFloat($inpt1.val())- parseFloat($inpt2.val());
        $("#subOutput").val(output);
    });
    
    var $multIn1 = $("#multInput1");
    var $multIn2 = $("#multInput2");
    
    $($multIn1).keyup(function(){
        var $multIn1 = parseFloat($(this).val());
    });
    
    $($multIn2).keyup(function(){
        var $multIn2 = parseFloat($(this).val());
    });
    
    $("#multiply").click(function(){
        var output = parseFloat($multIn1.val())*parseFloat($multIn2.val());
        $("#multOutput").val(output);   
    });
    
    var $divIn1 = $("#divInput1");
    var $divIn2 = $("#divInput2");
    
    $($divIn1).keyup(function(){
        var $divIn1 = parseFloat($(this).val());
    });
    
    $($divIn2).keyup(function(){
        var $divIn2 = parseFloat($(this).val());
    });
    
    $("#divide").click(function(){
        var output = parseFloat($divIn1.val())/parseFloat($divIn2.val());
        $("#divOutput").val(output);   
    });
    
    
});











/**
function add(){
    var input1=document.getElementById("addInput1").value;
    var input2=document.getElementById("addInput2").value;
    var result=parseFloat(input1)+parseFloat(input2);
    document.getElementById("addOutput").value=result;
}

function subtract(){
    var input1=document.getElementById("subInput1").value;
    var input2=document.getElementById("subInput2").value;
    var result=parseFloat(input1)-parseFloat(input2);
    document.getElementById("subOutput").value=result;
}

function multiply(){
    var input1=document.getElementById("multInput1").value;
    var input2=document.getElementById("multInput2").value;
    var result=parseFloat(input1)*parseFloat(input2);
    document.getElementById("multOutput").value=result;
}

function divide(){
    var input1=document.getElementById("divInput1").value;
    var input2=document.getElementById("divInput2").value;
    var result=parseFloat(input1)/parseFloat(input2);
    document.getElementById("divOutput").value=result;
}
*/








 