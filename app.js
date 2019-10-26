document.getElementById('login-form').addEventListener("submit" , (e)=>{
			console.log("pressed!!");
      		var username = document.getElementById("uname");
      		var password = document.getElementById("pass");
      		if(username.value =="" || password.value=="")
      		{
      			alert("No blank values allowed");
      		}
      		else {
      			alert('Wrong credentials');
      		}	
});

// function validate() {
//       		var username = document.getElementById("uname");
//       		var password = document.getElementById("pass");
//       		if(username.value =="" || password.value=="")
//       		{
//       			alert("No blank values allowed");
//       			return false;
//       		}
//       		else {
//       			true;
//       		}