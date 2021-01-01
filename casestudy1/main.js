

function validate(redir)
{	
	const Username=document.getElementById("user").value;
const Password=document.getElementById("pass").value;
const error=document.getElementById('error');	
	
	if(Username=="admin" && Password=="12345" )
	{
		

		redir();
	}
	else
	{
		error.innerHTML="Invalid Username or Password!"
		error.style.colour="red";
		return false;	
	}
}
function redir()
{
	console.log("mmmmm");
	window.open(home.html);

}
var c=document.getElementById('pp').value;
console.log(p);
// function aaa()
// {
	
// }