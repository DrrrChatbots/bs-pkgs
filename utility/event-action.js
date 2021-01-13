// hook event action in BotScript
// eas = [ [ "join", "", "", "msg", [ "hello $user" ] ] ]
hook = (eas) => {
  setting = { "EventAction-setting": eas }
  chrome.runtime.onMessage.addListener((req, sender, callback) => {
  if(sender.url.match(new RegExp("https://drrr.com/room/.*"))) then
    event_action(req.type, setting, req);
  })
}
