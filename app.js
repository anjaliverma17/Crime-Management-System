document.getElementById('login-form').addEventListener("submit" , (e)=>{
			console.log("pressed!!");
      		var username = document.getElementById("uname");
      		var password = document.getElementById("pass");
      		if(username.value =="" || password.value=="")
      		{
      			alert("No blank values allowed");
      		}
      		else {
      			fetch(`http://localhost:4000/user&Username=${username.value}`)
      				.then(res=>res.json())
      				.then(res => {
      					console.log(res[0]);
      				})
      				.catch(err => {
      					console.error(err);
      				})
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