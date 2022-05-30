function validate(){
 var username=document.getElementById('username').value
 var email=document.getElementById('email').value
 var password=document.getElementById('password').value
 var cpassword=document.getElementById('cpassword').value 
 checkuser(username)
 checkemail(email)
 checkpassword(password)
 checkmatchpassword(password,cpassword)
}
function checkuser(username){

        if(username.length>7){
            document.getElementById('username').classList.add('success')
            document.getElementById('username').classList.replace('error','success')
            document.getElementById('user-error').innerHTML=''
        }
        else{
            document.getElementById('username').classList.add('error')
            document.getElementById('user-error').innerHTML='username must be 8 letters long'
        }
}
function checkemail(email){

        if(email.length>7 && email.includes('@gmail')){
            document.getElementById('email').classList.add('success')
            document.getElementById('email').classList.replace('error','success')
            document.getElementById('email-error').innerHTML=''
        }
        else{
            document.getElementById('email').classList.add('error')
            document.getElementById('email-error').innerHTML='email must include @gmail and 8 letters long'
        }
}
function checkpassword(password){

    if(password.length>7){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password-error').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password-error').innerHTML='password must be 8 letters long'
    }
}
function checkmatchpassword(password,cpassword){

    if(cpassword==password && cpassword!=''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword-error').innerHTML=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword-error').innerHTML='password not matched'
    }
}