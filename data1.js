/* 命之轨迹TRPG 角色卡创建工具 - 规则数据 Part 1
   数据来源：《英雄传说：命之轨迹TRPG V1.1》规则书
   仅供跑团使用 */

// ============ 属性值 ============
const ATTRIBUTES = [
  { key: "str", name: "力量", en: "STR", desc: "原始体能。近战伤害、负重、力量检定。" },
  { key: "agi", name: "敏捷", en: "AGI", desc: "平衡与协调。攻击检定、潜行、特技。" },
  { key: "sta", name: "耐力", en: "STA", desc: "身体韧性。生命与活力的来源。" },
  { key: "spd", name: "速度", en: "SPD", desc: "反应与移动。防御反应、移动距离。" },
  { key: "sol", name: "灵性", en: "SOL", desc: "精神与直觉。施法威力、导力能量。" },
  { key: "emp", name: "共情", en: "EMP", desc: "情商与魅力。社交、说服、察言观色。" },
  { key: "mem", name: "记忆", en: "MEM", desc: "认知与学习。学识、语言、记忆招式。" },
  { key: "rea", name: "理性", en: "REA", desc: "逻辑与推理。调查、识别、解谜。" },
  { key: "rsl", name: "决心", en: "RSL", desc: "意志与专注。抵抗检定、魔力来源。" }
];

// 属性奖励骰（规则书 ch7：达到 15 后每 +5 点 +1 英雄奖励骰；属性值范围为 1-100 或更高，无上限）
// 数学公式 floor((value-10)/5) 适配任意属性值（50→+8、55→+9、100→+18）
function bonusDiceOf(value) {
  if (value <= 5) return -1; // 挑战
  if (value < 15) return 0;
  return Math.floor((value - 10) / 5);
}
function bonusDiceLabel(value) {
  const b = bonusDiceOf(value);
  return b < 0 ? "挑战" : b === 0 ? "0" : "+" + b;
}

// ============ 22 命位 ============
// 格式: { name, attr(过往命相属性), talents(起源天赋), futureAttr, reward(未来奖励文本), lines(过往线数), maxLine(未来最长线), pastDesc, futureDesc }
const ARCS = [
  { name: "愚者", attr: "agi", talents: ["铁壁", "昆仑流弟子", "待琢之玉", "导力技师"], futureAttr: "mem", reward: "你无法获得特殊关系或战技，改为获得 +1 技能点。", lines: 2, maxLine: 5, pastDesc: "你无忧无虑的天性曾让你陷入绝境，每一次失足都让你得到惨痛的教训。", futureDesc: "未知吓不倒你。你勇敢地迈向未来，拥抱旅程中的每一天。" },
  { name: "魔术师", attr: "mem", talents: ["奥术储能", "导力魔法学者", "永恒之焰", "导力先驱"], futureAttr: "sol", reward: "选择一项精英技能树：奇械匠 / 失落外典：敕令符文 / 七耀炼金术", lines: 2, maxLine: 6, pastDesc: "你早期施展魔法的尝试失控了，高估了自己，导致了灾难性的失败。", futureDesc: "你是无尽力量的导管，凭借自律引导能量重塑世界。" },
  { name: "女祭司", attr: "emp", talents: ["古贤遗风", "七至宝之幻象：幻", "七耀信徒", "星界投影"], futureAttr: "sol", reward: "选择一项英雄关系网：秘密僧兵成员 / 线人 / 导师", lines: 3, maxLine: 4, pastDesc: "你曾追寻禁忌知识，揭露的真相使你的自我意识支离破碎。", futureDesc: "凭借耐心与专注，你能够解开世界最深层的奥秘。" },
  { name: "女皇", attr: "sta", talents: ["刚毅", "光辉后裔", "派生元素相性：冰", "亚尔赛德流弟子"], futureAttr: "emp", reward: "选择一项英雄关系网：埃雷波尼亚贵族议员 / 利贝尔皇家骑士 / 委托人", lines: 2, maxLine: 4, pastDesc: "你的职权曾至高无上，但背叛与失败将其悉数夺走。", futureDesc: "你的领导潜力熠熠生辉，将为追随者铸造新的命运。" },
  { name: "皇帝", attr: "str", talents: ["霸者之力", "范德尔流弟子", "元素精通", "战术家洞察"], futureAttr: "rsl", reward: "选择一项精英技能树：百艺精熟 / 武器大师", lines: 2, maxLine: 6, pastDesc: "你曾试图凭纯粹意志力进行统治，但你对下属的漠视导致了败亡。", futureDesc: "以纪律与谋略，你将再度崛起，命定为王。" },
  { name: "教皇", attr: "rea", talents: ["奥术储能", "魔女传承", "派生元素相性：木", "耀晶掌握"], futureAttr: "mem", reward: "选择一项英雄关系网：黑色工房 / 爱普斯泰恩财团 / 技术专家", lines: 3, maxLine: 5, pastDesc: "你曾虔信传统，但当体系崩塌，你陷入了疑虑。", futureDesc: "凭借知识与理解，你将揭示他人无法洞见的真相。" },
  { name: "恋人", attr: "emp", talents: ["无休韧性", "七至宝之祝福：水", "古老血脉", "昆仑流弟子"], futureAttr: "agi", reward: "选择任意 1 个英雄式人脉。", lines: 4, maxLine: 3, pastDesc: "你的信任与爱意曾错付他人，招致背叛与心碎。", futureDesc: "你能够建立深厚而有意义的关系网，将人们凝聚在一起。" },
  { name: "战车", attr: "spd", talents: ["铁壁", "月华流弟子", "派生元素相性：烬", "刚毅"], futureAttr: "agi", reward: "选择一项精英技能树：战斗工程学 / 百艺精熟", lines: 3, maxLine: 4, pastDesc: "你对胜利的渴望曾让你做出鲁莽的决定，身心俱碎。", futureDesc: "你的意志力与决心能引领你走向胜利，无论胜算几何。" },
  { name: "力量", attr: "str", talents: ["霸者之力", "黑神一刀流弟子", "刚毅", "战术家洞察"], futureAttr: "rsl", reward: "选择一项精英技能树：帝国军精英战斗 / 武器大师", lines: 2, maxLine: 3, pastDesc: "曾经，你的力量在软弱的一刻动摇，后果是毁灭性的。", futureDesc: "你的决心坚不可摧，力量将带你度过至暗之刻。" },
  { name: "隐者", attr: "sol", talents: ["古贤遗风", "白神一刀流弟子", "七至宝之门扉：空", "导力魔法学者"], futureAttr: "rsl", reward: "选择一项精英技能树：失落外典：虚空魔法 / 残遗合一", lines: 4, maxLine: 2, pastDesc: "你曾被迫隔离，与所爱之人断绝联系，行走在孤独的道路上。", futureDesc: "通过内省与冥想，你将发现他人无法触及的内在真理。" },
  { name: "命运之轮", attr: "sta", talents: ["不屈", "待琢之玉", "先见之明", "七至宝之回响：时"], futureAttr: "agi", reward: "选择英雄关系网：鲁巴彻 / 西风旅团（或放弃，改学命运之线精英树）", lines: 3, maxLine: 4, pastDesc: "你的过去曾被超出你控制的力量所塑造，命运急转直下。", futureDesc: "运气或许无常，但你学会了让命运屈从于你的意志。" },
  { name: "正义", attr: "rea", talents: ["钢铠", "泰斗流弟子", "七至宝之诅咒：地", "奥术激涌"], futureAttr: "spd", reward: "选择一项英雄关系网：克洛斯贝尔警署 / 游击士协会 / 线人", lines: 3, maxLine: 4, pastDesc: "腐败与欺诈暴露了内里的黑暗，你踏上了怀疑之途。", futureDesc: "凭借坚定不移的信念，你将给混乱的世界带来平衡与正义。" },
  { name: "倒吊人", attr: "rea", talents: ["霸者之力", "根源虚无之子", "导力专家", "耀晶掌握"], futureAttr: "rea", reward: "选择一项英雄关系网：星杯骑士团 / 噬身之蛇成员 / 导师", lines: 3, maxLine: 2, pastDesc: "你曾被迫放弃某样珍贵之物，这牺牲给你留下了长久的创伤。", futureDesc: "通过接纳牺牲之概念，你将获得智慧与转变。" },
  { name: "死亡", attr: "rsl", talents: ["古贤遗风", "幻影重生", "派生元素相性：烬", "伪·守护骑士"], futureAttr: "sol", reward: "选择一项精英技能树：失落外典：魂灵魔法 / 魅影威仪", lines: 4, maxLine: 3, pastDesc: "你的生命曾经历一次巨大的失去，粉碎了你的世界。", futureDesc: "你已学会拥抱变化，每一次结束都是重新开始的机会。" },
  { name: "节制", attr: "agi", talents: ["铁壁", "八叶一刀流弟子", "七至宝之低语：风", "奥术激涌"], futureAttr: "rea", reward: "选择一项精英技能树：地脉术 / 百艺精熟", lines: 3, maxLine: 3, pastDesc: "你曾一度失控，那一刻的过度毁掉了你建立的一切。", futureDesc: "通过谨慎的平衡与节制，你将找到平静与清明。" },
  { name: "恶魔", attr: "spd", talents: ["钢铠", "霸者之力", "残遗异客", "元素精通"], futureAttr: "str", reward: "选择一项精英技能树：异端外法 / 残遗合一", lines: 2, maxLine: 6, pastDesc: "你曾屈从于诱惑，任由欲望将你引入歧途，坠入黑暗。", futureDesc: "通过驾驭你的欲望，你将获得巨大的力量。" },
  { name: "塔", attr: "str", talents: ["古贤遗风", "盐桩使徒", "七至宝之门扉：空", "先见之明"], futureAttr: "sta", reward: "选择一项英雄关系网：噬身之蛇猎兵 / 赤色星座 / 掮客", lines: 2, maxLine: 5, pastDesc: "你的世界在眼前崩塌，一场灾变骤然降临，毫无慈悲。", futureDesc: "毁灭带来创造。你将驾驭风暴之力，于废墟之上建立更伟大的存在。" },
  { name: "星星", attr: "mem", talents: ["奥术储能", "泰斗流弟子", "七耀信徒", "永恒之焰"], futureAttr: "emp", reward: "选择一项精英技能树：魔导杖精通 / 神圣魔法", lines: 3, maxLine: 4, pastDesc: "曾几何时，一切希望似乎都已消失，你几乎彻底放弃。", futureDesc: "你将成为希望的灯塔，以你的韧性激励他人。" },
  { name: "月亮", attr: "mem", talents: ["不屈", "七至宝之幻象：幻", "黑神一刀流弟子", "古老血脉"], futureAttr: "spd", reward: "选择一项英雄关系网：魔女一族 / 噬身之蛇代行者 / 线人", lines: 2, maxLine: 5, pastDesc: "你曾遭人欺骗，被幻觉或谎言引入歧途，陷入迷惘。", futureDesc: "你的直觉将引导你穿越黑暗，揭示他人看不见的真相。" },
  { name: "太阳", attr: "str", talents: ["霸者之力", "刚毅", "亚尔赛德流弟子", "七至宝之恩赐：火"], futureAttr: "rsl", reward: "选择一项精英技能树：武器大师 / 神圣魔法", lines: 3, maxLine: 4, pastDesc: "曾经，你的生命力被疾病或伤痛耗尽，你不得不从零开始重建。", futureDesc: "你的生命力将璀璨闪耀，为你的力量与韧性提供动力。" },
  { name: "审判", attr: "agi", talents: ["古贤遗风", "派生元素相性：雷", "元素精通", "风之歌"], futureAttr: "mem", reward: "选择一项精英技能树：魔导杖精通 / 失落外典：敕令符文", lines: 4, maxLine: 3, pastDesc: "你曾面临一个清算时刻，从此背负着那次审判的重担。", futureDesc: "伟大的觉醒即将到来，你将从过去的灰烬中站起。" },
  { name: "世界", attr: "rea", talents: ["奥术储能", "无休韧性", "钢铠", "不屈"], futureAttr: "sta", reward: "选择一项精英技能树：地脉术 / 命运之线", lines: 5, maxLine: 6, pastDesc: "你曾站在伟大成就的边缘，却在最后一刻眼看它崩溃瓦解。", futureDesc: "一切将会汇聚，你将找到长久以来避而不见的圆满。" }
];

function arcByName(name) { return ARCS.find(a => a.name === name); }

// ============ 元素相性 ============
// 低阶元素自由选择；高位/派生需对应天赋
const ELEMENT_AFFINITIES = [
  { name: "地", type: "低位", desc: "韧性及力量的掌控者。提升耐久、定身敌人、减速控制。", dmg: "地属性伤害，命中击倒", range: "区域与线形魔法 +1 级", buff: "英勇耐久 1 回合（+灵性奖励骰回合）", debuff: "命中后下回合开始石化（抵抗·耐力）" },
  { name: "火", type: "低位", desc: "火焰原始的毁灭之力。灼烧敌人、点燃战场。", dmg: "火属性伤害，灼烧 1 轮（+灵性奖励骰轮）", range: "锥形与线形 +1 级", buff: "攻击力 +1 蓄势；盟友受火伤恢复 1d6 活力", debuff: "火焰伤害翻倍" },
  { name: "水", type: "低位", desc: "如水般流动，适应并克服。强化治疗、吸取活力。", dmg: "水属性伤害，吸取敌人 3d6 活力", range: "区域与远程目标 +1 尺寸", buff: "再生 5d6 耐久/回合，3 回合（+灵性奖励骰回合）", debuff: "1d6 回合内无法恢复活力" },
  { name: "风", type: "低位", desc: "驾驭风的速度与自由，击退敌人、赋予盟友敏捷。", dmg: "风属性伤害，命中击退 10 英尺", range: "线形与锥形 +1 尺寸", buff: "移动 +10 英尺、+1 行动次数，2 回合", debuff: "托举空中，阻止反应直到落地" },
  { name: "幻", type: "高位", desc: "模糊现实边界，迷惑欺骗敌人，为盟友赋予隐形。（需元素起源天赋）", dmg: "幻属性伤害，混乱 1d4 回合", range: "线形与远程目标 +1 尺寸", buff: "隐形（灵性奖励骰回合）", debuff: "负伤敌人陷入昏迷" },
  { name: "空", type: "高位", desc: "以空操纵维度，传送盟友、穿透护甲、孤立敌人。（需元素起源天赋）", dmg: "空属性伤害", range: "区域与爆发 +1 尺寸", buff: "移动时瞬间移动、无视地形", debuff: "地形视为困难，困难地形不可通行" },
  { name: "时", type: "高位", desc: "掌握时间，加速盟友、迟缓敌人。（需元素起源天赋）", dmg: "时属性伤害", range: "线形与远程目标 +1 尺寸", buff: "+1 行动次数、速度检定 1 蓄势", debuff: "敌人行动次数减至 1" },
  { name: "烬", type: "派生", desc: "火焰的无情炽热与时间的衰败。（需天赋：派生元素相性：烬）", dmg: "火属性伤害 + 衰败（禁疗）", range: "锥形 +1 尺寸", buff: "免疫治疗削减，火伤减半", debuff: "衰败：禁止活力/魔力恢复 3 回合" },
  { name: "冰", type: "派生", desc: "静止与控制，冻结敌人、赋予友方寒冷抵抗。（需天赋：派生元素相性：冰）", dmg: "冰属性伤害，命中冻结至下回合开始", range: "爆发 +1 尺寸", buff: "免疫冻结 + 冰霜护甲 8（1d4 回合）", debuff: "冻结定身" },
  { name: "雷", type: "派生", desc: "雷电的狂怒，连锁攻击、增强友方敏捷。（需天赋：派生元素相性：雷）", dmg: "闪电伤害，晕眩（阻止反应）", range: "线形 +1 尺寸", buff: "物防/魔防 +5 至下回合开始", debuff: "残余电荷：移动受 1d8 闪电伤" },
  { name: "木", type: "派生", desc: "生长与毒素，治疗与毒药融为一体。（需天赋：派生元素相性：木）", dmg: "毒属性伤害，中毒 3 回合持续伤害", range: "爆发 +1 尺寸", buff: "再生 5d6 耐久 3 回合 + 毒素免疫", debuff: "束缚（行动挣脱·力量）" },
  { name: "外之力", type: "特殊", desc: "扭曲元素为不稳定混沌形态。需选母元素：冰/火/雷。（盐桩使徒等特殊途径）", dmg: "母元素伤害，清除目标辅助效应", range: "区域 +1 尺寸", buff: "每回合恢复 3d6 魔力与活力", debuff: "灼烧(2)/冻结/迷眩" },
  { name: "圣", type: "特殊", desc: "神圣魔法，治疗、保护、惩戒。（特殊途径）", dmg: "圣属性伤害，无视护甲；对异界来客 +2 奖励骰", range: "区域与爆发 +1 尺寸", buff: "恢复 5d6 耐久 + 1d6 生命，抵抗 +1 奖励骰", debuff: "晕眩 1d4 回合" },
  { name: "盐之桩", type: "特殊", desc: "盐之桩的神秘破坏之力，石化万物。（盐桩使徒天赋）", dmg: "化学伤害，爆发额外 1d8/颗", range: "线形与爆发 +1 尺寸", buff: "免疫耐久降低与负伤 2 回合", debuff: "2 回合后石化" }
];

// ============ 武艺相性（40种） ============
const MARTIAL_AFFINITIES = [
  { name: "应变", desc: "灵活适应战况，组合武器双形态伤害", lock: "无锁定" },
  { name: "侵攻", desc: "多目标伤害递增（每额外目标 +1 奖励骰，最多 +3）", lock: "火1,7 地4" },
  { name: "英勇", desc: "爆发恢复活力；免疫灼烧/冻结/石化/惊骇", lock: "地2,8 空5" },
  { name: "疾袭", desc: "移动后伤害 +1 奖励骰（最多 +3）；提升机动", lock: "风1,7 幻4" },
  { name: "信念", desc: "命中恍惚；抵抗 +2 奖励骰", lock: "地2,8 火5" },
  { name: "残忍", desc: "攻击受状态敌人 +1 奖励骰；爆发延长状态", lock: "火1,7 时4" },
  { name: "诡诈", desc: "防御检定 2 挑战；盟友物防 +10", lock: "幻8 火6" },
  { name: "统御", desc: "命中累积防御挑战；压制光环", lock: "空1,6,8 火4" },
  { name: "威压", desc: "焦虑/惊骇/恐慌恐惧控制", lock: "地1,6 时3,8" },
  { name: "优雅", desc: "战技活力消耗按命中目标数减少", lock: "水2,8 幻5" },
  { name: "不竭", desc: "每轮 +1d6 伤害累积；持久战", lock: "地1,6,8 水3" },
  { name: "均衡", desc: "闪避/格挡获得平衡层数，伤害 +1 奖励骰/层", lock: "风2,8 空5" },
  { name: "凶暴", desc: "战技获得威胁（1+耐力奖励骰）", lock: "火1,6 风4,8" },
  { name: "专注", desc: "单体 +1 奖励骰；连续攻击爆发 +1d6", lock: "时1,7 水4" },
  { name: "先见", desc: "伤害生物后获防御蓄势；预判反制", lock: "时2,7 地4,8" },
  { name: "机运", desc: "爆发命中增加伤害；幸运一击", lock: "无锁定" },
  { name: "狂怒", desc: "每损失 25% 耐久 +1 奖励骰伤害", lock: "火1,6 幻3,8" },
  { name: "暴食", desc: "命中吸取 2d6 活力（恢复一半）", lock: "水2,8 空5" },
  { name: "守护", desc: "护盾吸收 1d6；保护盟友并反击", lock: "地3,8 风6" },
  { name: "协同", desc: "命中多敌时盟友攻击蓄势", lock: "水2,8 风5" },
  { name: "荣耀", desc: "近战 +1 奖励骰；近战可自由远程化；武器触及", lock: "风1,7 地4" },
  { name: "审判", desc: "连续命中伤害递增（最多 +3）", lock: "火2,7 空4,8" },
  { name: "慈悲", desc: "不造成生命伤害改为晕眩；盟友物防 +5", lock: "幻3,8 水6" },
  { name: "坚毅", desc: "寡不敌众时 +1 行动；以多敌为强", lock: "水1,3,8 时6" },
  { name: "强力", desc: "威胁 4；爆发击退；物防魔防 -2", lock: "风2,7 水4,8" },
  { name: "精准", desc: "威胁 4（爆发 +1）；暴露弱点物防 -5", lock: "时1,7 风4" },
  { name: "夺魂", desc: "负伤敌人昏迷；汲取资源", lock: "时2,8 火5" },
  { name: "鲁莽", desc: "负伤/状态时蓄势；压制战线", lock: "水1,6 火3,8" },
  { name: "逆袭", desc: "对攻击过你的敌人 +1 奖励骰伤害", lock: "幻3,8 风6" },
  { name: "牺牲", desc: "自损 1d12 换 +1 奖励骰伤害", lock: "幻1,7 地4" },
  { name: "狂暴", desc: "连续命中伤害递增（最多 +3）", lock: "火2,8 水5" },
  { name: "凝神", desc: "未移动 +1 奖励骰；爆发减敌活力", lock: "水2,8 地5" },
  { name: "极速", desc: "移动后伤害 +1 奖励骰；移动 +10 英尺", lock: "风1,7 时4" },
  { name: "不屈", desc: "每个生效状态 +1 奖励骰；爆发可结束状态", lock: "地1,7 幻4" },
  { name: "暴虐", desc: "伤害施加焦虑；爆发额外 1d8", lock: "空2,7 地4,8" },
  { name: "团结", desc: "打击被盟友命中敌人 +1 奖励骰；制造破绽", lock: "空5 水8" },
  { name: "勇武", desc: "对大体型/高危险敌人 +1 奖励骰；爆发恢复盟友", lock: "空2,8 风5" },
  { name: "热忱", desc: "敌人伤害过你则 +1 奖励骰；5 层热情额外行动", lock: "风6 火8" }
];

// ============ 元素相性 → 结晶线元素 ============
const ELEMENT_LINES = {
  "地": ["地", "火", "空", "水"], "火": ["火", "地", "时", "风"],
  "水": ["水", "风", "幻", "地"], "风": ["风", "水", "时", "火"],
  "幻": ["幻", "火", "空", "水"], "空": ["空", "风", "时", "地"],
  "时": ["时", "地", "幻", "风"], "烬": ["火", "时", "地", "幻"],
  "冰": ["水", "空", "地", "时"], "雷": ["风", "幻", "火", "空"],
  "木": ["地", "时", "水", "幻"], "圣": ["空", "时", "幻", "地"],
  "外之力": ["母元素", "-", "-", "-"], "盐之桩": ["地", "空", "火", "时"]
};

// ============ 起源天赋 ============
const ORIGIN_TALENTS = [
  { name: "奥术储能", effect: "1 级 +50 魔力，每级 +8 魔力", resource: { mana: 50, manaPerLevel: 8 } },
  { name: "钢铠", effect: "1 级 +50 耐久，每级 +10 耐久", resource: { dur: 50, durPerLevel: 10 } },
  { name: "铁壁", effect: "+20 耐久 +20 活力，每级两项各 +6", resource: { dur: 20, vig: 20, durPerLevel: 6, vigPerLevel: 6 } },
  { name: "霸者之力", effect: "+20 魔力 +20 活力，每级两项各 +6", resource: { mana: 20, vig: 20, manaPerLevel: 6, vigPerLevel: 6 } },
  { name: "古贤遗风", effect: "+20 耐久 +20 魔力，每级两项各 +6", resource: { dur: 20, mana: 20, durPerLevel: 6, manaPerLevel: 6 } },
  { name: "不屈", effect: "耐力/决心抵抗反应 +1 奖励骰" },
  { name: "无休韧性", effect: "1 级 +50 活力，每级 +8 活力", resource: { vig: 50, vigPerLevel: 8 } },
  { name: "导力技师", effect: "科技检定 VS 25 可修改个人导力器一个锁定插槽属性" },
  { name: "元素精通", effect: "选择一条无属性线路变为元素属性（匹配元素相性）" },
  { name: "先见之明", effect: "2 枚先见骰（普通 d8），可用于先攻/察觉，休息恢复" },
  { name: "导力专家", effect: "修改/维修导力器科技检定 +1 奖励骰；每级可免费重配导力器" },
  { name: "导力先驱", effect: "创造导力发明科技检定 +1 奖励骰；1 个导力器插槽 +1 等级" },
  { name: "八叶一刀流弟子", effect: "八叶一刀流基础战技 + 1 自选专家战技；活力 +20，速度 +4", resource: { vig: 20, spd: 4 } },
  { name: "亚尔赛德流弟子", effect: "亚尔赛德流基础战技 + 1 自选专家战技；活力 +16，魔力 +16", resource: { vig: 16, mana: 16 } },
  { name: "范德尔流弟子", effect: "范德尔流基础战技 + 1 自选专家战技；活力 +20，力量 +4", resource: { vig: 20, str: 4 } },
  { name: "月华流弟子", effect: "月华流基础战技 + 1 自选专家战技；活力 +20，耐久 +30", resource: { vig: 20, dur: 30 } },
  { name: "泰斗流弟子", effect: "泰斗流基础战技 + 1 自选专家战技；活力 +16，魔力 +16", resource: { vig: 16, mana: 16 } },
  { name: "昆仑流弟子", effect: "昆仑流基础战技 + 1 自选专家战技；活力/魔力各 +8，耐久 +30", resource: { vig: 8, mana: 8, dur: 30 } },
  { name: "黑神一刀流弟子", effect: "黑神一刀流基础战技 + 1 自选专家战技；速度/敏捷各 +4", resource: { spd: 4, agi: 4 } },
  { name: "白神一刀流弟子", effect: "白神一刀流基础战技 + 1 自选专家战技；敏捷/灵性各 +4", resource: { agi: 4, sol: 4 } },
  { name: "战术家洞察", effect: "技法战斗行动检定 +1 奖励骰" },
  { name: "魔女传承", effect: "魔女魔法基础战技；魔力 +20；30 尺内感应灵脉/幻兽/圣遗物", resource: { mana: 20 } },
  { name: "刚毅", effect: "耐久归零时，反应消耗 10 活力恢复 3d6 耐久" },
  { name: "根源虚无之子", effect: "人造人；指挥战术壳/机甲兵导力魔法检定 +1 奖励骰；人偶/机甲学派" },
  { name: "残遗异客", effect: "恶魔血统：恶魔基础战技 + 1 熟练恶魔战技；两项物理属性 +4", resource: { str: 4, agi: 4 } },
  { name: "伪·守护骑士", effect: "行动：1 魔力 = 3 活力转化；可选时/幻元素相性" },
  { name: "风之歌", effect: "冥想时感知 1000 尺内能量流动" },
  { name: "永恒之焰", effect: "每天一次：魔力归零时消耗 20 活力恢复 1d4×10 魔力" },
  { name: "光辉后裔", effect: "贵族/政治社交检定 +1 奖励骰；起始声望 +10", resource: { rep: 10 } },
  { name: "盐桩使徒", effect: "盐之桩元素相性；可学外之力魔法基础战技" },
  { name: "耀晶掌握", effect: "1 级 +40 魔力；行动可将耀晶石精炼为魔力", resource: { mana: 40 } },
  { name: "七耀信徒", effect: "神圣之力基础战技；习得「光明祝福」；魔力 +20；教会奥秘检定 +1 奖励骰", resource: { mana: 20 } },
  { name: "幻影重生", effect: "每天一次：生命归零时反应恢复 1d4×10 生命" },
  { name: "星界投影", effect: "修炼冥想时灵体分离；察觉/调查 +2 奖励骰；需幻相性" },
  { name: "七至宝之恩赐：火", effect: "+10 魔力；火系攻击战技 +1 奖励骰伤害；火系导力魔法伤害减半；需火相性", resource: { mana: 10 } },
  { name: "七至宝之祝福：水", effect: "+20 魔力；水系治疗 +1 奖励骰；水系战技 +1 奖励骰伤害；需水相性", resource: { mana: 20 } },
  { name: "七至宝之诅咒：地", effect: "+20 耐久；地元素战技 +1 奖励骰伤害；免疫石化；需地相性", resource: { dur: 20 } },
  { name: "七至宝之低语：风", effect: "+20 魔力 +4 速度；风元素战技 +1 奖励骰伤害；需风相性", resource: { mana: 20, spd: 4 } },
  { name: "七至宝之回响：时", effect: "+20 魔力；时元素导力魔法持续时间翻倍；先攻 +1 奖励骰；需时相性", resource: { mana: 20 } },
  { name: "七至宝之门扉：空", effect: "移动行动传送自己/60 尺内盟友至 120 尺内（每日一次）；需空相性" },
  { name: "七至宝之幻象：幻", effect: "+20 魔力；1 枚先见骰；需幻相性", resource: { mana: 20 } },
  { name: "奥术激涌", effect: "每天一次：活力归零时消耗 20 魔力恢复 1d4×10 活力" },
  { name: "派生元素相性：雷", effect: "理性 +4；元素相性变为雷（风子类）", resource: { rea: 4 } },
  { name: "派生元素相性：冰", effect: "决心 +4；元素相性变为冰（水子类）", resource: { rsl: 4 } },
  { name: "派生元素相性：烬", effect: "记忆 +4；元素相性变为烬（火子类）", resource: { mem: 4 } },
  { name: "派生元素相性：木", effect: "共情 +4；元素相性变为木（地子类）", resource: { emp: 4 } },
  { name: "古老血脉", effect: "耐力或记忆 +4；调谐古代机械奥秘检定 +1 奖励骰", resource: { sta: 4 } },
  { name: "导力魔法学者", effect: "基础导力能量 +100；元素相性导力魔法掷骰 +1 奖励骰", resource: { ep: 100 } },
  { name: "待琢之玉", effect: "购买增加耐久/活力/魔力的天赋或事迹时额外 +6（每级资源改为 +2）" }
];
function originTalent(name) { return ORIGIN_TALENTS.find(t => t.name === name); }

// Node.js 环境导出（浏览器中忽略）
if (typeof module !== 'undefined' && module.exports) {
  const r8 = () => Math.floor(Math.random() * 8) + 1;
  module.exports = { ATTRIBUTES, ARCS, ELEMENT_AFFINITIES, MARTIAL_AFFINITIES, ORIGIN_TALENTS, ELEMENT_LINES, bonusDiceOf, arcByName, originTalent, rollD8: r8 };
}
