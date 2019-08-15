class User {
    createUser(name, password, email){
        const session = new Session();
        var users = session.get("allUsers");
        var newUser = {
            Name: name,
            Password: password,
            Email: email,
            Balance: 0.0,
            CoffeesBought: 0.0,
            OrderHistory: [],
        };
        if(users == null)
        {
            var users = {
                Users : [newUser]
            };
        }
        else
        {
            users.Users.push(newUser);
        }
        session.set("allUsers", users);
        return newUser;
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

    updateUser(name, newUserObject)
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
                    users.Users[i] = newUserObject;
                    return;
                }
            }
        }
    }

    deleteUser(name)
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
                    users.Users.splice(i, 1);
                    return;
                }
            }
        }
    }
}
