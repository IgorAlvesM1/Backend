'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Animal extends Model {

    static get table(){
        return 'Animais'
    }
    static getCamposCadastro(){
        return ['nome', 'nacoes_id']
    }
}

module.exports = Animal
