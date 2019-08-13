function setWelcome()
{
    const session = new Session();
    //this just sets the welcome span in the index to show that the current user was correctly set
    var welcomeMessage = document.getElementById("welcome");
    welcomeMessage.innerHTML = "Welcome, " + session.get("currentUser").Name;
};