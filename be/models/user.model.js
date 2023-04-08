import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password : {
    type : String,
  },
  fullname: String,
  friends: [
    {
      name: String,
      address: String,
      age: Number,
    },
  ],
});

export default mongoose.model("user", userSchema);
