// usage:
//   werewolf_en();

names = []
players = {}
victim = []
vote = {}

announcement = "/meGame not start yet."
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

// 0 狼 1 平民 2 預言家 3 女巫 4 獵人
roleName = ["Werewolves", "Villagers", "Seer", "Witch", "Hunter"]
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
  else 1
}

state prepare {
  victim = []
  names = []
  players = {}
  vote = {}
  event [msg, me] (user, cont: "^\\+1$") => {
    if names.includes(user) then
    drrr.print("/me" + user + " has already joined")
    else{
      names.push(user)
      drrr.print("/me" + user + " joins the game")
    }
  }
  event [msg, me] (user, cont: "^-1$") => {
    if names.includes(user) then {
      names.splice(names.indexOf(user), 1);
      drrr.print("/me" + user + " leaves the game")
    }
    else drrr.print("/me" + user + " is not in the game")
  }
  event [msg, me] (user, cont: "^/who$") => {
    if names.length then {
      drrr.print("Player:\n" + names.map((user, index) => String(index + 1) + ". " + user).join("\n"))
    } else drrr.print("/me No player")
  }
  event [msg, me] (user, cont: "^/start$") => {
    if names.length in rolesMap then going prelude
    else drrr.print("/meNeed 5 - 8 people, " + String(names.length) + " people current.")
  }
  announce("/me [+1] join, [-1] leave, [/who] participator, [/start] start")
}

newPlayer = (name, role) => {
  name: name,
    life: true,
    role: role,
    rname: roleName[role],
    diefor: ""
}

state prelude {
  drrr.print("Player:\n" + names.map((user, index) => String(index + 1) + ". " + user).join("\n"))

  roles = rolesMap[names.length]
  roles.sort(()=>Math.random() - 0.5)

  names.forEach((name, index) => {
    players[name] = newPlayer(name, roles[index]);
  })

  wolves = filter(players, (p, index) => p.role == 0).map(p => p.name).join(", ")
  forEach(players, (p, index) => {
    if p.role then later index * 3500 drrr.dm(p.name, "You are " + p.rname)
    else later index * 3500 drrr.dm(p.name, "You are werewolf, all werewolves are " + wolves)
  })

  later names.length * 4000 going night
}

state night {
  scene("/meNight, please close your eyes/night")
  later 3500 going night_seer
}

state night_seer {

  announce("/me Seer, open your eyes, whose info do you want to know (*dm* [name])...")
  if filter(players, (p, idx) => p.role == 2 && p.life).length then {
    asked = 0

    forEach(players, (p, index) => {
      if p.life && p.role == 2 then
      later 1000 drrr.dm(p.name, "What do you want to know")
    })

    event dm (seer, cont) => {
      if seer in players then {
        if !asked && players[seer].role == 2 then {
          if players[seer].life then {
            if !asked then {
              the = select(cont, names)
              if the then {
                drrr.dm(seer, if players[the].role > 0 then "people" else "werewolf" )
                asked = 1
                later 3500 going night_wolf
              } else drrr.dm(seer, "No such people")
            } else drrr.dm(seer, "Only one asking is allowed")
          } else drrr.dm(seer, "You are dead seer")
        } else drrr.dm(seer, "You are not seer, BE QUIET")
      } else drrr.print("/me@" + seer + " BE QUIET!")
    }
  } else later (getRandom(10, 30) * 1000) going night_wolf
}

state night_wolf {
  announce("/me Werewolves, open your eyes, take actions (*dm* [no] or [name])...")
  killed = 0

  forEach(players, (p, index) => {
    if p.life && p.role == 0 then
    later (2000 * index) drrr.dm(p.name, "Kill people?")
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
              } else drrr.dm(wolf, "No such people")
            } else drrr.dm(wolf, "Only one kill is allowed")
          } else {
            victim = []
            killed = 1
            later 3500 going night_witch
          }
        } else drrr.dm(user, "You are dead werewolf")
      } else drrr.dm(user, "You are not werewolf")
    } else drrr.print("/me@" + wolf + " BE QUIET!")
  }
}

state night_witch {

  announce("/me Witch, open your eyes, take actions (*dm* [no] or [save] or [poison name])...")
  if filter(players, (p, idx) => p.role == 3 && p.life).length then {
    poisoned = 0

    names.forEach((name, index) => {
      if players[name].role == 3 then {
        later 3500 drrr.dm(name, "Victim:" + victim.join(", "))
      }
    })
    event dm (witch, cont) => {
      if witch in players then {
        if players[witch].role == 3 then {
          if players[witch].life then {
            if !poisoned then {
              the = select(cont, names)
              if the == witch then {
                drrr.dm(witch, "Cannot save yourself")
              } else if cont.startsWith("no") then {
                poisoned = 1
                later 3500 going night_end
              } else if cont.startsWith("ignore") then {
                poisoned = 1
                later 3500 going night_end
              } else if cont.includes("save") then {
                victim = []
                poisoned = 1
                later 3500 going night_end
              } else if cont.includes("poison") then {
                if the.length then {
                  if players[the].life then{
                    if !victim.includes(the)
                    then {
                      victim.push(user)
                      players[user].diefor = "poison"
                    }
                    poisoned = 1
                    later 3500 going night_end
                  } else drrr.dm(user, "The man is dead")
                } else drrr.dm(user, "No such people")
              } else drrr.dm(user, "Unknown command")
            } else drrr.dm(user, "Only poison or save once is allowed")
          } else drrr.dm(user, "You are dead witch")
        } else drrr.dm(user, "You are not witch")
      } else drrr.print("/me@" + witch + " BE QUIET!")
    }
  } else later (getRandom(10, 30) * 1000) going night_end
}

state hunter_ask {
  forEach(players, (p, index) => {
    if p.life && p.role == 4 then
    later 1000 drrr.dm(p.name, "send any message in 15 secs to show you are hunter")
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
  drrr.print("/meHunter @" + hunter + " fired...")
  event [msg, me] (hunter, cont) => {
    if hunter in players then {
      if players[hunter].role == 4 then {
        the = select(cont, names)
        if the then {
          if players[the].life then {
            players[the].life = false
            drrr.print(", and hit " + the + " before he died")
            go_next()
          } else drrr.dm(user, "The man is dead")
        } else drrr.dm(user, "No such people")
      }
    }
  }
}

state night_end {

  show = 0

  go_next = {
    drrr.print("/meSurvivor:" + filter(players, p => p.life).map(p => p.name).join(", "))
    if passJudge() < 0
    then later 3500 going day_discussion
    else later 3500 going game_over
  }

  scene("/meSun Arise/morning")

  later 3000 {
    if victim.length then {

      announce("/me" + victim.map((x)=>"@" + x).join(", ") + "is dead")

      victim.forEach((name) => {
        if players[name].role == 4 && players[name].diefor == "bite"
        then visit hunter_ask
      })

      later 3500 {
        drrr.print("/meR.I.P for 30 secs")
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
      announce("/meMorning, no one died")
      later 3500 go_next()
    }
  }
}

state day_discussion {
  index = 0
  while (index < names.length) && (players[names[index]].life == 0) index++;
  announce("/me@" + names[index] + " start speaking (end with [over])")
  event [msg, me] (user, cont) => {
    if names[index] == user then {
      if cont.includes("over") then {
        index++ // += bug?
        while (index < names.length) && (players[names[index]].life == 0) index++;
        if index >= names.length
        then later 3500 going day_vote
        else announce("/me@" + names[index] + " start speaking (end with [over])")
      }
    }
  }
}

state day_vote {
  announce("/mePlease start voting ([/vote] check voted, [/urge] reminder, *dm* [name] or [no] abstain)")
  vote = {}

  survivor = filter(players, (p, idx) => p.life)

  forEach(players, (p, index) => {
    if p.life then later (2000 * index) drrr.dm(p.name, "Please dm me to vote, candidates:\n" + survivor.map((u) => "@" + u.name).join("\n"))
  })

  event dm (user, cont) => {
    if user in players then {
      if players[user].life then {
        if vote.hasOwnProperty(user)
        then drrr.dm(user, "Only one vote is allowed")
        else {
          the = select(cont, names)
          if the then {
            if players[the].life then {
              vote[user] = the
              drrr.dm(user, "Ok, you vote " + the)
              if Object.keys(vote).length == filter(players, p => p.life).length
              then later 3500 going day_execute
            } else drrr.dm(user, the + " is already dead")
          }
          else if cont.startsWith("no") then {
            vote[user] = "no"
            drrr.dm(user, "Ok, abstain")
            if Object.keys(vote).length == filter(players, p => p.life).length
            then later 3500 going day_execute
          } else drrr.dm(user, "No such people")
        }
      } else drrr.dm(user, "You are already dead")
    } else drrr.print("/me@" + user + " BE QUIET!")
  }
  event [msg, me] (user, cont: "^/vote$") => {
    drrr.print("/meCurrent voted:" + Object.keys(vote).join(", "))
  }
  event [msg, me] (user, cont: "^/urge$") => {
    drrr.print("/me" + survivor.filter(u => !(u.name in vote)).map((u) => "@" + u.name).join(", ") + " vote, please!")
  }
}

state day_execute {

  show = 0

  go_next = {
    drrr.print("/meSurvivor:" + filter(players, p => p.life).map(p => p.name).join(", "))
    if passJudge() < 0
    then later 3500 going night
    else later 3500 going game_over
  }

  louis = most(Object.values(vote).filter((x) => x != "no"))
  announce("/meExecute:" + louis.map((x) => "@" + x).join(", "))

  louis.forEach((name) => {
    if players[name].role == 4
    then visit hunter_ask
  })

  later 3500 {
    drrr.print("/meR.I.P for 30 secs")
    later 30000 {
      louis.forEach((name) => {
        players[name].life = false;
        players[name].diefor = "vote";
      })
      if show
      then visit hunter_fire
      else go_next()
    }
  }
}

state game_over {
  cur_role = map(players, (p, idx) => p.name + ":" + p.rname).join("\n")
  if passJudge()
  then drrr.print("/meGame Over, people win")
  else drrr.print("/meGame Over, werewolf win")
  later 2000 drrr.print(cur_role)
}

werewolf_en = () => {
  event [msg, me, dm] (user, cont: "^/char$") => {
    if user in players then {
      wolves = filter(players, (p, index) => p.role == 0).map(p => p.name).join(", ")
      if players[user].role then drrr.dm(user, "You are " + players[user].rname)
      else drrr.dm(user, "You are werewolf, all werewolves are:" + wolves)
    } else drrr.dm(user, "You are not player")
  }

  event [msg, me, dm] (user, cont: "^/all$") => {
    if Object.keys(players).length
    then drrr.print("Players:\n" + map(players, (p, index) => String(index + 1) + ". " + p.name + (if p.life then " Alive" else " Dead")).join("\n"))
    else drrr.print("/meNo player, please start the game")
  }

  event [msg, me, dm] (user, cont: "^/now$") => {
    drrr.print(announcement)
  }

  event [msg, me, dm] (user, cont: "^/help$") => {
    drrr.print("/help The manual\n/now Game State\n/all All Players\n/char Your Role\n/werewolf Start Participating (Will restart if game is running)")
  }

  event [msg, me] (user, cont: "^/werewolf$") => going prepare
}
