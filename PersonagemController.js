'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Personagem = use ('App/Models/Personagem')


    
/**
 * Resourceful controller for interacting with personagems
 */
class PersonagemController {
  /**
   * Show a list of all personagems.
   * GET personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()

    return Personagem.query().paginate(page, perPage)

  }

  /**
   * Render a form to be used for creating a new personagem.
   * GET personagems/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {



  }

  /**
   * Create/save a new personagem.
   * POST personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Personagem.getCamposCadastro()
    const dados = request.only(campos)
    return await Personagem.create(dados)

  }

  /**
   * Display a single personagem.
   * GET personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Personagem.findOrFail(params.id)

  }

  /**
   * Render a form to update an existing personagem.
   * GET personagems/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update personagem details.
   * PUT or PATCH personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Personagem.getCamposCadastro()
    const dados = request.only(campos)
    const personagem = await Personagem.findOrFail(params.id)

    personagem.merge(dados)
    await personagem.save()

    return personagem

  }

  /**
   * Delete a personagem with id.
   * DELETE personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const personagem = await Personagem.findOrFail(params.id)
    return await personagem.delete()
  
  
  }

}

module.exports = PersonagemController
