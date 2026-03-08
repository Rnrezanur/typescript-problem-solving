// Count Nested Comments

interface CommentNode {
  id: number;
  replies: CommentNode[];
}

function countComments(comment: CommentNode): number {
  let count = 1;

  comment.replies.forEach(reply => {
    count += countComments(reply);
  });

  return count;
}

// Example input
const commentData: CommentNode = {
  id: 1,
  replies: [
    {
      id: 2,
      replies: []
    },
    {
      id: 3,
      replies: [
        {
          id: 4,
          replies: []
        }
      ]
    }
  ]
};

console.log(countComments(commentData));