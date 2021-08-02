curIndex = 0
players = {}
playerNames = []
restHouses = 32
restHotels = 12
txIndex = 0
txContracts = {}

newPlayer = name => {
  name: name, money: 10500,
  ests: {}, jail: 0, lics: 0
}

newTxContract = (A, astA, B, astB) => {
  id = txIndex; txIndex += 1;
  txContracts[id] = { id: id, A: A, astA: astA, B: B, astB: astB }
}

showPlayer = name => {
  player = players[name];
  drrr.print(player.name + "\n"
    + "$:" + player.money + "\n"
    + "lics:" + player.lics + "\n"
    + "ests:" + Object.keys(player.ests).map(
      k => "(" + k + "," + player.ests[k] + ") ").join("\n")
  )
}

assocPlayer = name => {
  if playerNames.includes(name)
  then players[name] else false
}

specify = name => "^" + name + "$"

isNumeric = str => !isNaN(str)

textMap =
("停由機等愛車康福水明探\n" +
 "三　　　　南　　　　華\n" +
 "二　　　　　　　　　正\n" +
 "運　　　　　　　　　運\n" +
 "一　　　　　　　　　壽\n" +
 "車中　　　　　　　雄車\n" +
 "生　　　　　　　　　機\n" +
 "權　　　　　　　　新南\n" +
 "電　　　　　　　　　財\n" +
 "族　　　　北　建　　北\n" +
 "牢信仁機忠車所北運南起\n" );

earn = val => p => p.money += val
pay = val => p => p.money -= val

goTo = name => player => {
  index = map.findIndex(m => m.name == name);
  if player.loc > index then player.money += 2000;
  play.loc = index;
}

fixHouse = (house, hotel) => player => {
  Object.values(player.ests).forEach(c => {
    player.money -= c % 5 * house;
    player.money -= Math.floor(c / 5) * hotel;
  })
}

getLicense = player => { player.lics += 1 }

earnEach = value => (player => {
  playerNames
    .filter(n => n != player.name)
    .forEach(name => {
      players[name].money -= value;
  })
  player.money += (playerNames.length - 1) * value;
})

cards = {
  "機會": [
    ["擊落敵國米格機，得獎金3000元", earn(3000)],
    ["檢舉間諜，得獎金2000元", earn(2000)],
    ["經營小本生意，獲利1000元", earn(1000)],
    ["繳赴美留學保證金，2400元", pay(2400)],
    ["付學費，1500元", pay(1500)],
    ["整修自己所有房屋，房屋每棟250元、旅館每棟1000元", fixHouse(250, 1000)],
    ["付戶稅，房屋每棟400元、旅館每棟1150元", fixHouse(400, 1150)],
    ["前進到博愛路，如經過『由此去』得2000元", goTo("博愛路")],
    ["前進到民族路，如經過『由此去』得2000元", goTo("民族路")],
    ["直達台中車站，如經過『由此去』得2000元", goTo("台中車站")],
    ["銀行付你利息，500元", earn(500)],
    ["行車超速，罰款150元", pay(150)],
    ["酗酒鬧事，罰款200元", pay(200)],
    ["出獄許可證，此證可保留或出售", getLicense],
    ["拘票-立刻坐牢，不得經『由此去』", goJail],
    ["運動跳水冠軍，得獎金1000元", earn(1000)],
  ],
  "命運": [
    ["敬軍愛國，捐款1000元", pay(1000)],
    ["中『愛國獎券』五獎，得2000元", earn(2000)],
    ["當棉被一條，得500元", earn(500)],
    ["賣『黃牛票』，罰款1000元或取『機會』一張"],
    ["路不拾遺失主酬勞，得1000元", earn(1000)],
    ["出獄許可證，此證可保留或出售", getLicense],
    ["婦產科醫院，1000元", earn(1000)],
    ["整修自己所有房屋，房屋每棟250元、旅館每棟1000元", fixHouse(250, 1000)],
    ["選美會獲得亞軍，得100元", earn(100)],
    ["拘票-立刻坐牢，不得經『由此去』", goJail],
    ["小偷光顧，損失500元", pay(500)],
    ["工作努力，得獎金2000元", earn(2000)],
    ["付保險費，500元", pay(500)],
    ["這是你的生日，向每人收取禮金100元", earnEach(100)],
    ["得美國華盛頓大學，獎學金2000元", earn(2000)],
  ]
}

mortgage = est => est.price / 2;

randomInt = (min, max) => Math.floor(Math.random()*(max-min+1))+min;

draw = (name, player) => {
  card = cards[name][Math.floor(Math.random()*cards[name].length)]
  drrr.print(card[0]); card[1](player);
  going nextRound;
};

goJail = player => {
  player.jail = 3;
  player.loc = map.findIndex(l => l.name == "坐牢");
}

payEstate = (this, player) => {
  rent = this.rent[this.owner.ests[this.name]];
  player.money -= rent;
  this.owner.money += rent;
  drrr.print("@" + player.name + "支付租金 "
    + String(rent) + " 給 @" + this.owner.name);
  going nextRound;
}

payPublic = (this, player) => {
  count = Object.keys(this.owner.ests).filter(n => "水電".includes(n.icon)).length
  event [me, msg] (name: specify(player.name), cont: "\\.r") => {
    rent = 0;
    a = randomInt(1, 6)
    b = randomInt(1, 6)
    drrr.print("(" + String(a) + ", " + String(b) + ")");
    rent = (a + b) * this.rent[count]
    player.money -= rent;
    this.owner.money += rent;
    drrr.print("@" + player.name + "支付租金 "
      + String(rent) + " 給 @" + this.owner.name);
    going nextRound;
  }
}

payStation = (this, player) => {
  count = Object.keys(this.owner.ests).filter(n => n.includes("車站")).length
  rent = this.rent[count];
  player.money -= rent;
  this.owner.money += rent;
  drrr.print("@" + player.name + "支付租金 "
    + String(rent) + " 給 @" + this.owner.name);
  going nextRound;
}

onEstate = (this, player) => {
  if owner then this.pay(this. player);
  else {
    drrr.print("想要買下這塊地嗎？(.y/.n)")
    event [me, msg] (name: specify(player.name), cont: "\\.y") => {
      if player.money >= this.price then {
        player.money -= this.price;
        this.owner = player;
        player.ests[this.name] = 0;
        drrr.print("@" + player.name + " 以 " + this.price + " 買下了" + this.name)
        going nextRound
      } else drrr.print("錢不夠");
    }
    event [me, msg] (name: specify(player.name), cont: "\\.n") => {
      drrr.print("開始三十秒競拍：" + this.name + " 起價："+ this.price +"")
      count = 30; issue = this.price; issuer = false;
      event [me, msg] (name, cont: "^\\d+$") => {
        cur = players[name]
        if cur then{
          val = Number(cont)
          if val >= issue && cur.money >= val then {
            issuer = cur;
            issue = val;
            drrr.print("@" + name + " 出價 " + issue)
            count = 30;
          }
        } else drrr.print("@" + name + " 不是玩家")
      }

      timer 1000 {
        count -= 1
        if !count then {
          if issuer then {
            issuer.money -= rent;
            this.owner = issuer;
            issuer.ests[this.name] = 0;
            drrr.print("@" + issuer.name +
              " 以 " + issue + " 得標" + this.name)
          }
          else drrr.print(this.name + " 流標")
          going nextRound
        }
        else if count == 5 then drrr.print("倒數 5 秒")
      }
    }
  }
}


Estate = (icon, color, name, price, rent, build) => {
  icon: icon, color: color, name: name,
  price: price, rent: rent, build: build,
  owner: false, pay: payEstate, action: onEstate
}

Public = (icon, name, price, rent) => {
  icon: icon, name: name,
  price: price, rent: rent,
  pay: payPublic, action: onEstate
}

Station = (icon, name, price, rent) => {
  icon: icon, name: name,
  price: price, rent: rent,
  pay: payStation, action: onEstate
}

Tax = (icon, name, price) => {
  icon: icon, name: name,
  price: price, action: (this, player) => {
    player.money -= this.price;
    drrr.print("支付" + this.name + " " + this.price);
    going nextRound;
  }
}

Chance = (icon, name) => {
  icon: icon, name: name,
  action: (_, player) => draw(name, player)
}

Jail = (icon, name) => {
  icon: icon, name: name,
  action: (_, p) => {
    goJail(p);
    going nextRound;
  }
}

Pass = (icon, name) => {
  icon: icon, name: name
}

map = [
  Pass("起", "由此去得 2000"),
  Estate("建南", "C", "建國南路", 600, [20, 100, 300, 900, 1600, 2500], 500),
  Chance("運", "命運"),
  Estate("建北", "C", "建國北路", 600, [40, 200, 600, 1800, 3200, 4500], 500),
  Tax("所", "所得稅", 2000),
  Station("北車","台北車站", 2000, [250, 500, 1000, 2000]),
  Estate("忠", "B", "忠孝路", 1000, [60, 300, 900, 3000, 4200, 5000], 1000),
  Chance("機", "機會"),
  Estate("仁", "B", "仁愛路", 1000, [60, 300, 900, 3000, 4200, 5000], 1000),
  Estate("信", "B", "信義路", 1200, [80, 1000, 1200, 3600, 6400, 9000], 1000),
  Jail("牢", "坐牢"),
  Estate("族", "P", "民族路", 1400, [100, 500, 1000, 4000, 4500, 6000], 1000),
  Public("電", "電力公司", 1500, [10, 100]),
  Estate("權", "P", "民權路", 1400, [100, 500, 1500, 4500, 6250, 7500], 1000),
  Estate("生", "P", "民生路", 1600, [120, 600, 1800, 4800, 6500, 8000], 1000),
  Station("中車", "台中車站", 2000, [250, 500, 1000, 2000]),
  Estate("一", "O", "延平路一段", 1800, [140, 650, 2000, 6000, 10000, 11000], 1500),
  Chance("運", "命運"),
  Estate("二", "O", "延平路二段", 1800, [140, 650, 2000, 6000, 10000, 11000], 1500),
  Estate("三", "O", "延平路三段", 2200, [180, 900, 2700, 6500, 8000, 10000], 1500),
  Pass("停", "停車場"),
  Estate("由", "R", "自由路", 2200, [180, 900, 2500, 7000, 8750, 10500], 1500),
  Pass("機", "機會"),
  Estate("等", "R", "平等路", 2200, [180, 900, 2500, 7000, 8750, 10500], 1500),
  Estate("愛", "R", "博愛路", 2400, [200, 1000, 2700, 8000, 8500, 12000], 1500),
  Station("南車", "台南車站", 2000, [250, 500, 1000, 2000]),
  Estate("康", "Y", "健康路", 2600, [220, 1100, 3300, 8000, 9750, 11500], 1500),
  Estate("福", "Y", "五福路", 2600, [220, 1100, 3300, 8000, 9750, 11500], 1500),
  Public("水", "自來水廠", 1500, [10, 100]),
  Estate("明", "Y", "光明路", 2800, [220, 1200, 3600, 8500, 10250, 12000], 1500),
  Pass("探", "進監牢（探監）"),
  Estate("華", "G", "中華路", 3000, [260, 1300, 3900, 9000, 11000, 12750], 2000),
  Estate("正", "G", "中正路", 3000, [260, 1300, 3900, 9000, 11000, 12750], 2000),
  Chance("運", "命運"),
  Estate("壽", "G", "介壽路", 3200, [280, 1500, 4500, 10000, 12000, 14000], 2000),
  Station("雄車", "高雄車站", 2000, [250, 500, 1000, 2000]),
  Chance("機", "機會"),
  Estate("新南", "g", "新生南路", 3500, [350, 1750, 5000, 11000, 13000, 15000], 2000),
  Tax("財", "財產稅", 750),
  Estate("新北", "g", "新生北路", 4000, [500, 2000, 6000, 14000, 17000, 20000], 2000),
]

valEst = map.filter(e => e.price).map(e => e.name)

try_toss_same_point = player => {
  count = 3
  drrr.print("想要擲骰子嗎？（同點即可出獄）.r\n老實蹲著 .n\n使用出獄許可證 .l")
  event [msg, me] (name: specify(player.name), cont: "^\\.r") => {
    a = randomInt(1, 6); b = randomInt(1, 6)
    drrr.print("(" + String(a) + ", " + String(b) + ")");
    if a == b then {
      player.jail = 0;
      toss_go(player);
    }
    else{
      count -= 1;
      if count then drrr.print("剩下 " + String(count) + " 次機會");
      else going nextRound;
    }
  }
  event [me, msg] (name: specify(player.name), cont: "^\\.n") => going nextRound;
  event [me, msg] (name: specify(player.name), cont: "^\\.l") => {
    if !player.lics then drrr.print("你沒有出獄許可證");
    else { player.lics -= 1; player.jail = 0; toss_go(player); }
  }
}

toss_go = player => {
  drrr.print("/me@" + player.name + " 請用 .r 擲骰")
  rolled = false
  event [me, msg] (name: specify(player.name), cont: "\\.r") => {
    if !rolled then {
      rolled = true
      loc = (player.loc + randomInt(1, 6) + randomInt(1, 6)) % map.length;
      if player.loc && loc && loc < player.loc then player.money += 2000;
      player.loc = loc;
      drrr.print("> " + loc + " " + map[loc].name)
      // TODO show map
      if map[loc].action
      then map[loc].action(map[loc], player);
      else {
        drrr.print("no action, next")
        going nextRound;
      }
    }
  }
}

state nextRound {
  player = players[playerNames[curIndex]]
  showPlayer(player)
  if player.money < 0 then { drrr.print(player.name + " 破產") }
  // TODO Bankruptcy
  curIndex = (curIndex + 1) % playerNames.length;
  going Round
}

state Round {
  player = players[playerNames[curIndex]];
  if player.jail then player.jail -= 1;
  if player.jail then try_toss_same_point(player);
  else toss_go(player);
}

TxDetail = (id, user, ast) => {
  "Tx Detail #" + id + " of " + user.name + "\n"
  + (if sutff.money then "$: " + ast.money + "\n" else "")
  + (if sutff.lics then "lics: " + ast.lics + "\n" else "")
  + (if ast.ests then ast.ests.join("\n") else "")
}

parseAssets = str => {
  m = 0; ests = []; lics = 0;
  str.split(" ").forEach(ast => {
    if ast == "lic" then lics += 1
    else if isNumeric(ast) then m += Number(ast)
    else if valEst.includes(ast) then est.push(ast)
  })
  asset = {}
  if m then asset.money = m;
  if ests.length then asset.ests = ests
  if lics then asset.lics = lics
  asset
}

checkAsset = (usr, ast) => {
  usr.money > (ast.money || 0)
    && usr.lics > (ast.lics || 0)
    && ast.ests.every(e => usr.ests[e])
}

fullfill = contr => {
  if !checkAsset(contr.A, contr.astA) then {
    drrr.print(contr.A.name + " doesn't has enough asset")
    delete txContracts[contr.id]
  }
  else if !checkAsset(contr.B, contr.astB) then {
    drrr.print(contr.B.name + " doesn't has enough asset")
    delete txContracts[contr.id]
  }
  else {
    m = (contr.astA.money || 0) - (contr.astB.money || 0)
    contr.A.money -= m; contr.B.money += m;
    l = (contr.astA.lics || 0) - (contr.astB.lics || 0)
    contr.A.lics -= l; contr.B.lics += l;
    contr.astA.ests.forEach(est => {
      B.ests[est] = A.ests[est]; delete A.ests[est];
    })
    contr.astB.ests.forEach(est => {
      A.ests[est] = B.ests[est]; delete B.ests[est];
    })
  }
}

monopoly = () => {
  drrr.print("monopoly rock'n roll");
  running = false;
  event [msg, me] (name, cont: "^.join\\s*$") => {
    if playerNames.includes(name)
    then drrr.print("@" + name + " already joined")
    else{
      playerNames.push(name)
      players[name] = newPlayer(name)
      drrr.print(name + " join the game")
    }
  }
  event [msg, me] (name, cont: "^.go\\s*$") => {
    if running then drrr.print("game is running");
    else if !playerNames.length then drrr.print("no user now")
    else { running = true; going Round; }
  }
  event [msg, me] (name, cont: "^.map\\s*$") => {
    drrr.print(textMap);
  }
  event [msg, me] (name, cont: "^.asset\\s*$") => {
    if playerNames.includes(name)
    then showPlayer(name)
    else drrr.print("not in game")
  }
  event [msg, me] (name, cont: "^\\.tx.*for.*") => {
    parts = cont.substr(3).split("for")
    a = parts[0].split(" ");
    partB = parts[1].split(" ")
    b = partB.slice(1)
    A = assocPlayer(name)
    B = assocPlayer(partB[0])
    if A && B then {
      contr = newTxContract(A, parseAssets(a), B, parseAssets(b))
      drrr.print(TxDetail(contr.A, contr.astA))
      drrr.print(TxDetail(contr.B, contr.astB))
    }
  }
  event [msg, me] (name, cont: "^\\.acc\\s*\\d+$") => {
    id = cont.replace(".acc", "")
    if !txContracts[id]
    then drrr.print("contract #" + id + " no exist")
    else if name != txContracts[id].B.name
    then drrr.print("#" + id + " should be assigned by " + txContracts[id].B.name)
    else fullfill(txContracts[id])
  }
  // TODO build, destory house, consider hotel limit
  // TODO auction house
  // TODO mortgage related
}

bkg_main = (name, room, main) => {
  if !name then name = "bkg-bot";
  if !room then room = "roomID";
  drrr = new Bot(name);
  globalThis.drrr = drrr;
  drrr.cookie = localStorage.getItem("cookie");
  next = cookie => {
    if cookie then localStorage.setItem("cookie", cookie);
    if room == "roomID"
    then print("set your roomID");
    else drrr.join(room, main);
  }
  if drrr.cookie then drrr.getProfile(() => next());
  else drrr.login(() => next(drrr.cookie));
}

bkg_main("monopoly", "6fNt8dbK5L", () => {
 monopoly(); // remember load the werewolf pkg
})
