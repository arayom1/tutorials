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







/*
$(document).ready(function(){    
   
    var $in1 = $("#addInput1");
    var $in2 = $("#addInput2");
    var $result = Number($in1)+Number($in2);
    
    $($in1).keyup(function(){
        var value1 = parseFloat($(this).val());
        $in1.val(value1);    
    });
    
    $($in2).keyup(function(){
        var value2 = parseFloat($(this).val());
        $in2.val(value2);
    });
    
    $("#add").click(function(){
        console.log("I have been clicked");
        $("#addOutput").add($result);
    });
    
});

*/
 