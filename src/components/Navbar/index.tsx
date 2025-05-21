'use client';
import { Pages } from '@/enum/enums';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FinanceIcon } from '../Icons/FinanceIcon';
import { FoodIcon } from '../Icons/FoodIcon';
import { HomeIcon } from '../Icons/HomeIcon';
import { LatestActivityIcon } from '../Icons/LatestActivityIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { StudentsIcon } from '../Icons/StudentsIcon';
import { TeachersIcon } from '../Icons/TeachersIcon';

const linkActive = 'rounded-s-xl bg-custom-1000 text-custom-100';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-custom-100 pt-14 pl-12 flex flex-col gap-14 min-h-full">
      <div className="flex gap-4">
        <div>
          <Image src="/logo.svg" alt="Logo site" width={32} height={32} />
        </div>
        <h2 className="text-3xl font-bold text-custom-900">CollegeWeb</h2>
      </div>
      <ul className="flex flex-col gap-4 text-custom-1000">
        <li>
          <Link
            href="/dashboard"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.DASHBOARD ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <HomeIcon />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/students"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.STUDENTS ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <StudentsIcon />
            <span>Estudantes</span>
          </Link>
        </li>
        <li>
          <Link
            href="/teachers"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.TEACHERS ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <TeachersIcon />
            <span>Professores</span>
          </Link>
        </li>
        <li>
          <Link
            href="/finance"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.FINANCE ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <FinanceIcon />
            <span>Financeiro</span>
          </Link>
        </li>
        <li>
          <Link
            href="/food"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.FOOD ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <FoodIcon />
            <span>Cantina</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.PROFILE ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <ProfileIcon />
            <span>Minha Conta</span>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.SETTINGS ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <SettingsIcon />
            <span>Configurações</span>
          </Link>
        </li>
        <li>
          <Link
            href="/latestActivity"
            className={`flex gap-6 py-4 px-6 ${pathname === Pages.LATEST_ACTIVITY ? linkActive : ''} hover:rounded-s-xl hover:bg-custom-1000 hover:text-custom-100 transition-transform duration-300`}
          >
            <LatestActivityIcon />
            <span>Atividades Recentes</span>
          </Link>
        </li>
      </ul>
      <footer className="text-custom-900 flex flex-col gap-4 mb-4">
        <p className="text-xs font-bold">
          Todos os direitos reservados. &copy; 2025
        </p>
        <span className="text-xs">
          Desenvolvido por{' '}
          <Link
            href="https://github.com/jessicaagrs"
            className="text-custom-200"
          >
            @jessicaagrs
          </Link>
        </span>
      </footer>
    </nav>
  );
};
