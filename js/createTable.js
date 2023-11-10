//表を作る関数
function createTable(kyoyoSubjectArray, kyoyoCreditArray, senmonSubjectArray, senmonCreditArray, orCredits) {
  // 教養テーブル初期化
  let kyoyo_ttl = document.querySelector('#kyoyo_table_ttl');
  let kyoyo_thead = document.querySelector('#kyoyo_table thead');
  let kyoyo_tbody = document.querySelector('#kyoyo_table tbody');
  kyoyo_ttl.innerHTML = "教養分野";
  kyoyo_thead.innerHTML = "<thead><tr><th>科目名</th><th>修得した単位数</th></tr></thead>";
  kyoyo_tbody.innerHTML = "";
  
  //教養の単位数をテーブルに表示する
  let kyoyo_tbody_html = "";
  for (let i = 0; i < kyoyoCreditArray.length; i++){
    kyoyo_tbody_html += `<tr>
    <td>${kyoyoSubjectArray[i]}</td>
    <td>${kyoyoCreditArray[i]}</td>
    </tr>
    `
  }
  kyoyo_tbody_html += `<tr>
  <td>合計</td>
  <td>${kyoyoCredits}/36</td>
  </tr>
  `
  kyoyo_tbody.innerHTML = kyoyo_tbody_html;
  
  // 専門テーブル初期化
  let senmon_ttl = document.querySelector('#senmon_table_ttl');
  let senmon_thead = document.querySelector('#senmon_table thead');
  let senmon_tbody = document.querySelector('#senmon_table tbody');
  senmon_ttl.innerHTML = "専門分野";
  senmon_thead.innerHTML = "<thead><tr><th>科目名</th><th>修得した単位数</th></tr></thead>";
  senmon_tbody.innerHTML = "";
  
  //専門の単位数をテーブルに表示する
  let senmon_tbody_html = "";
  for (let i = 0; i < senmonCreditArray.length; i++){
    senmon_tbody_html += `<tr>
    <td>${senmonSubjectArray[i]}</td>
    <td>${senmonCreditArray[i]}</td>
    </tr>
    `
  }
  senmon_tbody_html += 
  `<tr>
    <td>合計</td>
    <td>${senmonCredits}/82</td>
    </tr>
    <tr>
    <td>教養または専門科目</td>
    <td>${orCredits}/6</td>
  </tr>`
  senmon_tbody.innerHTML = senmon_tbody_html;
}