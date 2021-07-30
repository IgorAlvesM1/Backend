'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagens', (table) => {
      table.increments()
      table.string('nome', 50). notNullable()
      table.string('idade')
      
      table.string('arma')
      table.integer('nacoes_id').references('id').inTable('nacoes').unsigned()

      

      table.timestamps()
    })
  }

  down () {
    this.drop('personagens')
  }
}

module.exports = PersonagemSchema
