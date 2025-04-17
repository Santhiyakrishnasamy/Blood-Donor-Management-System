function switchForm(form) {
    document.getElementById('signup-form').style.display = form === 'signup' ? 'block' : 'none';
    document.getElementById('login-form').style.display = form === 'login' ? 'block' : 'none';
    document.getElementById('donor-form').style.display = form === 'donor' ? 'block' : 'none';
    document.getElementById('request-form').style.display = form === 'request' ? 'block' : 'none';
  }
  
  function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
      alert("User already exists!");
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Signup successful! Please login.");
    switchForm('login');
  }
  
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) {
      alert("Invalid credentials!");
      return;
    }
  
    alert("Login successful!");
    switchForm('donor');
  }
  
  function registerDonor() {
    const name = document.getElementById('donor-name').value;
    const email = document.getElementById('donor-email').value;
    const phone = document.getElementById('donor-phone').value;
    const blood = document.getElementById('donor-blood').value;
  
    if (!name || !email || !phone || !blood) {
      alert("Please fill all fields");
      return;
    }
  
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push({ name, email, phone, blood });
    localStorage.setItem('donors', JSON.stringify(donors));
  
    alert("Donor registered!");
    switchForm('request');
  }
  
  function requestDonor() {
    const name = document.getElementById('request-name').value;
    const email = document.getElementById('request-email').value;
    const phone = document.getElementById('request-phone').value;
    const blood = document.getElementById('request-blood').value;
  
    if (!name || !email || !phone || !blood) {
      alert("Please fill all fields");
      return;
    }
  
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.push({ name, email, phone, blood });
    localStorage.setItem('requests', JSON.stringify(requests));
  
    alert("Request submitted successfully!");
  }
  