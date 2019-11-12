'use strict'

const webhook = (req, res) => {
    let body = req.body
    let action = body.result.action
    let parameters = body.result.parameters
    if (action === 'action') {

    } else {
        console.error(`unhandled action ${action}`)
    }
    res.json({})
}

module.exports = webhook