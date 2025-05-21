type MessageItemProps = Readonly<{
  name: string;
  description: string;
}>;

export const MenuItem = ({ name, description }: MessageItemProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-xs max-w-full h-32 bg-custom-1000"></div>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <span className="text-xs text-custom-1100">{description}</span>
      </div>
    </div>
  );
};
