module.exports = (sequelize, Sequelize) => {
  const Causes = sequelize.define("causes", {
    jurisdiction_of_occurrence: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.INTEGER                     
    },
    month: {
      type: Sequelize.INTEGER                     
    },
    all_cause: {
      type: Sequelize.INTEGER                     
    },
    natural_cause: {
      type: Sequelize.INTEGER                     
    },
    septicemia: {
      type: Sequelize.INTEGER                     
    },
    malignant_neoplasms: {
      type: Sequelize.INTEGER                     
    },
    diabetes_mellitus: {
      type: Sequelize.INTEGER                     
    },
    alzheimer_disease: {
      type: Sequelize.INTEGER                     
    },
    influenza_and_pneumonia: {
      type: Sequelize.INTEGER                     
    },
    chronic_lower_respiratory: {
      type: Sequelize.INTEGER                     
    },
    other_diseases_of_respiratory: {
      type: Sequelize.INTEGER                     
    },
    nephritis_nephrotic_syndrom: {
      type: Sequelize.INTEGER                     
    },
    symptoms_signs_and_abnormal: {
      type: Sequelize.INTEGER                     
    },
    diseases_of_heart: {
      type: Sequelize.INTEGER                     
    },
    cerebrovascular_diseases: {
      type: Sequelize.INTEGER                     
    },
    accidents_unintentional: {
      type: Sequelize.INTEGER                     
    },
    motor_vehicle_accidents: {
      type: Sequelize.INTEGER                     
    },
    intentional_self_harm_suicide: {
      type: Sequelize.INTEGER                     
    },
    assault_homicide: {
      type: Sequelize.INTEGER                     
    },
    drug_overdose: {
      type: Sequelize.INTEGER                     
    },
    
  });
  return Causes;
};