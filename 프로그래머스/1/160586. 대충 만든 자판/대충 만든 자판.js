function solution(keymap, targets) {
    const min = {}
    const answer = []
    
    keymap.forEach((item) => {
        for(let i = 0; i < item.length; i++){
            const char = item[i]
            if(!(char in min)){
                min[char] = i +1
            } else {
                if(min[char] > i +1){
                    min[char] = i +1
                }
            }
        }
    })
    targets.forEach((item, i)=> {
        let num = 0;
        for(let j = 0; j < item.length; j++){
            if(item[j] in min){
            num += min[item[j]];
            } else {
                num = -1;
                break;
            }
        }
        answer[i] = num
    })
    console.log(answer)
    return answer
}