const salary = require('../../controllers/salaryController')
const mock = require('../../__mocks__/mock')

describe('when the salary controller receives a valid json', () => {
  test('should respond with 200', async () => {
    const req = mock.mockRequest({ jugadores: mock.players })
    const res = mock.mockResponse()
    await salary.calculateSalary(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ code: 200, data: mock.responseAPI, msg: 'Ok' })
  })
})
