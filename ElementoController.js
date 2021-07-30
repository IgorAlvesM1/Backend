'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Elemento = use ('App/Models/Elemento')


    
/**
 * Resourceful controller for interacting with elementos
 */
class ElementoController {
  /**
   * Show a list of all elementos.
   * GET elementos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()

    return Elemento.query().paginate(page, perPage)

  }

  /**
   * Render a form to be used for creating a new elemento.
   * GET elementos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {



  }

  /**
   * Create/save a new elemento.
   * POST elementos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Elemento.getCamposCadastro()
    const dados = request.only(campos)
    return await Elemento.create(dados)

  }

  /**
   * Display a single elemento.
   * GET elementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Elemento.findOrFail(params.id)

  }

  /**
   * Render a form to update an existing elemento.
   * GET elementos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update elemento details.
   * PUT or PATCH elementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Elemento.getCamposCadastro()
    const dados = request.only(campos)
    const elemento = await Elemento.findOrFail(params.id)

    elemento.merge(dados)
    await elemento.save()

    return elemento

  }

  /**
   * Delete a elemento with id.
   * DELETE elementos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const elemento = await Elemento.findOrFail(params.id)
    return await elemento.delete()
  
  
  }

}

module.exports = ElementoController