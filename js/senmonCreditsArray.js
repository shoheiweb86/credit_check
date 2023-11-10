//専門分野の単位数を配列で取得する関数
function getSenmonCreditsArray(csvFile) {
  var senmonCreditArray = [
    getCreditsBySubject(csvFile, '専門基礎科目群（選択必修）'),
    getCreditsBySubject(csvFile, '専門応用科目群（必修）'),
    getCreditsBySubject(csvFile, '専門応用科目群（必修・工学科共通）'),
    getCreditsBySubject(csvFile, '専門応用科目群（選択必修）'),
    getCreditsBySubject(csvFile, '専門応用科目群（選択）'),
    getCreditsBySubject(csvFile, '専門応用科目群（特殊選択）'),
  ]

  return senmonCreditArray;
}