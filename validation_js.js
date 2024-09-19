function TogglePassword(){
	var user_pass =document.getElementById("txt_password");
    var toggle_pass =document.getElementById("Checked1");
	if(toggle_pass.checked){
    			user_pass.type="text";
    }
	else{user_pass.type="password"};
}

function ValidateFields(){
	var isvalidate=true;
  	var user_name=document.getElementById("txt_fname");
      const successIcon = document.querySelector('.success-icon');
      const failureIcon = document.querySelector('.failure-icon');

  	if(user_name.value.trim()==="" || user_name.value.trim().length<5)
    {
    	alert("Username must be minimum 5 characters");
        successIcon.style.visibility = 'hidden';
        failureIcon.style.visibility = 'visible';
        isvalidate= false;

     }
    else{
        successIcon.style.visibility = 'visible';
        failureIcon.style.visibility = 'hidden';
    }
    
    
    
    var user_email = document.getElementById("txtmail");
    var email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    
    if (user_email.value.trim() === "" || !email_pattern.test(user_email.value.trim())) {
        alert("Invalid Email");
    }
}