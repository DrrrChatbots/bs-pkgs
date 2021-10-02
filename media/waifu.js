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

event [msg, me] (u, m: "^/") => {
  
  name = m.substring(m.indexOf("@"));
  textfrmt = (if m.match("@") then "@" + u + " --> " + name else "@" + u + ":");
//__________________________pictures__________________________
  
  if m.match("^/waifu\\s18") then
    mes("nsfw", "waifu", false, u, "( ͡° ͜ʖ ͡°) Your perverted waifu:");
  else if m.match("^/neko\\s18") then
    mes("nsfw", "neko", false, u, "Meow~ Your perverted neko:");
  else if m.match("^/trap") then
    mes("nsfw", "trap", false, u, "¯\\_(ツ)_/¯ It was your choice:"); 
  else if m.match("^/blowjob") then
    mes("nsfw", "blowjob", false, u, "Deep breath and..");
  else if m.match("^/waifu") then
    mes("sfw", "waifu", true, u, "@" + u + ", your waifu:");
  else if m.match("^/neko") then
    mes("sfw", "neko", true, u, "@" + u + ", your neko:");
  else if m.match("^/shinobu") then
    mes("sfw", "shinobu", true, u, "@" + u + ", Shinobu-tyan:");
  else if m.match("^/megumin") then
    mes("sfw", "megumin", true, u, "@" + u + ", EXPLOOOOSION!!?!?!?");
  else if m.match("^/awoo") then
    mes("sfw", "awoo", true, u, "@" + u + ", Awwwoaow~~");
  
//__________________________GIFS__________________________
  
  else if m.match("^/bully") then
    mes("sfw", "bully", true, u, textfrmt);
  else if m.match("^/cuddle") then                                
    mes("sfw", "cuddle", true, u, textfrmt);
  else if m.match("^/cry") then
    mes("sfw", "cry", true, u, textfrmt);
  else if m.match("^/hug") then
    mes("sfw", "hug", true, u, textfrmt);
  else if m.match("^/kiss") then
    mes("sfw", "kiss", true, u, textfrmt);
  else if m.match("^/lick") then
    mes("sfw", "lick", true, u, textfrmt);
  else if m.match("^/pat") then
    mes("sfw", "pat", true, u, textfrmt);
  else if m.match("^/smug") then
    mes("sfw", "smug", true, u, textfrmt);
  else if m.match("^/bonk") then
    mes("sfw", "bonk", true, u, textfrmt);
  else if m.match("^/yeet") then
    mes("sfw", "yeet", true, u, textfrmt);
  else if m.match("^/blush") then
    mes("sfw", "blush", true, u, textfrmt);
  else if m.match("^/smile") then
    mes("sfw", "smile", true, u, textfrmt);
  else if m.match("^/wave") then
    mes("sfw", "wave", true, u, textfrmt);
  else if m.match("^/highfive") then
    mes("sfw", "highfive", true, u, textfrmt);
  else if m.match("^/handhold") then
    mes("sfw", "handhold", true, u, textfrmt);
  else if m.match("^/nom") then
    mes("sfw", "nom", true, u, textfrmt);
  else if m.match("^/bite") then
    mes("sfw", "bite", true, u, textfrmt);
  else if m.match("^/glomp") then
    mes("sfw", "glomp", true, u, textfrmt);
  else if m.match("^/slap") then
    mes("sfw", "slap", true, u, textfrmt);
  else if m.match("^/kill") then
    mes("sfw", "kill", true, u, textfrmt);
  else if m.match("^/kick") then
    mes("sfw", "kick", true, u, textfrmt);
  else if m.match("^/happy") then
    mes("sfw", "happy", true, u, textfrmt);
  else if m.match("^/wink") then
    mes("sfw", "wink", true, u, textfrmt);
  else if m.match("^/poke") then
    mes("sfw", "poke", true, u, textfrmt);
  else if m.match("^/dance") then
    mes("sfw", "dance", true, u, textfrmt);
  else if m.match("^/cringe") then
    mes("sfw", "cringe", true, u, textfrmt);
}
