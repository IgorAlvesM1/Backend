'use strict'

/*
|--------------------------------------------------------------------------
| AnimaiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Animal = use('App/Models/Animal')

class AnimaiSeeder {
  async run () {
    await Animal.createMany([
      {nome:'Appa'},
      {nome:'Momo'},
      

    ])
  }
}

module.exports = AnimaiSeeder
