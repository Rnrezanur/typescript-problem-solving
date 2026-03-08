"use strict";
// Count Nested Comments
function countComments(comment) {
    let count = 1;
    comment.replies.forEach(reply => {
        count += countComments(reply);
    });
    return count;
}
// Example input
const commentData = {
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
