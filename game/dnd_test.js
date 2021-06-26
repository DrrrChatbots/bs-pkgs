// usage:
//   dnd_test();

// from https://unnamed42.github.io/2016-06-30-%E5%AE%98%E6%96%B9%E7%89%88DnD%E9%98%B5%E8%90%A5%E6%B5%8B%E8%AF%95.html

query = [{"chapter": "第一卷：对亲戚的看法",
  "questions": [{"options": [{"infl": "xg",
                              "value": "2",
                              "text": "接受批评，改变方法"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "尝试与长辈妥协，用折衷的方法"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "忽略长辈的轻蔑，诽谤他们"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "千方百计使他们收声"}],
                 "text": "长辈在家族中公开反对你，你会："},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "不用想，肯定会"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "会，但有点不情愿"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "除非我肯定我会很快重回工作岗位"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "不会"}],
                 "text": "你会放弃一个前途无量的职业来帮忙解决家庭的燃眉之急吗？"},
                {"options": [{"infl": "xe",
                              "value": "2",
                              "text": "会，不带一点罪恶感"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "会——只要我能秘密行事"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "我会抗拒这诱惑"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "我认为这个主意极为可恨"}],
                 "text": "你会为了前途而背叛家人吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "他们的言语指导着我的行动"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "他们是我的榜样"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "他们通常都与我无关"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "我当他们透明"}],
                 "text": "你尊敬一家之主吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "听从安排，为能帮助家族而自豪"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "会，但强颜欢笑"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "巧妙地抗婚"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "逃跑"}],
                 "text": "如果家族要你与一个令人作呕的家伙结婚，你会："},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "与他谈谈，但坚守立场"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "不跟他说话"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不计前嫌敞开心扉地讨论前事"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "积极进行和解，并留心听他的遗言"}],
                 "text": "有一位家人疏远了你。在他弥留之际，他想与你和解。你会："}]},
 {"chapter": "第二卷：对朋友的看法",
  "questions": [{"options": [{"infl": "xe",
                              "value": "2",
                              "text": "照做，然后拿钱"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "拿钱照做，但尽量使证词显得无力"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "拒绝"},
                             {"infl": "xg",
                              "value": "2",
                              "text": "不管结果如何，都站在朋友那一边"}],
                 "text": "一个位高权重的腐败法官允诺如果你能作对你朋友不利的假证，他便给你一大笔钱。你会："},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "我有一大群密友"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "我有些密友"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "我有几个密友"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "我会与人保持距离"}],
                 "text": "你会亲近朋友，还是与大部分人保持一段距离以保安全？"},
                {"options": [{"infl": "xe",
                              "value": "2",
                              "text": "我干过不止一次，有时也能逃避惩罚"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "我只干过那么一次"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "我曾被怂恿过这么做，但从未做过"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "我从未考虑过这种事"}],
                 "text": "你背叛过朋友吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "我曾有过或正渴望着这么一段罗曼史"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "这种罗曼史挺理想的——如果能成功的话"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "我担心我会错过其他人对我的爱"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "作茧自缚？真是天大的错误"}],
                 "text": "你怎么看待“执子之手，与子偕老”这类对爱人的终生承诺？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "会，而且写好借据，不得抵赖"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "会，但期限上会宽松些"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，尽管还了会更好"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，他们欠我一个人情"}],
                 "text": "朋友借了你钱，你会要他们还吗？"},
                {"options": [{"infl": "nx",
                              "value": "2",
                              "text": "是的，我们定期通信"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "是的，我们努力保持联络"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "不会，我经常搬家"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "不会，我不再与他们有共同之处"}],
                 "text": "你仍与儿时玩伴保持联络吗？"}]},
 {"chapter": "第三卷：对集体的看法",
  "questions": [{"options": [{"infl": "xg",
                              "value": "2",
                              "text": "会，我会优先考虑集体的需要"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "如果我的需求被满足的话，我会尽我所能"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "不会，我没钱也不闲"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "不会，花时间和金钱在集体上是一种浪费"}],
                 "text": "你会花时间和金钱在集体上吗？"},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "保卫它直至自己的最后一口气"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "和残存同伴构筑防御"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "一看到势头不对就逃跑"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "与入侵者达成协议，成为间谍"}],
                 "text": "集体面临被侵害的威胁，你会："},
                {"options": [{"infl": "xn",
                              "value": "2",
                              "text": "会的，因为他们知道我也会为他们做同样的事"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "会的，因为我很受欢迎"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "可能不会，因为我不受信任"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "肯定不会，我在集体中树敌了"}],
                 "text": "如果你受伤了，需要急救，你的同伴愿意帮助你吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "毋庸置疑，是的"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "是的，总的来说他们是最佳的管理方式"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "当它适合我时，我才会——有些规章我并不认同"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "我不关心他们；他们拿我没辙"}],
                 "text": "你尊重集体的规章和领袖吗？"},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "是的，这些井底之蛙不会理解超规格的人"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "有些会，因为并不是所有人都认同我"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，我看起来一切正常"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，我就是集体中的正常人的标准"}],
                 "text": "同伴回避你，或嘲笑你吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "做这种事是我所乐意接受的荣誉"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "当然。这是每个人的义务"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，除非无人能接手此事"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，我不想为集体利益负责"}],
                 "text": "你当官会为民作主，或者希望代表集体的意志吗？"}]},
 {"chapter": "第四卷：对国家的看法",
  "questions": [{"options": [{"infl": "xg",
                              "value": "2",
                              "text": "与其他人共享自己有的食物"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "自己吃尽可能少，余下的给其他人"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "偷取自己生存所需食物"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "偷取尽可能多的食物，然后高价卖出"}],
                 "text": "你的国家闹饥荒，你会："},
                {"options": [{"infl": "xe",
                              "value": "2",
                              "text": "会，类似的事我干过了"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "如果我能逃避惩罚的话，我会的"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "不会，尽管我觉得这一大笔钱很诱人"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "不会，而且我会叫国王小心这个阴谋"}],
                 "text": "给你足够的钱，你会往国王的酒中下毒吗？"},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "接下寻求解药的危险任务"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "尽力治好病人"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "避免接触到病人"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "逃离国家"}],
                 "text": "瘟疫传遍你的国家，你会："},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "是的，X主席万岁！"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "是的，我们的统治者大体上是公平、公正的"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "不会，统治者还不是人一个！"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "不会，权力必定导致腐化"}],
                 "text": "你尊重领主的法律权威吗？"},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "会，因为我的国家势必任人鱼肉"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "会，因为国家机密对我无关紧要"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，我会被抓的"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，我不会辜负国家对我的信任"}],
                 "text": "给你一笔稳赚的生意，你会为敌国做间谍吗？"},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "是的，因为维护法律比任何个人争执重要"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "是的，因为法庭就是为了解决这种争执而设立的"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "你在开玩笑吗？政府连路都不会铺"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "绝对不会，如果我自己不能保护个人所有，我就无权拥有它"}],
                 "text": "你依靠政府来建立社会契约和保障所有权吗？"}]},
 {"chapter": "第五卷：对刑罚的看法",
  "questions": [{"options": [{"infl": "xe",
                              "value": "2",
                              "text": "会，服刑这么多年等于锁住自己"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "会，在犯事时便已知道这风险了"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "不会，除非只造成容易愈合的小伤"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "不会，那些守卫只是在尽本分而已"}],
                 "text": "如果你入狱了，你会伤害或杀死其他人而脱狱吗？"},
                {"options": [{"infl": "xn",
                              "value": "2",
                              "text": "是的，很幸运，贵族们投了个好胎"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "是的，有时要靠吓，他们才肯干活"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "不会，贵族应仁慈地统治"},
                             {"infl": "xg",
                              "value": "2",
                              "text": "任何人都无权恶劣对待别人。以上。"}],
                 "text": "你接受贵族有权恶劣对待手下的仆人吗？"},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "认罪，并向受害者赔偿"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "认罪，向法官请求宽大处理"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "隐瞒自己的涉案事实，必要时说谎"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "嫁祸于人"}],
                 "text": "你意外地犯罪了，你会："},
                {"options": [{"infl": "lx",
                              "value": "2",
                              "text": "会，因为我有这个责任"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "会，因为我会因此获得轻判"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，我会等到检察官证明我有罪"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，我会证明我“无罪”的"}],
                 "text": "如果犯罪了，你会认罪吗？"},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "会，我宁愿受罚也不愿保持沉默"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "会，总要有人说真话"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "不会，尽管私底下我会对朋友说"},
                             {"infl": "nx",
                              "value": "2",
                              "text": "不会，不值得为政治费神"}],
                 "text": "如果可能被惩罚，你会表明一个革命性的政见吗？"},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "连夜溜走，避免作证"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "说自己什么也没看到"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "勉强留下，作证，然后离开"},
                             {"infl": "lx",
                              "value": "2",
                              "text": "留下直至结案所需证供足够"}],
                 "text": "旅行时，你目击了一场袭击。你被传去作证，这会非常耽误你的行程。你会："}]},
 {"chapter": "第六卷：对财富的看法",
  "questions": [{"options": [{"infl": "xg",
                              "value": "2",
                              "text": "帮助穷人和不幸的人"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "满足亲朋戚友需要"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "让自己达到人生巅峰"},
                             {"infl": "xe",
                              "value": "2",
                              "text": "不仅达到巅峰，还要阻止别人超过自己"}],
                 "text": "财富的最大用途是什么？"},
                {"options": [{"infl": "xg",
                              "value": "2",
                              "text": "慷慨地给钱"},
                             {"infl": "xg",
                              "value": "1",
                              "text": "恰到好处地给钱"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "只给我认为无所谓的钱——至多一两块"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "视而不见"}],
                 "text": "遇到乞丐，你会："},
                {"options": [{"infl": "xe",
                              "value": "2",
                              "text": "会，而且我还要尽可能地消费"},
                             {"infl": "xe",
                              "value": "1",
                              "text": "会，但只骗富商"},
                             {"infl": "xn",
                              "value": "1",
                              "text": "不会，风险太大了"},
                             {"infl": "xn",
                              "value": "2",
                              "text": "不会，商人也要养家糊口啊"}],
                 "text": "通过魔法，你可以使村里的商人们以为你的铜币是金币。你会这样做吗？"},
                {"options": [{"infl": "nx",
                              "value": "2",
                              "text": "肯定是更赚钱的那份；稳定的工作听上去像苦差事"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "可能是前者，尽管我会看看后者干些什么"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "后者，除非前者赚的钱多到吓死人"},
                             {"infl": "lx",
                              "value": "2",
                              "text": "肯定是稳定的那份，因为我有长远的计划"}],
                 "text": "你有两份工作可供选择。一份酬劳更多，另一份较稳定。你会选哪一份？"},
                {"options": [{"infl": "cx",
                              "value": "2",
                              "text": "这关乎天时地利，还有一时运气"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "灵活变通会有更多机会"},
                             {"infl": "lx",
                              "value": "1",
                              "text": "按照一个有适度风险的长期计划来做"},
                             {"infl": "lx",
                              "value": "2",
                              "text": "努力工作，坚持不懈"}],
                 "text": "最佳的致富途径是什么？"},
                {"options": [{"infl": "nx",
                              "value": "2",
                              "text": "会，我说话算数"},
                             {"infl": "nx",
                              "value": "1",
                              "text": "会，因为人家会认为我信得过，这很好"},
                             {"infl": "cx",
                              "value": "1",
                              "text": "你可以赌我会否爽约"},
                             {"infl": "cx",
                              "value": "2",
                              "text": "如果这不是什么好差事，那算了吧"}],
                 "text": "如果你接手一项工作，尽管它会很危险，你会努力完成吗？"}]}]
alignments = {
    lg: {
        name: "守序善良",
        value: 0,
        description: "守序善良的人物相信，规律而强大的社会和高尚的政府，可以让大多数人民生活得更好。只要人们相信法律，并试着互相帮助，整个社会就将因此而进步。因此，这个阵营的人物将会朝着这个方向努力，他们会尽可能地为大多数人带来较多的福利及较少的伤害。他们必定信守自己的承诺。守序善良的人物，特别是圣武士，时常自己陷于善良与法律相冲突的两难处境。比如履行誓言可能会伤及无辜时，或在宗教法规和地方法律相矛盾时。"
    },
    ng: {
        name: "中立善良",
        value: 0,
        description: "中立善良的人物相信力量平衡是十分重要的事，单方面地强调秩序或混乱，是无法达到至善的。因为整个宇宙中充满了朝着各式各样的目标而努力的生物，所以若要追求至善，便不能破坏这种平衡，甚至的设法维持这种平衡，如果说支持社会秩序可以带来至善，便得以为之。若推翻既有的社会秩序就可以达到至善，那也必须为之。社会结构对他们来说，没什么重大意义。中立善良的长处是，行善不为阶级偏见所影响。"
    },
    cg: {
        name: "混乱善良",
        value: 0,
        description: "混乱善良的人物虽然喜欢按照自己的意思行事，心地却不错。尽管他们认同一切美德和公理，却不愿意受到律法和规范的约束。想要任意驱使这些人，要他们遵照命令做事是不可能的。这些人有自己的一套道德标准，虽然不至于为恶，但也不见得和一般大众的道德标准完全相同。混乱善良人物常会因为感到受人指使而在团队内制造矛盾，比起有计划的行动他们更喜欢即兴发挥。混乱善良阵营的人物不介意用恶毒的手段制裁他们认为是邪恶的人，即便并不喜欢这样做，但他们本身却并不带有恶意。"
    },
    ln: {
        name: "守序中立",
        value: 0,
        description: "守序中立的人物而言，秩序和组织是非常重要的。他们认同强大、井然有序的统治阶层，不管这个统治阶层是专制的暴君，还是安和乐利的民主政府，这些人都不在乎，世界上必须有法律，而法律则必须被遵守。对他们而言，绝对的秩序比什么道德良知来的重要。只要是规定，不管结果是好是坏，都必须遵行无误。绝对公正的法官，和绝对服从命令的士兵，都是此阵营的最佳典范。守序中立对善恶持中立态度，但这不代表他们是不道德的、是道德虚无主义者或是没有道德立场。他们只不过是将道德观念永远置于服从信条、传统或者法律之下。他们通常有强烈的伦理信条，但这一信条是首先基于其信念体系，而非基于善恶认同。"
    },
    nn: {
        name: "绝对中立",
        value: 0,
        description: "绝对中立的人物相信绝对平衡的力量，因此，他们拒绝采取任何被视为邪恶和暴力的行动。绝对中立的人会尽力避免和善良或邪恶，秩序或叛逆的力量合流。有时候他们发现自己被迫得和某个阵营结盟。为了保持平衡，这些人会刻意改变立场，和弱势者合作。然而，当强弱势力对换时，他们也会毫不犹豫地跟着改变立场。"
    },
    cn: {
        name: "混乱中立",
        value: 0,
        description: "混乱中立的人按自己一时的兴致行动。他是一个完全的个人主义者。他重视自己的自由权利，但并不致力于保护别人的自由。他蔑视权威，愤恨约束并且挑战传统。混乱中立者并不会向无政府运动那样有意瓦解组织。如果这么做，他必须把自己的阵营转成善良(希望解放他人)或是邪恶(使异己受苦)。混乱中立的寻常称谓是“真正混乱”。注意，混乱中立者的行为也许很难预测，但他的举止并非完全随机的，他从桥上的走过去的可能性和从桥上跳下去的可能性大小并不相等。混乱中立是一个真正自由于社会约束和对改良社会的空想的阵营。"
    },
    le: {
        name: "守序邪恶",
        value: 0,
        description: "守序邪恶的人有系统地得到他想要的东西，此行为受到他行为准则的限制，但并不顾及受其伤害的人。他关心传统、忠诚和秩序，但不关心自由、尊严和生命。他按规则行动，但没有怜悯和同情。他觉得待在统治阶层里很舒服，愿意支配别人，但也乐意为别人服务。他处罚谴责别人并不是根据他们的行为而是根据种族、信仰、祖国或社会阶层。他不愿违反法律或承诺，这种不愿部分是因为他的天性，部分是因为他需要秩序来保护他免受道德上的反对。某些守序邪恶者有特别的禁忌，比如不冷血嗜杀(但让属下去做)或不伤害儿童(如果可能的话)。他们认为这些良心上的原则使自己比一般不合人道的恶人水准高。诡计多端扩展自己势力并他的压迫人民的贵族是一个守序邪恶的例子。某些守序邪恶的人或生物狂热的效忠于邪恶，就好像十字军效忠于良善一样。伤害别人是他们这么做的目的，传播邪恶本身也是他们乐于如此的原因。他们也可能认为行恶是对某种邪恶神明或主人的责任的一部分。守序邪恶有时被称为“恶魔般的”，因为恶魔是守序邪恶的化身和典型。守序邪恶是一个有方法有意图并且能常常有所成就的邪恶阵营。"
    },
    ne: {
        name: "中立邪恶",
        value: 0,
        description: "中立邪恶的人物为了自己可以做出任何事，一切都是为了自己，就这么简单。他们从不为死在手下的人掉泪，不论是为财、为了高兴或只是为了方便。他们不喜欢纪律，也不遵守法律、传统或任何高贵的信念。然而，他们也不像混乱邪恶者那样浮躁不安，或热爱冲突。有些中立邪恶者将邪恶视为一种理想，想要献身于邪恶。这种恶人大多是邪恶神祇或秘密组织的成员。一般人习惯将中立邪恶称为“真正的邪恶”。中立邪恶的可怕在于表现出全然的邪恶，完全没有荣誉感和对象区别。"
    },
    ce: {
        name: "混乱邪恶",
        value: 0,
        description: "混乱邪恶的人物会因为贪婪、憎恨或欲望而做出任何事。他暴躁易怒、满怀恶意、独断暴力而且无法预料。为了得到想要的东西，他会冲动而鲁莽地行动，散播邪恶与混乱。所幸他的计划大多杂乱无章，其团体大多组织散乱。一般而言，混乱邪恶者只有被强迫时才会与人合作，其领袖常要面对斗争与暗杀。混乱邪恶的可怕在于不仅破坏美丽与生命，也破坏了美丽与生命赖以存在的秩序。"
    }
}

score = false

chunkString = (size, str) => {
  pos = 0; chunks = []
  while pos < str.length {
    chunks.push(str.substr(pos, size))
    pos += size
  }
  return chunks
}

batch_print = msg => {
  buffer = ""; msgs = []
  msg.split("。").forEach(ctx => {
    if ctx.length then
      chunkString(120, ctx + "。").forEach(chk => {
        if (buffer.length + chk.length) > 120
        then { msgs.push(buffer); buffer = chk }
        else { buffer = buffer + chk; }
      })
  })
  if(buffer.length) then msgs.push(buffer)
  msgs.reverse();
  msgs.forEach(m => drrr.print(m))
}

state start {

  answers = []; ch = 0; qs = 0

  prev_question = () => {
    qs -= 1
    if qs < 0
    then { ch -= 1; qs = query[ch].questions.length - 1 }
    if ch < 0
    then { ch = 0; qs = 0; false }
    else true
  }

  next_question = () => {
    qs += 1
    if qs >= query[ch].questions.length
    then { ch += 1; qs = 0 }
    if ch >= query.length
    then false
    else true
  }

  ask = () => {
    if qs == 0 then drrr.print(query[ch].chapter)
    text = query[ch].questions[qs].text + "\n"
    text += query[ch].questions[qs].options.map(
      (opt, index) => (index + 1) + ". " + opt.text).join("\n")
    drrr.print(text)
  }

  ask()

  event [me, msg] (user, cont: "^[1234]\\s*$") => {
    ques = query[ch].questions[qs]
    opt = parseInt(cont) - 1
    val = parseInt(ques.options[opt]["value"])
    answers.push([ques.options[opt]["infl"], val, opt])
    if next_question()
    then ask()
    else {
      score = { cx: 0, lx: 0, nx: 0, xe: 0, xg: 0, xn: 0 }
      answers.forEach(ans => score[ans[0]] += ans[1])
      going judge
    }
  }

  event [me, msg] (user, cont: "^/back\\s*$") => {
    if prev_question()
    then answers.pop()
    else drrr.print("no previous question!")
    ask()
  }

  event [me, msg] (user, cont: "^/log\\s*$") => {
    drrr.print(answers.map((ans, index) =>
      String(index + 1) + ":" + (ans[2] + 1)).join(", "))
  }
}

state judge {
  a = false; pos = false; t = ""; r = ""; e = false
  Object.keys(alignments).forEach(i => {
      r = i.charAt(0) + "x"
      t = "x" + i.charAt(1)
      c = score[r] + score[t]
      alignments[i].value = c
      if c > a then { a = c; pos = i }
  })
  Object.keys(alignments).forEach(attr => {
      if alignments[attr].value == a then r += 1
  })
  if r != 0 then {
    pos = if score.lx > score.nx && score.lx > score.cx then "l"
        else (if score.cx > score.nx && score.cx > score.lx then "c" else "n")
    pos += if score.xg > score.xe && score.xg > score.xn then "g"
        else (if score.xe > score.xn && score.xe > score.xg then "e" else "n")
  }
  posEntry = alignments[pos];

  attrDesc = (attr, val) =>
    attr + " -- " + "X".repeat(Math.floor(val / 2)) + "(" + val + ")\n";

  t = "#### 阵营倾向：\n"
  Object.keys(alignments).forEach(attrName => {
    attr = alignments[attrName];
    t += attrDesc(attr.name, attr.value)
  })
  drrr.print(t);

  t = "### 详细得分：\n"
  t += "#### 守序与混乱：\n"
  t += attrDesc("守序", score.lx)
  t += attrDesc("中立", score.nx)
  t += attrDesc("混乱", score.cx)
  t += "#### 善良与邪恶：\n";
  t += attrDesc("善良", score.xg)
  t += attrDesc("中立", score.xn)
  t += attrDesc("邪恶", score.xe)
  drrr.print(t);

  t = "你的阵营是：" + posEntry.name + "\n";
  t += "> " + posEntry.description "\n"
  batch_print(t);
}

dnd_test = () => {
  event [msg, me] (user, cont: "^/start\\s*$") => {
    going start
  }
  event [msg, me, dm] (user, cont: "^/help\\s*$") => {
    drrr.print("1 2 3 4 擇一答題\n/start 重新開始\n/back 上一題\n/log 答題紀錄")
  }
  going start
}

// dnd_test();
