class Order {

/**
Dependencies: Session

Example Order:
    currentOrder = {
        Date: "13-08-19 13:17",
        TotalPrice: 7.5,
        Items: [
            {
                Id: 1,
                Type: "Black",
                Size: "Regular",
                Price: 4.5,
                Additions: []
            },
            {
                Id: 2,
                Type: "Hot Chocolate",
                Size: "Small",
                Price: 3.0,
                Additions: ["With Sugar", "With Milk"]
            }
        ]
    };
**/
    constructor()
    {
        this.session = new Session();
        var currentOrder = session.get("currentOrder");
        if(currentOrder == null)
        {
            currentOrder = {
                Date: "",
                TotalPrice: 0.0,
                Items: []
            };
            session.set("currentOrder", currentOrder);
        }
    }

    getTotalPrice()
    {
        var currentOrder = session.get("currentOrder");
        var i;
        var totalPrice = 0.0;
        if(currentOrder.Items.length == 0)
        {
            return totalPrice;
        }
        else
        {
            for(i = 0; i < currentOrder.Items.length; i++)
            {
                totalPrice = totalPrice + currentOrder.Items[i].Price;
            }
            return totalPrice;
        }
    }

    // order.addCoffee("Black", "Regular", 4.5, ["With Sugar","With Milk"]);
    addCoffee(type, size, price, additions)
    {
        var currentOrder = session.get("currentOrder");
        var newCoffee = {
            Id: 0,
            Type: type,
            Size: size,
            Price: price,
            Additions: additions
        };
        newCoffee.Id = currentOrder.Items.length + 1;
        currentOrder.Items.push(newCoffee);
        session.set("currentOrder", currentOrder);
        return newCoffee.Id;
    }

    confirmOrder()
    {
        var currentOrder = session.get("currentOrder");
        var currentUser = session.get("currentUser");
        currentOrder.Date = new Date().toJSON();
        currentOrder.TotalPrice = getTotalPrice();
        currentUser.OrderHistory.push(currentOrder);
        currentOrder = {
                Date: "",
                TotalPrice: 0.0,
                Items: []
            };
        session.set("currentUser", currentUser);
        session.set("currentOrder", currentOrder);
    }
}
