import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(`MongoDb Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectToDatabase;
