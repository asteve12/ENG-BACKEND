import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config()
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.PORT_NUM,
  DATABASE_URL:process.env.DATABASE_URL
  }

let envConfig = {}

const envVarsSchema = Joi.object({
  port: Joi.number().default(3000),
  DATABASE_URL:Joi.string()
}).unknown()

const { value: envVars, error } = envVarsSchema.validate({
  ...baseConfig,
  ...envConfig,
})

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export default envVars as typeof baseConfig
