const mongoose = require('mongoose'); 
const db_URL = "mongodb://localhost:27017" ;



// Conexión con la BBDD

mongoose
.connect(db_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => console.log('DB connecting successfull!'))
.catch((error)=> {
    console.error(error.message)
    process.exit(0);
});