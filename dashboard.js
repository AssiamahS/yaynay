function displayTickets() {
    const ticketData = localStorage.getItem('ticket');
    if (ticketData) {
      const ticket = JSON.parse(ticketData);
      const tableBody = document.querySelector('#ticketTable tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>#${ticket.ticketNumber}</td>
        <td>${ticket.name}</td>
        <td>${ticket.issue}</td>
      `;
      tableBody.appendChild(newRow);
    }
  }
  
  displayTickets();
  

  