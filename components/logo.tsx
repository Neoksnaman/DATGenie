import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="DATGenie Logo"
      width={100}
      height={100}
      className={cn("w-12 h-12", className)}
      priority
    />
  );
}
