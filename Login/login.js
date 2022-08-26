let users ;

users = JSON.parse(localStorage.users);
var username = document.getElementById('username');
var password = document.getElementById('pass');
let btn = document.querySelector('#btn');
btn.addEventListener('click',function (e){
    e.preventDefault()
})
function checkData(){
   
    for (let i = 0; i < users.length; i++) {

        if (username.value == 'Admin') {
          if (password.value != users[0].password) {
            
          } else {
           location.assign('../project/adminpage.html');
          }
        } else {
          if (username.value == users[i].username) {
          if(password.value != users[i].password) {
            alert("The password is incorrect");
            
          } else {
            location.assign('../main page/index.html');
          }
          }
          if (i+1 == users.length) {
            if (username.value != users[i].username) {
              alert('the username is incorrect');
            }
          }
        }
      }
}
