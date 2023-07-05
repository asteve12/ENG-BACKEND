import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config()
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.PORT_NUM,
  DATABASE_URL:process.env.DATABASE_URL,
  your_secret_key:process.env.your_secret_key
  }

let envConfig = {}

const envVarsSchema = Joi.object({
  port: Joi.number().default(3000),
  DATABASE_URL:Joi.string().required(),
  your_secret_key:Joi.string().required()
}).unknown()

const { value: envVars, error } = envVarsSchema.validate({
  ...baseConfig,
  ...envConfig,
})

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export default envVars as typeof baseConfig
