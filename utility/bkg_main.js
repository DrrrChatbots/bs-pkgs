/*
// usage:

bkg_main("judge", "AX72B5TYgL", () => {
 werewolf("zh"); // remember load the werewolf pkg
})

*/


bkg_main = (name, room, main) => {
  if !name then name = "bkg-bot";
  if !room then room = "roomID";
  drrr = new Bot(name);
  globalThis.drrr = drrr;
  drrr.cookie = localStorage.getItem("cookie");

  next = cookie => {
    if cookie then localStorage.setItem("cookie", cookie);
    if room == "roomID"
    then print("set your roomID");
    else drrr.join(room, main);
  }

  if drrr.cookie then drrr.getProfile(() => next());
  else drrr.login(() => next(drrr.cookie));
}
