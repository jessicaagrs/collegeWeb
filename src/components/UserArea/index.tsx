import Link from 'next/link';
import NotificationIcon from '../Icons/NotificationIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import Image from 'next/image';

export default function UserArea() {
  return (
    <div className="flex items-center gap-6">
      <button className='cursor-pointer'>
        <NotificationIcon className="text-(--color-1100)" />
      </button>
      <Link href="/settings">
        <SettingsIcon className="text-(--color-1100)" />
      </Link>
      <div className="flex gap-3 items-center">
        <div>
          <p className="text-semibold-200">Luiza A.</p>
          <span className="text-(--color-1100) text-sm">Admin</span>
        </div>
        <div>
          <Image
            src="/user-circle.svg"
            alt="Imagem de perfil"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
