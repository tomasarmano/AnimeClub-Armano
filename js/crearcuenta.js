const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
   e.preventDefault()
   const nombre = document.querySelector('#nombre').value
   const email = document.querySelector('#email').value
   const password = document.querySelector('#password').value
   
   const Users = JSON.parse(localStorage.getItem('users')) || []
   const isUserRegistered = Users.find(user => user.email === email)
   if(isUserRegistered){
      return alert('El usuario ya esta registrado!')
   }

   function validarEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
   }

   if(validarEmail(email)) {
      Users.push({name: nombre, email: email, password: password})
      localStorage.setItem('users', JSON.stringify(Users))
      alert('Se ha registrado con exito!')
   }   else {
      alert('El email/contraseña es incorrecto')
   }
})