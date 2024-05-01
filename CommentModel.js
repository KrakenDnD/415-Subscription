//T5
// models/CommentModel.js
class Comment {
  constructor(commentID, topicID, commentContent, userID, dateTime) {
    this.commentID = commentID;
    this.topicID = topicID;
    this.commentContent = commentContent;
    this.userID = userID;
    this.dateTime = dateTime;
  }
}

module.exports = Comment;
