$("p4").click(function(){
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
});
$("p3").click(function(){
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
});
$("p2").click(function() {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
$("p5").hover(function(){
    $(".one-showing").toggle();
});

$("p6").hover(function(){
    $(".two-showing").toggle();
})
$("p7").hover(function(){
    $(".three-showing").toggle();
})
$("p8").hover(function(){
    $(".four-showing").toggle();
})
$("p9").hover(function(){
    $(".five-showing").toggle();
})
$("p10").hover(function(){
    $(".six-showing").toggle();
})
$("p11").hover(function(){
    $(".seven-showing").toggle();
})
$("p12").hover(function(){
    $(".eight-showing").toggle();
})
function formMessage(){
    let name = document.getElementById('Name').value
    if(document.getElementById('Name').value=="")
    alert("please fill in the blanks! Thank you......");
    else{
        alert(Name + " Thank you for contacting us! You are now subscribed")
    }
}

   
     
     
     
     
     
 