// Help command in chat - /waifu help, /waifu gifs
// gif disabled, can turn on - /gif on
gifSwitch = []
name = []
n = ""
mm = ""

cont = (type, tag, call) => {
  fetch("https://api.waifu.pics/" + type + "/" + tag)
    .then(resp => resp.json())
    .then(res => res.url)
    .then(call);
}

mes = (type, tag, ch, u, str) => {
  cont(type, tag, url => {
    if ch === true then
    drrr.print(str + "", url);
    else drrr.dm(u, str + "", url)
  });
}

chunkString = (size, str) => {
  pos = 0; chunks = []
  while pos < str.length {
    len = str.substr(pos, size).lastIndexOf(" ")
    len = (if len > size - 30 then len else size)
    chunks.push(str.substr(pos, len))
    pos += len
  }
  return chunks
}
batch_print = msg => {
  delimiter = "."
  buffer = ""; msgs = []
  msg.split(delimiter).forEach(ctx => {
    if ctx.length then
      chunkString(135, ctx + delimiter).forEach(chk => {
        if (buffer.length + chk.length) > 135
        then { msgs.push(buffer); buffer = chk }
        else { buffer = buffer + chk; }
      })
  })
  if(buffer.length) then msgs.push(buffer)
  msgs.reverse();
  msgs.forEach(m => drrr.print(m))
}

event [me, msg, dm] (u, m: "^/") => {
  mm = m
  name = u
  n = m.substring(m.indexOf("@"))
  if u == drrr.profile.name then {
    if m == "/gif on" then {
      drrr.print("Gif enabled.");
      gifSwitch = "enabled";
    }
    else if m == "/gif off" then {
      drrr.print("Gif disabled.");
      gifSwitch = "disabled";
    }
    else going begin; 
  }
  else going begin;
}

state begin {
  nGif = "Commands:\n  Commands for pictures:\n/waifu - random tyan.\n/waifu 18+ - random tyan(adult content).\n/neko - random neko-tyan.\n/neko 18+ - random neko-tyan(adult content).\n/shinobu - pictures with Shinobu.\n/megumin - pictures with Megumin.\n/trap - ( ͡° ͜ʖ ͡°) (adult content).\n/blowjob - ¯\\_(ツ)_/¯ Why not?(adult content)."
  hGif = "\n  Commands for gifs:\nThe name corresponds to the action.\n/bully | /cuddle | /cry | /hug | /kiss | /lick | /pat | /smug | /bonk | /yeet | /blush | /smile | /wave | /highfive | /handhold | /nom | /bite | /glomp | /slap | /kill | /kickk | /happy | /wink | /poke | /dance | /cringe."
  //__________________________pictures__________________________
  if mm == "/waifu" then
  mes("sfw", "waifu", true, 0, name + ", your waifu:");
  else if mm == "/waifu 18+" then
  mes("nsfw", "waifu", false, name, "( ͡° ͜ʖ ͡°) Your perverted waifu:");
  else if mm == "/neko" then
  mes("sfw", "neko", true, 0, name + ", your neko:");
  else if mm == "/neko 18+" then
  mes("nsfw", "neko", false, name, "Meow~ Your perverted neko:");
  else if mm == "/trap" then
  mes("nsfw", "trap", false, name, "¯\\_(ツ)_/¯ It was your choice:"); 
  else if mm == "/blowjob" then
  mes("nsfw", "blowjob", false, name, "Deep breath and..");
  else if mm == "/shinobu" then
  mes("sfw", "shinobu", true, 0, name + ", Shinobu-tyan:");
  else if mm == "/megumin" then
  mes("sfw", "megumin", true, 0, name + ", EXPLOOOOSION!!?!?!?");
  else if mm == "/awoo" then
  mes("sfw", "awoo", true, 0, name + ", Awwwoaow~~");
/**///__________________________GIFS__________________________
  else if gifSwitch == "enabled" then {                         //
    if mm == ("/bully " + n) then                               // change it if you want use gif
    mes("sfw", "bully", true, 0, name + ", action text" + n);   //
    else if mm == "/cuddle" then                                // "action text" = action to the user/gif description
    mes("sfw", "cuddle", true, 0, name + ", action text" + n);  // n - responsible for flagging the user after the command
    else if mm == "/cry" then
    mes("sfw", "cry", true, 0, name + ", action text" + n);
    else if mm == "/hug" then
    mes("sfw", "hug", true, 0, name + ", action text" + n);
    else if mm == "/kiss" then
    mes("sfw", "kiss", true, 0, name + ", action text" + n);
    else if mm == "/lick" then
    mes("sfw", "lick", true, 0, name + ", action text" + n);
    else if mm == "/pat" then
    mes("sfw", "pat", true, 0, name + ", action text" + n);
    else if mm == "/smug" then
    mes("sfw", "smug", true, 0, name + ", action text" + n);
    else if mm == "/bonk" then
    mes("sfw", "bonk", true, 0, name + ", action text" + n);
    else if mm == "/yeet" then
    mes("sfw", "yeet", true, 0, name + ", action text" + n);
    else if mm == "/blush" then
    mes("sfw", "blush", true, 0, name + ", action text" + n);
    else if mm == "/smile" then
    mes("sfw", "smile", true, 0, name + ", action text" + n);
    else if mm == "/wave" then
    mes("sfw", "wave", true, 0, name + ", action text" + n);
    else if mm == "/highfive" then
    mes("sfw", "highfive", true, 0, name + ", action text" + n);
    else if mm == "/handhold" then
    mes("sfw", "handhold", true, 0, name + ", action text" + n);
    else if mm == "/nom" then
    mes("sfw", "nom", true, 0, name + ", action text" + n);
    else if mm == "/bite" then
    mes("sfw", "bite", true, 0, name + ", action text" + n);
    else if mm == "/glomp" then
    mes("sfw", "glomp", true, 0, name + ", action text" + n);
    else if mm == "/slap" then
    mes("sfw", "slap", true, 0, name + ", action text" + n);
    else if mm == "/kill" then
    mes("sfw", "kill", true, 0, name + ", action text" + n);
    else if mm == "/kickk" then
    mes("sfw", "kick", true, 0, name + ", action text" + n);
    else if mm == "/happy" then
    mes("sfw", "happy", true, 0, name + ", action text" + n);
    else if mm == "/wink" then
    mes("sfw", "wink", true, 0, name + ", action text" + n);
    else if mm == "/poke" then
    mes("sfw", "poke", true, 0, name + ", action text" + n);
    else if mm == "/dance" then
    mes("sfw", "dance", true, 0, name + ", action text" + n);
    else if mm == "/cringe" then
    mes("sfw", "cringe", true, 0, name + ", action text" + n);
  }
  else if mm == "/waifu help" then
  batch_print(nGif);
  else if mm == "/waifu gifs" then {
    if gifSwitch == "enabled" then
    batch_print(hGif);
    else drrr.print("Gifs are off turn.")
  }
}
