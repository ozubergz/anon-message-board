/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';
const ThreadHandler = require('../controllers/threadHandler.js');
const RepliesHandler = require('../controllers/repliesHandler.js')
const expect = require('chai').expect;

module.exports = function (app) {
  
  const repliesHandler = new RepliesHandler();
  const threadHandler = new ThreadHandler();
  
  app.route('/api/threads/:board')
    .post(threadHandler.newThread)
    .get(threadHandler.threadList)
    .put(threadHandler.reportThread)
    .delete(threadHandler.deleteThread);
    
  app.route('/api/replies/:board')
    .post(repliesHandler.addReply)
    .get(repliesHandler.replyList)
    .put(repliesHandler.reportReply)
    .delete(repliesHandler.deleteReply);    
  
};
