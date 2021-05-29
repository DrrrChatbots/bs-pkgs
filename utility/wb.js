// usage:
//   welcome_back();

welcome_back = () => {
  guests = drrr.users.map((x)=>x.name);
  event join (user) => {
    if guests.includes(user)
    then drrr.print("welcome back, " + user)
    else guests.push(user)
  }
}
