const router = require('express').Router();
const { Dish } = require('../models')



// This is the 'get' route 
router.get('/', async (req, res) => {
  const dishes = await Dish.findAll({ raw: true })
  // Here, index.html is rendered
  res.render('home', { 
    dishes
   })
  
});

router.get('/dish/:slug', async (req, res) => {
  const slug = req.params.slug
  const dish = await Dish.findOne({
    where: {
      slug
    },
    raw: true,
  })
  res.render('dish', dish)
})

module.exports = router;
