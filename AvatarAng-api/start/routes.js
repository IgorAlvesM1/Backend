'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')



 Route.resource('/animais', 'AnimalController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'],'Animal'],
     ])).middleware('auth')
     
    
Route.resource('/elementos', 'ElementoController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'],'Elemento'],
     ])).middleware('auth')
Route.resource('/nacoes', 'NacaoController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'],'Nacao'],
     ])).middleware('auth')
Route.resource('/personagens', 'PersonagemController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'],'Personagem'],
     ])).middleware('auth')
Route.resource('/personagens-elementos', 'PersonagemElementoController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'],'PersonagemElemento'],
     ])).middleware('auth')



