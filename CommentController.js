//T5 (MVC), T6, this is observer pattern implemented in controller. I do have just the Observer.js in case that would make your checking easier too.
// controllers/CommentController.js

class CommentController {
  constructor(commentModel, commentObserver) {
    this.commentModel = commentModel;
    this.commentObserver = commentObserver;
  }

  async addComment(topicID, commentContent, userID, database) {
    try {
      const comment = this.commentModel.create(topicID, commentContent, userID);
      await database.connect();
      const collection = database.getCollection('Project415', 'comments');
      await collection.insertOne(comment);
      this.commentObserver.notify(comment);
      return true;
    } catch (error) {
      console.error("Error adding comment:", error);
      return false;
    } finally {
      await database.close();
    }
  }
}

module.exports = CommentController;
