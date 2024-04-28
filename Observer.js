class CommentObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(comment) {
    this.observers.forEach(observer => observer.update(comment));
  }
}

module.exports = CommentObserver;
