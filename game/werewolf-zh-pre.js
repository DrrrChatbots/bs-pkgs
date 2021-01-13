// first version of werewolf
victim = []
players = []
roles = []
alive = []
vote = {}

announcement = "/me尚未開始遊戲"
announce = (msg) => {
  announcement = msg
  drrr.print(msg)
}

// 0 狼 1 平民 2 預言家 3 女巫 4 獵人
roleName = ["狼", "平民", "預言家", "女巫", "獵人"]
rolesMap = {
  5 : [0, 1, 1, 2, 3],
  6 : [0, 0, 1, 1, 2, 3],
  7 : [0, 0, 1, 1, 1, 2, 3]
//8: [0, 0, 1, 2, 3, 3, 3, 4],
}

select = (cont, users) => {
  result = users.filter((u) => cont.includes(u))
  if result.length
  then result.reduce((a, b)=> if a.length > b.length then a else b)
  else ""
}

most = (arr) => {
  counts = arr.reduce((a, c) => {
    a[c] = (if a.hasOwnProperty(c) then a[c] else 0) + 1
    a
  }, Object())
  print(counts)
  maxCount = Math.max.apply(Object(), Object.values(counts))
  print(maxCount)
  Object.keys(counts).filter(k => counts[k] === maxCount)
}

passJudge = () => {
  wolf = alive.filter((live, index) => live && roles[index] == 0)
  people = alive.filter((live, index)=> live && roles[index] != 0)
  if wolf.length && people.length then -1
  else if wolf.length then 0
  else 1
}

state prepare {
  victim = []
  players = []
  roles = []
  alive = []
  vote = {}
  event [msg, me] (user, cont: "^\\+1$") => {
    if players.includes(user) then
      drrr.print("/me" + user + " 已經加入了")
    else{
      players.push(user)
      drrr.print("/me" + user + " 加入遊戲")
    }
  }
  event [msg, me] (user, cont: "^-1$") => {
    if players.includes(user) then {
      players.splice(players.indexOf(user), 1);
      drrr.print("/me" + user + " 退出遊戲")
    }
    else drrr.print("/me" + user + " 不在遊戲中")
  }
  event [msg, me] (user, cont: "^/who$") => {
    if players.length then {
    	drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ". " + user).join("\n"))
    } else drrr.print("/me 沒有玩家")
  }
  event [msg, me] (user, cont: "^/start$") => {
    if players.length in rolesMap then going prelude
    else drrr.print("/me需滿足 5 - 7 人, 目前 " + String(players.length) + "人")
  }
  announce("/me [+1] 加入, [-1] 退出, [/who] 參賽者, [/start] 開始")
}

state prelude {
  drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ". " + user).join("\n"))

  roles = rolesMap[players.length]
  roles.sort(()=>Math.random() - 0.5)
  alive = roles.map((x) => true)

  players.forEach((user, index) => {
    if roles[index] then later index * 3500 drrr.dm(user, "你的身份是:" + roleName[roles[index]])
    else later index * 3500 drrr.dm(user, "你是狼, 所有狼是：" + players.filter((user, index)=>roles[index] == 0).join(", "))
  })

  later players.length * 4000 going night
}

state night {
  announce("/me天黑請閉眼")
  later 3500 going night_seer
}

state night_seer {
  asked = 0
  if roles.filter((r, idx) => r == 2 && alive[idx]).length then {
    announce("/me 預言家請睜眼，你想知道關於誰的訊息（*私信* [人名]）...")

    alive.forEach((live, index) => {
      if live && roles[index] == 2 then
        later 1000 drrr.dm(players[index], "想知道什麼")
    })

    event dm (seer, cont) => {
      if players.includes(seer) then {
        if !asked && roles[players.indexOf(seer)] == 2 then {
          if alive[players.indexOf(seer)] then {
            the = select(cont, players)
            if the then {
              drrr.dm(seer,
                if roles[players.indexOf(the)] > 0
                then "人"
                else "狼"
              )
              asked = 1
              later 3500 going night_wolf
            } else drrr.dm(seer, "沒這個人")
          } else drrr.dm(seer, "你是死掉的預言家")
        }
      } else drrr.print("/me@" + seer + " 不要吵！")
    }
  } else going night_wolf
}

state night_wolf {
  announce("/me 狼人請睜眼，請採取行動（*私信* [no] or [人名]）...")
  killed = 0

  alive.forEach((live, index) => {
    if live && roles[index] == 0 then
      later (2000 * index) drrr.dm(players[index], "要殺人嗎")
  })

  event dm (wolf, cont) => {
    if players.includes(wolf) then {
      if !killed && roles[players.indexOf(wolf)] == 0 then {
        if alive[players.indexOf(wolf)] then {
          if cont.startsWith("no") then victim = []
          else {
            the = select(cont, players)
            if the then {
              victim = [the]
              killed = 1
              later 3500 going night_witch
            }
            else drrr.dm(wolf, "沒這個人")
          }
        } else drrr.dm(user, "你是死掉的狼人。")
      }
    } else drrr.print("/me@" + wolf + " 不要吵！")
  }
}

state night_witch {
  if roles.filter((r, idx) => r == 3 && alive[idx]).length then {
    announce("/me 女巫請睜眼，請採取行動（*私信* [no] or [救] or [毒 人名]）...")
    poisoned = 0
    players.forEach((user, index) => {
      if roles[players.indexOf(user)] == 3 then {
        later 3500 drrr.dm(user, "受害者：" + victim.join(", "))
      }
    })
    event dm (witch, cont) => {
      if players.includes(witch) then {
        if !poisoned && roles[players.indexOf(witch)] == 3 then {
          if alive[players.indexOf(witch)] then {
            if cont.includes(witch) then {
              drrr.dm(witch, "不能自救")
            }
            else if cont.startsWith("no") then {
              poisoned = 1
              later 3500 going night_end
            }
            else if cont.includes("救") then {
              victim = []
              poisoned = 1
              later 3500 going night_end
            }
            else if cont.includes("毒") then {
              for user of players {
                if cont.includes(user) then {
                  if !victim.includes(user)
                  then victim.push(user)
                  poisoned = 1
                  later 3500 going night_end
                }
              }
            }
          } else drrr.dm(user, "你是死掉的女巫。")
        }
      } else drrr.print("/me@" + witch + " 不要吵！")
    }
  } else going night_end
}

state night_end {
  if victim.length then {
    announce("/me天亮了," + victim.map((x)=>"@" + x).join(", ") + "死了")
    players.forEach((user, index) => {
      if victim.includes(user) then alive[index] = false
    })
  }
  else announce("/me天亮了 沒有人死")
  later 3500 {
    drrr.print("/me倖存者：" + players.filter((u, i) => alive[i]).join(", "))
    if passJudge() < 0
    then
      later 3500 going day_discussion
    else
      later 3500 going game_over
  }
}

state day_discussion {
  index = 0
  while (index < players.length) && (alive[index] == 0) index++;
  announce("/me請 @" + players[index] + " 開始發言 ([over] 結尾)")
  event [msg, me] (user, cont) => {
    if players[index] == user then {
      if cont.includes("over") then {
        index++ // += bug?
        while (index < players.length) && (alive[index] == 0) index++;
        if index >= players.length
        then later 3500 going day_vote
        else announce("/me請 @" + players[index] + " 開始發言 ([over] 結尾)")
      }
    }
  }
}

state day_vote {
  announce("/me請開始投票 ([/vote] 看目前已投票玩家, *私信* [人名] 或是 [no] 棄票)")
  vote = {}

  cur_alive = alive.filter((live)=>live).map((u, idx)=>"@" + players[idx]).join("\n")
  alive.forEach((live, index) => {
    if live then
      later (2000 * index) drrr.dm(players[index], "請私信我投票，選項有：\n" + cur_alive)
  })

  event dm (user, cont) => {
    if players.includes(user) then {
      if alive[players.indexOf(user)] then {
        if vote.hasOwnProperty(user) then
            drrr.dm(user, "一人一票，落票無悔")
        else {
          the = select(cont, players)
          if the then {
            if alive[players.indexOf(the)] then {
              vote[user] = the
              drrr.dm(user, "ok, 你投了 " + the)
              if Object.keys(vote).length == players.filter((name, index)=>alive[index]).length
              then later 3500 going day_execute
            }
            else drrr.dm(user, the + " 已經是個死人了，不要鞭屍好嗎。")
          }
          else if cont.startsWith("no") then {
            vote[user] = "no"
            drrr.dm(user, "ok, 你棄票了")
            if Object.keys(vote).length == players.filter((name, index)=>alive[index]).length
            then later 3500 going day_execute
          } else drrr.dm(user, "沒這個人")
        }
      } else drrr.dm(user, "死人還想投票啊？")
    } else drrr.print("/me@" + user + " 不要吵！")
  }
  event [msg, me] (user, cont: "^/vote$") => {
    drrr.print("/me目前已投票：" + Object.keys(vote).join(", "))
  }
}

state day_execute {
  louis = most(Object.values(vote).filter((x) => x != "no"))
  announce("/me處死最高得票人：" + louis.map((x) => "@" + x).join(", "))

  for name of louis
    alive[players.indexOf(name)] = false

  later 3500 {
    drrr.print("/me倖存者：" + players.filter((u, i) => alive[i]).join(", "))
    if passJudge() < 0
    then
      later 3500 going night
    else
      later 3500 going game_over
  }
}

state game_over {
  cur_role = players.map((name, idx) => name + "：" + roleName[roles[idx]]).join("\n")
  if passJudge()
  then
    drrr.print("/me遊戲結束, 人類勝出")
  else
    drrr.print("/me遊戲結束, 狼人勝出")
  later 2000 drrr.print(cur_role)
}

event [msg, me, dm] (user, cont: "^/char$") => {
  if players.includes(user) then {
    index = players.indexOf(user)
    if roles[index] then drrr.dm(user, "你的身份是:" + roleName[roles[index]])
    else drrr.dm(user, "你是狼, 所有狼是：" + players.filter((user, index)=>roles[index] == 0).join(", "))
  }
  else drrr.dm(user, "你不是玩家")
}

event [msg, me, dm] (user, cont: "^/all$") => {
  if alive.length
  then drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ". " + user + (if alive[index] then " 活" else " 死")).join("\n"))
  else drrr.print("/me沒有玩家，請開始遊戲")
}

event [msg, me, dm] (user, cont: "^/now$") => {
  drrr.print(announcement)
}

event [msg, me, dm] (user, cont: "^/help$") => {
  drrr.print("/help 本手冊\n/now 現在遊戲狀態\n/all 當前所有玩家\n/char 當前擔任角色\n/werewolf 開始報名（如有遊戲則重新）")
}

event [msg, me] (user, cont: "^/werewolf$") => going prepare
