event [me, msg] (name, cont: "^\\d+[dD]\\d+$") => { drrr.print(dice(cont)) }
event dm (name, cont: "^\\d+[dD]\\d+$") => { drrr.dm(name, dice(cont)) }

dice = (text) => {
  match = (new RegExp("^(\\d+)[dD](\\d+)$")).exec(text)
  if !match then "wrong format, use [1-100]d[digits]"
  else {
    ins = Number(match[1])
    if(ins > 0 && ins <= 100)
    then Array.from(Array(ins)).map((_, i) =>
      String(Math.floor(Math.random()*match[2])+1)).join(" ");
    else "number of dice should between 1 to 100";
  }
}
