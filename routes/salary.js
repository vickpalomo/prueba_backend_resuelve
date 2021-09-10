const express = require('express')
const { calculateSalary } = require('../controllers/salaryController')
const { validationsMiddleware } = require('../middleware/validateData')

const router = express.Router()

/**
 * @swagger
 * /api/v1/salary/:
 *    post:
 *      summary: Calcula el salario de los jugadores de los equipos de futbol
 *      tags: [Salary]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              required:
 *                - jugadores
 *              properties:
 *                jugadores:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      nombre:
 *                        type: string
 *                      nivel:
 *                        type: string
 *                      goles:
 *                        type: integer
 *                      sueldo:
 *                        type: number
 *                      bono:
 *                        type: number
 *                      sueldo_completo:
 *                        type: number
 *                        nullable: true
 *                      equipo:
 *                        type: string
 *              type: object
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: company created
 */
router.post('/', validationsMiddleware, calculateSalary)

module.exports = router
