$("textarea").keypress(function(event){
	if(event.which === 13){
        var name= $("input[type='text']").val();
        alert("Thank you"+" "+name+" "+"for the input")
	}
})
$(".click1").click(function(){
    $(".hide1").slideToggle(1000);
    $(".show1").slideToggle(1200);
  });
$(".click2").click(function(){
    $(".hide2").slideToggle(1000);
    $(".show1").slideToggle(1200);
  });
$(".click3").click(function(){
    $(".hide3").slideToggle(1000);
    $(".show1").slideToggle(1200);
  });  