function setWelcome()
{
    //this just sets the welcome span in the index to show that the current user was correctly set
    var welcomeMessage = document.getElementById("welcome");
    welcomeMessage.innerHTML = "Welcome, " + sessionStorage.getItem("currentUser");
};