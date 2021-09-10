const app = require('../../index')
const mock = require('../../__mocks__/mock')
const supertest = require('supertest')
const request = supertest(app)

describe('Salary Controller', () => {
  test('/post calculate salary code 400 empty request', async () => {
    const response = await request
      .post('/api/v1/salary')
      .expect(400)
      .send({})

    expect(response.body).toMatchObject({
      code: 400,
      data: {},
      msg: 'Se encontraron errores en los datos recibidos'
    })
  })

  test('/post calculate salary code 400 missing attribute', async () => {
    const response = await request
      .post('/api/v1/salary')
      .expect(400)
      .send({
        jugadores: mock.playersMissingAttribute
      })

    expect(response.body).toMatchObject({
      code: 400,
      data: {},
      msg: 'Se encontraron errores en los datos recibidos'
    })
  })

  test('/post calculate salary code 400 unknow level', async () => {
    const response = await request
      .post('/api/v1/salary')
      .expect(400)
      .send({
        jugadores: mock.playersUnknowLevel
      })

    expect(response.body).toMatchObject({
      code: 400,
      data: {},
      msg: 'Se encontraron errores en los datos recibidos'
    })
  })

  test('/post calculate salary code 200 Ok', async () => {
    const response = await request
      .post('/api/v1/salary')
      .expect(200)
      .send({
        jugadores: mock.players
      })

    expect(response.body).toMatchObject({
      code: 200,
      data: mock.responseAPI,
      msg: 'Ok'
    })
  })

  test('/post calculate salary code 200 Ok', async () => {
    const response = await request
      .post('/api/v1/salary')
      .expect(200)
      .send({
        jugadores: mock.players,
        niveles: mock.customLevels
      })

    expect(response.body).toMatchObject({
      code: 200,
      data: mock.jsonResponse,
      msg: 'Ok'
    })
  })
})
