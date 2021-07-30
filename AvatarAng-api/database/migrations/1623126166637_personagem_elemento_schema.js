'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemElementoSchema extends Schema {
  up () {
    this.create('personagem_elementos', (table) => {
      table.increments()
      table.integer('personagens_id').references('id').inTable('personagens').unsigned().notNullable()
      table.integer('elementos_id').references('id').inTable('elementos').unsigned().notNullable()


      table.timestamps()
    })
  }

  down () {
    this.drop('personagem_elementos')
  }
}

module.exports = PersonagemElementoSchema
