// switch文
// 値による条件がある場合はswitch文

const fruits: string = "banana";

switch (fruits) {
  case "apple":
    console.log("りんご！")
    break;
  case "orange":
    console.log("みかん！")
    break;
  case "banana":
    console.log("おそろい！")
    break;
  default:
    console.log("何が好きなの？");
}


// whileループのif文break

let num: number = 0

while (true) {
  num += 1;
  if (num === 3) {
    break;
  }
}

// whileの条件がtrue
// 内側のif文がtrueになったら条件達成