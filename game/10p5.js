// https://www.itsfun.com.tw/%E5%8D%81%E9%BB%9E%E5%8D%8A/wiki-2561012

deck = []
players = {}
suits = "♣♦♥♠"
banker = false

newPlayer = (name) => {
  name: name, money: 150,
  cards: [], end: true, wager: 10,
}

toCard = card => suits[card[0]] +
  (if card[1] > 10 then "JQK"[card[1] - 11] else card[1])

calculate = cards => {
  cards.reduce((acc, cur) =>
    if cur[1] > 10 then acc + 5
    else acc + cur[1] * 10, 0)
}

showUsers = show => {
  drrr.print(Object.values(players).map(p =>
    p.name + ": " + p.money +
    (if show then p.points else "") + " [" +
    (if banker.name == p.name
    then "banker" else p.wager) + "]").join("\n"))
}

showHand = (cards, first) => (if first
  then cards.map(c =>
  "[" + toCard(c) + "]").join("")
  else "[=]" + cards.slice(1).map(c =>
  "[" + toCard(c) + "]").join(""))

showCards = () => {
  drrr.print(Object.values(players).map(p =>
    p.name + ": " + showHand(p.cards, false)).join("\n"))
}

event [msg, me] (name, cont: "^\\.d\\s*$") => {
  if banker && banker.name == name then {
    deck = []
    [0, 1, 2, 3].forEach(s => {
      [1, 2, 3, 4, 5, 6, 7
        , 8, 9, 10, 11, 12, 13].forEach(n => {
        deck.push([s, n])
      })
    })
    deck.sort(()=>Math.random() - 0.5)
    Object.values(players).forEach(player => {
      card = deck.pop()
      player.end = false
      player.cards = [card]
      player.points = " " + toCard(card)
      drrr.dm(player.name, toCard(card))
    })
  }
  else drrr.print("you are not banker")
}

event [msg, me] (name, cont: "^\\.1\\s*$") => {
  player = players[name]
  if player.end then drrr.print(
    if name == banker.name
    then ".s to shuffle and deal cards"
    else "you have already ended the round")
  else if banker.name == name &&
    Object.values(players).some(p => p.name != name && !p.end)
  then drrr.print(
    Object.values(players)
          .filter(p => p.name != name && !p.end)
          .map(p => "@" + p.name)
          .join(", ") + " need .e")
  else if player && player.cards.length then {
    player.cards.push(deck.pop())
    player.points = calculate(player.cards)
    busted = player.points > 105
    passed = player.cards.length >= 5
    status = ""
    if busted then status = " (busted)"
    else if passed then status = " (passed)"

    if status.length then player.points = status
    else player.points = " (" + player.points / 10 + ")"

    text = showHand(player.cards,
      player.name == banker.name) + status

    drrr.print(text)

    if busted || passed then {
      player.end = true
      player.cards = []

      settle = (me, opponent, endon) => {
        lose = busted * 2 - 1
        me.money -= lose * endon.wager
        opponent.money += lose * endon.wager
        endon.cards = []
        endon.end = true
      }

      if banker.name == name then {
        Object.values(players)
          .filter(p => p.name != banker.name && p.cards.length)
          .forEach(player => settle(banker, player, player))
      }
      else settle(player, banker, player)

      if !(Object.values(players)
        .some(p => p.name != banker.name && p.cards.length))
      then {
        banker.cards = []
        banker.end = true
        showUsers(true)
      }
    }
  }
}

event [msg, me] (name, cont: "^\\.e\\s*$") => {
  player = players[name]
  if player then {
    if player.end then drrr.print("already ended round")
    else if banker.name == name then {
      points = calculate(player.cards)
      busted = points > 105
      passed = player.cards.length >= 5
      Object.values(players)
        .filter(p => p.name != name && p.cards.length)
        .forEach(player => {
          win = points >= calculate(player.cards)
          if busted then win = false
          else if passed then win = true
          win = win * 2 - 1
          banker.money += win * player.wager
          player.money -= win * player.wager
          player.cards = []
          player.end = true
      })
      banker.cards = []
      banker.end = true
      showUsers(true)
    }
    else {
      player.end = true
      drrr.print("@" + player.name + " end round")
    }
  }
}

event [msg, me] (name, cont: "^\\.b\\s*$") => {
  player = players[name]
  if player then {
    banker = player
    drrr.print(player.name + " (banker)")
  }
  else drrr.print("'" + name + "' not in game")
}

event [msg, me] (name, cont: "^\\.i\\s*$") => {
  player = players[name]
  if player then {
    drrr.print(
      player.name + ": " + player.money
      + ", wager: " + player.wager)
    if player.cards.length
    then drrr.dm(player.name, player.cards.map(c => toCard(c)).join(" "))
  }
}

event [msg, me] (name, cont: "^\\.j\\s*$") => {
  if players[name]
  then drrr.print("already in game")
  else{
    players[name] = newPlayer(name)
    status = ""
    if !banker then {
      banker = players[name]
      status = " (new banker)"
    }
    drrr.print("welcome, " + name + status)
  }
}

quitPlayer = name => {
  if players[name] then {
    delete players[name]
    status = ""
    if !banker || banker.name == name
    then {
      banker = Object.values(players)[0];
      if banker then status = "; new banker: " + banker.name
    }
    "bye, " + name + status
  }
  else "'" + name + "' not in game"
}

event [msg, me] (name, cont: "^\\.q\\s*$") => {
  drrr.print(quitPlayer(name))
}

event [msg, me] (name, cont: "^\\.k") => {
  drrr.print(quitPlayer(cont.replace(".k", "").trim()))
}

event [msg, me] (name, cont: "^\\.w\\s*\\d+$") => {
  player = players[name]
  if player then {
    if player.cards.length then drrr.print("end the round first")
    else {
      player.wager = parseInt(cont.replace(".w", "").trim())
      drrr.print(name + "'s wager: " + player.wager)
    }
  }
}

event [msg, me] (name, cont: "^\\.p\\s*$") => { showUsers(false) }
event [msg, me] (name, cont: "^\\.c\\s*$") => { showCards() }

event [msg, me] (name, cont: "^(\\.h|help)\\s*$") => {
  drrr.print(
    [ ".j join /.q quit"
    , ".d deal cards"
    , ".b be banker"
    , ".i info"
    , ".1 new card"
    , ".e end round"
    , ".k [str] kick"
    , ".w [num] set wager"
    , ".p players /.c cards"
    , ".h help"
    ].join("\n")
  )
}
