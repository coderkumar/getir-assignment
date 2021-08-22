
const dataController = require("../../src/controllers/data.controller");
const dataService = require("../../src/services/data.service");
const { getDataServiceResponse } = require("../mockData/data-spec.data");
const supertest = require('supertest')
const app = require("../../server") // Link to your server file

const agent = supertest(app)

describe('data Controller', () => {
  it('should return data list', async () => {
    const requestBody = {
      "startDate": "2014-01-26",
      "endDate": "2018-02-02",
      "minCount": 2000,
      "maxCount": 4000
    }
    dataService.getData = jest
      .fn()
      .mockResolvedValue(getDataServiceResponse);

    const result = await agent.post('/api/data')
      .send(requestBody).expect(200);
    expect(result.body.records).toEqual(getDataServiceResponse);
  });

  it('should throw invalid value error', async () => {
    const requestBody = {
      "startDate": "",
      "endDate": "2018-02-02",
      "minCount": 2000,
      "maxCount": 4000
    }
    dataService.getData = jest
      .fn()
      .mockResolvedValue(getDataServiceResponse);

    const result = await agent.post('/api/data')
      .send(requestBody).expect(200);
    expect(result.body.code).toEqual(400);
    expect(result.body.msg).toEqual('Invalid value was provided');
  });
})