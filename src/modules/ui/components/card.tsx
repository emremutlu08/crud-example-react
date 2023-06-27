import React from "react";

export const Card = ({
  cardHeaderComponent,
  imageComponent,
  cardActionsComponent,
  title,
  body,
}: {
  cardHeaderComponent: React.ReactNode;
  imageComponent: React.ReactNode;
  cardActionsComponent: React.ReactNode;
  title: string;
  body: string;
}) => {
  return (
    <div className="card bg-base-100 shadow-xl pt-10">
      <div className="card-header">{cardHeaderComponent}</div>
      <figure>
        <div className="card-image">{imageComponent}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="flex justify-between items-center card-actions">
          {cardActionsComponent}
        </div>
      </div>
    </div>
  );
};
