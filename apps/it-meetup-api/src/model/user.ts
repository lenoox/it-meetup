import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    token: { type: String, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
