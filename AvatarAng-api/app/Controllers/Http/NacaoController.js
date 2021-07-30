'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Nacao = use ('App/Models/Nacao')


    
/**
 * Resourceful controller for interacting with nacaos
 */
class NacaoController {
  /**
   * Show a list of all nacaos.
   * GET nacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()

    return Nacao.query().paginate(page, perPage)

  }

  /**
   * Render a form to be used for creating a new nacao.
   * GET nacaos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {



  }

  /**
   * Create/save a new nacao.
   * POST nacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Nacao.getCamposCadastro()
    const dados = request.only(campos)
    return await Nacao.create(dados)

  }

  /**
   * Display a single nacao.
   * GET nacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Nacao.findOrFail(params.id)

  }

  /**
   * Render a form to update an existing nacao.
   * GET nacaos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update nacao details.
   * PUT or PATCH nacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Nacao.getCamposCadastro()
    const dados = request.only(campos)
    const nacao = await Nacao.findOrFail(params.id)

    nacao.merge(dados)
    await nacao.save()

    return nacao

  }

  /**
   * Delete a nacao with id.
   * DELETE nacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const nacao = await Nacao.findOrFail(params.id)
    return await nacao.delete()
  
  
  }

}

module.exports = NacaoController