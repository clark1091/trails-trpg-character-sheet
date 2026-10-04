// 自动生成：装备改装件、结晶回路与武器槽位数据（规则书 第12/13章）
const WEAPON_MODS = {
 "grip": [
  {
   "name": "皮革握把",
   "effect": "普通攻击检定获得+1 BD",
   "cost": 300
  },
  {
   "name": "橡胶握把",
   "effect": "技法攻击检定获得+1 BD",
   "cost": 300
  },
  {
   "name": "人体工学握把",
   "effect": "战技攻击检定获得+1 BD",
   "cost": 400
  },
  {
   "name": "士兵握把",
   "effect": "对普通和技法攻击 +1 BD",
   "cost": 600
  },
  {
   "name": "乌木握把",
   "effect": "对普通和战技攻击 +1 BD",
   "cost": 600
  },
  {
   "name": "卓越握把",
   "effect": "对所有攻击掷骰 +1 BD",
   "cost": 1200
  },
  {
   "name": "盾护握把",
   "effect": "对防御检定 +1 BD",
   "cost": 500
  },
  {
   "name": "延展握把",
   "effect": "赋予易用特性",
   "cost": 400
  },
  {
   "name": "稳固握把",
   "effect": "从笨拙中移除2点活力消耗",
   "cost": 700
  },
  {
   "name": "自适应握把",
   "effect": "赋予灵巧特性",
   "cost": 800
  }
 ],
 "head": [
  {
   "name": "电流嵌层",
   "effect": "+1 电武器伤害骰",
   "cost": 700
  },
  {
   "name": "热能嵌层",
   "effect": "+1 火武器伤害骰",
   "cost": 700
  },
  {
   "name": "冷冻嵌层",
   "effect": "+1 冰武器伤害骰",
   "cost": 700
  },
  {
   "name": "金刚刃",
   "effect": "+1 地武器伤害骰",
   "cost": 800
  },
  {
   "name": "剧毒嵌层",
   "effect": "+1 毒素武器伤害骰",
   "cost": 800
  },
  {
   "name": "脉冲冲击件",
   "effect": "+1 风武器伤害骰",
   "cost": 700
  },
  {
   "name": "海石",
   "effect": "+1 水武器伤害骰",
   "cost": 700
  },
  {
   "name": "先锋护面",
   "effect": "防御检定获得 +1 加骰",
   "cost": 600
  },
  {
   "name": "强化击面",
   "effect": "+1 武器伤害骰",
   "cost": 1000
  },
  {
   "name": "防暴臂件",
   "effect": "武术战技的活力消耗 -5",
   "cost": 1200
  }
 ],
 "internal": [
  {
   "name": "雷神驱动器",
   "effect": "+1 电武器伤害骰",
   "cost": 900
  },
  {
   "name": "炽焰驱动器",
   "effect": "+1 火武器伤害骰",
   "cost": 900
  },
  {
   "name": "冰霜驱动器",
   "effect": "+1 冰武器伤害骰",
   "cost": 900
  },
  {
   "name": "宝石驱动器",
   "effect": "+1 地武器伤害骰",
   "cost": 1000
  },
  {
   "name": "毒液驱动器",
   "effect": "+1 毒素武器伤害骰",
   "cost": 1000
  },
  {
   "name": "重力驱动器",
   "effect": "+1 空武器伤害骰",
   "cost": 1200
  },
  {
   "name": "水流驱动器",
   "effect": "+1 水武器伤害骰",
   "cost": 900
  },
  {
   "name": "龙卷驱动器",
   "effect": "+1 风武器伤害骰",
   "cost": 900
  },
  {
   "name": "西格玛驱动器",
   "effect": "导力魔法施放获得 +1 奖励骰",
   "cost": 1200
  },
  {
   "name": "瞄准辅助器",
   "effect": "命中获得 +1 奖励骰",
   "cost": 800
  },
  {
   "name": "过载器",
   "effect": "+1 武器伤害骰",
   "cost": 1500
  },
  {
   "name": "强化弹膛",
   "effect": "弹药容量翻倍",
   "cost": 1000
  }
 ],
 "charm": [
  {
   "name": "守护御札",
   "effect": "当你格挡魔法伤害时，伤害减少值等同于灵性奖励骰",
   "cost": 1000
  },
  {
   "name": "镇定流苏",
   "effect": "对抗恐惧/焦虑时获得 +1 奖励骰",
   "cost": 700
  },
  {
   "name": "反射护符",
   "effect": "成功偏转时，对攻击者反弹 1d8 伤害",
   "cost": 1200
  },
  {
   "name": "幸运结",
   "effect": "武器伤害骰掷出 1 时重掷",
   "cost": 1200
  },
  {
   "name": "旅人护符",
   "effect": "抵抗缴械时获得 +1 奖励骰",
   "cost": 800
  },
  {
   "name": "血之符印",
   "effect": "伤害一名负伤敌人时，恢复 1d6 魔力",
   "cost": 1500
  },
  {
   "name": "缚灵符",
   "effect": "武器在对抗召唤/灵体敌人时获得纠缠",
   "cost": 1000
  },
  {
   "name": "沉默护符",
   "effect": "允许你对魔法攻击进行偏斜",
   "cost": 1500
  }
 ]
};

const ARMOR_MODS = {
 "addon": [
  {
   "name": "尖刺",
   "slots": 1,
   "cost": 400,
   "effect": "当敌人擒抱你时，他们会受到1d6刚伤害。"
  },
  {
   "name": "实用束具",
   "slots": 1,
   "cost": 500,
   "effect": "在运动（拖拽、搬运）检定上获得+1奖励骰。负重上限增加+1/4"
  },
  {
   "name": "弹药带",
   "slots": 1,
   "cost": 600,
   "effect": "装填时间减少1个行动（最低装填1）。"
  },
  {
   "name": "斗篷罩袍",
   "slots": 1,
   "cost": 750,
   "effect": "获得隐蔽式特性；察觉VS 25以识别其为护甲。"
  },
  {
   "name": "腰带与绑带",
   "slots": 1,
   "cost": 500,
   "effect": "护甲耐久+1/4。看起来格外酷炫。"
  },
  {
   "name": "攀爬装备",
   "slots": 1,
   "cost": 1200,
   "effect": "装备可伸缩的抓钩工具。在进行攀爬或攀登表面的运动检定时，获得+1奖励骰。"
  },
  {
   "name": "反应凝胶",
   "slots": 2,
   "cost": 1600,
   "effect": "坠落伤害减半。"
  },
  {
   "name": "外骨骼辅助装备",
   "slots": 2,
   "cost": 2500,
   "effect": "举重值翻倍，重负减少(3)，增加导能妨碍(4)"
  },
  {
   "name": "伪装涂层",
   "slots": 1,
   "cost": 900,
   "effect": "在某一种环境（林地、山地、极地、沙漠或黑夜）中，潜行检定获得+1奖励骰"
  },
  {
   "name": "重型镀层",
   "slots": 2,
   "cost": 1000,
   "effect": "添加或翻倍硬化特性 (护甲等级 x4 vs 斩属性伤害)"
  }
 ],
 "insert": [
  {
   "name": "陶瓷插板",
   "slots": 1,
   "cost": 750,
   "effect": "添加或翻倍防弹特性 (护甲等级 x4 vs 射属性伤害)"
  },
  {
   "name": "冲击挡板",
   "slots": 1,
   "cost": 900,
   "effect": "添加或翻倍衬垫特性 (护甲等级 x4 vs 刚属性伤害)"
  },
  {
   "name": "相位织网",
   "slots": 1,
   "cost": 1200,
   "effect": "对空属性伤害护甲等级翻倍"
  },
  {
   "name": "硬化镀层",
   "slots": 2,
   "cost": 1600,
   "effect": "护甲等级+4，但护甲获得重负(2)。"
  },
  {
   "name": "导力晶格",
   "slots": 2,
   "cost": 1500,
   "effect": "受到导力魔法伤害时，恢复1d8 EP。"
  },
  {
   "name": "导力链接矩阵",
   "slots": 2,
   "cost": 2600,
   "effect": "导能妨碍惩罚减少3"
  },
  {
   "name": "导力隔温体",
   "slots": 1,
   "cost": 1000,
   "effect": "添加或翻倍隔温特性 (护甲等级 x4 vs 冰属性伤害)"
  },
  {
   "name": "冷却插片",
   "slots": 1,
   "cost": 1000,
   "effect": "添加或翻倍隔热特性 (护甲等级 x4 vs 火属性伤害)"
  },
  {
   "name": "欧姆电阻器",
   "slots": 2,
   "cost": 900,
   "effect": "添加或翻倍接地特性 (护甲等级 x4 vs 电属性伤害)"
  }
 ],
 "charm": [
  {
   "name": "防护护符",
   "slots": 1,
   "cost": 900,
   "effect": "增加+1抵抗 VS 吟唱导力魔法和法术"
  },
  {
   "name": "护魂符",
   "slots": 1,
   "cost": 800,
   "effect": "对抗附身、魅惑或恐惧的抵抗检定获得+1奖励骰。"
  },
  {
   "name": "鲜血符印",
   "slots": 1,
   "cost": 3100,
   "effect": "以一个行动，牺牲5点生命值，使力量值+3，持续1回合。"
  },
  {
   "name": "决心护符",
   "slots": 1,
   "cost": 1200,
   "effect": "对抗封技和封魔的抵抗检定获得+1奖励骰。"
  },
  {
   "name": "圣物嵌片",
   "slots": 2,
   "cost": 1400,
   "effect": "每个灵性奖励骰储存18点魔力；可为1次奥秘或导力魔法行动释放。"
  },
  {
   "name": "灵魂之锚",
   "slots": 2,
   "cost": 2100,
   "effect": "当生命值降至0时，你的护甲会吸收100%的导力魔法与魔法战技伤害。"
  },
  {
   "name": "元素护符",
   "slots": 1,
   "cost": 2000,
   "effect": "选择一种元素。你对该元素能量的护甲等级翻倍。"
  }
 ]
};

const QUARTZ = [
 {
  "name": "岩石之刺",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "装备有此结晶回路时，你可以使用导力魔法“岩石之刺”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（L）\\n向一个目标发射一连串石针，每等级造成2d8点射伤害。"
 },
 {
  "name": "刺藤爪",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备有此结晶回路时，你可以使用导力魔法“刺藤爪”。",
  "magic": "EP 25 · 施法 2行动 · 范围 区域（S） · 持续 3回合\\n以束缚藤蔓攻击，每等级造成2d6点射伤害。受到伤害的目标陷入束缚，持续1回合。"
 },
 {
  "name": "巨石坠落",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备有此结晶回路时，你可以使用导力魔法“巨石坠落”。",
  "magic": "EP 40 · 施法 3行动 · 范围 区域（M）\\n向一个区域投下一块巨石，每等级造成3d8点刚伤害。目标必须通过一次AGL豁免，否则此伤害无视护甲。"
 },
 {
  "name": "重震锤",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备有此结晶回路时，你可以使用导力魔法“重震锤”。",
  "magic": "EP 50 · 施法 3行动 · 范围 区域（L） · 持续 2回合\\n召唤一柄巨大的土石之锤，每等级造成4d8点刚伤害。区域内的目标在所有速度检定上承受1次挑战，无论其是否受到伤害。"
 },
 {
  "name": "结晶防护",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备有此结晶回路时，你可以使用导力魔法“结晶防护”。",
  "magic": "EP 10 · 施法 1行动 · 范围 区域（M） · 持续 4回合\\n赋予大地加护，小幅提升防御，为范围内所有盟友提供2点护甲等级。"
 },
 {
  "name": "结晶防护·复",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，你可以施放导力魔法“结晶防护·复”。",
  "magic": "EP 60 · 施法 2行动 · 范围 区域（L） · 持续 4回合\\n赋予大地加护，提升防御，为范围内所有盟友提供5点护甲等级。"
 },
 {
  "name": "坚韧守护",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2300,
  "desc": "装备此结晶回路时，你可以施放导力魔法“坚韧守护”。",
  "magic": "EP 150 · 施法 3行动 · 范围 区域（M） · 持续 直到触发\\n由纯粹大地能量构成的护盾保护目标免受一次物理攻击，使其在被命中并触发此效应前免疫物理伤害。若未被触发，此法术在2分钟后结束。"
 },
 {
  "name": "大地之愈",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施放导力魔法“大地之愈”。",
  "magic": "EP 40 · 施法 2行动 · 范围 远程目标（M） · 持续 4回合\\n引导地脉能量促进治愈，每回合恢复目标最大耐久的四分之一（向下取整）。"
 },
 {
  "name": "防御",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路时，每装备一个插槽等级，护甲等级+1。"
 ,"bonus":{"ac":1}},
 {
  "name": "破坏",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路时，每插槽等级使你的力量+2，并在对抗重甲敌人时获得攻击加成，允许你每等级忽略1点护甲等级。"
 ,"bonus":{"str":2}},
 {
  "name": "毒之刃",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2100,
  "desc": "装备此结晶回路时，每当你的攻击造成伤害且伤害骰爆发，你的攻击和战技便获得施加中毒的能力。"
 },
 {
  "name": "石化之刃",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2200,
  "desc": "当装备此结晶回路时，每当你以基础攻击或战技命中一个对手，且在动作检定中爆发一个或更多骰子时，你根据此结晶回路插槽的等级施加石化状态，持续1回合/等级。"
 },
 {
  "name": "破盾之牙",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2500,
  "desc": "装备此结晶回路时，你的攻击和战技获得忽略目标8点护甲等级的能力。"
 },
 {
  "name": "地言铃",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路时，地属性导力魔法的威力+1伤害骰等级（例如从d8到d10），且地属性导力魔法的施法时间减少1行动，最低为1。"
 },
 {
  "name": "耀脉",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路时，每插槽等级使你的EP+10，并使SOL检定获得+1奖励骰。"
 ,"bonus":{"ep":10}},
 {
  "name": "龙脉",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2600,
  "desc": "装备此结晶回路后，每有一个插槽等级，最大耐久便增加50，护甲等级+2，且在野外行走时每10分钟恢复1点魔力。"
 ,"bonus":{"dur":50,"ac":2}},
 {
  "name": "高压水块",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，可以施放导力魔法“高压水块”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（L）\\n发射一道集中的水流，每等级造成2d8点斩伤害。"
 },
 {
  "name": "冰晶剑",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，可以施放导力魔法“冰晶剑”。",
  "magic": "EP 30 · 施法 2行动 · 范围 直线（M） · 持续 1回合\\n发射一道锐利的霜冻波，每等级造成3d6点冰属性伤害。"
 },
 {
  "name": "碧水喷射",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，可以施放导力魔法“碧水喷射”。",
  "magic": "EP 40 · 施法 3行动 · 范围 区域（S）\\n释放一道上升的水流，每等级造成3d8点水伤害。受到伤害的目标在抵抗反应上承受1次挑战，持续1回合。"
 },
 {
  "name": "钻石新星",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，可以施放导力魔法“钻石新星”。",
  "magic": "EP 50 · 施法 3行动 · 范围 区域（M） · 持续 2回合\\n创造爆发性的霜冻新星，每等级造成4d8点冰属性伤害。范围内受到伤害的目标陷入冻结，持续3回合。"
 },
 {
  "name": "回复术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，可以施放导力魔法“回复术”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（M）\\n借助水之力恢复少量耐久，每等级恢复2d8点耐久，并治愈灼烧状态。"
 },
 {
  "name": "中回复术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，可以施放导力魔法“中回复术”。",
  "magic": "EP 50 · 施法 2行动 · 范围 远程目标（M）\\n借助水之力恢复中量耐久，每等级恢复3d8点耐久，并治愈灼烧状态。"
 },
 {
  "name": "大回复术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，可以施放导力魔法“大回复术”。",
  "magic": "EP 120 · 施法 3行动 · 范围 远程目标（M）\\n借助水之力恢复大量耐久，每等级恢复5d8点耐久，并治愈灼烧状态。"
 },
 {
  "name": "治愈术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，可以施放导力魔法“治愈术”。",
  "magic": "EP 10 · 施法 1行动 · 范围 远程目标（M）\\n净化一名盟友的一切不洁与负面状态，治愈灼烧、冻结、石化、恍惚、耳聋、目盲、封技、封魔和中毒。"
 },
 {
  "name": "复活术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2300,
  "desc": "装备此结晶回路时，可以施放导力魔法“复活术”。",
  "magic": "EP 60 · 施法 2行动 · 范围 远程目标（M）\\n复活一名昏迷的盟友，并恢复少量生命与耐久，每等级治疗1d8点生命和耐久。"
 },
 {
  "name": "圣灵术",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“圣灵术”。",
  "magic": "EP 180 · 施法 3行动 · 范围 远程目标（M）\\n复活一名昏迷的盟友，并恢复适量生命与耐久，每等级治疗2d8点生命和耐久。"
 },
 {
  "name": "HP",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2500,
  "desc": "装备此结晶回路使你的最大耐久增加，每插槽等级+100。"
 ,"bonus":{"dur":100}},
 {
  "name": "魔防",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路使你的魔防每插槽等级+2，并为对抗魔法攻击的抵抗反应提供+1奖励骰。"
 ,"bonus":{"mdf":2}},
 {
  "name": "封魔之刃",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2300,
  "desc": "当此结晶回路被装备时，每当你以导力魔法、吟唱导力魔法或魔法战技命中对手，并在施法或侵袭骰中爆裂一个或多个骰子时，你对其施加封魔，持续此结晶回路插槽每等级1回合。"
 },
 {
  "name": "冻结之刃",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2300,
  "desc": "当此结晶回路被装备时，每当你以基础攻击或武术战技命中对手，并在动作骰中爆裂一个或多个骰子时，你对其施加冻结，持续此结晶回路插槽每等级1回合。"
 },
 {
  "name": "破灵之牙",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路使你的攻击和战技降低目标的魔防5点，持续2回合。"
 },
 {
  "name": "水言铃",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路使水属性导力魔法的伤害骰子级数提升1级（例如从d8到d10），并使水属性导力魔法的施放时间减少1个行动。"
 },
 {
  "name": "火焰箭",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“火焰箭”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（L）\\n向一个目标发射火球，每等级造成2d8点火属性伤害。"
 },
 {
  "name": "猛毒烈焰",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“猛毒烈焰”。",
  "magic": "EP 30 · 施法 2行动 · 范围 区域（S） · 持续 3回合\\n释放带有毒性的火焰，每等级造成2d8点火属性伤害。受到伤害的目标陷入中毒，持续3回合。"
 },
 {
  "name": "闪焰蝶",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“闪焰蝶”。",
  "magic": "EP 40 · 施法 3行动 · 范围 区域（M）\\n在大范围内释放灼热火焰，每等级造成3d6点火属性伤害。区域内的生物在未被命中或成功进行抵抗反应时承受一半伤害。"
 },
 {
  "name": "力天使加农",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，你可以施放导力魔法“力天使加农”。",
  "magic": "EP 60 · 施法 3行动 · 范围 直线（L） · 持续 3回合\\n发射一道凝聚的火焰能量束，每等级造成4d8点火属性伤害。被命中的目标陷入灼烧，持续3回合。"
 },
 {
  "name": "振奋之激",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，你可以施放导力魔法“振奋之激”。",
  "magic": "EP 40 · 施法 2行动 · 范围 远程目标（M） · 持续 4回合\\n点燃一名盟友的斗志，在持续时间内每回合每等级恢复10点活力。"
 },
 {
  "name": "强音之力",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施放导力魔法“强音之力”。",
  "magic": "EP 20 · 施法 1行动 · 范围 区域（M） · 持续 4回合\\n赋予火之祝福，小幅提升攻击力，使范围内所有盟友的STR每等级提升3点。"
 },
 {
  "name": "强音之力·复",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，你可以施放导力魔法“强音之力·复”。",
  "magic": "EP 120 · 施法 3行动 · 范围 区域（L） · 持续 4回合\\n赋予火之祝福，大幅提升攻击力，使范围内所有盟友的STR每等级提升5点。"
 },
 {
  "name": "战意再起",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，你可以施放导力魔法“战意再起”。",
  "magic": "EP 70 · 施法 2行动 · 范围 全体\\n提升士气，为所有盟友恢复40点活力，并治愈恍惚与冻结。"
 },
 {
  "name": "攻击",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路使你的力量增加，每插槽等级+3。"
 ,"bonus":{"str":3}},
 {
  "name": "必杀",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路使你的武术初始爆发阈值+1，这意味着你使用武器攻击、战斗技法和战技造成的伤害奖励骰，在掷出最大值以及最大值-1时也会爆发。例如，如果你在使用武器造成伤害的d10奖励骰上掷出9，你将再掷一个骰子并将其计入。只有第一个骰子在此范围内爆发，后续骰子不会。"
 },
 {
  "name": "封技之刃",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2400,
  "desc": "装备此结晶回路时，每当你使用基础攻击或武术战技命中敌人，并在行动掷骰中爆发一个或多个骰子时，你造成封技，持续回合数等于此结晶回路插槽的等级。"
 },
 {
  "name": "炎伤之刃",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2200,
  "desc": "当装备此结晶回路时，每当你用基础攻击或战技命中对手，且在动作掷骰中爆击一个或多个骰子，你对其施加灼烧（2），持续此结晶回路槽位等级数回合。"
 },
 {
  "name": "破剑之牙",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路后，你的攻击和战技获得能力，可对对手的伤害奖励骰施加1次挑战，持续2轮。"
 },
 {
  "name": "火言铃",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路使火属性导力魔法的威力提升1级伤害骰阶（例如从d8到d10），并使火属性导力魔法施法时间减少1个行动。"
 },
 {
  "name": "焰星铃",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2700,
  "desc": "装备此结晶回路使火属性导力魔法的威力提升2级伤害骰阶（例如从d8到d12），每轮首次施放火属性导力魔法时增加1颗伤害骰，并使火属性导力魔法施法时间减少1个行动，最少为1。"
 },
 {
  "name": "风之轮",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“风之轮”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（M）\\n向目标送出一道切割之风，每等级造成2d8点斩伤害。"
 },
 {
  "name": "复仇之箭",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“复仇之箭”。",
  "magic": "EP 30 · 施法 2行动 · 范围 直线（M）\\n释放一支蓄满雷电的箭矢，每等级造成3d8点电属性伤害。"
 },
 {
  "name": "风之飙尘",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“风之飙尘”。",
  "magic": "EP 40 · 施法 3行动 · 范围 区域（S）\\n释放一阵由尘土和碎屑组成的旋风，每等级造成2d8点射伤害。区域内目标命中即陷入目盲，即使其未受到伤害也是如此。"
 },
 {
  "name": "神罚怒雷",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“神罚怒雷”。",
  "magic": "EP 50 · 施法 3行动 · 范围 区域（M）\\n召唤一道巨大的雷击，每等级造成3d8点电属性伤害。受到伤害的目标陷入恍惚，持续1回合。"
 },
 {
  "name": "生命之息",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“生命之息”。",
  "magic": "EP 50 · 施法 2行动 · 范围 区域（M）\\n以净化之息轻微治疗区域内的盟友，每等级恢复1d8点耐久。被治疗的盟友在抵抗反应上获得+1奖励骰，持续1回合。"
 },
 {
  "name": "圣灵之息",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“圣灵之息”。",
  "magic": "EP 200 · 施法 3行动 · 范围 区域（L）\\n以净化之息治疗区域内的盟友，每等级恢复2d8点耐久。被治疗的盟友在抵抗反应上获得+1奖励骰，持续1回合。"
 },
 {
  "name": "大治愈术",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，你可以施放导力魔法“大治愈术”。",
  "magic": "EP 80 · 施法 2行动 · 范围 区域（L）\\n以净化之风治愈范围内所有盟友的异常状态。此魔法移除状态，治愈灼烧、冻结、石化、恍惚、耳聋、目盲、封技、封魔和中毒。"
 },
 {
  "name": "回避",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路时，根据插槽等级，你的防御反应骰相关的速度+3。"
 ,"bonus":{"spd":3}},
 {
  "name": "移动",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2100,
  "desc": "装备此结晶回路时，你的移动速度根据插槽等级+5尺。"
 ,"bonus":{"move":5}},
 {
  "name": "黑暗之刃",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，每当你以导力魔法、吟唱导力魔法或魔法战技命中对手，并在施法或侵袭骰上爆发一个或多个骰子时，你根据此结晶回路插槽的等级，对目标造成目盲，持续1回合。"
 },
 {
  "name": "破足之牙",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2200,
  "desc": "装备此结晶回路时，你的攻击和战技获得降低目标一半移动力且速度-5的能力，持续2回合。"
 },
 {
  "name": "风言铃",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路时，风属性导力魔法的威力伤害骰提升1级（例如从d8提升至d10），并且风属性导力魔法的施放时间减少1行动，最低降至1行动。"
 },
 {
  "name": "心灵之霞",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "装备此结晶回路时，你可以施放导力魔法“心灵之霞”。",
  "magic": "EP 20 · 施法 2行动 · 范围 远程目标（M）\\n以熵能发动攻击，每等级造成2d8点时伤害。"
 },
 {
  "name": "受难之刃",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施放导力魔法“受难之刃”。",
  "magic": "EP 35 · 施法 2行动 · 范围 锥形（S）\\n释放一道横扫的能量斩击，每等级造成3d8点时伤害。施法者恢复相当于总伤害10%的生命或耐久。"
 },
 {
  "name": "失落创世纪",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2300,
  "desc": "装备此结晶回路时，你可以施放导力魔法“失落创世纪”。",
  "magic": "EP 60 · 施法 3行动 · 范围 区域（L）\\n释放毁灭性的时间扭曲能量波，每等级造成4d8点时伤害。若目标已经负伤，或因该导力魔法受到任何生命伤害，则受到伤害的目标陷入昏迷。"
 },
 {
  "name": "时间驱动",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施放导力魔法“时间驱动”。",
  "magic": "EP 60 · 施法 2行动 · 范围 自身或盟友（S） · 持续 3回合\\n加速目标的时间，使其在速度检定上获得1点蓄势，并且每等级速度+3。"
 },
 {
  "name": "时间减速",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“时间减速”。",
  "magic": "EP 90 · 施法 2行动 · 范围 区域（L） · 持续 4回合\\n减缓目标敌人的时间流动，使其每回合行动次数减少1。"
 },
 {
  "name": "时间爆发",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“时间爆发”。",
  "magic": "EP 400 · 施法 3行动 · 范围 自身\\n改变时间法则，使你在施放此导力魔法的回合后获得2个额外回合。在这些回合中，你只能移动四分之一速度，且战技消耗翻倍。此导力魔法结束后，你在1分钟（4回合）内无法再次施放。"
 },
 {
  "name": "行动力",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路可使你的速度值每嵌孔等级+3，并为先攻检定提供+1奖励骰。"
 ,"bonus":{"spd":3}},
 {
  "name": "驱动",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路可使导力魔法的施放时间减少1个行动（最低为1个行动）。"
 },
 {
  "name": "恶梦之刃",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2200,
  "desc": "装备此结晶回路可使你的攻击和战技获得能力，能够施加焦虑状态，持续3回合。"
 },
 {
  "name": "破迅之牙",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2200,
  "desc": "装备此结晶回路可使你的攻击和战技获得能力，能够使目标的速度降低5点，持续2回合。"
 },
 {
  "name": "黑言铃",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路可使时间属性导力魔法的威力提升1级伤害骰（例如从d8提升至d10），并使其施放时间减少1个行动，最低为1个行动。"
 },
 {
  "name": "夜煌",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2500,
  "desc": "装备此结晶回路可使你的EP每嵌孔等级+10，并为每回合施放的第一个时间属性导力魔法增加+1伤害骰。此外，当一次攻击或单体战技命中时，如果有2个或更多伤害骰发生爆发，则可令目标陷入昏迷状态。"
 },
 {
  "name": "黄金球",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "当你装备此结晶回路时，你可以施放导力魔法“黄金球”。",
  "magic": "EP 25 · 施法 2行动 · 范围 远程目标（S）\\n释放一股能量激流，每等级造成2d8点空伤害。"
 },
 {
  "name": "破邪之印",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施放导力魔法“破邪之印”。",
  "magic": "EP 50 · 施法 3行动 · 范围 区域（M）\\n制造一道压倒性的能量冲击，对范围内所有目标每等级造成3d8点空伤害。"
 },
 {
  "name": "七圣剑",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，你可以施放导力魔法“七圣剑”。",
  "magic": "EP 70 · 施法 3行动 · 范围 区域（L）\\n释放一次强力打击，每等级造成4d8点空伤害。受到伤害的目标遭受本场遭遇中最后被施加的状态；若本场遭遇中尚无状态，则遭受耳聋。"
 },
 {
  "name": "魔导祝福",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，你可以施放导力魔法“魔导祝福”。",
  "magic": "EP 30 · 施法 2行动 · 范围 自身或远程目标（S） · 持续 3回合\\n增强魔法能力，为魔法战技攻击检定和导力魔法施法检定提供1点蓄势。"
 },
 {
  "name": "闪耀天启",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，你可以施放导力魔法“闪耀天启”。",
  "magic": "EP 150 · 施法 3行动 · 范围 区域（M） · 持续 4回合\\n赋予盟友洞察力，治愈目盲并增强态势感知，使其防御反应检定获得+1奖励骰。"
 },
 {
  "name": "炽天使之环",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，你可以施放导力魔法“炽天使之环”。",
  "magic": "EP 500 · 施法 3行动 · 范围 全体\\n复活所有昏迷的盟友，包括生命值为0且处于休克状态者，并将耐久完全恢复至最大值，同时恢复3d8点生命。"
 },
 {
  "name": "省EP",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路时，所有导力魔法的EP消耗减少量等于插槽等级×1。"
 },
 {
  "name": "命中",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "强化",
  "price": 2300,
  "desc": "装备此结晶回路时，你的基础攻击、战斗技法和战技的攻击骰获得+1奖励骰。"
 },
 {
  "name": "妨碍",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2500,
  "desc": "装备此结晶回路时，你的攻击和战技获得打断敌人施法的能力，若成功打断导力魔法，则目标失去下一个回合，并陷入恍惚状态1回合。"
 },
 {
  "name": "昏厥之刃",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2400,
  "desc": "装备此结晶回路时，每当你的基础攻击或战技命中对手并在行动骰上爆发一个或多个骰子时，你造成恍惚状态，持续回合数等于该结晶回路插槽的等级。"
 },
 {
  "name": "金言铃",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路时，空属性导力魔法的伤害骰提升1级（例如从d8提升至d10），且空属性导力魔法的施法时间减少1个行动。"
 },
 {
  "name": "孤剑",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2300,
  "desc": "装备此结晶回路将使你的耐久根据每个插槽等级增加+50，并在每场战斗中为第一次攻击或武术战技提供+1奖励伤害骰。使用攻击或战技成功命中还会使目标的物防降低5点，持续2回合。"
 ,"bonus":{"dur":50}},
 {
  "name": "银夜之棘",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1800,
  "desc": "装备此结晶回路时，你可以施展导力魔法“银夜之棘”。",
  "magic": "EP 20 · 施法 2行动 · 范围 区域（S）\\n释放一阵灵质荆棘，每等级造成2d8点神圣伤害。"
 },
 {
  "name": "盖伦堡垒",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施展导力魔法“盖伦堡垒”。",
  "magic": "EP 30 · 施法 2行动 · 范围 直线（M）\\n产生一股灵魂能量冲击，每等级造成3d8点神圣伤害。受到伤害的目标在基于其当前最高属性值进行的检定上承受2次挑战，持续2回合。"
 },
 {
  "name": "白银狼",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2100,
  "desc": "装备此结晶回路时，你可以施展导力魔法“白银狼”。",
  "magic": "EP 50 · 施法 3行动 · 范围 区域（M）\\n召唤一群幽灵狼，每等级造成4d8点神圣伤害。受到伤害的敌人失去施加于自身的任何导力魔法或支援魔法战技带来的好处。"
 },
 {
  "name": "新月之镜",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 1900,
  "desc": "装备此结晶回路时，你可以施展导力魔法“新月之镜”。",
  "magic": "EP 160 · 施法 3行动 · 范围 爆发（L） · 持续 4回合\\n此导力魔法在区域内为所有盟友制造防护屏障，赋予15点护甲等级以抵抗元素伤害，并提供+10魔防加值。"
 },
 {
  "name": "情报解析",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2000,
  "desc": "装备此结晶回路时，你可以施展导力魔法“情报解析”。",
  "magic": "EP 10 · 施法 1行动 · 范围 远程目标（M）\\n收集目标的详细数据，得知其元素弱点或抗性、导力魔法配置、护甲等级、耐久、生命和等级。"
 },
 {
  "name": "神圣之力",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "装备此结晶回路时，你可以施展导力魔法“神圣之力”。",
  "magic": "EP 80 · 施法 2行动 · 范围 远程目标（M） · 持续 4回合\\n使一名盟友的能力恢复正常，移除所有状态，并在持续时间内抵消所有挑战。未被治愈的挑战会在效应结束时恢复。"
 },
 {
  "name": "EP",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "能力",
  "price": 2400,
  "desc": "装备此结晶回路将使你的最大EP根据每个已装备的插槽等级增加+15。"
 },
 {
  "name": "精神",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2300,
  "desc": "装备此结晶回路时，你的魔法之力得到增幅，为施法检定、导力魔法攻击和魔法战技添加+1奖励骰。"
 },
 {
  "name": "混乱之刃",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2200,
  "desc": "当装备此结晶回路时，每当你用导力魔法、咏唱导力魔法或魔法战技命中对手，并在施法或侵袭掷骰中爆发一个或多个骰子，你根据此结晶回路槽位的等级，每等级造成1回合的混乱。"
 },
 {
  "name": "幽界铃",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2400,
  "desc": "装备此结晶回路会使幻属性导力魔法的强力提升1个伤害骰子等级（例如从d8到d10），并使幻属性导力魔法的施法时间减少1个行动，最低至1个行动。"
 },
 {
  "name": "贤王珠",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 2600,
  "desc": "装备此结晶回路时，你的EP每插槽等级+50，并会对你击败的敌人自动施放“情报解析”。"
 },
 {
  "name": "黄玉核心",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 5700,
  "desc": "一颗璀璨的黄色宝石，能增强韧性与力量。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1地属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1地属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2地属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：地",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗璀璨的黄色宝石，能增强韧性与力量。"
 },
 {
  "name": "蓝宝石核心",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 5700,
  "desc": "一颗闪烁的蓝色宝石，能增强生命力和治疗效果。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1水属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1水属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2水属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：水",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗闪烁的蓝色宝石，能增强生命力和治疗效果。"
 },
 {
  "name": "红宝石核心",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 5900,
  "desc": "一颗明亮的红色宝石，燃烧着如火焰般的炽烈。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1火属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1火属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2火属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：火",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗明亮的红色宝石，燃烧着如火焰般的炽烈。"
 },
 {
  "name": "翡翠核心",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 5800,
  "desc": "一颗增强速度与精准的翠绿色宝石。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1风属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1风属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2风属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：风",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗增强速度与精准的翠绿色宝石。"
 },
 {
  "name": "黑碧玺核心",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 6000,
  "desc": "一颗能操纵时间流动的深黑色宝石。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1时属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1时属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2时属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：时",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗能操纵时间流动的深黑色宝石。"
 },
 {
  "name": "钻石核心",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 6600,
  "desc": "一颗璀璨的透明宝石，能与空间能量产生共鸣。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1空属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1空属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2空属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：空",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一颗璀璨的透明宝石，能与空间能量产生共鸣。"
 },
 {
  "name": "紫水晶核心",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 5900,
  "desc": "一种深紫色宝石，能增强洞察力与魔法力量。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+20</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1幻属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+1幻属性导力魔法射程增量</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">导力魔法加成：</span>+2幻属性导力魔法射程增量</div></div>"
 },
 {
  "name": "元素相性：幻",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "宝石核心",
  "price": 0,
  "desc": "一种深紫色宝石，能增强洞察力与魔法力量。"
 },
 {
  "name": "神盾",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "神盾体现了地元素的坚韧与防护本质，增强防御与韧性。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，+1 护甲等级。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“岩石之刺”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，+1 护甲等级，+1 抵抗（STA）。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“刺藤爪”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，+2 护甲等级，+2 抵抗（STA）。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“巨石坠落”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，+2护甲等级，+2抵抗（STA），地属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“重震锤”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，+3护甲等级，+3抵抗（STA），地属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“坚韧守护”导力魔法。</div></div>"
 },
 {
  "name": "圣典",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "圣典反映了水的流动与恢复本质，增强治疗能力与精神力量。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，+1 抵抗（SOL）。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“回复术”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，+1 抵抗（SOL），治疗导力魔法掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“中回复术”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，+2 抵抗（SOL），治疗导力魔法掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“大回复术”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，+2抵抗（SOL），治疗导力魔法掷骰获得+2奖励骰，水属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“治愈术”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，+3抵抗（SOL），治疗导力魔法掷骰获得+2奖励骰，水属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“复活术”导力魔法。</div></div>"
 },
 {
  "name": "骑兵",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "骑兵体现了火焰的凶猛与勇猛精神，增强攻击力和活力。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP， · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“火焰箭”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，攻击检定+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“猛毒烈焰”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，攻击检定+1奖励骰，火焰导力魔法造成的伤害+1骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“闪焰蝶”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，攻击检定+2奖励骰，火焰导力魔法造成的伤害+1骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“力天使加农”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，攻击检定+2奖励骰，火焰导力魔法造成的伤害+2骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“强音之力·复”导力魔法。</div></div>"
 },
 {
  "name": "草薙",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "草薙引导着迅捷莫测的风之本质，提升速度与闪避。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，移动时速度+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“风之轮”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，+2 速度，远程攻击+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“复仇之箭”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，+3 速度，远程攻击获得+1奖励骰，风属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“风之飙尘”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，+3 速度，远程攻击获得+2奖励骰，风属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“神罚怒雷”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，+4 速度，远程攻击获得+2奖励骰，风属性导力魔法射程增量+2。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“圣灵之息”导力魔法。</div></div>"
 },
 {
  "name": "永恒",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20500,
  "desc": "永恒体现了空的无限与包容本质，增强支援能力与空间操控。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，远程攻击检定获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“黄金球”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，远程攻击检定获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“破邪之印”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，远程攻击检定获得+2奖励骰，空属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“七圣剑”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，远程攻击检定获得+2奖励骰，空属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“魔导祝福”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，远程攻击检定获得+3奖励骰，空属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“炽天使之环”导力魔法。</div></div>"
 },
 {
  "name": "灵猫",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20500,
  "desc": "灵猫体现了时的错综复杂与难以捉摸之本质，能实现快速移动和时间干扰。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，先攻检定+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“心灵之霞”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，先攻检定+2。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“时间驱动”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，先攻检定+2，施法时间减少1个行动。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“受难之刃”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，先攻检定+3，施法时间减少1个行动，时属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“时间减速”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，先攻检定+3，施法时间减少1个行动，时属性导力魔法伤害掷骰获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“失落创世纪”导力魔法。</div></div>"
 },
 {
  "name": "宝盒",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20500,
  "desc": "宝盒体现了幻神秘而空灵的特质，增强魔法力量和洞察力。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，导力魔法技能检定+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“银夜之棘”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>EP+20，导力魔法技能检定+2。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“盖伦堡垒”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>EP+30，导力魔法技能检定+2，幻属性导力魔法射程增量+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“白银狼”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，导力魔法技能检定+3，幻属性导力魔法射程增量+1，幻属性导力魔法伤害+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“情报解析”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，导力魔法技能检定+3，幻属性导力魔法射程增量+1，幻属性导力魔法伤害+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“神圣之力”导力魔法。</div></div>"
 },
 {
  "name": "未来",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 21000,
  "desc": "未来显现出大地不知疲倦的碾磨之力，交战时可摧毁敌人的防御。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP， · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“岩石之刺”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，目标未受伤时，对耐久额外造成2个伤害骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“刺藤爪”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，目标未受伤时，对耐久额外造成3个伤害骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“巨石坠落”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，目标未受伤时，对耐久额外造成3个伤害骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“重震锤”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，伤害掷骰爆发时恢复1d6点耐久；目标未受伤时，伤害+3骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“坚韧守护”导力魔法。</div></div>"
 },
 {
  "name": "水星",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "水星代表着水无孔不入的能力，能渗透防御中最微小的裂缝。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，使用导力魔法击中元素弱点时+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“高压水块”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，使用导力魔法击中元素弱点时+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“冰晶剑”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，使用导力魔法命中元素弱点时获得+1蓄势与+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“风之轮”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，使用导力魔法命中元素弱点时获得+1蓄势与+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“心灵之霞”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，使用导力魔法命中元素弱点时获得+1蓄势与+2奖励骰；导力魔法伤害骰掷出最大值-1时也会爆发 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“银夜之棘”导力魔法。</div></div>"
 },
 {
  "name": "兽眸",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "兽眸沉醉于火焰的净化恢复之力。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，恢复阶段时治愈1d6耐久 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“火焰箭”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，恢复阶段时治愈1d6耐久 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“猛毒烈焰”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，恢复阶段时治愈1d8耐久 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“闪焰蝶”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，恢复阶段时治愈1d8耐久 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“力天使加农”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，恢复阶段治疗1d10点耐久；若生命和耐久均为全满，则改为在恢复阶段结束所有状态。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“强音之力·复”导力魔法。</div></div>"
 },
 {
  "name": "暴风",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "暴风驾驭着咆哮狂风的危险边缘，将沿途的一切夷为平地。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，回合开始时若耐久低于1/4，你可以花费3点活力，使所有掷骰获得1个奖励骰，持续到下个回合开始 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“风之轮”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，回合开始时若耐久低于1/4，你可以花费3点活力，使所有掷骰获得1个奖励骰，持续到下个回合开始 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“复仇之箭”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，回合开始时若耐久低于1/2，你可以花费3点活力，使所有掷骰获得1个奖励骰，持续到下个回合开始 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“风之飙尘”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，回合开始时若耐久低于1/2，你可以花费3点活力，使所有掷骰获得1个奖励骰，持续到下个回合开始 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“神罚怒雷”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，回合开始时若耐久低于1/2，你可以花费5点活力，使所有掷骰获得2个奖励骰，持续到下个回合开始；伤害骰掷出最大值-1时也会爆发。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“圣灵之息”导力魔法。</div></div>"
 },
 {
  "name": "宝剑",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20500,
  "desc": "宝剑探入空的深处，将形而上之物化为有形。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，当你用魔法战技造成伤害时，回复1点活力 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“黄金球”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，当你用魔法战技造成伤害时，回复1点活力 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“破邪之印”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，当你用魔法战技造成伤害时，恢复等同于最低伤害骰结果的活力 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“七圣剑”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，当你用魔法战技造成伤害时，恢复等同于最低伤害骰结果的活力 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“魔导祝福”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，当你用魔法战技造成伤害时，恢复等同于最高伤害骰结果的活力；活力低于1/2时，导力魔法施法检定获得+1奖励骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“炽天使之环”导力魔法。</div></div>"
 },
 {
  "name": "神矛",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20500,
  "desc": "神矛携时之力降临，即便最轻微的打击也能让你的敌人从内部崩溃。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，重武器战技伤害+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“心灵之霞”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，重武器战技伤害+1奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“时间驱动”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，重武器战技伤害+2奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“受难之刃”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，重武器战技伤害+2奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“时间减速”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，重武器战技伤害+3奖励骰 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“失落创世纪”导力魔法。</div></div>"
 },
 {
  "name": "守护",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "核心回路",
  "price": 20000,
  "desc": "守护以分心之幕庇护其持用者，令任何致命一击皆无法精准命中。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">加成：</span>+10 EP，当耐久低于1/2时，物防和魔防+1。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“银夜之棘”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">加成：</span>+20 EP，当耐久低于1/2时，物防和魔防+2。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“盖伦堡垒”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">加成：</span>+30 EP，当耐久低于1/2时，物防和魔防+3。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“白银狼”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">加成：</span>+40 EP，当耐久低于1/2时，物防和魔防+4。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“情报解析”导力魔法。</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">加成：</span>+50 EP，耐久低于1/2时，物防和魔防+5；对无生命物体伤害+2骰。 · <span style=\"color:var(--muted)\">授予的导力魔法：</span>解锁“神圣之力”导力魔法。</div></div>"
 },
 {
  "name": "导力魔法驱动器",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "空洞核心不仅能赋予独特能力和被动增益。每个都配备了一个导力魔法驱动器，这是一个可编程接口，允许你通过RAM插槽直接将元素导力魔法公式安装到你的导力器里。 导力魔法驱动器RAM决定了你的空洞核心一次能同时运行多少个导力魔法。这不涉及你固有的施法能力，而是指你的空洞核心处理器可用的运行内存。大多数核心可以执行三个低位元素，或者一个低位和一个高位元素，具体取决于其型号。导力魔法驱动器的RAM插槽数量基于空洞核心的等级。 将导力魔法安装到RAM插槽中意味着你可以像使用结晶回路配置中原有的魔法一样施放它。这些导力魔法必须与空洞核心支持的元素相匹配。你不需要装备相应类型的结晶回路，但仍需支付EP消耗并使用标准施法规则。 导力魔法可以在休息期间、使用合适的工具、或在导力终端进行更换。你只能安装空洞核心所支持元素类型的导力魔法。",
  "lv": ""
 },
 {
  "name": "空洞核心驱动器接口",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "RAM插槽决定了一次最多可加载的导力魔法数量 导力魔法必须与空洞核心的元素接入权限匹配。无需装备对应元素结晶回路即可使用已安装的导力魔法 导力魔法的安装需在休整期间或通过终端进行，EP消耗和施放时间保持不变 导力魔法驱动器系统让你能自由定制导力魔法库，不再受结晶回路插槽排列的限制",
  "lv": ""
 },
 {
  "name": "空洞核心经验系统",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "可选规则：空洞核心不会随角色核心插槽成长而被动获得等级提升取而代之，它们会从实时战斗表现中获得数据碎片（经验值）每个空洞核心起始为等级1，最高可升至等级5，每级解锁新能力或带来强化",
  "lv": ""
 },
 {
  "name": "获取数据碎片",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "每次战斗后，你的空洞核心会根据战斗表现获得数据碎片。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv施放造成伤害的导力魔法：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>每命中一个目标+1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv用导力魔法施加状态效应：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>每种独有效应+1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv用导力魔法击败敌人：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>+3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv有效利用元素弱点：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>每次命中+2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv盟友在战斗中倒下：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>+1（从失败中学习）</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv使用者未受到生命伤害并在战斗中存活：</b><span style=\"color:var(--muted)\">获得的数据碎片：</span>+2</div></div>"
 },
 {
  "name": "等级晋升",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "当你的空洞核心积累数据碎片时，它会成长，逐步晋升至相应的等级。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1至2：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>25</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2至3：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>50</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3至4：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>80</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4至5：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>120</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv进化：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>170</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv进化1至2：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>230</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv进化2至3：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>330</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv进化3至4：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>490</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv进化4至5：</b><span style=\"color:var(--muted)\">所需累计数据碎片：</span>730</div></div>"
 },
 {
  "name": "空洞核心进化",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 0,
  "desc": "当一个空洞核心达到等级5，并额外累积50个数据碎片后，它就能进行系统进化，这是一种永久性的升级，会改变其行为、能力和主题特性。这表示AI实现了类似知觉的处理，并围绕一个核心指令重写其操作逻辑。要进化，你必须成为命定状态，并且你的空洞核心必须满足以下条件： * 必须达到等级5。 * 必须累积超出等级5之外的50个额外数据碎片。 * 必须在战斗中和使用者同步至少10次（与同一角色进行10次战斗）。一旦进化，选择是永久的。",
  "lv": ""
 },
 {
  "name": "艾姆",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 水，风。 **AI能力：** +1导力魔法射程增量",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 医学 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+1 奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 医学 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+1 奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 医学 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+2 奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 医学 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰 和 治疗加成 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 医学 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+1 奖励骰 和 1 蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 医学 · <span style=\"color:var(--muted)\">技能 2：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+1 奖励骰 和 1 蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 医学 · <span style=\"color:var(--muted)\">技能 2：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+1 奖励骰 和 1 蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 医学 · <span style=\"color:var(--muted)\">技能 2：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+2奖励骰和1蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 医学 · <span style=\"color:var(--muted)\">技能 2：</span>+2 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>治疗+2奖励骰和1蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 医学 · <span style=\"color:var(--muted)\">技能 2：</span>+2 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>奖励骰+3，治疗蓄势+1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "琥珀",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 56000,
  "desc": "**元素组：** 地、空 **AI能力：** 护甲等级+10，物防和魔防+10",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+2 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+2 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗+2 · <span style=\"color:var(--muted)\">技能 2：</span>生存+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 抵抗 · <span style=\"color:var(--muted)\">技能 2：</span>生存+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人护甲减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 抵抗 · <span style=\"color:var(--muted)\">技能 2：</span>生存+1 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时降低敌人4点护甲 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 抵抗 · <span style=\"color:var(--muted)\">技能 2：</span>+2 生存 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时降低敌人4点护甲 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 抵抗 · <span style=\"color:var(--muted)\">技能 2：</span>+2 生存 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时降低敌人5点护甲 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "银耀",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 幻，空。 **AI能力：** 触及范围内所有敌人，对你以外目标造成伤害时，其伤害掷骰承受劣势。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+2 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+2 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+2 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+1 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>巧手+4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">能力：</span>成功攻击时敌人速度-5 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "巴提姆",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 57000,
  "desc": "**元素组：** 火、空 **AI能力：** AI激活时，你的火导力魔法忽略½敌 护甲等级，并造成灼烧(2)，持续2回合。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+1。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+1。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+2。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+2。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>社交+1 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。灼烧提升至(3) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>社交+2 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。灼烧提升至(3) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>社交+2 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。灼烧提升至(4) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>社交 +3 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。灼烧提升至(4) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>社交 +4 · <span style=\"color:var(--muted)\">技能：</span>火导力魔法造成的伤害骰+3。灼烧提升至(5) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "卡米欧",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 风，地。 **AI能力：** 近战伤害奖励骰获得1蓄势",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>反应 +1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>反应 +1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>反应 +2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>反应 +2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 驾驶 · <span style=\"color:var(--muted)\">技能 2：</span>+1 轻武器 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 驾驶 · <span style=\"color:var(--muted)\">技能 2：</span>+1 轻武器 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 驾驶 · <span style=\"color:var(--muted)\">技能 2：</span>+1 轻武器 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 驾驶 · <span style=\"color:var(--muted)\">技能 2：</span>+2 轻武器 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 驾驶 · <span style=\"color:var(--muted)\">技能 2：</span>+2 轻武器 · <span style=\"color:var(--muted)\">能力 1：</span>+3 奖励骰和 1 蓄势 用于反应 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "卡拉比亚",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 火、风。 **AI能力：** 伤害骰也在最大值-1时爆发",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+1奖励骰，护甲和物防降低1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+1奖励骰，护甲和物防降低1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+2奖励骰，护甲和物防降低2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+2奖励骰，护甲和物防降低2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+1奖励骰和1蓄势，导力魔法添加威胁(3) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 防御 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+1奖励骰和1蓄势，导力魔法添加威胁(3) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 防御 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+1奖励骰和1蓄势，导力魔法添加威胁(3) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 防御 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+2奖励骰和1蓄势，导力魔法添加威胁(4) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+2 防御 · <span style=\"color:var(--muted)\">能力 1：</span>伤害+2奖励骰和1蓄势，导力魔法添加威胁(4) · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+2 防御 · <span style=\"color:var(--muted)\">能力 1：</span>+3奖励骰，伤害获得1蓄势，为导力魔法附加威胁（4） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "卡妮莉亚",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 火，幻。 **AI能力：** 处于负伤状态时，所有攻击检定获得1蓄势",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1表演 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+1活力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1表演 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+1活力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1表演 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2活力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2表演 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2活力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2表演 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2活力恢复和+1法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2表演 · <span style=\"color:var(--muted)\">技能 2：</span>+1 重武器 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2活力恢复和+1法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 表演 · <span style=\"color:var(--muted)\">技能 2：</span>+1 重武器 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2活力恢复和+1法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 表演 · <span style=\"color:var(--muted)\">技能 2：</span>+1 重武器 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2 活力恢复和+2 法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 表演 · <span style=\"color:var(--muted)\">技能 2：</span>+2 重武器 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+2 活力恢复和+2 法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 表演 · <span style=\"color:var(--muted)\">技能 2：</span>+2 重武器 · <span style=\"color:var(--muted)\">能力 1：</span>若本回合受到伤害，+3 活力恢复和+2 法力恢复 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "埃斯梅拉斯",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 风，幻。 **AI能力：** 每回合 +1 行动",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 社交 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+2 学识 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 社交 · <span style=\"color:var(--muted)\">技能 2：</span>+2 学识 · <span style=\"color:var(--muted)\">能力 1：</span>+3 奖励骰 和 1 蓄势 至 耐久伤害 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "芙劳",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 58000,
  "desc": "**元素组：** 时，幻。 **AI能力：** 每回合一次，你可以用察觉检定代替防御，来取消一次敌人的攻击。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+25 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+1 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+1 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+55 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+2 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+2 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+3 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+90 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+3 · <span style=\"color:var(--muted)\">技能 2：</span>学识+1 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。总是最先行动。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+95 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+3 · <span style=\"color:var(--muted)\">技能 2：</span>学识+2 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。总是最先行动。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+100 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+4 · <span style=\"color:var(--muted)\">技能 2：</span>学识+2 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。总是最先行动。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+105 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+4 · <span style=\"color:var(--muted)\">技能 2：</span>学识+3 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。总是最先行动。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+110 · <span style=\"color:var(--muted)\">技能 1：</span>察觉+4 · <span style=\"color:var(--muted)\">技能 2：</span>学识+4 · <span style=\"color:var(--muted)\">能力：</span>不会被突袭。总是最先行动。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "金耀",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 56000,
  "desc": "**元素组：** 空、时。 **AI能力：** 恢复 2 耐久和法力，当你 从能力或效应中恢复活力时。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 1 个奖励骰可供自由分配 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 1 个奖励骰可供自由分配 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 学识 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 2 个奖励骰可供自由分配（每次掷骰最多 1 个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 学识 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 2 个奖励骰可供自由分配（每次掷骰最多 1 个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 学识 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 3 个奖励骰可供自由分配（每次掷骰最多 1 个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 学识 · <span style=\"color:var(--muted)\">技能 2：</span>+1 潜行 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 3 个奖励骰可供自由分配（每次掷骰最多 1 个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 学识 · <span style=\"color:var(--muted)\">技能 2：</span>+1 潜行 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有 3 个奖励骰可供自由分配（每次掷骰最多 1 个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 学识 · <span style=\"color:var(--muted)\">技能 2：</span>+1 潜行 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有4个奖励骰可自由分配（每次掷骰最多2个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 学识 · <span style=\"color:var(--muted)\">技能 2：</span>+2 潜行 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有4个奖励骰可自由分配（每次掷骰最多2个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 学识 · <span style=\"color:var(--muted)\">技能 2：</span>+2 潜行 · <span style=\"color:var(--muted)\">能力 1：</span>每回合有5个奖励骰可自由分配（每次掷骰最多2个） · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "哈迪斯",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 时，幻。 **AI能力：** 近战范围内的敌人会露出破绽 攻击盟友时。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 察觉 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 察觉 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少1 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 察觉 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 察觉 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 察觉 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 察觉 · <span style=\"color:var(--muted)\">技能 2：</span>+1 科学 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 察觉 · <span style=\"color:var(--muted)\">技能 2：</span>+1 科学 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 察觉 · <span style=\"color:var(--muted)\">技能 2：</span>+1 科学 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 察觉 · <span style=\"color:var(--muted)\">技能 2：</span>+2 科学 · <span style=\"color:var(--muted)\">能力 1：</span>攻击成功时，敌方速度减少4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 察觉 · <span style=\"color:var(--muted)\">技能 2：</span>+2 科学 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时使敌人速度减少5点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "拉碧丝",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 57000,
  "desc": "**元素组：** 水，空 **AI能力：** AI激活时，你回复1d6法力 每回合。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +1骰子。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+45 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +1骰子。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +2骰子。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +2骰子。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+90 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+95 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>医学 +1 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。当你治疗一名盟友时，同时为其恢复1d4法力。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+100 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>医学+2 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。当你治疗一名盟友时，同时为其恢复1d4法力。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+105 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+2 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。当你治疗一名盟友时，同时为其恢复1d6法力。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+110 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+3 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。当你治疗一名盟友时，同时为其恢复1d6法力。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+115 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+4 · <span style=\"color:var(--muted)\">技能：</span>水导力魔法治疗 +3骰子。当你治疗一名盟友时，同时为其恢复1d8法力。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "罗蕾",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 幻，水。 **AI能力：** 施法时间减少1行动（最低为1）",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1科技 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1科技 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1科技 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至导力魔法，EP消耗增加10% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 科技 · <span style=\"color:var(--muted)\">能力 1：</span>+1 奖励骰至导力魔法，EP消耗增加10% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 科技 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 科技 · <span style=\"color:var(--muted)\">技能 2：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 科技 · <span style=\"color:var(--muted)\">技能 2：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 科技 · <span style=\"color:var(--muted)\">技能 2：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰至导力魔法，EP消耗增加10% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 科技 · <span style=\"color:var(--muted)\">技能 2：</span>+2 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+2 奖励骰至导力魔法，EP消耗增加10% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 科技 · <span style=\"color:var(--muted)\">技能 2：</span>+2 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+3 奖励骰至导力魔法，EP消耗增加25% · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "凪",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 幻，风。 **AI能力：** 每回合一次，你可以传送至多10英尺。 在进行基础攻击或施放技法后。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +1 · <span style=\"color:var(--muted)\">技能：</span>潜行时，可以使用一行动进行相位步（传送）10英尺。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +1 · <span style=\"color:var(--muted)\">技能：</span>潜行时，可以使用一行动进行相位步（传送）10英尺。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +2 · <span style=\"color:var(--muted)\">技能：</span>相位步增加至15英尺。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +2 · <span style=\"color:var(--muted)\">技能：</span>相位步增加至15英尺。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +3 · <span style=\"color:var(--muted)\">技能：</span>相位步增加至20英尺。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+1 · <span style=\"color:var(--muted)\">技能：</span>相位步移20尺。为偷袭增加+1奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">技能：</span>相位步移20尺。为偷袭增加+1奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">技能：</span>相位步移20尺。为偷袭增加+2奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+3 · <span style=\"color:var(--muted)\">技能：</span>相位步移20尺。为偷袭增加+2奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>潜行 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+4 · <span style=\"color:var(--muted)\">技能：</span>相位步移20尺。为偷袭增加+3奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "欧提斯",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 56000,
  "desc": "**元素组：** 时，火。 **AI能力：** 每回合一次，减少一项技艺的施法时间 1行动。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>魔法战技侵袭+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法 +1 · <span style=\"color:var(--muted)\">技能：</span>魔法战技侵袭+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>魔法战技侵袭+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+2 · <span style=\"color:var(--muted)\">技能：</span>魔法战技侵袭+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能：</span>魔法战技+2奖励骰，其伤害+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>远程武器+1 · <span style=\"color:var(--muted)\">技能：</span>魔法战技+2奖励骰，其伤害+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+3 · <span style=\"color:var(--muted)\">技能 2：</span>远程武器+2 · <span style=\"color:var(--muted)\">技能：</span>魔法战技+3奖励骰，其伤害+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+90 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>远程武器+2 · <span style=\"color:var(--muted)\">技能：</span>魔法战技+3奖励骰，其伤害+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+100 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+4 · <span style=\"color:var(--muted)\">技能 2：</span>远程武器+3 · <span style=\"color:var(--muted)\">技能：</span>魔法战技+3奖励骰，其伤害+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+110 · <span style=\"color:var(--muted)\">技能 1：</span>导力魔法+5 · <span style=\"color:var(--muted)\">技能 2：</span>远程武器+3 · <span style=\"color:var(--muted)\">技能：</span>魔法战技侵袭+3奖励骰，其伤害+3奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "奥兹",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 空，水。 **AI能力：** 近战伤害 +1 奖励骰",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+1 魔防，被导力魔法未命中时获得 1 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+1 魔防，被导力魔法未命中时获得 1 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+1 魔防，被导力魔法未命中时获得 2 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+1 魔防，被导力魔法未命中时获得 2 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 导力魔法 · <span style=\"color:var(--muted)\">能力 1：</span>+2 魔防，被导力魔法未命中时获得 3 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 导力魔法 · <span style=\"color:var(--muted)\">技能 2：</span>+1 战技 · <span style=\"color:var(--muted)\">能力 1：</span>+2 魔防，被导力魔法未命中时获得 3 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 导力魔法 · <span style=\"color:var(--muted)\">技能 2：</span>+1 战技 · <span style=\"color:var(--muted)\">能力 1：</span>+2 魔防，被导力魔法未命中时获得 3 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 导力魔法 · <span style=\"color:var(--muted)\">技能 2：</span>+1 战技 · <span style=\"color:var(--muted)\">能力 1：</span>+2 魔防，被导力魔法未命中时获得 4 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 导力魔法 · <span style=\"color:var(--muted)\">技能 2：</span>+2 战技 · <span style=\"color:var(--muted)\">能力 1：</span>+2 魔防，被导力魔法未命中时获得 4 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 导力魔法 · <span style=\"color:var(--muted)\">技能 2：</span>+2 战技 · <span style=\"color:var(--muted)\">能力 1：</span>+3 魔防，被导力魔法未命中时获得 5 点法力或 EP · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "帕蒂尔·玛蒂尔",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 火、土 **AI能力：** AI激活期间，你攻击时，你所持用的任何 重武器获得横扫特性。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+15 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +1 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +1 奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+25 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +1 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +1 奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+35 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +2 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +2 奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+45 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +2 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +2 奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+55 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +3 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +3 · <span style=\"color:var(--muted)\">技能 2：</span>运动 +1 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。你持用的重武器获得冲击特性。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +3 · <span style=\"color:var(--muted)\">技能 2：</span>运动 +2 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。你持用的重武器获得冲击特性。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +4 · <span style=\"color:var(--muted)\">技能 2：</span>运动 +2 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。你持用的重武器获得冲击特性。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +4 · <span style=\"color:var(--muted)\">技能 2：</span>运动 +3 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。你持用的重武器获得冲击特性。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>重武器 +4 · <span style=\"color:var(--muted)\">技能 2：</span>运动 +4 · <span style=\"color:var(--muted)\">技能：</span>近战伤害 +3 奖励骰。你持用的重武器获得冲击特性。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "莱姆",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 土，水 **AI能力：** AI激活期间，10尺内的盟友在抵抗地属性元素伤害时，获得等同于你灵性奖励骰的奖励骰。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +1 · <span style=\"color:var(--muted)\">技能：</span>创造一个提供+2护甲等级的光环 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +1 · <span style=\"color:var(--muted)\">技能：</span>创造一个提供+2护甲等级的光环 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +2 · <span style=\"color:var(--muted)\">技能：</span>光环提供+3护甲等级 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +2 · <span style=\"color:var(--muted)\">技能：</span>光环提供+3护甲等级 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +3 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +3 · <span style=\"color:var(--muted)\">技能 2：</span>医学 +1 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级。你施放防御型导力魔法时，为目标治疗1d6点耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +3 · <span style=\"color:var(--muted)\">技能 2：</span>医学+2 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级。你施放防御型导力魔法时，为目标治疗1d6点耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+2 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级。你施放防御型导力魔法时，为目标治疗2d6点耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+3 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级。你施放防御型导力魔法时，为目标治疗2d6点耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>抵抗 +4 · <span style=\"color:var(--muted)\">技能 2：</span>医学+4 · <span style=\"color:var(--muted)\">技能：</span>光环提供+4护甲等级。你施放防御型导力魔法时，为目标治疗3d6点耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "萨洛斯",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 土，水 **AI能力：** 当AI激活时，你在恢复阶段恢复1d6耐久。 在恢复阶段。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得1点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得1点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得2点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得2点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 远程武器 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得3点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 远程武器 · <span style=\"color:var(--muted)\">技能 2：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得3点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3远程武器 · <span style=\"color:var(--muted)\">技能 2：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得3点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3远程武器 · <span style=\"color:var(--muted)\">技能 2：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得4点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3远程武器 · <span style=\"color:var(--muted)\">技能 2：</span>+2运动 · <span style=\"color:var(--muted)\">能力 1：</span>每当你恢复活力时，获得4点生命或耐久。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4远程武器 · <span style=\"color:var(--muted)\">技能 2：</span>+2运动 · <span style=\"color:var(--muted)\">能力 1：</span>每当恢复活力时，获得5点生命或耐久 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "苍耀",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 56000,
  "desc": "**元素组：** 水，时。 **AI能力：** 使用攻击导力魔法时恢复2最高基础 伤害骰作为生命或耐久。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1 奥秘 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防1点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1 奥秘 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防1点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1 奥秘 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防2点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2 奥秘 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防2点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2 奥秘 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防3点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2 奥秘 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驯兽 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防3点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>+3 奥秘 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驯兽 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌方魔防3点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>+3 奥秘 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驯兽 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌人魔防4点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>+3 奥秘 · <span style=\"color:var(--muted)\">技能 2：</span>+2 驯兽 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌人魔防4点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>+4 奥秘 · <span style=\"color:var(--muted)\">技能 2：</span>+2 驯兽 · <span style=\"color:var(--muted)\">能力 1：</span>成功攻击时，降低敌人魔防5点 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "希特利",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 56000,
  "desc": "**元素组：** 空，幻 **AI能力：** 每回合一次，当你施放导力魔法时，你可以从15尺内的任意点决定射程和范围，如同你从该点施放。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +1 · <span style=\"color:var(--muted)\">技能：</span>施放导力魔法后，幻影回声造成1d6对应类型的伤害或治疗。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +1 · <span style=\"color:var(--muted)\">技能：</span>施放导力魔法后，幻影回声造成1d6对应类型的伤害或治疗。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +2 · <span style=\"color:var(--muted)\">技能：</span>回声伤害提升至2d6。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +2 · <span style=\"color:var(--muted)\">技能：</span>回声伤害提升至2d6。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +3 · <span style=\"color:var(--muted)\">技能：</span>回声自动以半数伤害复现完整的导力魔法。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+1 · <span style=\"color:var(--muted)\">技能：</span>回声可命中10尺内的第二个目标。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +3 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">技能：</span>回声可命中10尺内的第二个目标。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+2 · <span style=\"color:var(--muted)\">技能：</span>回声可命中15尺内的第二个目标。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+3 · <span style=\"color:var(--muted)\">技能：</span>回声可命中15尺内的第二个目标。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>奥秘 +4 · <span style=\"color:var(--muted)\">技能 2：</span>察觉+4 · <span style=\"color:var(--muted)\">技能：</span>回声可命中20尺内的第二个目标。 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "维涅",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 54000,
  "desc": "**元素组：** 时间，风。 **AI能力：** 在你的回合开始时，你可以移动 10英尺，且不消耗行动。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+1奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>+1运动 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>+2运动 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+2奖励骰 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>+2运动 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+1奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>+2运动 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+1奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>运动+3 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+1奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>运动+3 · <span style=\"color:var(--muted)\">技能 2：</span>+1 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+2奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>运动+3 · <span style=\"color:var(--muted)\">技能 2：</span>+2 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+2奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">E.P. 加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>运动+4 · <span style=\"color:var(--muted)\">技能 2：</span>+2 驾驶 · <span style=\"color:var(--muted)\">能力 1：</span>先攻检定获得+3奖励骰和1点蓄势 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "八云",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "空洞核心",
  "price": 55000,
  "desc": "**元素组：** 土、火 **AI能力：** AI启用时，你无法被击倒 俯卧或被推撞。",
  "lv": "<div class=\"core-lv\" style=\"margin-top:4px\"><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv1：</b><span style=\"color:var(--muted)\">EP加成：</span>+20 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +1 · <span style=\"color:var(--muted)\">技能：</span>提升负载值1/4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>1</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv2：</b><span style=\"color:var(--muted)\">EP加成：</span>+30 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +1 · <span style=\"color:var(--muted)\">技能：</span>提升负载值1/4 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv3：</b><span style=\"color:var(--muted)\">EP加成：</span>+40 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +2 · <span style=\"color:var(--muted)\">技能：</span>提升负载值1/2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>2</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv4：</b><span style=\"color:var(--muted)\">EP加成：</span>+50 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +2 · <span style=\"color:var(--muted)\">技能：</span>提升负载值1/2 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>Lv5：</b><span style=\"color:var(--muted)\">EP加成：</span>+60 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +3 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>3</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV1：</b><span style=\"color:var(--muted)\">EP加成：</span>+65 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +3 · <span style=\"color:var(--muted)\">技能 2：</span>防御+1 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍。重甲的护甲等级+3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV2：</b><span style=\"color:var(--muted)\">EP加成：</span>+70 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +3 · <span style=\"color:var(--muted)\">技能 2：</span>防御+2 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍。重甲的护甲等级+3 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>4</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV3：</b><span style=\"color:var(--muted)\">EP加成：</span>+75 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +4 · <span style=\"color:var(--muted)\">技能 2：</span>防御+2 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍。重甲的护甲等级+5 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV4：</b><span style=\"color:var(--muted)\">EP加成：</span>+80 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +4 · <span style=\"color:var(--muted)\">技能 2：</span>防御+3 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍。重甲的护甲等级+5 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>5</div><div style=\"font-size:11px;line-height:1.55;border-bottom:1px dashed var(--border);padding:2px 0\"><b>LvEV5：</b><span style=\"color:var(--muted)\">EP加成：</span>+85 · <span style=\"color:var(--muted)\">技能 1：</span>运动 +4 · <span style=\"color:var(--muted)\">技能 2：</span>防御+4 · <span style=\"color:var(--muted)\">技能：</span>负载值翻倍。重甲的护甲等级+10 · <span style=\"color:var(--muted)\">导力魔法 RAM：</span>6</div></div>"
 },
 {
  "name": "大地震裂",
  "element": "地",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 100 **施法时间：** 2行动 **范围：** 单体目标 **持续时间：** 瞬间 效应：释放深岩之怒。对单个目标造成2d8×10点地伤害。若在本轮受到伤害后施展，本次施法检定获得+1蓄势。",
  "ex": true
 },
 {
  "name": "纯水物质",
  "element": "水",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 100 **施法时间：** 2行动 **范围：** 单体目标 **持续时间：** 瞬间 效应：召唤毁灭性洪流。对单个目标造成2d8×10点水伤害。若目标处于负伤状态或受任何状态效应影响，效应骰获得+1等级。",
  "ex": true
 },
 {
  "name": "王者之焰",
  "element": "火",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 100 **施法时间：** 2行动 **范围：** 单体目标 **持续时间：** 瞬间 效应：以圣焰点燃战场。对单个目标造成2d8×10点火属性伤害。若目标未通过VS 25的抵抗（STA）检定，则陷入灼烧（3），持续2轮。",
  "ex": true
 },
 {
  "name": "疾风突袭",
  "element": "风",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 100 **施法时间：** 2行动 **范围：** 单体目标 **持续时间：** 瞬间 效应：将锋利的风刃贯穿敌人的防御。对单个目标造成2d8×10点风伤害。此导力魔法忽略10点护甲等级。",
  "ex": true
 },
 {
  "name": "暗影升腾",
  "element": "时",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 200 **施法时间：** 3行动 **范围：** 单体目标 **持续时间：** 2回合 效应：压缩时间与现实的边界。造成1d8×10点时伤害；若目标抵抗（RES）检定VS 30失败，则对其施加混乱，持续2回合。",
  "ex": true
 },
 {
  "name": "黄金之箭",
  "element": "空",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 200 **施法时间：** 3行动 **范围：** 单体目标 **持续时间：** 2回合 效应：发射一支蕴含空间精准的金色箭矢。造成1d8×10点空伤害；若目标抵抗（STA）检定VS 30失败，则其STR降低15点，持续2回合。",
  "ex": true
 },
 {
  "name": "白银射线",
  "element": "幻",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 200 **施法时间：** 3行动 **范围：** 单体目标 **持续时间：** 2回合 效应：发射一束凝聚的幻之光。造成1d8×10点幻伤害；若目标抵抗（RES）检定VS 30失败，则其物防和魔防降低5点，持续2回合。",
  "ex": true
 },
 {
  "name": "统御之王",
  "element": "水",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 120 **施法时间：** 3行动 **范围：** 远程区域（L） **持续时间：** 瞬间 效应：在空间本身之中释放大范围的时之冰霜。对范围内所有敌人造成1d8×10点水伤害、1d8×10点时伤害和1d8×10点空伤害。目标必须通过一次抵抗（STA）检定，否则陷入昏厥，持续1轮。检定失败值达到10或以上的敌人陷入昏厥，持续2轮。",
  "elements": [
   "水",
   "时",
   "空"
  ]
 },
 {
  "name": "冰柱陨星",
  "element": "地",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 110 **施法时间：** 3行动 **范围：** 远程区域（M） **持续时间：** 瞬间 效应：借由地与时之力召唤远古冰河灾厄。造成1d8×10点地伤害、1d8×10点水伤害和1d8×10点空伤害。目标必须进行一次抵抗（STA）检定VS 30，否则陷入冻结，持续2回合。被冻结的目标无法移动、反应或施法。",
  "elements": [
   "地",
   "水",
   "空"
  ]
 },
 {
  "name": "星杯复活术",
  "element": "火",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 130 **施法时间：** 3行动 **范围：** 爆发（XL） **持续时间：** 瞬间 效应：传说中的奇迹。使所有盟友的耐久与生命恢复至最大值，移除所有状态，并使其抵抗和防御获得+1奖励骰，持续2轮。",
  "elements": [
   "火",
   "时",
   "地"
  ]
 },
 {
  "name": "女神之吻",
  "element": "火",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 100 **施法时间：** 2行动 **范围：** 所有盟友 **持续时间：** 3回合 效应：将妖精之火吹入疲惫的灵魂。使所有盟友恢复全部活力，并在持续时间内，使所有武器技能攻击掷骰和武器伤害掷骰获得+1奖励骰。无法与其他失落魔法叠加。",
  "elements": [
   "火",
   "幻",
   "水"
  ]
 },
 {
  "name": "梅尔维尔光线",
  "element": "风",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 90 **施法时间：** 2行动 **范围：** 直线（L） **持续时间：** 瞬间 效应：通过一道时间裂缝，发射一股扭曲之风与幻光的凝聚波。在一条直线上造成1d8×10点风伤害、1d8×10点时伤害和1d8×10点幻伤害，忽略10点护甲等级。",
  "elements": [
   "风",
   "时",
   "幻"
  ]
 },
 {
  "name": "日珥嘶吼",
  "element": "火",
  "rarity": "极稀有",
  "quality": "传奇",
  "type": "魔法",
  "price": 0,
  "desc": "**EP消耗：** 120 **施法时间：** 3行动 **范围：** 区域（L） **持续时间：** 瞬间 效应：借由天空本身引导太阳喷发。造成1d8×10点火属性伤害、1d8×10点风伤害和1d8×10点空伤害。所有目标陷入灼烧（5），持续3回合。",
  "elements": [
   "火",
   "风",
   "空"
  ]
 },
 {
  "name": "书库之焰",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 8 **施法时间：** 2行动 **效应：** 召唤灵质火焰，照亮15尺半径范围，并揭示隐形符文、血迹和结界，持续10分钟。",
  "nq": true
 },
 {
  "name": "黑盐神盾",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 12 **施法时间：** 4行动 **效应：** 以符文屏障守护一个10尺圆形区域，排斥异界来客和部分源自彼岸的生物，并对任何跨越边界者造成5点伤害。此屏障每有1个你的灵性奖励骰便持续1天。",
  "nq": true
 },
 {
  "name": "低语帷幕",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 10 **施法时间：** 4行动 **效应：** 创造一个直径10尺的区域，在此区域内说出的话语无法被偷听、读唇或以魔法拦截。持续10分钟。不会阻挡灵能效应。",
  "nq": true
 },
 {
  "name": "昧影术",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 10 **施法时间：** 2行动 **效应：** 目标的倒影与影子开始说谎。此法术会干扰通过影像或灵气追踪、探知或识别目标的尝试。持续1小时，或直到被解除。",
  "nq": true
 },
 {
  "name": "思维针",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 14 **施法时间：** 3行动 **效应：** 将一句无声的话语传入一个你能看见的生物心智中。无抵抗。此句话最多可由12个单词构成。",
  "nq": true
 },
 {
  "name": "炼金烙印",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 12 **施法时间：** 3行动 **效应：** 在一件武器或护甲上铭刻发光符文。为一次涉及该标记物品的行动掷骰提供+1奖励骰（在使用前选择）。持续10分钟，或直到被使用。",
  "nq": true
 },
 {
  "name": "编织咏唱",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 10 **施法时间：** 2行动 **效应：** 在中距离范围内编织一个轻微的声音幻象，可以是音乐、低语、脚步声等。",
  "nq": true
 },
 {
  "name": "焰眼术",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 14 **施法时间：** 4行动 **效应：** 赋予施法者或一名盟友看见法力流动和灵质残留的能力，持续1小时。可侦测近期施法、屏障场的存在或诅咒物品。",
  "nq": true
 },
 {
  "name": "苍白沙漏",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 16 **施法时间：** 4行动 **效应：** 触碰一个生物或物体，使其处于停滞状态。目标在24小时内不会腐烂、流血或变质。可用于保存死者遗体或阻止毒素扩散。",
  "nq": true
 },
 {
  "name": "腐蚀典籍",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 18 **施法时间：** 5行动 **效应：** 使一件非魔法的书面文件、印记或书籍除施法者外对所有人不可读。那些试图在没有正确仪式的情况下解读它的人，在记忆检定上承受-1奖励骰，持续1小时。灵感源自被封印的黑之书。",
  "nq": true
 },
 {
  "name": "奇术威能",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "正是奇术的力量使教会得以凌驾于狭隘的军阀和争吵不休的国王之上。这些古老的咒语让祭司们能够施行奇迹，教会得以带来和平。 奇术导力魔法与祈祷各有不同的含义。奇术导力魔法是对高位元素共通导力魔法的念诵，而祈祷则是对爱德丝之力与权能的祈请。",
  "nq": true
 },
 {
  "name": "消解圣颂",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 20 **施法时间：** 6行动 **效应：** 压制10尺半径内1个持续性的魔法效应、灵气或状态，持续1分钟。这包括敌方增益和地形附魔。",
  "nq": true
 },
 {
  "name": "爱德丝的慈悲",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 25 **施法时间：** 4行动 **效应：** 为近距离范围内所有盟友恢复等同于你记忆值的耐久。不治疗生命，但可以修补破裂的护甲或屏障。",
  "nq": true
 },
 {
  "name": "帷幕之声",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 30 **施法时间：** 6行动 **效应：** 与所在区域的灵体、鬼魂或回响交谈。持续5分钟。可以询问3个问题或请求指引。可能激怒附近的灵体。",
  "nq": true
 },
 {
  "name": "星坠圣歌",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 40 **施法时间：** 6行动 **效应：** 射程内盟友在所有抵抗掷骰上获得+1奖励骰，并使受到的元素伤害减少5点，持续3回合。",
  "nq": true
 },
 {
  "name": "盲圣之冠",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 35 **施法时间：** 5行动 **效应：** 在施法者身上创造一顶闪耀的光之冠。持续3轮，中距离范围内所有盟友忽略由恐惧、疯狂或绝望引发的状态效应。",
  "nq": true
 },
 {
  "name": "辉之环祝祷",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 30 **施法时间：** 5行动 **效应：** 以圣光灌注中距离半径区域。持续3回合，范围内所有敌对虚体或恶魔实体在行动上承受-1奖励骰。七耀教会驱魔师的核心仪式。",
  "nq": true
 },
 {
  "name": "圣痕解放",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 35 **施法时间：** 6行动 **效应：** 通过触碰，暂时揭示施法者或目标身上隐藏的圣痕，在一次遭遇中解锁一项被封印的魔法能力或失落魔法。灵感源自守护骑士以及由爱德丝或未知力量赐予的圣痕。",
  "nq": true
 },
 {
  "name": "深渊封锁仪式",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 40 **施法时间：** 6行动 **效应：** 将一个地点、物体或生物封印，使其免受异界干扰。在10分钟内，阻止半径20尺区域内外的传送、召唤或探知。圣杯骑士与灵知教团皆有使用。",
  "nq": true
 },
 {
  "name": "女神之声",
  "element": "",
  "rarity": "普通",
  "quality": "普通",
  "type": "魔法",
  "price": 0,
  "desc": "**法力消耗：** 50 **施法时间：** 6行动 **效应：** 此咒文会解读周围苍穹的一部分。施法者可以向神明询问一个关于当前环境或某个物体的问题。回答将是真实的，但可能隐晦或具有象征意义。每个角色每周只能施展一次。高阶七耀教会神职人员会使用此咒文来理解古代遗物。",
  "nq": true
 }
];

const WEAPON_SLOTS = {
 "匕首": "1/1/1",
 "格挡匕首": "1/1/1",
 "细刃匕首": "1/1/1",
 "武装剑": "1/1/1",
 "长剑": "1/1/1",
 "阔剑": "1/1/1",
 "刺剑": "1/1/1",
 "细剑": "1/1/1",
 "弯刀": "1/1/1",
 "武士刀": "1/0/1",
 "手斧": "1/1/1",
 "战斧": "1/1/1",
 "钉头锤": "1/1/1",
 "拐": "1/1/1",
 "大锤": "1/1/1",
 "鹤嘴镐": "1/1/1",
 "连枷": "1/1/1",
 "鞭子": "1/1/1",
 "链鞭": "1/1/1",
 "镰刀": "1/1/1",
 "锁镰": "1/1/1",
 "巨剑": "1/1/1",
 "大弯刀": "1/1/1",
 "双手巨剑": "1/1/1",
 "大剑": "1/1/1",
 "野太刀": "1/0/1",
 "巨斧": "1/1/1",
 "重型钉头锤": "1/1/1",
 "战锤": "1/1/1",
 "战镐": "1/1/1",
 "流星锤": "1/1/1",
 "长棍": "1/1/1",
 "长柄战锤": "1/1/1",
 "短矛": "1/1/1",
 "三节棍": "1/1/1",
 "长柄刀": "1/1/1",
 "铁棒": "1/1/1",
 "短弓": "1/0/1",
 "反曲弓": "1/0/1",
 "长弓": "1/0/1",
 "复合弓": "0/0/1",
 "手弩": "1/0/1",
 "轻弩": "1/0/1",
 "劲弩": "1/0/1",
 "投石弓": "0/0/1",
 "轮刃": "0/0/1",
 "回旋镖": "0/0/1",
 "紧凑型手枪": "1/1/1",
 "左轮手枪": "1/1/1",
 "半自动手枪": "1/1/1",
 "冲锋手枪": "1/1/1",
 "栓动步枪": "1/1/1",
 "卡宾枪": "1/1/1",
 "侵袭步枪": "1/1/1",
 "狙击步枪": "1/1/1",
 "反器材步枪": "1/1/1",
 "手炮": "1/1/1",
 "胡椒盒左轮手枪": "1/1/1",
 "双管": "1/1/1",
 "加特林步枪": "1/1/1",
 "拳套": "1/1/1",
 "指节": "1/1/1",
 "铁手套": "1/1/1",
 "拳刃": "1/1/1",
 "铁环": "1/1/1",
 "手甲钩": "1/1/1",
 "导力杖": "1/1/1",
 "导力权杖": "1/0/1",
 "导力法杖": "1/1/1",
 "导力拳套": "1/1/1",
 "导力军刀": "1/0/1",
 "导力冠冕": "1/1/1"
};

const ORBAL_EMITTERS = [
 {
  "name": "导力能量阵列",
  "charge": 60,
  "weight": 1.0,
  "cost": 2000,
  "effect": "武器的打击部位/投射物化为一道纯粹的元素能量束，其元素与持用者的相性一致。伤害类型变为元素。"
 },
 {
  "name": "脉波发射器",
  "charge": 15,
  "weight": 2.0,
  "cost": 1500,
  "effect": "每回合一次，当一次攻击的伤害奖励骰爆骰时，此武器可以释放一道导力脉冲，对所有相邻敌人造成 3d6 伤害。"
 },
 {
  "name": "棱光发射器",
  "charge": 25,
  "weight": 3.0,
  "cost": 2200,
  "effect": "武器被调谐至一种特定元素；从地、火、水、风中选择一种。该武器造成此元素伤害时获得 +1 奖励骰。"
 },
 {
  "name": "过载发射器",
  "charge": 20,
  "weight": 3.0,
  "cost": 2000,
  "effect": "当你在一次攻击中采取冒险时，若命中，则获得 +1 武器骰。"
 },
 {
  "name": "相位发射器",
  "charge": 20,
  "weight": 2.0,
  "cost": 1800,
  "effect": "攻击能够绕过敌人的防御，使该武器获得威胁（9）。"
 },
 {
  "name": "共振发射器",
  "charge": 25,
  "weight": 3.0,
  "cost": 2000,
  "effect": "武器攻击会以锥形范围产生共振。命中时，对主要目标相邻的所有敌人造成一半武器伤害。"
 },
 {
  "name": "眩击发射器",
  "charge": 20,
  "weight": 2.0,
  "cost": 1800,
  "effect": "该武器造成 +1 武器伤害骰，并获得非致命性质。当一次攻击或技法的伤害奖励骰爆骰时，目标陷入恍惚，持续 1回合。"
 },
 {
  "name": "冷冻发射器",
  "charge": 25,
  "weight": 2.0,
  "cost": 2200,
  "effect": "该武器造成 +1 武器伤害骰，并造成冰伤害。当一次攻击或技法的伤害奖励骰爆骰时，目标被冻结，持续 1回合。"
 },
 {
  "name": "脉冲晶格",
  "charge": 15,
  "weight": 1.0,
  "cost": 1600,
  "effect": "命中时，此武器释放一道动能脉冲，将目标击退 5英尺。"
 },
 {
  "name": "湮灭发射器",
  "charge": 30,
  "weight": 3.0,
  "cost": 3600,
  "effect": "当你在一次攻击中采取冒险时，你攻击中每个爆骰的奖励骰都会直接对生命值/完整性造成 1d8 空伤害，无视耐久与护甲。"
 },
 {
  "name": "连锁发射器",
  "charge": 20,
  "weight": 2.0,
  "cost": 1800,
  "effect": "当你在一次攻击中采取冒险时，每个爆骰的奖励骰都会引发一道连锁能量弧，射向 10英尺内第二名敌人，造成 1d8 电伤害。"
 }
];

const ORBAL_CARRIERS = [
 {
  "name": "稳定承载具",
  "charge": 30,
  "weight": 1.0,
  "cost": 4000,
  "effect": "抵消导力武器上的笨拙性质。"
 },
 {
  "name": "魔法增幅器",
  "charge": 15,
  "weight": 2.0,
  "cost": 1200,
  "effect": "持用者在持用此武器时，进行导力魔法检定获得 +1 奖励骰。"
 },
 {
  "name": "同步承载具",
  "charge": 20,
  "weight": 2.0,
  "cost": 1500,
  "effect": "每回合一次，你可以花费 1至10点 EP；每花费 1点 EP，该次攻击便额外造成 +1d6 元素伤害。"
 },
 {
  "name": "超限承载具",
  "charge": 25,
  "weight": 3.0,
  "cost": 2000,
  "effect": "基础武器伤害额外增加 +1骰，但该武器获得笨拙（2）性质。"
 },
 {
  "name": "守护承载具",
  "charge": 20,
  "weight": 2.0,
  "cost": 1600,
  "effect": "持用期间，所有防御检定获得 +1 奖励骰。"
 },
 {
  "name": "流变承载具",
  "charge": 20,
  "weight": 2.0,
  "cost": 1800,
  "effect": "当你在攻击掷骰中掷奖励骰时，可以重掷其中掷出的任意 1。"
 },
 {
  "name": "振动承载具",
  "charge": 25,
  "weight": 2.0,
  "cost": 2000,
  "effect": "该武器获得破甲效应，获得威胁（6）。"
 },
 {
  "name": "相位承载具",
  "charge": 30,
  "weight": 3.0,
  "cost": 2500,
  "effect": "若用于远程武器，此武器无视掩护。"
 },
 {
  "name": "涌流承载具",
  "charge": 25,
  "weight": 3.0,
  "cost": 2200,
  "effect": "你在自己回合内使用该武器连续命中时，从第二次命中开始，每次命中使武器伤害骰 +1，最多 +3。"
 },
 {
  "name": "回响承载具",
  "charge": 20,
  "weight": 2.0,
  "cost": 1800,
  "effect": "投掷后，该武器会在 1个行动后，或在你的回合结束时自动返回。"
 }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { WEAPON_MODS, ARMOR_MODS, QUARTZ, WEAPON_SLOTS, ORBAL_EMITTERS, ORBAL_CARRIERS }; }
// ================= 导力器规则（规则书第13章，完整重构用） =================
// 插槽升级（每级非累积 EP；可装稀有度逐级放宽）
const ORBAL_SLOT_UPGRADE = {
  2: { ep: 25, cost: "40 耀晶石", vs: 25, rarities: ["普通", "稀有"] },
  3: { ep: 50, cost: "60 耀晶石", vs: 35, rarities: ["普通", "稀有", "超稀有"] },
  4: { ep: 100, cost: "120 耀晶石", vs: 50, rarities: ["普通", "稀有", "超稀有", "极稀有"] }
};
// 解锁新插槽：80 耀晶石 / VS 20 / EP +50
const ORBAL_UNLOCK_SLOT = { ep: 50, cost: "80 耀晶石", vs: 20 };
// 结晶回路稀有度 → 品质 / 效应骰（导力魔法基础骰）
const ORBAL_RARITY = {
  "普通":   { quality: "普通", dice: "d8" },
  "稀有":   { quality: "英雄", dice: "d10" },
  "超稀有": { quality: "史诗", dice: "d12" },
  "极稀有": { quality: "传奇", dice: "d20" }
};
// 空洞核心价格（普通档，规则书第13章）
const ORBAL_HOLLOW_CORE_PRICES = {
  "AIM": 54000, "AMBERL": 56000, "ARGEM": 54000, "BATHYM": 57000, "CAMIO": 55000,
  "CARABIA": 55000, "CARNELIA": 54000, "ESMELAS": 54000, "FRAU": 58000, "GOLDIA": 56000
};
// 导力器架构（规则书第13章 导力器代际说明表）：{ name, gen, core(核心槽形态), cores(核心插槽数), slots(普通插槽数), allowCores(可装核心类型), note }
// 规则书原文：默认 ARCUS（1核心插槽+8普通插槽）；其他世代可按 GM 意愿限制插槽数
const ORBAL_ARCHES = {
  "第1-3代":       { name: "第1-3代",       gen: "早期型",  core: "集成宝石核心", cores: 1, slots: 4,  allowCores: ["宝石核心"],                          note: "早期不稳定，依赖导力能量罐等外部设备" },
  "第4代":         { name: "第4代",         gen: "第四代",  core: "集成宝石核心", cores: 1, slots: 6,  allowCores: ["宝石核心"],                          note: "无法使用核心回路或空洞核心；修理/改造奖励骰（2项改造后失效）" },
  "第4代2型":      { name: "第4代2型",      gen: "第四代",  core: "集成宝石核心", cores: 1, slots: 7,  allowCores: ["宝石核心"],                          note: "" },
  "艾尼格玛":      { name: "艾尼格玛",      gen: "第五代",  core: "集成宝石核心", cores: 1, slots: 7,  allowCores: ["宝石核心"],                          note: "只能使用宝石核心" },
  "艾尼格玛 II":   { name: "艾尼格玛 II",   gen: "第五代",  core: "核心插槽",     cores: 1, slots: 6,  allowCores: ["宝石核心", "核心回路"],               note: "第五代：可用宝石核心或核心回路" },
  "ARCUS":         { name: "ARCUS",         gen: "第五代",  core: "核心插槽",     cores: 1, slots: 8,  allowCores: ["宝石核心", "核心回路"],               note: "默认配置：1核心插槽 + 8普通插槽" },
  "ARCUS II":      { name: "ARCUS II",      gen: "第五代",  core: "核心插槽",     cores: 2, slots: 7,  allowCores: ["宝石核心", "核心回路"],               note: "双核心插槽" },
  "战术导力器赛法": { name: "战术导力器赛法", gen: "第六代",  core: "集成空洞核心", cores: 1, slots: 8,  allowCores: ["空洞核心"],                          note: "第六代：可插装空洞核心；解锁晶片技能（4个同元素回路）" },
  "赛法·精英型":   { name: "赛法·精英型",   gen: "第六代",  core: "核心插槽",     cores: 1, slots: 10, allowCores: ["宝石核心", "核心回路", "空洞核心"],  note: "第六代高配：1核心插槽 + 10普通插槽" }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { WEAPON_MODS, ARMOR_MODS, QUARTZ, WEAPON_SLOTS, ORBAL_EMITTERS, ORBAL_CARRIERS, ORBAL_ARCHES, ORBAL_RARITY, ORBAL_SLOT_UPGRADE }; }
