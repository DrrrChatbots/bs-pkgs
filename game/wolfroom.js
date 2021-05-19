// usage:
//   wolfroom("zh");
//   wolfroom("en");
// TODO:
// - private vote
// - same vote, revote and same, no dead
// - if wolf kill all first, win immediately

language = "en"

i18n = {
  "en": {
    "notBeg": "Game not start yet.",
    "werewolves": "Werewolves",
    "villagers": "Villagers",
    "seer": "Seer",
    "witch": "Witch",
    "hunter": "Hunter",
    "joined": u => u + " has already joined",
    "joins" : u => u + " joins the game",
    "leaves": u => u + " leaves the game",
    "notIn": u => u + " is not in the game",
    "players": ns => "Players:\n" + ns,
    "noPlayer": "No player",
    "noPoison": "No poison left",
    "noMedicine": "No medicine left",
    "need5to8": len => "Need 5 - 8 people, " + len + " people current.",
    "noPlayerBeg": "No player, please start the game",
    "prepare": "[+1] join, [-1] leave, [/who] player, [/howl] start",
    "UrRole": r =>  "You are " + r,
    "UrWerewolf": wvs => "You are werewolf, all werewolves are " + wvs,
    "night": d => "The " + String(d) + ord(d) + " day. Night, please close your eyes.",
    "talkSeer": "Seer, open your eyes, whose info do you want to know (*dm* [name])...",
    "wantToKnow": "What do you want to know",
    "people": "people",
    "werewolf": "werewolf",
    "noSuchPeople": "No such people",
    "oneAsk": "Only one asking is allowed",
    "deadSeer": "You are dead seer",
    "notSeer": "You are not seer, BE QUIET",
    "beQuiet": u => "@" + u + " BE QUIET!",
    "talkWerewolves": "Werewolves, open your eyes, take actions (*dm* [no] or [name])...",
    "askKill": "Kill people?",
    "oneKill": "Only one kill is allowed",
    "deadWerewolf": "You are dead werewolf",
    "notWerewolf": "You are not werewolf",
    "talkWitch": "Witch, open your eyes, take actions (*dm* [no] or [save] or [poison name])...",
    "victims": vs => "Victim:" + vs,
    "can'tSaveSelf": "Cannot save yourself",
    "deadMan": "The man is dead",
    "unkCmd": "Unknown command",
    "onePoiSav": "Only poison or save once is allowed",
    "deadWitch": "You are dead witch",
    "notWitch": "You are not witch",
    "hunter15s": "send any message in 15 secs to show you are hunter",
    "fired": h => "Hunter @" + h + " fired...",
    "survivors": ss => "Survivor:" + ss,
    "hit": t => ", and hit " + t + " before he died",
    "morning": d => "The " + String(d) + ord(d) + " day. Morning, Sun Arise.",
    "died": us => us + " died",
    "rip30s": "R.I.P for 30 secs",
    "morningSafe": "Morning, no one died",
    "speaking": n => "@" + n + " start speaking (end with [over]), [/skip] to skip the guy",
    "voting": "Please start voting ([/vote] check voted, [/urge] reminder, [/execute] skip, [/vote name] or [/vote no] abstain)",
    "voteNote": cans => "Message to vote, candidates:\n" + cans,
    "oneVote": "Only one vote is allowed",
    "checkVote": t => "Ok, you vote " + t,
    "voteDead": t => t + " is already dead",
    "abstain": "Ok, abstain",
    "deadVote": "You are already dead",
    "curVote": us => "Current voted:" + us,
    "urgeVote": us => us + " vote, please!",
    "execute": us => "Execute:" + us,
    "draw": "Game Over, draw",
    "peopleWin": "Game Over, people win",
    "werewolvesWin": "Game Over, werewolves win",
    "notPlayer": "You are not player",
    "alive": "Alive",
    "dead": "Dead",
    "manual": "/help The manual\n/now Game State\n/all All Players\n/char Your Role\n/werewolf Start Participating (Will restart if game is running)"
  },
  "zh": {
    "notBeg": "尚未開始遊戲",
    "werewolves": "狼",
    "villagers": "平民",
    "seer": "預言家",
    "witch": "女巫",
    "hunter": "獵人",
    "joined": u => u + " 已經加入了",
    "joins" : u => u + " 加入遊戲",
    "leaves": u => u + " 退出遊戲",
    "notIn": u => u + " 不在遊戲中",
    "players": ns => "玩家：\n" + ns,
    "noPlayer": "沒有玩家",
    "noPoison": "沒有毒藥了",
    "noMedicine": "沒有解藥了",
    "need5to8": len => "需滿足 5 - 8 人, 目前 " + len + " 人",
    "noPlayerBeg": "No player, please start the game",
    "prepare": "[+1] 加入, [-1] 退出, [/who] 玩家, [/howl] 開始",
    "UrRole": r =>  "你的身份是：" + r,
    "UrWerewolf": wvs => "你是狼, 所有狼是：" + wvs,
    "night": d => "第 " + String(d) + " 天，天黑請閉眼/夜",
    "talkSeer": "預言家請睜眼，你想知道關於誰的訊息（*私信* [人名]）...",
    "wantToKnow": "想知道什麼",
    "people": "人",
    "werewolf": "狼",
    "noSuchPeople": "沒這個人",
    "oneAsk": "只能問一次",
    "deadSeer": "你是死掉的預言家",
    "notSeer": "你不是預言家，不要吵",
    "beQuiet": u => "@" + u + " 不要吵！",
    "talkWerewolves": "狼人請睜眼，請採取行動（*私信* [no] or [人名]）...",
    "askKill": "要殺人嗎？",
    "oneKill": "只能殺一次",
    "deadWerewolf": "你是死掉的狼人",
    "notWerewolf": "你不是狼人",
    "talkWitch": "女巫請睜眼，請採取行動（*私信* [no] or [save] or [poison 人名]）...",
    "victims": vs => "受害者：" + vs,
    "can'tSaveSelf": "不能自救",
    "deadMan": "這人已經死了",
    "unkCmd": "未知的指令",
    "onePoiSav": "只能毒或救一次",
    "deadWitch": "你是死掉的女巫",
    "notWitch": "你不是女巫",
    "hunter15s": "十五秒內發任何訊息以亮獵人牌",
    "fired": h => "獵人 @" + h + " 在臨死前開了一槍並打到了...",
    "hit": t => "這一槍落到了 @" + t + " 身上",
    "survivors": ss => "倖存者：" + ss,
    "morning": d => "第 " + String(d) + " 天，東方漸泛魚肚白/早上",
    "died": us => us + " 死了",
    "rip30s": "請大家默哀三十秒",
    "morningSafe": "天亮了，沒有人死",
    "speaking": n => "請 @" + n + " 開始發言 ([over] 結尾), [/skip] 跳過此人",
    "voting": "請開始投票 ([/vote] 看已投票, [/urge] 催票, [/execute] 跳過投票, [/vote 人名] 或是 [/vote no] 棄票)",
    "voteNote": cans => "發言以投票，選項有：\n" + cans,
    "oneVote": "一人一票，落票無悔",
    "checkVote": t => "ok, 你投了 " + t,
    "voteDead": t => t + " 已經是個死人了，不要鞭屍好嗎。",
    "abstain": "ok, 你棄票了",
    "deadVote": "死人還想投票啊？",
    "curVote": us => "目前已投票：" + us,
    "urgeVote": us => us + " 快點投票！",
    "execute": us => "處死最高得票人：" + us,
    "draw": "遊戲結束，平局",
    "peopleWin": "遊戲結束，人類勝出",
    "werewolvesWin": "遊戲結束，狼人勝出",
    "notPlayer": "你不是玩家",
    "alive": "活",
    "dead": "死",
    "manual": "/help 本手冊\n/now 現在遊戲狀態\n/all 當前所有玩家\n/char 當前擔任角色\n/werewolf 開始報名（如有遊戲則重新）"
  }
}

T = (key) => i18n[language][key]

me = (str) => "/me" + str

ord_enum = {
  0: "th",
  1: "st",
  2: "nd",
  3: "rd",
}

ord = (num) => if num > 3 then "th" else ord_enum[num]

names = []
players = {}
victim = []
vote = {}
day = 1
poison = 1
medicine = 1

announcement = me(T("notBeg"))
announce = (msg) => {
  announcement = msg
  drrr.print(msg)
}

scene = (desc) => {
  announcement = desc
  if room.host == user.id
  then drrr.descr(desc.replace("/me", ""))
  else drrr.print(desc)
}

// 0 werewolf 1 villagers 2 seer 3 witch 4 hunter
roleName = [T("werewolves"), T("villagers"), T("seer"), T("witch"), T("hunter")]
rolesMap = {
  5: [0, 1, 1, 2, 3],
  6: [0, 0, 1, 1, 2, 3],
  7: [0, 0, 1, 1, 1, 2, 3],
  8: [0, 0, 1, 1, 1, 2, 3, 4],
}

getRandom = (min,max) => {
  Math.floor(Math.random()*(max-min+1))+min
}

select = (cont, users) => {
  result = users.filter((u) => cont.includes(u))
  if result.length
  then result.reduce((a, b)=> if a.length > b.length then a else b)
  else ""
}

map = (obj, func) => Object.values(obj).map(func)
forEach = (obj, func) => Object.values(obj).forEach(func)
filter = (obj, func) => Object.values(obj).filter(func)

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
  wolf = filter(players, (p, index) => p.life && p.role == 0)
  people = filter(players, (p, index) => p.life && p.role != 0)
  if wolf.length && people.length then -1
  else if wolf.length then 0
  else if people.length then 1
  else 2
}

state prepare {
  victim = []
  names = []
  players = {}
  vote = {}
  day = 1
  poison = 1
  medicine = 1

  event [msg, me] (user, cont: "^\\+1$") => {
    if names.includes(user) then
    drrr.print(me(T("joined")(user)))
    else{
      names.push(user)
      drrr.print(me(T("joins")(user)))
    }
  }
  event [msg, me] (user, cont: "^-1$") => {
    if names.includes(user) then {
      names.splice(names.indexOf(user), 1);
      drrr.print(me(T("leaves")(user)))
    }
    else drrr.print(me(T("notIn")(user)))
  }
  event [msg, me] (user, cont: "^/who$") => {
    if names.length then {
      drrr.print(T("players")(names.map((user, index) => String(index + 1) + ". " + user).join("\n")))
    } else drrr.print(me(T("noPlayer")))
  }
  event [msg, me] (user, cont: "^/howl$") => {
    if names.length in rolesMap then going initial
    else drrr.print(me(T("need5to8")(String(names.length))))
  }
  announce(me(T("prepare")))
}

newPlayer = (name, role) => {
  name: name,
    life: true,
    role: role,
    rname: roleName[role],
    diefor: ""
}

state initial {
  cnt = 1
  updateLoc(()=>{
    users.forEach((u, i) => {
      isHost = u.name == user.name
      if names.includes(u.name) != u.player || isHost
      then {
        setTimeout(() => drrr.player(u.name, !u.player || isHost), cnt++ * 1500)
      }
      else if u.player && !u.alive
      then setTimeout(() => drrr.alive(u.name, true), cnt++ * 1500)
    })
    setTimeout(() => going prelude, cnt++ * 1500)
  })
}

state prelude {
  drrr.print(T("players")(names.map((user, index) => String(index + 1) + ". " + user).join("\n")))

  roles = rolesMap[names.length]
  roles.sort(()=>Math.random() - 0.5)

  names.forEach((name, index) => {
    players[name] = newPlayer(name, roles[index]);
  })

  wolves = filter(players, (p, index) => p.role == 0).map(p => p.name).join(", ")
  forEach(players, (p, index) => {
    if p.role then later (index * 3500 + 1000) drrr.dm(p.name, T("UrRole")(p.rname))
    else later (index * 3500 + 1000) drrr.dm(p.name, T("UrWerewolf")(wolves))
  })

  later names.length * 4000 going night
}

state night {
  scene(me(T("night")(day)))
  later 3500 going night_seer
}

state night_seer {

  announce(me(T("talkSeer")))
  if filter(players, (p, idx) => p.role == 2 && p.life).length then {
    asked = 0

    forEach(players, (p, index) => {
      if p.life && p.role == 2 then
      later 1500 drrr.dm(p.name, T("wantToKnow"))
    })

    event dm (seer, cont) => {
      if seer in players then {
        if !asked && players[seer].role == 2 then {
          if players[seer].life then {
            if !asked then {
              the = select(cont, names)
              if the then {
                drrr.dm(seer, if players[the].role > 0 then T("people") else T("werewolf"))
                asked = 1
                later 3500 going night_wolf
              } else drrr.dm(seer, T("noSuchPeople"))
            } else drrr.dm(seer, T("oneAsk"))
          } else drrr.dm(seer, T("deadSeer"))
        } else drrr.dm(seer, T("notSeer"))
      } else drrr.print(me(T("beQuiet")(seer)))
    }

    event msg (user: user.name, cont: "^/skip$") => going night_wolf

  } else later (getRandom(10, 30) * 1500) going night_wolf
}

state night_wolf {
  announce(me(T("talkWerewolves")))
  killed = 0

  forEach(players, (p, index) => {
    if p.life && p.role == 0 then
    later (2000 * index + 1500) drrr.dm(p.name, T("askKill"))
  })

  event dm (wolf, cont) => {
    if wolf in players then {
      if players[wolf].role == 0 then {
        if players[wolf].life then {
          if !cont.startsWith("no") then {
            if !killed then {
              the = select(cont, names)
              if the then {
                victim = [the]
                players[the].diefor = "bite"
                killed = 1
                later 3500 going night_witch
              } else drrr.dm(wolf, T("noSuchPeople"))
            } else drrr.dm(wolf, T("oneKill"))
          } else {
            victim = []
            killed = 1
            later 3500 going night_witch
          }
        } else drrr.dm(user, T("deadWerewolf"))
      } else drrr.dm(user, T("notWerewolf"))
    } else drrr.print(me(T("beQuiet")(wolf)))
  }

  event msg (user: user.name, cont: "^/skip$") => going night_witch
}

state night_witch {

  if !poison && !medicine
  then going night_end

  announce(me(T("talkWitch")))

  if filter(players, (p, idx) => p.role == 3 && p.life).length then {

    used = 0

    names.forEach((name, index) => {
      if players[name].role == 3 then {
        later 3500 drrr.dm(name, T("victims")(victim.join(", ")))
      }
    })
    event dm (witch, cont) => {
      if witch in players then {
        if players[witch].role == 3 then {
          if players[witch].life then {
            if !used then {
              the = select(cont, names)
              if cont.startsWith("no") then {
                used = 1
                later 3500 going night_end
              } else if cont.startsWith("ignore") then {
                used = 1
                later 3500 going night_end
              } else if cont.includes("save") then {
                if !medicine then {
                  drrr.dm(witch, T("noMedicine"))
                }
                else if victim.length && victim[0] == witch then {
                  drrr.dm(witch, T("can'tSaveSelf"))
                } else {
                  victim = []
                  used = 1
                  medicine = 0
                  later 3500 going night_end
                }
              } else if cont.includes("poison") then {
                if the.length then {
                  if players[the].life then{
                    if poison then {
                      if !victim.includes(the)
                      then {
                        victim.push(the)
                        players[the].diefor = "poison"
                      }
                      used = 1
                      poison = 0
                      later 3500 going night_end
                    } else drrr.dm(witch, T("noPoison"))
                  } else drrr.dm(user, T("deadMan"))
                } else drrr.dm(user, T("noSuchPeople"))
              } else drrr.dm(user, T("unkCmd"))
            } else drrr.dm(user, T("onePoiSav"))
          } else drrr.dm(user, T("deadWitch"))
        } else drrr.dm(user, T("notWitch"))
      } else drrr.print(me(T("beQuiet")(witch)))
    }

    event msg (user: user.name, cont: "^/skip$") => going night_end

  } else later (getRandom(10, 30) * 1000) going night_end
}

state hunter_ask {
  forEach(players, (p, index) => {
    if p.life && p.role == 4 then
    later 1500 drrr.dm(p.name, T("hunter15s"))
  })
  event [dm, msg, me] (hunter, cont) => {
    if hunter in players then {
      if players[hunter].role == 4 then {
        show = 1
      }
    }
  }
}

state hunter_fire {
  hunter = Object.values(players).find(p => p.role == 4)
  drrr.print(me(T("fired")(hunter.name)))
  event [msg, me] (hunter, cont) => {
    if hunter in players then {
      if players[hunter].role == 4 then {
        the = select(cont, names)
        if the then {
          if players[the].life then {
            players[the].life = false
            drrr.print(T("hit")(the))
            setTimeout(() => drrr.alive(the, false), 1500)
            go_next()
          } else drrr.dm(user, T("deadMan"))
        } else drrr.dm(user, T("noSuchPeople"))
      }
    }
  }
}

state night_end {

  show = 0

  day = day + 1

  go_next = {
    drrr.print(me(T("survivors")(filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going day_discussion
    else later 3500 going game_over
  }

  scene(T("morning")(day))

  later 3000 {
    if victim.length then {

      //announce(me(T("died")(victim.map((x)=>"@" + x).join(", "))))

      victim.forEach((name, index) => {
        setTimeout(() => drrr.alive(name, false), index * 1500)
        if players[name].role == 4 && players[name].diefor == "bite"
        then visit hunter_ask
      })

      later 5000 {
        drrr.print(me(T("rip30s")))
        later 30000 {
          victim.forEach((name) => {
            players[name].life = false;
          })

          if show
          then visit hunter_fire
          else go_next()
        }
      }
    } else {
      announce(me(T("morningSafe")))
      later 3500 go_next()
    }
  }
}

state day_discussion {
  index = 0
  while (index < names.length) && (players[names[index]].life == 0) index++;
  announce(me(T("speaking")(names[index])))

  event [msg, me] (u, cont) => {
    if (names[index] == u && cont.includes("over"))
      || ((names.includes(u) || u == user.name) && cont.includes("/skip")) then {
      index++ // += bug?
      while (index < names.length) && (players[names[index]].life == 0) index++;
      if index >= names.length
      then later 3500 going day_vote
      else announce(me(T("speaking")(names[index])))
    }
  }
}

state day_vote {
  announce(me(T("voting")))
  vote = {}

  survivor = filter(players, (p, idx) => p.life)


  later 1500 drrr.print(T("voteNote")(survivor.map((u) => "@" + u.name).join("\n")))


  event [msg, me] (user, cont: "^/vote\\s+\\S+|^/execute") => {
    cont = cont.replace("/vote", "").trim()
    if user in players then {
      if players[user].life then {
        if cont.startsWith("/execute")
        then later 1500 going day_count_vote
        else if vote.hasOwnProperty(user)
        then drrr.print(T("oneVote"))
        else {
          the = select(cont, names)
          if the then {
            if players[the].life then {
              vote[user] = the
              drrr.print(T("checkVote")(the))
              if Object.keys(vote).length == filter(players, p => p.life).length
              then later 3500 going day_count_vote
            } else drrr.print(T("voteDead")(the))
          }
          else if cont.startsWith("no") then {
            vote[user] = "no"
            drrr.print(T("abstain"))
            if Object.keys(vote).length == filter(players, p => p.life).length
            then later 3500 going day_count_vote
          } else drrr.print(T("noSuchPeople"))
        }
      } else drrr.print(T("deadVote"))
    } else drrr.print(me(T("beQuiet")(user)))
  }
  event [msg, me, dm] (user, cont: "^/vote$", url, tc, req) => {
    if req.type == "dm"
    then drrr.dm(user, me(T("curVote")(Object.keys(vote).join(", "))))
    else drrr.print(me(T("curVote")(Object.keys(vote).join(", "))))
  }
  event [msg, me] (user, cont: "^/urge$") => {
    drrr.print(me(T("urgeVote")(survivor.filter(u => !(u.name in vote)).map((u) => "@" + u.name).join(", "))))
  }
}

state day_count_vote {
  drrr.print(Object.keys(vote).map(k => String(k) + " => " + String(vote[k])).join("\n"))
  setTimeout(() => going day_execute, 3000)
}

state day_execute {

  show = 0

  go_next = {
    drrr.print(me(T("survivors")(filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going night
    else later 3500 going game_over
  }

  louis = most(Object.values(vote).filter((x) => x != "no"))
  announce(me(T("execute")(louis.map((x) => "@" + x).join(", "))))

  louis.forEach((name) => {
    if players[name].role == 4
    then visit hunter_ask
  })

  later 3500 {
    drrr.print(me(T("rip30s")))
    later 30000 {
      louis.forEach((name, index) => {
        players[name].life = false;
        players[name].diefor = "vote";
        setTimeout(() => drrr.alive(name, false), index * 1500)
      })
      if show
      then visit hunter_fire
      else go_next()
    }
  }
}

state game_over {
  cur_role = map(players, (p, idx) => p.name + ":" + p.rname).join("\n")
  result = passJudge()
  if result == 0
  then scene(me(T("werewolvesWin")))
  else if result == 1
  then scene(me(T("peopleWin")))
  else scene(me(T("draw")))
  later 2000 drrr.print(cur_role)
}

wolfroom = (lang) => {

  if lang then {
    language = lang
    announcement = me(T("notBeg"))
    roleName = [T("werewolves"), T("villagers"), T("seer"), T("witch"), T("hunter")]
  }

  event [msg, me, dm] (user, cont: "^/char$") => {
    if user in players then {
      wolves = filter(players, (p, index) => p.role == 0).map(p => p.name).join(", ")
      if players[user].role then drrr.dm(user, T("UrRole")(players[user].rname))
      else drrr.dm(user, T("UrWerewolf")(wolves))
    } else drrr.dm(user, T("notPlayer"))
  }

  event [msg, me, dm] (user, cont: "^/all$") => {
    if Object.keys(players).length
    then drrr.print(T("players")(map(players, (p, index) => String(index + 1) + ". " + p.name + " " + (if p.life then T("alive") else T("dead"))).join("\n")))
    else drrr.print(me(T("noPlayerBeg")))
  }

  event [msg, me, dm] (user, cont: "^/now$") => {
    drrr.print(announcement)
  }

  event [msg, me, dm] (user, cont: "^/help$") => {
    drrr.print(T("manual"))
  }

  event [msg, me] (user, cont: "^/werewolf$") => going prepare

  event join (user) => drrr.player(user, false)

  going prepare
}

console.log("need call werewolf(lang) to start it,\n\"zh\" and \"en\" are available now")
wolfroom("zh");
