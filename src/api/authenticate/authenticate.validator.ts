
import Joi from 'joi'
import {  SchemaValidator } from '../../utils/validator'

const createOptions = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
}

const authenticateSchema = Joi.object({
email:Joi.string().required(),
password:Joi.string().required(),
parentName:Joi.string().required(),
childName:Joi.string().required(),
  DOB:Joi.string().required(),
  childGender:Joi.string().required()
})



export const  authenticateValidator = SchemaValidator(authenticateSchema,createOptions,'body')
