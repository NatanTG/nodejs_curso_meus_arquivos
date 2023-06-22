import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/testemongodb2';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        console.log("conectando...");

    } catch (err) {
        console.log(err);
    }
}
run()
export default client
