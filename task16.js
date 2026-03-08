// Count Nested Comments
function countComments(comment) {
    var count = 1;
    comment.replies.forEach(function (reply) {
        count += countComments(reply);
    });
    return count;
}
// Example input
var commentData = {
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
