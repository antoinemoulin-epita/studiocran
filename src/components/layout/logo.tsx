import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src="/studiocran-logo-blue.png"
        alt="Studio Cran"
        width={200}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
