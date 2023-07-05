import { Router } from 'express'
import controller from './authenticate.controller'
import { authenticateValidator } from './authenticate.validator'

const _AuthenticateRouter = Router()

_AuthenticateRouter.route('/signup').post(authenticateValidator, controller.Signup)

export const AuthenticateRouter = _AuthenticateRouter
