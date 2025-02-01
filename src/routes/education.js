const { Router } = require("express");
const {
  listByLanguage,
  list,
  create,
  update,
  delete: deleteEducation,
} = require("../controllers/educationController")();

const router = Router();

/**
 * @swagger
 * /education:
 *   get:
 *     summary: Obtiene todo el historial academico por idioma
 *     tags: [Education]
 *     responses:
 *       200:
 *         description: Lista de la formación por idiomas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Education'
 */
router.get("/education/", listByLanguage);

/**
 * @swagger
 * /education/all:
 *   get:
 *     summary: Obtiene todo el historial academico
 *     tags: [Education]
 *     responses:
 *       200:
 *         description: Lista de la formación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Education'
 */
router.get("/education/all", list);

/**
 * @swagger
 * /education:
 *   post:
 *     summary: Agrega formación
 *     tags: [Education]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Education'
 *     responses:
 *       201:
 *         description: Educación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Education'
 */
router.post("/education", create);

/**
 * @swagger
 * /education/{id}:
 *   put:
 *     summary: Actualiza una educación por ID
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la educación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Education'
 *     responses:
 *       200:
 *         description: Educación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Education'
 *       404:
 *         description: Educación no encontrada
 */
router.put("/education/:id", update);

/**
 * @swagger
 * /education/{id}:
 *   delete:
 *     summary: Elimina una educación por ID
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la educación
 *     responses:
 *       200:
 *         description: Educación eliminada exitosamente
 *       404:
 *         description: Educación no encontrada
 */
router.delete("/education/:id", deleteEducation);

module.exports = router;
