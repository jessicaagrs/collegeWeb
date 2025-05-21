import { GridContainer } from '../Global/GridContainer';
import { GridItem } from '../Global/GridItem';
import { ButtonViewMore } from './ButtonViewMore';
import { MenuItem } from './MenuItem';
import { MessageItem } from './MessageItem';
import { RecentStudentItem } from './RecentStudentItem';

const recentStudents = [
  {
    id: 1,
    name: 'Samanta William',
    team: 'Turma VII A',
  },
  {
    id: 2,
    name: 'John Doe',
    team: 'Turma VII B',
  },
  {
    id: 3,
    name: 'Jane Smith',
    team: 'Turma VII C',
  },
  {
    id: 4,
    name: 'Michael Johnson',
    team: 'Turma VII D',
  },
  {
    id: 5,
    name: 'Emily Davis',
    team: 'Turma VII E',
  },
];

const recentMessages = [
  {
    id: 1,
    name: 'Samanta William',
    message: 'Olá, tudo bem?',
    time: '12:45',
  },
  {
    id: 2,
    name: 'Tony Soap',
    message: 'Oi, como você está?',
    time: '12:46',
  },
  {
    id: 3,
    name: 'Jordan Nico',
    message: 'Oi, tudo certo?',
    time: '12:47',
  },
];

const currentFoodsMenu = [
  {
    id: 1,
    name: 'Café da manhã com sanduíche natural',
    description: 'Pão integral com peito de peru e queijo branco',
  },
  {
    id: 2,
    name: 'Almoço com frango grelhado',
    description: 'Peito de frango grelhado com legumes',
  },
  {
    id: 3,
    name: 'Jantar com salmão',
    description: 'Salmão grelhado com arroz e brócolis',
  },
];

export default function SideMenu() {
  return (
    <nav className="hidden pr-5 pl-3 py-3 bg-custom-600 xl:block">
      <div>
        <GridContainer className="grid grid-cols-[3fr_1fr]">
          <GridItem className="self-center">
            <h2 className="text-lg font-bold">Estudantes recentes</h2>
          </GridItem>
          <GridItem className="row-start-2 row-end-3">
            <p className="text-sm text-custom-1100">456 novos estudantes</p>
          </GridItem>
          <GridItem className="justify-self-end">
            <button className="w-10 h-10 rounded-full bg-custom-100 text-custom-600 cursor-pointer">
              +
            </button>
          </GridItem>
        </GridContainer>
        <ul className="flex flex-col gap-6 mt-6">
          {recentStudents.map((student) => (
            <RecentStudentItem key={student.id} {...student} />
          ))}
        </ul>
        <ButtonViewMore>Ver todos</ButtonViewMore>
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-bold self-center mb-5">Mensagens</h2>
        <ul className="flex flex-col gap-6">
          {recentMessages.map((message) => (
            <MessageItem key={message.id} {...message} />
          ))}
        </ul>
        <ButtonViewMore>Ver mais</ButtonViewMore>
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-bold self-center mb-5">Cardápio</h2>
        <ul className="flex flex-col gap-6">
          {currentFoodsMenu.map((food) => (
            <MenuItem key={food.id} {...food} />
          ))}
        </ul>
        <ButtonViewMore>Ver mais</ButtonViewMore>
      </div>
    </nav>
  );
}
