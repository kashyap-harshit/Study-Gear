let subBtn = document.querySelector("#contactSubmit");

subBtn.addEventListener("click", ()=>{
	let userName = document.querySelector("#i-name");
	let userEmail = document.querySelector("#i-email");
	let userSub = document.querySelector("#i-sub");
	let userBody = document.querySelector("#i-body");

	if (userName.value.length > 0 && userSub.value.length > 0 && userEmail.value.length > 0 && userBody.value.length > 0) {

		Email.send({
		    SecureToken : "e12a3929-9fb2-4416-bf19-84f195a5b398",
		    To : 'studygear771@gmail.com',
		    From : "studygear771@gmail.com",
		    Subject : "Customer Review - " + userSub.value,
		    Body : "User's Name is - " + userName.value + ",\n" + "User's Email ID is - " + userEmail.value + ",\n" + " BODY - "+ userBody.value
		}).then(function(response){
			if (response == "OK") {
				alert("Your Messege Has Been Sent.");
			}
			else{
				alert("Error Sending Messege, Please Try Again.");
			}
		});
	}

	else {
		alert("Please Fill Up All The Details.")
	}
	
})


