const dbconnection = require('./connection');
console.log('wegf');

dbconnection().then((res)=>{
res.find({name:'ashu'}).toArray().then((data)=>{
console.warn(data);

});

});
