import React, { useState } from "react";

const ReplyComment = ({ comments: initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);

  const [commentText, setCommentText] = useState("");

  const handleSubmitComment = () => {
    const newComments = [
      ...comments,
      { text: commentText, nestedComments: [] },
    ];
    setComments(newComments);

    setCommentText("");
  };

  return (
    <div>
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />

      <button onClick={handleSubmitComment}>Submit</button>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}

            <ReplyComment comments={comment.nestedComments} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReplyComment;
