
const dataRepository = require('../repositories/data.repository')

module.exports = {
    async getData(filter) {
        return await dataRepository.getData(filter)
    }
}