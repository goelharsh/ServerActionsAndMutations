import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://harshgoel626:YpJTI2N6dJzCta8X@cluster0.igur90m.mongodb.net/nextUserManagementApp";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
