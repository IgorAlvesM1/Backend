'use strict'


const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Nacao extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:50',
      elementos_id: 'integer|required',
    }
  }
}

module.exports = Nacao
