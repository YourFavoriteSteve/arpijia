const asyncHandler = require('express-async-handler')

// @desc Returns all abilities for Arpijia
// @route GET /api/abilities
// @access Private
const getAbilities = asyncHandler(async (req, res) => {
    res.status(200).json({message: `GetAbilities`})
})

// @desc Returns named ability for Arpijia
// @route GET /api/abilities/:namedAbility
// @access Private
const getAbility = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get ability: ${req.params.abilityName}`})
})

// @desc Returns named ability for Arpijia
// @route GET /api/abilities/:namedAbility
// @access Private
const setAbility = asyncHandler(async (req, res) => {
    if(!req.body.abilityName) {
        res.status(400)
        throw new Error('Please add a name for the ability!')
    }
    res.status(200).json({message: `Set ability: ${req.params.abilityName}`})
})

// @desc Returns named ability for Arpijia
// @route GET /api/abilities/:namedAbility
// @access Private
const updateAbility = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update ability: ${req.params.abilityName}`})
})

// @desc Returns named ability for Arpijia
// @route GET /api/abilities/:namedAbility
// @access Private
const deleteAbility = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete ability: ${req.params.abilityName}`})
})

module.exports = {
    getAbilities,
    getAbility,
    setAbility,
    updateAbility,
    deleteAbility
}