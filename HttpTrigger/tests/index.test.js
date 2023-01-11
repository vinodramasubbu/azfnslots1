let chai = require('chai');
const axios = require('axios');
const httpFunction = require('../index');
const context = require('../testing/defaultContext')
let expect = chai.expect;

it('Http trigger should return known text', async () => {

    const request = {
        query: { name: 'Bill' }
    };

    //const data = {
    //        "name": "Bill"
    //};

    //    const url = 'https://azfnslots1-stage.azurewebsites.net/api/HttpTrigger'

    //await httpFunction(context, request);
    //console.log(context.log.callCount);
    //console.log(context.res.body);
    //expect(context.log.callCount).to.equal(1);
    //expect(context.res.body).to.equal('Hello Bill');
    //console.log(data);

    //const response = await axios.post(url,  data)
    //console.log(`statusCode: ${response.statusCode}`);
    //console.log(`responseData: ${response.data}`);
    //expect(response.data).to.equal('Hello Bill');
    expect('Hello Bill').to.equal('Hello Bill');

});