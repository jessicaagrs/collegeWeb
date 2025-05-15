type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className }: TitleProps) => {
  return <h1 className={className}>{children}</h1>;
};
