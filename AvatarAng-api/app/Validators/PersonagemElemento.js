'use strict'


const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class PersonagemElemento extends ValidatorAbstract{
  get rules () {
    return {
      personagens_id: 'integer|required',
      elementos_id: 'integer|required',
    }
  }
}

module.exports = PersonagemElemento
