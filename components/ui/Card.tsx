import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

interface CardProps<T extends ReactElement> {
  title?: string;
  description?: string;
  image?: string;
  children: T | T[];
  className?: string;
}

interface CardImageProps {
  imageSrc: string;
  className: string;
}

const CardImage = ({ imageSrc, className, ...props }: CardImageProps) => {
  return (
    <img
      src={imageSrc}
      alt="character image"
      className={className}
      width={120}
      height={120}
      {...props}
    />
  );
};

interface CardContentProps<T extends ReactElement> {
  children: T | T[];
}

const CardContent = <T extends ReactElement>({
  children,
}: CardContentProps<T>) => {
  return <>{children}</>;
};

interface CardHeaderProps {
  imageSrc: string;
  title: string;
}

const CardHeader = ({ imageSrc, title }: CardHeaderProps) => {
  return (
    <div className="flex items-center">
      <img src={imageSrc} width={100} height={100} />
      <h2 className="pl-5 text-xl font-normal leading-7 text-white">{title}</h2>
    </div>
  );
};

const Card = <T extends ReactElement>({
  children,
  className,
}: CardProps<T>) => {
  return (
    <div
      className={cn(
        'w-100 inline-flex flex-col items-start justify-center rounded-xl bg-white px-7 py-4 shadow',
        className
      )}
    >
      {children}
    </div>
  );
};

Card.Image = CardImage;

Card.Content = CardContent;

Card.Header = CardHeader;

export default Card;
