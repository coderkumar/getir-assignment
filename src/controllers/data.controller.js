const dataService = require('../services/data.service')
const utility = require('../utility/common')
module.exports = {
    async getData(req, res) {
        let bodyData = req.body;

        if (!bodyData || !utility.isValidDate(bodyData.startDate) || !utility.isValidDate(bodyData.endDate)) {
            let response = utility.getResponse(null, 400, 'Invalid value was provided')
            res.send(response)
            return
        }
        let records = await dataService.getData(req.body);
        res.send(utility.getResponse(records, 0))
    }
}