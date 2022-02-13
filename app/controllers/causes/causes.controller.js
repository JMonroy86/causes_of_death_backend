const db = require("../../models");
const causes = db.causes_data;
var url = require("url");

exports.create = async (req, res) => {
  try {
    for (const cause of req.body) {
      await causes.create({
        jurisdiction_of_occurrence: cause.jurisdiction_of_occurrence,
        year: cause.year,
        month: cause.month,
        all_cause: cause.all_cause,
        natural_cause: cause.natural_cause,
        septicemia: cause.septicemia,
        malignant_neoplasms: cause.malignant_neoplasms,
        diabetes_mellitus: cause.diabetes_mellitus,
        alzheimer_disease: cause.alzheimer_disease,
        influenza_and_pneumonia: cause.influenza_and_pneumonia,
        chronic_lower_respiratory: cause.chronic_lower_respiratory,
        other_diseases_of_respiratory: cause.other_diseases_of_respiratory,
        nephritis_nephrotic_syndrom: cause.nephritis_nephrotic_syndrom,
        symptoms_signs_and_abnormal: cause.symptoms_signs_and_abnormal,
        diseases_of_heart: cause.diseases_of_heart,
        cerebrovascular_diseases: cause.cerebrovascular_diseases,
        accidents_unintentional: cause.accidents_unintentional,
        motor_vehicle_accidents: cause.motor_vehicle_accidents,
        intentional_self_harm_suicide: cause.intentional_self_harm_suicide,
        assault_homicide: cause.assault_homicide,
        drug_overdose: cause.drug_overdose,
      });
    }
    res.status(200).send({
      message: "Data successfully created",
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while creating the Death Causes Data.",
    });
  }
};

exports.findByTag = async (req, res) => {
  try {
    const tagsAttributes = req.query.tagsArray;
    const tags_splited = tagsAttributes.split(',');
    const year = req.query.year;
    if (tagsAttributes.length > 0) {
      const tagsInfo = await causes.findAll({
        where: { year: year },
        attributes: [tagsAttributes],
        order: [
          ['month', 'ASC'],
      ],
      });
      res.status(200).send(tagsInfo);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while creating the Death Causes Data.",
    });
  }
};
