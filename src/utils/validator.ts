import { ethers } from 'ethers'
import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import { type } from 'os'
import { AppError } from './errors'



export const SchemaValidator =
  (
    schema: Joi.ObjectSchema<any>,
    options: any,
    queryType: 'body' | 'query' | 'headers'
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[queryType], options)
    if (error) {
      next(new AppError(error, 406))
    } else {
      req.body = value
      next()
    }
  }



