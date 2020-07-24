$("textarea").keypress(function(event){
	if(event.which === 13){
        var name= $("input[type='text']").val();
        alert(name)
	}
})