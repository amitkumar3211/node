const fs = require('fs');
const input = process.argv;

//crud opration in file system 
filename = input[3];
content =  input[4]; 
if (input[2] == 'create') {

    fs.writeFileSync(filename ,content ); 

} else if (input[2] == 'read') {



} else if (input[2] == 'update') {



} else if (input[2] == 'delete') {



}
