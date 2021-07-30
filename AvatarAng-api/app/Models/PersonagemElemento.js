'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersonagemElemento extends Model {
    static getCamposCadastro(){
        return ['personagens_id', 'elementos_id']
    }
}

module.exports = PersonagemElemento
