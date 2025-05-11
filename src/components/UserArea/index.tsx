import Link from 'next/link';
import NotificationIcon from '../Icons/NotificationIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import Image from 'next/image';

export default function UserArea() {
  return (
    <div>
      <button>
        <NotificationIcon />
      </button>
      <Link href="/profile">
        <SettingsIcon />
      </Link>
      <div>
        <div>
          <p>Luiza A.</p>
          <span>Admin</span>
        </div>
        <div>
          <Image
            src="/user-circle.svg"
            alt="Imagem de perfil"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
