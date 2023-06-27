import React from "react";

export interface ICardProps {
  cardHeaderComponent: React.ReactNode;
  imageComponent: React.ReactNode;
  cardActionsComponent: React.ReactNode;
  title: string;
  body: string;
}
