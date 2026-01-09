const r = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
}
const rr = Object.fromEntries(Object.entries(r).map(([k, v]) => [v, k]))
const rrr = [...Object.entries(rr).reverse()]
let roman = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
}

class RomanNumerals {
    // static toRoman(num: number) {
    //     const tmp = num.toString().split('')
    //     return tmp.map((_, i) => {
    //         let tmpPrime = _ + ('0'.repeat(tmp.length - ++i));
    //         let res = ''

    //         while (Number(tmpPrime)) {
    //             const inx = rrr.findIndex((item => {
    //                 return Number(item[0]) <= Number(tmpPrime)
    //             }))

    //             if (rrr[inx]) {
    //                 res += rrr[inx][1]
    //                 // @ts-ignore
    //                 tmpPrime -= rrr[inx][0]
    //             }
    //         }

    //         return res
    //     }).join('')
    // }

    // static fromRoman(str: string) {
    //     let tmp = str.split('')
    //     const clearTmp = tmp.filter((item, _) => {
    //         // @ts-ignore
    //         return !r[item + tmp[_ + 1]] && !r[tmp[_ - 1] + tmp[_]]
    //     })
    //     let skip = false

    //     return Object.entries(
    //         tmp.reduce((prev, item, idx) => {
    //             if (!skip) {
    //                 const tmpPrime = tmp[idx] + tmp[++idx]
    //                 // @ts-ignore
    //                 if (r[tmpPrime]) {
    //                     skip = true
    //                     return { ...prev, [tmpPrime]: tmp.filter((_, ii) => (tmp[ii] + tmp[++ii]) == tmpPrime).length }
    //                 }

    //                 return {
    //                     ...prev, [item]:
    //                         clearTmp
    //                             .filter(i => i == item).length
    //                 }
    //             }
    //             skip = false
    //             return prev
    //         }, {}))
    //         // @ts-ignore
    //         .map(item => r[item[0]] * item[1])
    //         .reduce((prev, item) => {
    //             return prev += item
    //         }, 0)
    // }

    static toRoman(number: number) {
        let result = "";
        for (let i in roman) {
            // @ts-ignore
            let k = Math.floor(number / roman[i]);
            if (k > 0) {
                // @ts-ignore
                number -= roman[i] * k;
                result += i.repeat(k);
            }
        }
        return result;
    }

    static fromRoman(str: string) {
        const map = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            XC: 90,
            C: 100,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000
        };

        let result = 0;
        let i = 0;

        while (i < str.length) {
            let current = str[i];
            let next = str[i + 1];
            // @ts-ignore
            if (map[current + next]) {
                // @ts-ignore
                result += map[current + next];
                i += 2;
            } else {
                // @ts-ignore
                result += map[current];
                i++;
            }
        }

        return result;
    }
}
// console.log(RomanNumerals.toRoman(2000))
// console.log(RomanNumerals.toRoman(1666))
console.log(RomanNumerals.toRoman(769))
// console.log(RomanNumerals.toRoman(1))

// console.log(RomanNumerals.fromRoman("MM"))
// console.log(RomanNumerals.fromRoman("MDCLXVI"))
// console.log(RomanNumerals.fromRoman("LXXXVI"))
// console.log(RomanNumerals.fromRoman("I"))
// console.log(RomanNumerals.fromRoman('IV'));
// console.log(RomanNumerals.fromRoman('MMVIII'));
// console.log(RomanNumerals.fromRoman('MDCLXVI'));
console.log(RomanNumerals.fromRoman('DCCLXIX'));