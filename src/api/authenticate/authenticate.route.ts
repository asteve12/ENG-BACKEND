import { Router } from 'express'
import controller from './authenticate.controller'
import { authenticateValidator,authenticateLoginValidator } from './authenticate.validator'

const _AuthenticateRouter = Router()

_AuthenticateRouter.route('/signup').post(authenticateValidator, controller.Signup)
_AuthenticateRouter.route('/login').post(authenticateLoginValidator, controller.Login)

export const AuthenticateRouter = _AuthenticateRouter
