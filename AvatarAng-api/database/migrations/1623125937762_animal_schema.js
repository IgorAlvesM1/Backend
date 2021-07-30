'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalSchema extends Schema {
  up () {
    this.create('animais', (table) => {
      table.increments()
      table.string('nome', 50). notNullable()
      table.integer('nacoes_id').references('id').inTable('nacoes').unsigned()

      table.timestamps()
    })
  }

  down () {
    this.drop('animais')
  }
}

module.exports = AnimalSchema
