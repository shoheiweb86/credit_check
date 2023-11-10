//教養分野の合計単位数を取得する関数
function getKyoyoCredits(csvFile) {
  kyoyoCredits = getCreditsBySubject(csvFile, '人文社会・教育科学');
  kyoyoCredits += getCreditsBySubject(csvFile, '大学学習法（大学学習法）');
  kyoyoCredits += getCreditsBySubject(csvFile, '英語（AR，AL，AW，基礎英語）');
  kyoyoCredits += getCreditsBySubject(csvFile, '初修外国語');
  kyoyoCredits += getCreditsBySubject(csvFile, '健康・スポーツ');
  kyoyoCredits += getCreditsBySubject(csvFile, '健康・スポーツ（体育実技）');
  kyoyoCredits += getCreditsBySubject(csvFile, '情報リテラシー／自然系共通専門基礎');
  kyoyoCredits += getCreditsBySubject(csvFile, '自然科学（理学）');
  kyoyoCredits += getCreditsBySubject(csvFile, '自然科学（工学）');
  kyoyoCredits += getCreditsBySubject(csvFile, '新潟大学個性化科目');
  kyoyoCredits += getCreditsBySubject(csvFile, '医歯学');
  kyoyoCredits += getCreditsBySubject(csvFile, '留学生基本科目');

  return kyoyoCredits;
}