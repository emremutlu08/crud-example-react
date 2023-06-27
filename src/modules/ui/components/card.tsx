import { ICardProps } from "../types/ui-components-type";

export const Card = ({
  cardHeaderComponent,
  imageComponent,
  cardActionsComponent,
  title,
  body,
}: ICardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl pt-10">
      <div className="card-header p-2">{cardHeaderComponent}</div>
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
