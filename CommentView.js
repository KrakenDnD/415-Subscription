//T5
// views/CommentView.js
class CommentView {
  static render(comment) {
    return `
      <div>
        <strong>Topic:</strong> ${comment.topicID}<br>
        <strong>Date:</strong> ${new Date(comment.dateTime).toLocaleString()}
        <br>
        <div><strong>User:</strong> ${comment.userID}<br>
        <strong>Comment:</strong> ${comment.commentContent}</div><br>
      </div>
    `;
  }
}

module.exports = CommentView;
