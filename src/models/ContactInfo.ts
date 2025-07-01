import mongoose from "mongoose";

const ContactInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ContactInfo ||
  mongoose.model("ContactInfo", ContactInfoSchema);

