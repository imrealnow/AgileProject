class User {
    createUser(name, password, email){
        const session = new Session();
        var users = session.get("allUsers");
        if(users == null)
        {
            var users = {
                Users : [{Name: name, Password: password, Email: email, Balance: 0.0, OrderHistory: []}]
            };
        }
        else
        {
            users.Users.push({Name: name, Password: password, Email: email, Balance: 0.0, OrderHistory: []});
        }
        session.set("allUsers", users);
    }

    getUser(name)
    {
        const session = new Session();
        var users = session.get("allUsers");
        if(users == null)
        {
            console.log("allUsers not set");
            return null;
        }
        else
        {
            var i;
            for(i = 0; i < users.Users.length; i++)
            {
                if(users.Users[i].Name == name)
                {
                    return users.Users[i];
                }
            }
        }
    }
}
