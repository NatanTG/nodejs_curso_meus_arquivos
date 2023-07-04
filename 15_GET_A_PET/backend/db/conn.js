import mongoose from "mongoose";

async function main() {
    await mongoose.connect("mongodb://localhost:27017/get_a_pet")
    console.log("DB is connected")
}

main().catch(err => console.log(err))

export default mongoose;