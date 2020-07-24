$("textarea").keypress(function(event){
	if(event.which === 13){
        var name= $("input[type='text']").val();
        alert("Thank you"+" "+name+" "+"for the input")
	}
})
$(".click").on("click", function(){
    $(this).fadeUp()
})