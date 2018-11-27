const bcrypt = require('bcrypt'); 
const { MD5 } = require('crypto-js'); 
const jwt = require('jsonwebtoken'); 


// bcrypt.genSalt(10, (err, salt) => {
//     if(err) return next(err); 

//     bcrypt.hash('valegoye', salt, (err, hash) => {
//         if(err) return next(err); 
//         console.log(hash)

//     })
// })

// const secret = 'mysecretpassword'; 
// const secretSalt = 'dsfdsfdsfsfdsfdsfd'

// const user = {
//     id: 1, 
//     token: MD5('FDSFDSDSFDSFDSFDS').toString() + secretSalt
// }

// const receivedToken = '80e9f43dca5f73fa8fd042d02666be27dsfdsfdsfsfdsfdsfd'
// if(receivedToken === user.token){
//     console.log('Move forward')
// }

// console.log(user)

const id = '1000'; 
const secret = 'supersecret';

const receivedToekn = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'

const token = jwt.sign(id,secret); 
const decodeToken = jwt.verify(receivedToekn, secret); 
console.log(decodeToken)