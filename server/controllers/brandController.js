const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {

    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const brand = await Brand.findOne({ where: {id} });
            const removedBrand = brand.name;
            await Brand.destroy({ where: {id} });
            return res.json({message: `Бренд ${removedBrand} успешно удален`})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }     
    } 
}

module.exports = new BrandController()