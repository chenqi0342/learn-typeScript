interface IPerson{
    readonly id: number;
    name: string;
    age?: number;
}//前面加上大写的I,代表是接口 ;分割 ?可选属性

let preson: IPerson = {
    id:1234,
    name:' 111',
    // age: 1
}//形状必须跟interface相似
preson.id=1111

//object形状进行约束

