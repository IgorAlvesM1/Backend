'use strict'

/*
|--------------------------------------------------------------------------
| ElementoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Elemento = use('App/Models/Elemento')
class ElementoSeeder {
  async run () {
    await Elemento.createMany([
      {nome:'Ar',},
      {nome:'Terra',},
      {nome:'Fogo',},
      {nome:'Agua',},
      {nome:'Metal',},
      

    ])
  }
}

module.exports = ElementoSeeder
