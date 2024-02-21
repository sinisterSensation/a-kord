const {Service} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServiceController {

    async create(req, res) {
        const {name, description, price} = req.body
        const service = await Service.create({name, description, price})
        return res.json(service)
    }

    async getAll(req, res) {
            const services = await Service.findAll()
            return res.json(services)
    }

    async getOne(req, res) {
        const {id} = req.params
        const service = await Service.findOne({where: {id}})
        return res.json(service)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const service = await Service.findOne({ where: {id} });
            const removedService = service.name;
            await Service.destroy({ where: {id} });
            return res.json({message: `Услуга ${removedService} успешно удалена`})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ServiceController()