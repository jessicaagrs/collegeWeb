type Props = {
  children: React.ReactNode;
  className?: string;
};
export const GridItem = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};
