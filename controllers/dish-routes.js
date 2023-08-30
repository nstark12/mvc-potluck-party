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

router.get('/add-dish', (req, res) => {
  res.render('add-dish')
})

router.post('/api/add-dish', async (req, res) => {
  try {
    const newDish = await Dish.create(req.body)

    res.json(newDish)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
  
})

module.exports = router;
