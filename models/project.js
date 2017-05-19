var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: String,
  description: String,
  gitHubRepoUrl: Number,
  screenshot: String
})

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;
