   const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
    });
    
    const btnLogin = document.getElementById("btnlogin");
    const btnSignin = document.getElementById("btnsignin");

    btnLogin.addEventListener("click",(e) =>{
      e.preventDefault();
      alert("Welcome to the system");
    })
    btnSignin.addEventListener("click",(e) =>{
      e.preventDefault();
      alert("Account created succesfully");
    })
