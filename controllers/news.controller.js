const News = require('../models/News.model');

module.exports.newsController = {
  createNews: async (req,res ) => {
    try {
      await News.create ({
        title: req.body.title,
        text: req.body.text,
        image: req.body.image
      })
      res.json("News loaded")
    } catch (e) {
      res.json("error")
    }
  },
  getAllNews: async (req, res) => {
    try {
      const getNews = await News.find();
      res.json(getNews);
    } catch (e) {
      res.json("error")
    }
  },
  getNewsById: async (req, res) => {
    try {
      const getNewsById = await News.findById(req.params.id)
      res.json(getNewsById)
    } catch (e) {
      res.json("error")
    }
  },
  removeNews: async (req, res) => {
    try {
      const removeNews = await News.findByIdAndRemove(req.params.id);
      res.json(removeNews);
    } catch (e) {
      res.json("error")
    }
  }
}