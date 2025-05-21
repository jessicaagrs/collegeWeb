import { GridContainer } from '@/components/Global/GridContainer';
import { GridItem } from '@/components/Global/GridItem';
import Image from 'next/image';

type MessageItemProps = Readonly<{
  name: string;
  message: string;
  time: string;
}>;

export const MessageItem = ({ name, message, time }: MessageItemProps) => {
  return (
    <GridContainer className="grid grid-cols-[1fr_2fr_1fr]">
      <GridItem>
        <Image
          src="/user-circle.svg"
          alt="Foto do usuário"
          width={48}
          height={48}
        />
      </GridItem>
      <GridItem>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-custom-1100">{message}</p>
      </GridItem>
      <GridItem className="justify-self-end">
        <span className="block">{time}</span>
      </GridItem>
    </GridContainer>
  );
};
