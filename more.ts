// type aliases
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
return x + y 
}

const sum2: (x: number, y: number) => number = sum
const sum3: PlusType = sum //类型别名

type NameResolver = () => string
type NameOrResolver = () => string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

//类型断言  type assertion

function getLengh(input: string | number): number{
    const str = input as String //类型断言
    if (str.length) {
        return str.length;
    } else {
        const number = input as Number
        return number.toString().length
    }

    // if ((<string>input).length){
    //     return (<string>input).length
    // }else{
    //     return input.toString().length
    // }
}

declare var JQuery: (selector: string) => any
JQuery