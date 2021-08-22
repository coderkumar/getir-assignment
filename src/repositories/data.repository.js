const db = require('../dbcontext/mongodb-context');

module.exports = {
    async getData(filter) {
        const collection = await db.getCollection('records')
        let startDate = new Date(filter.startDate)
        let endDate = new Date(filter.endDate)

        let records = collection.aggregate([
            {
                $project:
                    { _id: 0, key: 1, createdAt: 1, totalCount: { $sum: "$counts" } }
            },
            {
                $match: {
                    $and: [
                        {
                            createdAt: {
                                '$gte': startDate,
                                '$lte': endDate
                            }
                        },
                        {
                            totalCount: {
                                '$gte': filter.minCount,
                                '$lte': filter.maxCount
                            }
                        }
                    ]
                }
            }
        ]).toArray()
        return records
    }
}