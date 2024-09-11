// 型引数

type ObjType1<ArgType1, ArgType2> = {
  key1: ArgType1;
  key2: ArgType1;
  key3: ArgType2;
};
const obj1: ObjType1<string, number> = {
  key1: "value1",
  key2: "value2",
  key3: 100
}


// 型引数のデフォルト値を設定する

type Default1 = string;
type Default2 = number;
type ObjType2<ArgType1=Default1, ArgType2=Default2> = {
  key1: ArgType1;
  key2: ArgType1;
  key3: ArgType2;
};
const obj2: ObjType2 = {
  key1: "value1",
  key2: "value2",
  key3: 0
};


// Mapオブジェクト

const map: Map<string, number> = new Map();
map.set('age', 25)
map.set('high', 170)
// setで値を定義！ getで値を取得！