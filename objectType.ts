// オブジェクトの型を定義する

const obj1: {
  key1: string;
  key2: number;
} = {
  key1: "value1",
  key2: 10
};


// 別アプローチで定義(type)

type ObjType2 = {
  key1: string;
  key2: number;
};
const obj2: ObjType2 = {
  key1: "value1",
  key2: 0
};


// 別アプローチで定義(interface)

interface ObjType3 {
  key1: string;
  key2: number;
};
const obj3: ObjType3 = {
  key1: "value1",
  key2:0
};

// インデックスシグネチャ

type ObjType4 = {
  [key: string]: string;
};
const obj4: ObjType4 = {
  key1: "value1",
  key2: "value2",
};


// オプショナル(任意のキーを設定)

type ObjType5 = {
  key1: string;
  key2?: boolean;
};
const obj5: ObjType5 = {
  key1: "value1"
};


// readonly(再代入不可)

type ObjType6 = {
  key1: string;
  readonly key2: number
}
const obj6: ObjType6 = {
  key1: "value1",
  key2: 0
}
// obj6.key2 = 1000 再代入不可！
