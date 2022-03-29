import mongoose from 'mongoose';

const Appointment = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    expires: '30m',
    default: Date.now
  },
});

export default mongoose.model('appointments', Appointment);
