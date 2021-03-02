console.log("Project")
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
//console.log(name,email,phone,);
name.addEventListener('blur',()=>{
    console.log("name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('its matched');
 }
 else{
     console.log('not matched')
 }
})
email.addEventListener('blur',()=>{
    console.log("email is blurred");
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
})