// オブジェクト = キーとバリュー

const obj = {
  key1: "value1",
  key2: 0
};

console.log('obj["key1"]:', obj["key1"])
console.log('obj["key1"]:', obj.key1)


// そのほかのオブジェクト定義

// 変数にvalueをいれる
const key1 = "value1";
const obj2 = {
  key1,
  key2: 0
};


// キーを使いまわす []でキーを流用
const keyName = "key1";
const obj3 = {
  [keyName]: "value1",
  key2: 0
};


// オブジェクトをマージ(スプレッド構文)
const smallObj = {
  key1: "value1"
};

const obj4 = {
  ...smallObj,
  key2: 0
};
