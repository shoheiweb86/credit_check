//科目名を渡して、その科目の取得単位数を返す関数
function getCreditsBySubject(csvFile, subject) {
  //科目の列
  subjectArray = csvFile.map(item => item[6]);
  //単位数の列
  creditArray = csvFile.map(item => item[8]);
  //合否の列
  scoreArray = csvFile.map(item => item[11]);
  //単位数を格納する変数
  let numCredits = 0;

  //単位のデータが6行目から始まるから、i=5にしている
  for (var i = 5; i < creditArray.length - 1; i++) {
    //科目の列を見て、引数の文字列と同じかを判定する
    if (subjectArray[i] === subject) {
      //合の時単位数を加算する
      if (scoreArray[i] == "合") {
        //整数型に変換
        creditArray[i] = parseInt(creditArray[i]);
        //単位数を加算
        numCredits = numCredits + creditArray[i];
      }
    }
  }
  return numCredits;
}