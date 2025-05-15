function show(){
    var data="Name: <input type='text'  name='name'><br>Password: <input type='password'  name='name'><br> <input type='submit'>";
    document.getElementById('showdiv').innerHTML=data; 
}

      function clearForm() {
        let loginform="";
    document.getElementById('showdiv').innerHTML=loginform;
  }
