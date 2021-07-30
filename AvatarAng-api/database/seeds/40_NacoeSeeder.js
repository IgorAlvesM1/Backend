'use strict'

/*
|--------------------------------------------------------------------------
| NacoeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Nacao = use('App/Models/Nacao')

class NacoeSeeder {
  async run () {
    await Nacao.createMany([
      {nome:'Nação do Ar',},
      {nome:'Nação da Terra',},
      {nome:'Nação do Fogo',},
      {nome:'Nação da Agua',},
     
      

    ])
  }
}

module.exports = NacoeSeeder
