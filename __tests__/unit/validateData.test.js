
const { validationsMiddleware } = require('../../middleware/validateData')
const mock = require('../../__mocks__/mock')

describe('middleware must validate that it receives a valid json', () => {
  test('with an json empty should respond with 400', async () => {
    const req = mock.mockRequest({})
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('with an players empty with an players empty', async () => {
    const req = mock.mockRequest({ jugadores: {} })
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('with an levels empty should respond with 400', async () => {
    const req = mock.mockRequest({ jugadores: mock.players, niveles: [] })
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('with an invalid schema should respond with 400', async () => {
    const req = mock.mockRequest({ jugadoires: mock.playersMissingAttribute })
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('with an unknow level should respond with 404', async () => {
    const req = mock.mockRequest({ jugadores: mock.playersUnknowLevel })
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('with an json valid should return next', async () => {
    const req = mock.mockRequest({ jugadopres: mock.players, niveles: mock.customLevels })
    const res = mock.mockResponse()
    const next = mock.next
    await validationsMiddleware(req, res, next)
    expect(next.mock.calls).toEqual([])
  })
})
