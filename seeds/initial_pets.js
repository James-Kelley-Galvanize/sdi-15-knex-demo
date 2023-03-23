/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pets").del();
  await knex("pets").insert([
    { id: 1, name: "Hanzo", species: `cat` },
    { id: 2, name: "Midori", species: `cat` },
    { id: 3, name: "Amy", species: `dog` },
  ]);
};
