const { Router } = require('express')
const router = Router()

const connection = require('../db')

const { ERRORS, SUCCESS } = require('../constants')

router.get('/answers', (req, res) => {
  connection.query('select * from answer', (err, answers) => {
    if (err) {
      console.log(err)
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      })
      return
    }

    res.status(200).json({
      data: answers,
    })
  })
})

router.get('/answer/:id', (req, res) => {
  const { id } = req.params
  connection.query(`select * from answer where id = ${id}`, (err, [answer]) => {
    if (err) {
      console.log(err)
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      })
      return
    }

    if (!answer) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      })
      return
    }

    res.status(200).json({
      data: answer,
    })
  })
})

router.post('/answer', (req, res) => {
  const { user_id, text, data, answer_id } = req.body

  if (!(user_id && text && data && answer_id)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    })
    return
  }

  connection.query(
    `insert into answer (
        user_id,
        text,
        data,
        answer_id
      ) values (
        ${user_id},
        "${text}",
        "${data}",
        ${answer_id}
      )`,
    (err) => {
      if (err) {
        console.log(err)
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        })
        return
      }

      res.status(201).json({
        message: SUCCESS.PROJECT_CREATED,
      })
    },
  )
})

router.put('/answer/:id', (req, res) => {
  const { id } = req.params

  connection.query(`select * from answer where id = ${id}`, (err, [answer]) => {
    if (err) {
      console.log(err)
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      })
      return
    }

    if (!answer) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      })
      return
    }

    const { user_id, text, data, answer_id } = {
      ...answer,
      ...req.body,
    }

    connection.query(
      `update answer set 
        user_id = ${user_id}, 
        text = "${text}",
        data = "${data}",
        answer_id = ${answer_id}
        where id = ${id}`,
      (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: ERRORS.SERVER_ERROR,
          })
          return
        }

        res.status(200).json({
          message: SUCCESS.PROJECT_UPDATED,
        })
      },
    )
  })
})

router.delete('/answer/:id', (req, res) => {
  const { id } = req.params
  connection.query(`delete from answer where id = ${id}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      })
      return
    }

    res.status(200).json({
      message: SUCCESS.PROJECT_DELETED,
    })
  })
})

module.exports = router
