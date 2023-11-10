//フォームから送信されたファイルを読み込む
let fileInput = document.getElementById('csv_file');
let file = fileInput.files[0];
let fileReader = new FileReader();

// ファイル変更時イベント
fileInput.onchange = () => {
  let file = fileInput.files[0];
  fileReader.readAsText(file, "Shift-JIS");
};


fileReader.onload = () => {
  //csv.jquery.jsを使用
  var csvFile = $.csv.toArrays(fileReader.result);

  //単位数の合計を取得する
  kyoyoCredits = getKyoyoCredits(csvFile);
  senmonCredits = getSenmonCredits(csvFile);

  //残り単位数を計算する
  kyoyoRemainCredits = 36 - kyoyoCredits;
  senmonRemainCredits = 82 - senmonCredits;
  orCredits = 0;

  //必要単位数が溢れた場合0にする
  if(kyoyoRemainCredits <= 0) {
    //またはに加算する
    orCredits =  orCredits - kyoyoRemainCredits;
    //残り単位数を0にする
    kyoyoRemainCredits = 0;
  }
  if(senmonRemainCredits <= 0) {
    //またはに加算する
    orCredits =  orCredits - senmonRemainCredits;
    //残り単位数を0にする
    senmonRemainCredits = 0;
  }

  //単位数の配列を取得する
  var kyoyoCreditArray = getKyoyoCreditsArray(csvFile);
  var senmonCreditArray = getSenmonCreditsArray(csvFile);
  //科目名の配列を取得する
  var kyoyoSubjectArray = getKyoyoSubjectsArray(csvFile);
  var senmonSubjectArray = getSenmonSubjectsArray(csvFile);

  //テーブルを表示する
  $(".table-flex").css('display','flex');
  createTable(kyoyoSubjectArray, kyoyoCreditArray, senmonSubjectArray, senmonCreditArray, orCredits)
}
