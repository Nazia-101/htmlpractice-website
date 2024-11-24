const submitBtn=document.getElementById('submitBtn');
const nameError=document.getElementById('firstname-error')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName()){
        alert("form is Submitted successfully")
    }

});
function validateName(){
    let name=document.getElementById('firstname').value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        firstname.innerHTML="Weite your full name"
    }
    return true;
}