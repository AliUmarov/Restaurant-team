const mongoose = require ('mongoose');

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  image: String
})

const News = mongoose.model("News", newsSchema);

module.exports = News;