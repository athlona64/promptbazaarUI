const { MongoClient, ServerApiVersion } = require('mongodb');

    let ClientMongo;
    const uri = "mongodb+srv://promptbazaar:oXjViSmpsCZgNEhK@cluster0.ffledts.mongodb.net/?retryWrites=true&w=majority";
    console.log('start');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    ClientMongo = client.connect();
export default ClientMongo