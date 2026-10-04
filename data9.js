// 弹药系统（规则书第12章：远程武器伤害骰品质由弹药决定；标准弹药无限，特殊弹药 10 支/包计数）
// 武器决定骰子数量（dmg 字段），弹药决定骰子类型（D6/D8）+ 伤害类型 + 特性
const AMMOS = {
  arrow: [
    {"name": "标准箭", "dmg": "D6", "dmgType": "射", "traits": "", "cost": 0},
    {"name": "宽刃箭", "dmg": "D8", "dmgType": "射", "traits": "", "cost": 165},
    {"name": "针尖箭", "dmg": "D8", "dmgType": "射", "traits": "威胁(3)", "cost": 225},
    {"name": "爆炸箭", "dmg": "D6", "dmgType": "刚", "traits": "巨响，爆炸(2d6，10英尺)", "cost": 375},
    {"name": "钝头", "dmg": "D6", "dmgType": "刚", "traits": "非致命", "cost": 450},
    {"name": "火焰箭", "dmg": "D8", "dmgType": "射", "traits": "灼烧(2)", "cost": 500}
  ],
  bullet: [
    {"name": "标准弹", "dmg": "D6", "dmgType": "射", "traits": "", "cost": 0},
    {"name": "空尖弹", "dmg": "D8", "dmgType": "射", "traits": "", "cost": 200},
    {"name": "穿甲弹", "dmg": "D8", "dmgType": "射", "traits": "威胁(5)", "cost": 250},
    {"name": "爆炸弹", "dmg": "D6", "dmgType": "刚", "traits": "爆炸(2d6，5英尺)", "cost": 400},
    {"name": "麻醉弹", "dmg": "D6", "dmgType": "毒素", "traits": "非致命", "cost": 450},
    {"name": "燃烧弹", "dmg": "D8", "dmgType": "火", "traits": "", "cost": 500},
    {"name": "冰霜弹", "dmg": "D8", "dmgType": "冰", "traits": "", "cost": 500},
    {"name": "电击弹", "dmg": "D8", "dmgType": "电", "traits": "", "cost": 500}
  ]
};
function ammoByName(kind, name) {
  const list = AMMOS[kind] || [];
  return list.find(a => a.name === name) || null;
}
// 弹药是否为特殊（需购买计数；标准弹无限免费）
function isSpecialAmmo(a) { return !!(a && a.cost > 0); }
