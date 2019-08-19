function onLoad()
{
  const users = new User();
  const session = new Session();
  var currentUser = session.get("currentUser");
  if(currentUser != null)
  {
    users.addUser(currentUser);
    session.set("currentUser", {});
  }
};