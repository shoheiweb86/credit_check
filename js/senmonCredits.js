//専門分野の合計単位数を取得する関数
function getSenmonCredits(csvFile) {
  senmonCredits = getCreditsBySubject(csvFile, '専門基礎科目群（選択必修）');
  senmonCredits += getCreditsBySubject(csvFile, '専門応用科目群（必修）');
  senmonCredits += getCreditsBySubject(csvFile, '専門応用科目群（必修・工学科共通）');
  senmonCredits += getCreditsBySubject(csvFile, '専門応用科目群（選択必修）');
  senmonCredits += getCreditsBySubject(csvFile, '専門応用科目群（選択）');
  senmonCredits += getCreditsBySubject(csvFile, '専門応用科目群（特殊選択）');
  
  return senmonCredits;
}