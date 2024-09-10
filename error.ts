// try文
// エラーになる可能性があるものをtryで囲む

function checkNumber(num: number) {
  if (num < 0) {
    throw new Error("0以下はあかんで！")
  }
  return num;
}

try {
  console.log(checkNumber(-5));
} catch (error) {
  console.error(error.message);
}

// catchブロック -- エラーをキャッチして処理する
// finallyブロック -- エラーの有無に限らず必ず実行する

// throw new Error("エラー発生！") -- 明示的にエラーを発生させるためのキーワード
// Errorオブジェクトを作成。メッセージとして("エラー発生！")を指定。error.messageはエラーオブジェクトのメッセージプロパティにアクセス。


// エラー別で出力を分ける(instanceof)

try {
  throw new TypeError("エラー発生！");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("SyntaxError:", error.message);
  } else if (error instanceof TypeError) {
    console.error("TypeError:", error.message);
  } else {
    console.error(error.message);
  }
}