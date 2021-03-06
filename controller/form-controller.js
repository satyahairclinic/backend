const Query = require('../model/query-modal')
const SkinQuery = require('../model/skin-query-modal')

class FormController {

    async entry(req, res) {
        const { name, email, phone, message, age, status } = req.body;

        try {
            const query = await Query.create({ name, email, phone, message, age, status })
            res.status(200).json({ msg: 'Success', query })
        } catch (err) {
            console.log(err)
            res.status(500).json({ msg: 'Internal Server Error' })
        }

    }

    async skinEntry(req, res) {
        const { name, email, phone, message, concern, treatment } = req.body;

        try {
            const query = await SkinQuery.create({ name, email, phone, message, concern, treatment })
            res.status(200).json({ msg: 'Success', query })
        } catch (err) {
            console.log(err)
            res.status(500).json({ msg: 'Internal Server Error' })
        }

    }

    async getAllLeads(req, res) {
        try {
            const leads = await Query.find()

            res.status(200).json({ leads })
        } catch (err) {
            console.log(err)
            res.status(500).json({ msg: 'Internal Server Error' })
        }
    }

}

module.exports = new FormController()