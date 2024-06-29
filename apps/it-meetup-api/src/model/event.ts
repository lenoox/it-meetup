import mongoose from 'mongoose';

const { Schema } = mongoose;
const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    organisation: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);
export const Event = mongoose.model('Event', eventSchema);
