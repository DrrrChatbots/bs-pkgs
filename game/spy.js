words = "玫瑰,月季;董永,许仙;若曦,晴川;谢娜,李湘;孟非,乐嘉;牛奶,豆浆;保安,保镖;白菜,生菜;辣椒,芥末;金庸,古龙;赵敏,黄蓉;海豚,海狮;水盆,水桶;唇膏,口红;森马,以纯;烤肉,涮肉;气泡,水泡;纸巾,手帕;杭州,苏州;香港,台湾;首尔,东京;橙子,橘子;葡萄,提子;太监,人妖;蝴蝶,蜜蜂;小品,话剧;裸婚,闪婚;新年,跨年;吉他,琵琶;公交,地铁;剩女,御姐;童话,神话;作家,编剧;警察,捕快;结婚,订婚;奖牌,金牌;孟飞,乐嘉;那英,韩红;面包,蛋糕;作文,论文;油条,麻花;壁纸,贴画;枕头,抱枕;手机,座机;同学,同桌;婚纱,喜服;老佛爷,老天爷;魔术师,魔法师;鸭舌帽,遮阳帽;双胞胎,龙凤胎;情人节,光棍节;丑小鸭,灰姑娘;富二代,高富帅;生活费,零花钱;麦克风,扩音器;郭德纲,周立波;图书馆,图书店;男朋友,前男友;洗衣粉,皂角粉;牛肉干,猪肉脯;泡泡糖,棒棒糖;小沈阳,宋小宝;土豆粉,酸辣粉;蜘蛛侠,蝙蝠侠;口香糖,木糖醇;酸菜鱼,水煮鱼;小笼包,灌汤包;薰衣草,满天星;张韶涵,王心凌;刘诗诗,刘亦菲;甄嬛传,红楼梦;甄子丹,李连杰;包青天,狄仁杰;大白兔,金丝猴;果粒橙,鲜橙多;沐浴露,沐浴盐;洗发露,护发素;自行车,电动车;班主任,辅导员;过山车,碰碰车;铁观音,碧螺春;十面埋伏,四面楚歌;成吉思汗,努尔哈赤;谢娜张杰,邓超孙俪;福尔摩斯,工藤新一;贵妃醉酒,黛玉葬花;流星花园,花样男子;神雕侠侣,天龙八部;天天向上,非诚勿扰;勇往直前,全力以赴;鱼香肉丝,四喜丸子;麻婆豆腐,皮蛋豆腐;语无伦次,词不达意;鼠目寸光,井底之蛙;近视眼镜,隐形眼镜;美人心计,倾世皇妃;夏家三千金,爱情睡醒了;降龙十八掌,九阴白骨爪;红烧牛肉面,香辣牛肉面;江南style,最炫民族风;梁山伯与祝英台,罗密欧与朱丽叶;"

players = {}
names = []
vote = {}

me = str => "/me" + str

newPlayer = (name, role) => {
  name: name,
  spy: false,
  life: true,
  word: "no word",
}

select = (cont, users) => {
  result = users.filter((u) => cont.includes(u))
  if result.length
  then result.reduce((a, b)=> if a.length > b.length then a else b)
  else ""
}

announce = (msg) => {
  announcement = msg
  drrr.print(msg)
}

scene = (desc) => {
  announcement = desc
  if drrr.room.host == drrr.user.id
  then drrr.descr(desc.replace("/me", ""))
  else drrr.print(desc)
}

most = (arr) => {
  counts = arr.reduce((a, c) => {
    a[c] = (if a.hasOwnProperty(c) then a[c] else 0) + 1
    a
  }, Object())
  //maxCount = Math.max.apply(Object(), Object.values(counts))
  //print(maxCount)
  //Object.keys(counts).filter(k => counts[k] === maxCount)
  Object.keys(counts).filter(k => counts[k] >= (arr.length / 2))
}

setAlive = (name, state) => {
  if drrr.room.gameRoom && drrr.room.host == drrr.user.id
  then drrr.alive(name, state)
}

spyNumber = () => {
  len = Object.values(players).length
  if len < 6 then 0
  else if len < 9 then 1
  else if len < 13 then 2
  else if len < 17 then 3
  else if len < 21 then 4
  else if len >= 21 then 0
}

quitPlayer = name => {
  if players[name] then {
    delete players[name]
    "bye, " + name
  }
  else "'" + name + "' not in game"
}

getRandom = (min,max) => {
  Math.floor(Math.random()*(max-min+1))+min
}

map = (obj, func) => Object.values(obj).map(func)
forEach = (obj, func) => Object.values(obj).forEach(func)
filter = (obj, func) => Object.values(obj).filter(func)

state dispatch {
  pairs = words.split(";")
  pairs.sort(()=>Math.random() - 0.5)
  pair = pairs.pop().split(",")
  pair.sort(()=>Math.random() - 0.5)
  pubWord = pair[0]
  spyWord = pair[1]
  names = Object.keys(players)
  names.sort(()=>Math.random() - 0.5)
  spyName = names.slice(0, spyNumber())
  Object.values(players).forEach(p => {
    p.spy = spyName.includes(p.name)
    p.word = if p.spy then spyWord else pubWord
    p.life = true
  })
  forEach(players, (p, index) => {
    later (index * 1500 + 1000) drrr.dm(p.name, p.word)
  })
  later names.length * 3000 going day_discussion
}

state day_discussion {
  index = 0
  while (index < names.length) && (!players[names[index]].life) index++;

  drrr.print("請" + names[index] + "開始發言, over 結尾")

  event [msg, me] (u, cont) => {
    if (names[index] == u && cont.trim().endsWith("over"))
      || ((names.includes(u) || u == drrr.user.name) && cont.startsWith("/skip")) then {
      index++ // += bug?
      while (index < names.length) && (!players[names[index]].life) index++;
      if index >= names.length
      then later 3500 going day_vote
      else drrr.print("請" + names[index] + "開始發言, over 結尾")
    }
  }
}

state day_vote {

  drrr.print("開始投票")
  vote = {}

  survivor = filter(players, (p, idx) => p.life)

  later 1500 drrr.print("候選人有：\n" +
    survivor.filter(u => u.life).map((u) => "@" + u.name).join("\n"))

  lock = false

  event [msg, me, dm] (user, cont: "^/vote\\s+\\S+|^/execute", tc, url, req) => {
    cont = cont.replace("/vote", "").trim()
    if user in players && !lock then {
      if players[user].life then {
        if cont.startsWith("/execute")
        then {
          lock = true
          later 1500 going day_count_vote
        }
        else if vote.hasOwnProperty(user)
        then drrr.print("只能投一次")
        else {
          the = select(cont, names)
          if the then {
            if players[the].life then {
              vote[user] = the

              if req.type == "dm"
              then drrr.dm(user, "ok 你投了 " + the)
              else drrr.print("ok 你投了 " + the)

              if Object.keys(vote).length == filter(players, p => p.life).length
              then {
                lock = true
                later 3500 going day_count_vote
              }
            } else drrr.print(the + " 已經死了")
          }
          else if cont.startsWith("no") then {
            vote[user] = "no"

            if req.type == "dm"
            then drrr.dm(user, "棄票")
            else drrr.print("棄票")

            if Object.keys(vote).length == filter(players, p => p.life).length
            then {
              lock = true
              later 3500 going day_count_vote
            }
          } else drrr.print("沒這個人")
        }
      } else drrr.print("沒投票權")
    } else drrr.print("安靜 @" + user)
  }
  event [msg, me, dm] (user, cont: "^/vote\\s*$", tc, url, req) => {
    if req.type == "dm"
    then drrr.dm(user, me("目前投票: " + (Object.keys(vote).join(", "))))
    else drrr.print(me("目前投票: " + (Object.keys(vote).join(", "))))
  }
  event [msg, me] (user, cont: "^/urge\\s*$") => {
    drrr.print(me((survivor.filter(u => !(u.name in vote) && u.life).map((u) => "@" + u.name).join(", ")) + "快點投票！"))
  }
}

state day_count_vote {
  drrr.print(Object.keys(vote).map(k => String(k) + " => " + String(vote[k])).join("\n"))
  setTimeout(() => going day_execute, 3000)
}

state day_execute {

  go_next = {
    drrr.print(me(("倖存者：") + (filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going day_discussion
    else later 3500 going game_over
  }

  louis = most(Object.values(vote).filter((x) => x != "no"))

  if louis.length > 1 then {
    if vote_times == 1 then {
      announce(me(("重新投票：") + (louis.map((x) => "@" + x).join(", "))))
      going day_vote
    }
    else {
      vote_times = 0
      announce(me(("不執行死刑")+(louis.map((x) => "@" + x).join(", "))))
      go_next()
    }
  }
  else {
    vote_times = 0
    announce(me(("執行死刑：")+(louis.map((x) => "@" + x).join(", "))))

    louis.forEach((name, index) => {
      players[name].life = false;
      players[name].right = false;
      players[name].diefor = "vote";
      setTimeout(() => setAlive(name, players[name].life), (index + 1) * 1500)
    })

    later ((louis.length + 2) * 1500) {
      go_next()
    }
  }
}

passJudge = () => {
  spy = Object.values(players).filter(p => p.spy && p.life)
  peo =  Object.values(players).filter(p => (!p.spy) && p.life)
  if peo.length <= 2 then 0
  else if spy.length == 0 then 1
  else -1
}

state game_over {
  cur_role = map(players, (p, idx) => p.name + ":" + (if p.spy then "間諜" else "平民") + " " + (if p.life then ("倖存") else (("死了")))).join("\n")
  result = passJudge()
  if result == 0
  then scene(me(("間諜勝")))
  else if result == 1
  then scene(me(("平民勝利")))
  else scene(me(("平手")))
  later 2000 drrr.print(cur_role)
}

spy = () => {
  event [msg, me] (name, cont: "^\\.s\\s*$") => {
    if spyNumber() then going dispatch
    else drrr.print("players from 6 - 20")
  }

  event [msg, me] (name, cont: "^\\.j\\s*$") => {
    if players[name]
    then drrr.print("already in game")
    else{
      players[name] = newPlayer(name)
      drrr.print("welcome, " + name)
    }
  }

  event [msg, me] (name, cont: "^\\.q\\s*$") => {
    drrr.print(quitPlayer(name))
  }

  event [msg, me] (name, cont: "^\\.i\\s*$") => {
    if players[name] then drrr.dm(name, players[name].word)
    else drrr.dm(name, "you're not player")
  }

  event [msg, me] (name, cont: "^(\\.h|help)\\s*$") => {
    drrr.print(
      [ ".j join"
      , ".q quit"
      , ".s start"
      , ".i word"
      , ".h help"
      ].join("\n")
    )
  }
}
