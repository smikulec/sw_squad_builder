import { Person } from '@/graphql/generated/schema';
import { useState, useEffect, ChangeEvent } from 'react';
import { Input, Button } from '../ui';
import { isNonNullable } from '@/lib/utils';
import CharacterCard from './CharacterCard';

interface SearchCharacterSectionProps {
  data: (Person | null)[] | undefined | null;
}

const SearchCharacterSection = ({
  data: rawData,
}: SearchCharacterSectionProps) => {
  const data = rawData?.filter(isNonNullable) ?? [];

  const [filteredCharacters, setFilteredCharacters] = useState<Person[]>(() =>
    data.slice(0, 6)
  );
  const [displayedCards, setDisplayedCards] = useState(6);

  useEffect(() => {
    setFilteredCharacters(data?.slice(0, displayedCards) as Person[]);
  }, [displayedCards]);

  const handleCharacterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value.toString().toLowerCase();
    const filteredCharactersByInput = data.filter(
      (person) => person.name?.toLowerCase().includes(searchString)
    );
    setFilteredCharacters(filteredCharactersByInput.slice(0, 6));
  };

  return (
    <div className="bg-black/70 px-8 py-16 md:px-20 lg:px-14 xl:px-20 2xl:pl-36">
      <h1 className="text-4xl font-black text-white">
        Find your Star Wars character
      </h1>
      <div className="text-center">
        <Input
          type="text"
          placeholder="Search character"
          inputClassName="p-6 rounded-xl bg-white"
          className="my-12"
          onChange={handleCharacterSearch}
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCharacters.length > 0 ? (
            filteredCharacters?.map((person) => (
              <CharacterCard
                key={person?.id}
                image={person?.image ?? ''}
                name={person?.name ?? ''}
                text={person?.species?.name ?? ''}
                href={`/characters/${person?.id}`}
              />
            ))
          ) : (
            <p className="text-white">Character not found</p>
          )}
        </div>
        <Button
          variant="outline"
          onClick={() => setDisplayedCards((current) => current + 6)}
          className="mt-16 text-white"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default SearchCharacterSection;
