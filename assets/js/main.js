var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event){
	event.preventDefault();
	
	if(form.elements.subject.value.length < 1){
		alert("Subject cannot be empty");
		return;
	}
	
	if(form.elements.message.value.length < 1){
		alert("Message cannot be empty");
		return;
	}
	
	alert("Message sent sucessfully");
	
	
});