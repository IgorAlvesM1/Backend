'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PersonagemElemento = use ('App/Models/PersonagemElemento')


    
/**
 * Resourceful controller for interacting with personagemelementos
 */
class PersonagemElementoController {
  /**
   * Show a list of all personagemelementos.
   * GET personagemelementos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()

    return PersonagemElemento.query().paginate(page, perPage)

  }

  /**
   * Render a form to be used for creating a new personagemelemento.
   * GET personagemelementos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {



  }

  /**
   * Create/save a new personagemelemento.
   * POST personagemelementos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = PersonagemElemento.getCamposCadastro()
    const dados = request.only(campos)
    return await PersonagemElemento.create(dados)

  }

  /**
   * Display a single personagemelemento.
   * GET personagemelementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await PersonagemElemento.findOrFail(params.id)

  }

  /**
   * Render a form to update an existing personagemelemento.
   * GET personagemelementos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update personagemelemento details.
   * PUT or PATCH personagemelementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = PersonagemElemento.getCamposCadastro()
    const dados = request.only(campos)
    const personagemElemento = await PersonagemElemento.findOrFail(params.id)

    personagemElemento.merge(dados)
    await personagemElemento.save()

    return personagemElemento

  }

  /**
   * Delete a personagemelemento with id.
   * DELETE personagemelementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const personagemElemento = await PersonagemElemento.findOrFail(params.id)
    return await personagemElemento.delete()
  
  
  }

}

module.exports = PersonagemElementoController