// Function to create a ticket object
function createTicket(firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumber, serviceType, issue, fileData) {
  return {
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    serviceType,
    issue,
    fileData
  };
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const ticketForm = document.querySelector('#ticketForm');
  if (ticketForm) {
    ticketForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Retrieve form values
      const firstName = document.querySelector('#firstName').value;
      const lastName = document.querySelector('#lastName').value;
      const email = document.querySelector('#email').value;
      const streetAddress = document.querySelector('#streetAddress').value;
      const city = document.querySelector('#city').value;
      const state = document.querySelector('#state').value;
      const zipCode = document.querySelector('#zipCode').value;
      const phoneNumber = document.querySelector('#phoneNumber').value;
      const serviceType = document.querySelector('#serviceType').value;
      const issue = document.querySelector('#issue').value;

      // Retrieve file data
      const uploadInput = document.querySelector('#upload');
      const file = uploadInput.files[0]; // Get the file from the input

      const reader = new FileReader();
      reader.onloadend = function() {
        const fileData = reader.result; // This is the file data as a base64-encoded string

        // Create ticket and store in localStorage
        const ticket = createTicket(firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumber, serviceType, issue, fileData);
        localStorage.setItem('ticket', JSON.stringify(ticket));
        
        // Redirect to ticket details page
        window.location.href = 'ticket.html';
      };

      if (file) {
        reader.readAsDataURL(file); // Read file as a data URL
      } else {
        alert("No file selected.");
      }
    });
  }
});
