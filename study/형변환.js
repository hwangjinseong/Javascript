// String() => 문자형으로 변환

// Number() => 숫자형으로 변환
// NaN => number

// Boolean() => 불린형으로 변환
// 0, ", null, undefined, NaN => false
Number(null) // 0
Number(undefined) // NaN

// Number 형변환
console.log(
    Number(true),
    Number(false)
)

// String 형변환
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

// Boolean 형변환
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)