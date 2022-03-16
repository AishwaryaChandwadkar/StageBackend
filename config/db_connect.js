const mongoose = require('mongoose')

function connectDB(){
    try{
        mongoose.connect(
    
            process.env.DB_CONNECTION_URL,
            {
                useNewUrlParser: true,  //decodes the special charaters in db password if any
                useUnifiedTopology: true
            },
            (err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log('Database Established')
                }
            }
        )
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
