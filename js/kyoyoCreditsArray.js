//教養分野の単位数を配列で取得する関数
function getKyoyoCreditsArray(csvFile) {
  var kyoyoCreditArray = [
    getCreditsBySubject(csvFile, '大学学習法（大学学習法）'),
    getCreditsBySubject(csvFile, '英語（AR，AL，AW，基礎英語）'),
    getCreditsBySubject(csvFile, '初修外国語'),
    getCreditsBySubject(csvFile, '健康・スポーツ'),
    getCreditsBySubject(csvFile, '健康・スポーツ（体育実技）'),
    getCreditsBySubject(csvFile, '情報リテラシー／自然系共通専門基礎'),
    getCreditsBySubject(csvFile, '自然科学（理学）'),
    getCreditsBySubject(csvFile, '自然科学（工学）'),
    getCreditsBySubject(csvFile, '人文社会・教育科学'),
    getCreditsBySubject(csvFile, '新潟大学個性化科目'),
    getCreditsBySubject(csvFile, '医歯学'),
    getCreditsBySubject(csvFile, '留学生基本科目')
  ]

  return kyoyoCreditArray;
}