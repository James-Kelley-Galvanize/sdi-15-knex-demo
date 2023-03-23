const knex = require("./dbConnection");

const getAllPets = () => {
  return knex.select("*").from("pets");
};
const getOnePet = (petId) => {
  return knex.select("*").from("pets").where({ id: petId });
};
const variableIMade = 9;

module.exports = { getAllPets, getOnePet };
