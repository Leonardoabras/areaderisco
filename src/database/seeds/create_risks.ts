import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('locations').insert([
    {
      risk: 'Chuva',
      latitude: -20.0409224,
      longitude: -44.2237475,
      local: 'Bairro Colônia Santa Izabel',
    },
    {
      risk: 'Chuva',
      latitude: -19.9719992,
      longitude: -44.0982057,
      local: 'Bairro Recreio dos Caiçaras',
    },
    {
      risk: 'Desastre',
      latitude: -19.976404,
      longitude: -44.213148,
      local: 'Parque Fernão Dias',
    },
    {
      risk: 'Desastre',
      latitude: -19.9726567,
      longitude: -44.1869165,
      local: 'Rua Marajoara, Rua Olhos D`agua',
    },
    {
      risk: 'Desastre',
      latitude: -19.964531,
      longitude: -44.212376,
      local: 'Bairro Santa Inês',
    },
    {
      risk: 'Desastre',
      latitude: -19.937573,
      longitude: -44.114798,
      local: 'Bairro São Caetano',
    },
    {
      risk: 'Desastre',
      latitude: -19.98375,
      longitude: -44.14866,
      local: 'Bairro Cruzeiro',
    },
    {
      risk: 'Desastre',
      latitude: -19.862078,
      longitude: -44.162783,
      local: 'Bairro Icaivera',
    },
    {
      risk: 'Desastre',
      latitude: -20.025684,
      longitude: -44.226456,
      local: 'Bairro Citrolândia',
    },
    {
      risk: 'Desastre',
      latitude: -19.935069,
      longitude: -44.162426,
      local: 'Bairro Alterosa 2 Seção',
    },
    {
      risk: 'Desastre',
      latitude: -19.945624,
      longitude: -44.170833,
      local: 'Bairro Alterosa 2 Seção',
    },
    {
      risk: 'Desastre',
      latitude: -19.951576,
      longitude: -44.117353,
      local: '(Bairro Jardim Teresopolis',
    },
    {
      risk: 'Desastre',
      latitude: -19.9524,
      longitude: -44.113527,
      local: 'Bairro Jardim Teresopolis',
    },
    {
      risk: 'Desastre',
      latitude: -19.949246,
      longitude: -44.1153,
      local: 'Bairro Jardim Teresopolis',
    },
    {
      risk: 'Desastre',
      latitude: -19.959016,
      longitude: -44.208344,
      local: 'Bairro Salomé',
    },
    {
      risk: 'Desastre',
      latitude: -19.953466,
      longitude: -44.187895,
      local: 'Bairro Jardim Brasilia',
    },
    {
      risk: 'Desastre',
      latitude: -19.967923,
      longitude: -44.132855,
      local: 'Bairro Guanabara',
    },
    {
      risk: 'Desastre',
      latitude: -19.977107,
      longitude: -44.145632,
      local: 'Bairro Campos Eliseos',
    },
    {
      risk: 'Risco',
      latitude: -19.918967,
      longitude: -44.278804,
      local: 'Bairro Marimbá',
    },
    {
      risk: 'Risco',
      latitude: -19.913178,
      longitude: -44.271532,
      local: 'Bairro Santo Afonso',
    },
    {
      risk: 'Risco',
      latitude: -19.964157,
      longitude: -44.200713,
      local: 'Horto',
    },
    {
      risk: 'Risco',
      latitude: -19.94903,
      longitude: -44.193117,
      local: 'Bairro Ingá',
    },
    {
      risk: 'Risco',
      latitude: -19.958985,
      longitude: -44.189809,
      local: 'Bairro Ingá',
    },
    {
      risk: 'Risco',
      latitude: -19.949698,
      longitude: -44.136872,
      local: 'Bairro PTB',
    },
  ]);
}
