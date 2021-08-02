import React from "react";
import "../styles/question.scss";

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}) {
  return (
    <div
      className={`question ${
        isHighlighted && !isAnswered ? "highlighted" : ""
      } ${isAnswered ? "answered" : ""}`}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
