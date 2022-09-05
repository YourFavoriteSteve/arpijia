const asyncHandler = require('express-async-handler')

const Ability = require('../models/abilityModel')

// @desc Returns all abilities for Arpijia
// @route GET /api/abilities
// @access Private
const getAbilities = asyncHandler(async (req, res) => {
    const abilities = await Ability.find()

    res.status(200).json(abilities)
})

// @desc Returns named ability for Arpijia
// @route GET /api/abilities/:id
// @access Private
const getAbility = asyncHandler(async (req, res) => {
    const ability = await Ability.findById(req.params.id)

    if (!ability) {
        res.status(400)
        throw new Error('Ability not found')
    }

    res.status(200).json(ability)
})

// @desc Returns named ability for Arpijia
// @route POST /api/abilities/
// @access Private
const setAbility = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a name for the ability!')
    }
    const ability = await Ability.create({
        name: req.body.abilityName
    })

    res.status(200).json(ability)
})

// @desc Returns named ability for Arpijia
// @route PUT /api/abilities/:id
// @access Private
const updateAbility = asyncHandler(async (req, res) => {
    const ability = await Ability.findById(req.params.id)

      if (!ability) {
          res.status(400)
          throw new Error('Ability not found')
      }
      const updatedAbility = await Ability.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
      
      res.status(200).json(updateAbility)
})

// @desc Returns named ability for Arpijia
// @route DELETE /api/abilities/:id
// @access Private
const deleteAbility = asyncHandler(async (req, res) => {
    const ability = await Ability.findById(req.params.id)

      if (!ability) {
          res.status(400)
          throw new Error('Ability not found')
      }

      const abilityName = ability.name

      await Ability.findByIdAndDelete(req.params.id) 
      
      res.status(200).json({message: `Deleted ability: ${abilityName}`})
})

module.exports = {
    getAbilities,
    getAbility,
    setAbility,
    updateAbility,
    deleteAbility
}