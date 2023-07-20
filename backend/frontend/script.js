
 async function saveuserdetail()  {
    try {
        const name = document.getElementById('name').value ;
        const email = document.getElementById('email').value ;
        const password = document.getElementById('password').value ;
        const user_detail = {
            name , 
            email ,
            password
        } ;
        await axios.post('http://54.208.115.249:3800/user/save' , user_detail)
        console.log("posted succesfully") ; 
        window.location.href= 'http://54.208.115.249:3800/login.html'
        
    }
    catch(err) {
        console.log(err) ;
    }

} 
const btn = document.getElementById('btn-primary') ;
btn.addEventListener('click' ,saveuserdetail) ;

async function gotologin(e) {
e.preventDefault() ;
window.location.href = 'http://54.208.115.249:3800/login.html'

}
const loginbtn = document.getElementById('loginpage') ; 
loginbtn.addEventListener('click' , gotologin)