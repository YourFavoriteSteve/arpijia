// @desc associates routing for /api/abilities (see server.js)

// Common.js module syntax
const express = require('express')
const router = express.Router()
// import controller endpoints
const {
    getAbilities,
    getAbility,
    setAbility,
    updateAbility,
    deleteAbility
} = require('../controllers/abilityController')

// associate controller endpoints to routes
router.route('/')
    .get(getAbilities)
    .post(setAbility)

router.route('/:id')
    .get(getAbility)
    .put(updateAbility)
    .delete(deleteAbility)

module.exports = router