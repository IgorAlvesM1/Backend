'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Animal = use ('App/Models/Animal')


    
/**
 * Resourceful controller for interacting with animals
 */
class AnimalController {
  /**
   * Show a list of all animals.
   * GET animals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()

    return Animal.query().paginate(page, perPage)

  }

  /**
   * Render a form to be used for creating a new animal.
   * GET animals/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {



  }

  /**
   * Create/save a new animal.
   * POST animals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Animal.getCamposCadastro()
    const dados = request.only(campos)
    return await Animal.create(dados)

  }

  /**
   * Display a single animal.
   * GET animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Animal.findOrFail(params.id)

  }

  /**
   * Render a form to update an existing animal.
   * GET animals/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update animal details.
   * PUT or PATCH animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Animal.getCamposCadastro()
    const dados = request.only(campos)
    const animal = await Animal.findOrFail(params.id)

    animal.merge(dados)
    await animal.save()

    return animal

  }

  /**
   * Delete a animal with id.
   * DELETE animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const animal = await Animal.findOrFail(params.id)
    return await animal.delete()
  
  
  }

}

module.exports = AnimalController