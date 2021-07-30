'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NacaoSchema extends Schema {
  up () {
    this.create('nacoes', (table) => {
      table.increments()
      table.string('nome', 50). notNullable()
      table.integer('elementos_id').references('id').inTable('elementos').unsigned()

      table.timestamps()
    })
  }

  down () {
    this.drop('nacoes')
  }
}

module.exports = NacaoSchema
