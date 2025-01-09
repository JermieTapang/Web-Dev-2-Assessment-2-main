import mongoose from "mongoose"; // import mongoose

const userSchema = new mongoose.Schema({
  // email
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // passwords
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema); // export the model