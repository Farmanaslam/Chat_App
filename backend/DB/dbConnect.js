import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT);
    console.log("Connected Database Successfully");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;
