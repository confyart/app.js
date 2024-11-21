// Function to show the corresponding section
function showSection(section) {
  const sections = document.querySelectorAll('.section-container');
  sections.forEach(s => s.style.display = 'none');

  const sectionToShow = document.getElementById(section + 'Section');
  if (sectionToShow) {
    sectionToShow.style.display = 'block';
  }
}

// Function to simulate user login
function loginUser() {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  if (phone && password) {
    alert("Logged in successfully!");
    showSection('chat');
  } else {
    alert("Please enter both phone number and password.");
  }
}

// Function to simulate user registration
function registerUser() {
  const name = document.getElementById("registerName").value;
  const phone = document.getElementById("registerPhone").value;
  const password = document.getElementById("registerPassword").value;

  if (name && phone && password) {
    alert("Registration successful!");
    showSection('login');
  } else {
    alert("Please fill in all fields.");
  }
}

// Function to send a message in the chat
function sendMessage() {
  const message = document.getElementById("messageInput").value;
  if (message.trim()) {
    alert('Message Sent!');
    document.getElementById("messageInput").value = ''; // Clear the input after sending
  } else {
    alert("Please type a message before sending.");
  }
}
