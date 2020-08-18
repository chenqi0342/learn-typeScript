// enum Direction {
//     Up =  10,
//     Down,
//     Left,
//     Bottom
// } //枚举 

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Bottom = "BOTTOM"
// } //字符串枚举

const enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Bottom = "BOTTOM"
} //常量枚举 只有常量值才能枚举 计算值不能枚举

const value = 'UP'

if (value === Direction.Up) {
    console.log('go up!')
}
// console.log(Direction.Down) //跟着up递增