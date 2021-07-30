// usage:
//   infer_number();

judge = (guess, theNumber, feedback) => {
  d = theNumber.split("")
  g = guess.split("")
  c = g.map((v)=>d.includes(v)).reduce((a, b)=>a+b)
  a = g.map((v, idx)=>d[idx] === g[idx]).reduce((a, b)=>a+b)
  b  = c - a
  a == feedback[0] && b == feedback[2]
}

select = (str, n) => {
  if n == 1 then str.split("")
  else if str.length == n then [str]
  else select(str.substr(1), n - 1)
        .map(sub => str[0] + sub)
        .concat(select(str.substr(1), n))
}

permut = (str) => {
  if !str.length then [""]
  else Array(str.length).fill(0).flatMap((x, i) =>
    permut(str.slice(0, i) + str.slice(i + 1)).map(vs => str[i] + vs)
  )
}

enums = (idx , cur) => {
  answers = select("0123456789", 4).flatMap(permut)
}

infer = (answers, cont, makeGuess) => {
  ask = cont.split(":")[0]
  feedback = cont.split(":")[1]
  answers.filter(a => judge(ask, a, feedback))
}

infer_number = () => {
  answers = []
  event msg (user, cont: "^\\d\\d\\d\\d:\\dA\\dB$") => {
    answers = infer(answers, cont); drrr.print(answers[0])
  }
  event msg (user, cont: "^number set$") => {
    answers = enums(); drrr.print(answers[0])
  }
  event msg (user, cont: "^Your Number is Correct$") => {
    answers = enums(); drrr.print("new")
  }
}
