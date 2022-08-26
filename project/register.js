
  let users ;
  if(localStorage.users!=null){
    users = JSON.parse(localStorage.users);
  }
   else {
  users = []
   }
  export {users};
  