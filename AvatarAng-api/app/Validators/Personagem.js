'use strict'


const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Personagem extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:50',
      nacoes_id: 'integer',
    }
  }
}

module.exports = Personagem
