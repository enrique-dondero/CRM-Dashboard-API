declare namespace Express {
    export interface Request {
        user?: User
        data?: RequestData
    }
}
