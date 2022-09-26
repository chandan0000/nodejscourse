
class Circle{
     area(r) {
     return   Math.PI*r*r;
    }
     circumference(r) {
        return 2* Math.PI*r*r;
    }
}



module.exports=Circle
// exports.area=function(r){
//     console.log(" i am from circle.js file ");
// return Math.PI *r*r;
// }

// const http = require('http')
// const  Circle=require('./circle')
// const circle=new Circle();
// console.log(circle.area(5));

 

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'Hello World!'
//     }));
// });












// server.listen(3000);
// console.log('server started')




// const func1 = () => console.log('func1');
// const func2 = () => console.log('func2');
// const func3 = () => {
//     process.nextTick(() => {
//         console.log('nextTick');
//     });


// new Promise((resolve, reject) => {
//     resolve('i am a promise');
// }).then((res) => {
//     console.log(res);
// });
// setTimeout(() => {
//     func1();
    
// }, 0);

//     func1();
//     func2();
// };

// func3();
