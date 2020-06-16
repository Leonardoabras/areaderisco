import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('locations').insert([
    { risk: 'Chuva', latitude: -20.0409224, longitude: -44.2237475 },
    { risk: 'Chuva', latitude: -19.9719992, longitude: -44.0982057 },
    { risk: 'Desastre', latitude: -19.9769323, longitude: -44.2170795 },
    { risk: 'Desastre', latitude: -19.9721013, longitude: -44.1899566 },
  ]);
}
