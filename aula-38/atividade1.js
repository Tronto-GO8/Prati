let arr = ['stop', 'no', 'people', 'bubble', 'under', 'admitted', 'away']

for (let i = 0; i < arr.length; i++) {
    let unico = 0
    for (let y = 0; y < arr[i].length; y++) {
        let vogais = ['a', 'e', 'i', 'o', 'u', 'y']
        if (unico === 0 && vogais.includes(arr[i][y])) {
            let temp = arr[i].slice(0, y);
            let odertemp = arr[i].slice(y, arr[i].length);
            arr[i] = odertemp + temp + 'ay'
            console.log(arr[i])
            unico = 1
        }

    }
};
/*
Input: stop
Output: opstay
Input: no
Output: onay
Input: people
Output: eoplepay
Input: bubble
Output: ubblebay
Input: under
Output: underay
Input: admitted
Output: admitteday
Input: away
Output: awayay
*/