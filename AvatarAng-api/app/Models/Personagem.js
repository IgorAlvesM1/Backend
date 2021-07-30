'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personagem extends Model {
    static get table(){
        return 'personagens'
    }
    static getCamposCadastro(){
        return ['nome', 'idade', 'arma','nacoes_id']
    }

   
}

module.exports = Personagem
