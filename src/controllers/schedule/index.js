import { Timeslot } from '../../database/schemas/index.js';

export async function getScheduleController(req, res) {
  try {
    Timeslot.find((err, data) => {
      if (!err) {
        return res.json({ schedule: data });
      }

      return res.status(500).json({
        error: err,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: err,
    });
  }
}

export async function addTimeslotController(req, res) {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: err,
    });
  }
}
