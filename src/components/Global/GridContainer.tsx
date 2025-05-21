type GridContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const GridContainer = ({ children, className }: GridContainerProps) => {
  return <div className={`grid ${className}`}>{children}</div>;
};
