// let const
// {
//     let name = 'imooc';
// }
// console.log(name);

// const name = 'imooc';
// name = 'woniu'
// console.log(name)


// str
// name = 'imooc';
// course = 'React开发App';
// console.log('hello' + name + ', course is ' + course);
// console.log(`hello ${name} , course is ${course}`);


// 箭头函数
// function hello(name){
//     console.log(`hello ${name}`);
// }

// const hello1 = (name) => {
//     console.log(`hello ${name}`);
// }

// hello('imooc');
// hello1('imooc');

// setTimeout(()=>{
//     console.log('xxx');
// },1000)

// const double = x => x*2
// console.log(double);

// const hello = (name='imooc') => {
//     console.log(`hello ${name}`);
// }

// function hello(name1,name2){
//     console.log(name1, name2);
// }
// arr = ['imooc', 'woniu'];
// hello.apply(null, arr);
// hello(...arr);


// object
// obj = {name: 'imooc', course: 'React开发app'};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// name = 'imooc';
// const obj = {
//     [name]: 'hello',
//     hello(){

//     }
// };
// obj[name] = 'hello imooc';
// console.log(obj);

// const obj = {name: 'imooc', course: 'React开发app'};
// const obj2 = {type: 'IT', name: 'woniu'};
// console.log(...obj,...obj2);

// const arr = ['hello', 'imooc']

// let arg1 = arr[0];
// let arg2 = arr[1];

// console.log(arg1, '|', arg2);

class MyApp{
    constructor(){
        this.name = 'imooc'
    }
    sayHello(){
        console.log(`hello ${this.name}`)
    }
}

app = new MyApp()
app.sayHello()

