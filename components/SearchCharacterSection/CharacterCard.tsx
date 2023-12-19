import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

type CharacterCardProps = {
  image: string;
  name: string;
  text?: string;
  href?: string;
};

const CharacterCard = ({
  image,
  name,
  text,
  href = '/',
}: CharacterCardProps) => {
  return (
    <Card>
      <Card.Image
        imageSrc={image}
        className="mx-auto mb-10 mt-5 rounded-full"
      />
      <Card.Content>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="pt-2 text-black">
          <span className="font-bold">Species: </span>
          <span>{text ? text : 'not available'}</span>
        </p>

        <Link
          href={href}
          className="mt-8 w-full py-2 text-center text-sm font-medium text-red-500"
        >
          Show more
        </Link>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
