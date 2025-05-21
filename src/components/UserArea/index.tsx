import Link from 'next/link';
import NotificationIcon from '../Icons/NotificationIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import Image from 'next/image';
import { Inbox } from '../Icons/Inbox';

export default function UserArea() {
  return (
    <div className="flex justify-between items-center gap-6 pr-5 pl-3">
      <div className="flex gap-3 items-center">
        <button className="cursor-pointer xl:hidden">
          <Inbox className="text-custom-1100" />
        </button>
        <button className="cursor-pointer">
          <NotificationIcon className="text-custom-1100" />
        </button>
        <Link href="/settings">
          <SettingsIcon className="text-custom-1100" />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <p className="text-sm font-semibold">Luiza A.</p>
          <span className="text-custom-1100 text-sm">Admin</span>
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
