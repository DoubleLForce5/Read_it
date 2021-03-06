

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', { //ADD API ROUTE HERE
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Invalid password or Email');
      }
    }
  };

  const signupForm = async (event) => {
    event.preventDefault();
  
    const name_first = document.querySelector('#firstname-signup').value.trim();
    const name_last = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name_first && name_last && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          name_first,
          name_last,
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
   
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('.signup-form').addEventListener('submit', signupForm);
  