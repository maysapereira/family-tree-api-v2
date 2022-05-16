import express from 'express'
import members from './membersRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send(
            {
                message: "Welcome to the family tree API"
            }
        )
    })

    app.use(
        express.json(),
        members
    )
}

export default routes