import { NextFunction, Request, Response } from 'express'
import { HttpException } from '../interfaces/HttpException'

export function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status: number = error.status ?? 500
    const message: string = error.message ?? 'Internal server error'

    response.status(status).json({
        status,
        message
    })
}