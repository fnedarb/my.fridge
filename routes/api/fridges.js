const express = require(`express`);
const router = express.Router();

// Fridge Model

const Fridge = require(`../../models/Fridge`);
const Food = require(`../../models/Food`);

// test route
router.get(`/test`, (req,res) => res.send(`testing!`));

// populate food
router.get('/', (req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(404).json({ nofoodfound: 'No Food found' }));
});

router.post('/', (req, res) => {
    Food.create(req.body)
        .then(food => res.json({ msg: 'Food added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this food' }));
});

router.put('/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body)
        .then(food => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id, req.body)
      .then(food => res.json({ mgs: 'Food entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such food exists' }));
  });

module.exports = router;