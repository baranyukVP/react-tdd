import { FC } from "react";

export type THeadingProps = {
  name?: string;
};

export const Heading: FC<THeadingProps> = ({ name = "React" }) => {
  return <h1>Hello {name}</h1>;
};
