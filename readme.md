readme.md


index.html

<!DOCTYPE html>
<html>
<head>
    <title>Ticket System</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="container">
        <h1>Ticket System</h1>
        <div id="user-input">
            <h2>What's your name?</h2>
            <input type="text" id="name-input" />
            <button id="submit-button">Submit</button>
        </div>
        <div id="dashboard">
            <iframe src="dashboard.html"></iframe>
        </div>
    </div>

    <script src="ticket.js"></script>
</body>
</html>




////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////





<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="ticket">
        <h2>Ticket: Billy Yes</h2>
        <p>This is a sample ticket.</p>
        <div class="vote-buttons">
            <button class="vote-yes">Yes</button>
            <button class="vote-nay">Nay</button>
        </div>
    </div>

    <div id="ticket">
        <h2>Ticket: Shawn Nay</h2>
        <p>This is another sample ticket.</p>
        <div class="vote-buttons">
            <button class="vote-yes">Yes</button>
            <button class="vote-nay">Nay</button>
        </div>
    </div>

    <script src="ticket.js"></script>
</body>
</html>
