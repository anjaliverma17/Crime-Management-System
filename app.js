document.getElementById('complaint-form').addEventListener("submit" , (e)=>{
	console.log("Registered!");
	var fname= document.getElementById("full_name");
        var email = document.getElementById("email_address");
        var uname = document.getElementById("user_name");
        var pno= document.getElementById("phone_number");
        var desc = document.getElementById("description");
        var addno = document.getElementById("add_number");

        if (fname.value==null || fname.value=="")
        {
            alert("Please Enter Your Full Name");
            return false;
        }
        else if (email.value==null || email.value=="")
        {
            alert("Please Enter Your Email Address");
            return false;
        }
        else if (uname.value==null || uname.value=="")
        {
            alert("Please Enter Your Username");
            return false;
        }
        else if (pno.value==null || pno.value=="")
        {
            alert("Please Enter Your Present Address");
            return false;
        }
        else if (desc.value==null || desc.value=="")
        {
            alert("Please Enter Your Description");
            return false;
        }

        else if (addno.value==null || addno.value=="")
        {
            alert("Please Enter Your Adhar Number");
            return false;
        }
        else {
            true;
        }
}


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
      					if(res[0].password !== password.value) {
      						alert('Wrong Credentials');
      					} else {
      						alert('Login success!');
      					}
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