import * as AvatarRdx from '@radix-ui/react-avatar';
import { cn } from '../../../../app/utils/cn';

interface AvatarProps {
  className?: string;
  src?: string;
}

const Avatar = ({ className, src }: AvatarProps) => (
  <AvatarRdx.Root className={cn('w-full h-10 flex', className)}>
    <AvatarRdx.Image
      className="rounded-full"
      src={cn('http://github.com/Vittor-Emanoel.png', src)}
    />
    <AvatarRdx.Fallback>VT</AvatarRdx.Fallback>
  </AvatarRdx.Root>
);

export default Avatar;
