'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nacao extends Model {
    static get table(){
        return 'nacoes'
     }
    static getCamposCadastro(){
        return ['nome', 'elementos_id']
    }
}

module.exports = Nacao
