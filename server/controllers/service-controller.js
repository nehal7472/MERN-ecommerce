const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    let response = await Service.find(req.query);
    if (!response) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`service: ${error}`);
  }
};

module.exports = services;
