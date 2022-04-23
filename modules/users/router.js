var express = require('express');
var router = express.Router();
const { getAllUsers, createUser, getUserByUserName } = require('./controller');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/* GET user by username */
router.get('/:username', async function (req, res, next) {
  const username = req.params.username;
  const user = await getUserByUserName(username);
  res.json(user);
});

/* POST create user */
router.post('/', async function (req, res, next) {
  try {
    const result = await createUser(req.body);
    if (result.success) {
      res.cookie('token', result.token, { httpOnly: true });
      res.status(201).send(result);
    } else {
      res.status(500).send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
