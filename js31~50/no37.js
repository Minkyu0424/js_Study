const cand = prompt("총 투표 현황을 적어주세요").split(" ");
let result = {};
let winner = "";

for (let index in cand) {
  let val = cand[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}
winner=Object.keys(result).reduce(function(a, b){
    return result[a]> result[b]? a:b
});
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다. `);
