const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);



// comman function can use differnent fiels 
async function dbConnecction(){

    let result = await client.connect();
   let db = result.db('code');
   return db.collection('datausers');
}
//dbConnecction();

module.exports = dbConnecction;
// dbConnecction().then((res)=>{
// res.find({name:'ashu'}).toArray().then((data)=>{
// console.warn(data);

// });

// });
  

