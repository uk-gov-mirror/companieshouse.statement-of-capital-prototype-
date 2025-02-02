const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.get('/change-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const change = req.session.data['form']
  if (change === 'SH10') {
    res.redirect('/user-journeys/SH10/date')
  }
  if (change === 'RP04') {
    res.redirect('/user-journeys/confirmation-statement/edit-the-statement-of-capital')
  }
  if (change === 'SH08') {
    res.redirect('/user-journeys/SH08/date')
  } else {
    res.redirect('/dynamic-pages/date')
  }
})

router.get('/soc-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const soc = req.session.data['statement-of-capital']
  if (soc === 'yes') {
    res.redirect('default-pages/confirmation')
  } else {
    res.redirect('default-pages/change')
  }
})

router.get('/update-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const update = req.session.data['update']
  if (update === 'notify') {
    res.redirect('/default-pages/change')
  } else {
    res.redirect('/user-journeys/confirmation-statement/edit-the-statement-of-capital')
  }
})

router.get('/need-resolution-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const resolution = req.session.data['need-resolution']
  if (resolution === 'yes') {
    res.redirect('/attach-a-special-resolution')
  } else {
    res.redirect('default-pages/change')
  }
})

module.exports = router
