import { cc } from '@/utility/css';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="hidden sm:inline-block">
        Agencia Lalia
      </span>
      <Link
        href="https://lalia.uy"
        target="_blank"
        className={cc(
          'flex items-center gap-1',
          'text-black dark:text-white',
          'hover:underline',
        )}
      >
      </Link>
    </span>
  );
}
