'use strict'

/*
|--------------------------------------------------------------------------
| PersonagenSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Personagem = use('App/Models/Personagem')

class PersonagenSeeder {
  async run () {
    await Personagem.createMany([
      {nome:'Aang', idade: '112', arma:'Bastão'},
      {nome:'Katara', idade: '12', arma: 'Dominação'},
      {nome:'Sokka', idade: '12', arma: 'Bumerangue'},
      

    ])
  }
}

module.exports = PersonagenSeeder
