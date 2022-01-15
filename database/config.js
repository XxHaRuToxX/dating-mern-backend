const mongoose = require('mongoose');

const connectionMongoDB = async()=>{
    try {
        mongoose.connect(process.env.CONNECTION_URL_MONGODB);
        console.log('DB conectado :)');
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la DB :(')
    }
}

module.exports={
    connectionMongoDB,
}

