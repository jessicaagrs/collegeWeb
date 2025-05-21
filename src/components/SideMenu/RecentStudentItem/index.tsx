import { GridContainer } from '@/components/Global/GridContainer';
import { GridItem } from '@/components/Global/GridItem';
import { EmailIcon } from '@/components/Icons/EmailIcon';
import Image from 'next/image';

type RecentStudentItemProps = Readonly<{
  name: string;
  team: string;
}>;

export const RecentStudentItem = ({ name, team }: RecentStudentItemProps) => {
  return (
    <GridContainer className="grid grid-cols-[1fr_2fr_1fr]">
      <GridItem>
        <Image
          src="/user-circle.svg"
          alt="Foto do aluno"
          width={48}
          height={48}
        />
      </GridItem>
      <GridItem>
        <p className="text-sm font-semibold">{name}</p>
        <span className="text-sm text-custom-1100">{team}</span>
      </GridItem>
      <GridItem className="justify-self-end">
        <button className="w-8 h-8 rounded-full border border-custom-1100 flex items-center justify-center cursor-pointer hover:bg-custom-100">
          <EmailIcon className="text-xl text-custom-1100 hover:text-custom-600" />
        </button>
      </GridItem>
    </GridContainer>
  );
};
