//Assignment03  : 
//Q1 :
var x =  new Promise((resolve, reject) => setTimeout(resolve, 100, (Math.random() * 100 )));
var y =  new Promise((resolve, reject) => setTimeout(resolve, 100, Math.random()  * 100 ));
Promise.all([x,y]).then( (values) => { const total = values.reduce((p:number, c:number) => p + c)
console.log(total);
});

Promise.resolve(x).then( (value) => { console.log(value)} );
Promise.resolve(y).then( (value) => { console.log(value)} );

//Q2 : 


//Q3 :
