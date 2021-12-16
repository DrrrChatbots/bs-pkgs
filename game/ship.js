ship = (name1, name2, percent, msg) => {
  if (percent == 101) then drrr.print("❤️MATCHMAKING❤️\n" + "🔻" + name1 + "\n" + "🔺" + name2 + "\n" + "10000% " + msg);
  else drrr.print("❤️MATCHMAKING❤️\n" + "🔻" + name1 + "\n" + "🔺" + name2 + "\n" + percent + "% " + msg);
}
// example: !ship moon, sun
event [msg, me, dm] (u, m: "^!ship") => {
  first = m.substring(5, m.indexOf(","));
  second = m.substring(m.indexOf(","));
  
  rand = Math.floor(Math.random() * 102);
  
  if (rand == 0) then ship(first, second, rand, "|          | 404 love not found💔");
  else if (rand < 20) then ship(first, second, rand, "|█         | Awful 😭");
  else if (rand < 30) then ship(first, second, rand, "|██        | Awful 😭");
  else if (rand < 40) then ship(first, second, rand, "|███       | Awful 😭");
  else if (rand < 50) then ship(first, second, rand, "|████      | Barely 😶");
  else if (rand < 60) then ship(first, second, rand, "|█████     | Barely 😶");
  else if (rand < 69) then ship(first, second, rand, "|██████    | Nice friendzone 👍");
  else if (rand == 69) then ship(first, second, rand, "|██████    | ( ͡° ͜ʖ ͡°)");
  else if (rand < 80) then ship(first, second, rand, "|███████   | Pretty Good 😄");
  else if (rand < 90) then ship(first, second, rand, "|████████  | Very pretty Good 😄");
  else if (rand < 100) then ship(first, second, rand, "|█████████ | Amazing 😍");
  else if (rand == 100) then ship(first, second, rand, "|██████████| PERFECT! ❣️");
  else if (rand == 101) then ship(first, second, rand, "|██████████|███████████████████████████████████████████████████████████████");
}
