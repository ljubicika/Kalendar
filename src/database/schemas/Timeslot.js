import mongoose from 'mongoose';

const Timeslot = new mongoose.Schema({
  firstName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  lastName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  dateTime: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  service: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  description: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  // createdAt: {
  //   type: mongoose.SchemaTypes.Date,
  //   expires: '30m',
  // },
});

export default mongoose.model('timeslots', Timeslot);
