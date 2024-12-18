const asyncHandler = require('express-async-handler')

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({messsage: 'Get goals'})
})

// @desc    POST goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async  (req, res) => {
    res.status(200).json({messsage: 'Get goals'})
})

// @desc    PUT Goals
// @route   PUT /api/goals/id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({messsage: 'Get goals'})
})

// @desc     DELETE Goals
// @route    DELETE /api/goals/id
// @access   Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({messsage: 'Get goals'})
})



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}