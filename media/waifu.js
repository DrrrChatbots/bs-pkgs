// Help command in chat - /waifu help
// gif disabled, can turn on

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
  n = m.substring(m.indexOf("@"))
  //__________________________pictures__________________________
  if m == "/waifu" then
  mes("sfw", "waifu", true, u, u + ", your waifu:");
  else if m == "/waifu 18+" then
  mes("nsfw", "waifu", false, u, "( ͡° ͜ʖ ͡°) Your perverted waifu:");
  else if m == "/neko" then
  mes("sfw", "neko", true, u, u + ", your neko:");
  else if m == "/neko 18+" then
  mes("nsfw", "neko", false, u, "Meow~ Your perverted neko:");
  else if m == "/trap" then
  mes("nsfw", "trap", false, u, "¯\\_(ツ)_/¯ It was your choice:"); 
  else if m == "/blowjob" then
  mes("nsfw", "blowjob", false, u, "Deep breath and..");
  else if m == "/shinobu" then
  mes("sfw", "shinobu", true, u, u + ", Shinobu-tyan:");
  else if m == "/megumin" then
  mes("sfw", "megumin", true, u, u + ", EXPLOOOOSION!!?!?!?");
  else if m == "/awoo" then
  mes("sfw", "awoo", true, u, u + ", Awwwoaow~~");
/*__________________________GIF__________________________
  else if m == ("/bully " + n) then              //change if include gif
  mes("sfw", "bully", true, u, u + "text" + n);  //
  else if m == "/cuddle" then                    //"text" = action to the user/gif description
  mes("sfw", "cuddle", true, u, u + "text" + n); // example gif command: /kiss @user, output: User kissing @user ("text changed to "kissing")
  else if m == "/cry" then
  mes("sfw", "cry", true, u, u + "text" + n);
  else if m == "/hug" then
  mes("sfw", "hug", true, u, u + "text" + n);
  else if m == "/kiss" then
  mes("sfw", "kiss", true, u, u + "text" + n);
  else if m == "/lick"
  mes("sfw", "lick", true, u, u + "text" + n);
  else if m == "/pat" then
  mes("sfw", "pat", true, u, u + "text" + n);
  else if m == "/smug" then
  mes("sfw", "smug", true, u, u + "text" + n);
  else if m == "/bonk" then
  mes("sfw", "bonk", true, u, u + "text" + n);
  else if m == "/yeet" then
  mes("sfw", "yeet", true, u, u + "text" + n);
  else if m == "/blush" then
  mes("sfw", "blush", true, u, u + "text" + n);
  else if m == "/smile" then
  mes("sfw", "smile", true, u, u + "text" + n);
  else if m == "/wave" then
  mes("sfw", "wave", true, u, u + "text" + n);
  else if m == "/highfive" then
  mes("sfw", "highfive", true, u, u + "text" + n);
  else if m == "/handhold" then
  mes("sfw", "handhold", true, u, u + "text" + n);
  else if m == "/nom" then
  mes("sfw", "nom", true, u, u + "text" + n);
  else if m == "/bite" then
  mes("sfw", "bite", true, u, u + "text" + n);
  else if m == "/glomp" then
  mes("sfw", "glomp", true, u, u + "text" + n);
  else if m == "/slap" then
  mes("sfw", "slap", true, u, u + "text" + n);
  else if m == "/kill" then
  mes("sfw", "kill", true, u, u + "text" + n);
  else if m == "/kickk" then
  mes("sfw", "kick", true, u, u + "text" + n);
  else if m == "/happy" then
  mes("sfw", "happy", true, u, u + "text" + n);
  else if m == "/wink" then
  mes("sfw", "wink", true, u, u + "text" + n);
  else if m == "/poke" then
  mes("sfw", "poke", true, u, u + "text" + n);
  else if m == "/dance" then
  mes("sfw", "dance", true, u, u + "text" + n);
  else if m == "/cringe" then
  mes("sfw", "cringe", true, u, u + "text" + n);
  */
  else if m == "/waifu help" then
  batch_print("Commands:\n  Commands for pictures:\n'/waifu' - random tyan.\n'/waifu 18+' - random tyan(adult content).\n'/neko' - random neko-tyan.\n'/neko 18+' - random neko-tyan(adult content).\n'/shinobu' - pictures with Shinobu.\n'/megumin' - pictures with Megumin.\n'/trap' - ( ͡° ͜ʖ ͡°).\n'/blowjob' - ¯\\_(ツ)_/¯ Why not?(adult content).")
}
