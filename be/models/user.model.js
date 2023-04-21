import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password : {
    type : String,
  },
});

export default mongoose.model("user", userSchema);
