'use client';
import { CharacterCard } from '@/components/CharacterCard';
import { Button, Input } from '@/components/ui';
import { Person, useAllPeopleSuspenseQuery } from '@/graphql/generated/schema';
import { ChangeEvent, useEffect, useState } from 'react';

const Dashboard = () => {
  const {
    data: { allPeople },
    error,
  } = useAllPeopleSuspenseQuery();
  const [filteredCharacters, setFilteredCharacters] = useState<Person[]>(
    () => allPeople?.slice(0, 6) as Person[]
  );
  const [displayedCards, setDisplayedCards] = useState(6);

  const handleCharacterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value.toString().toLowerCase();
    const filteredCharacters = allPeople?.filter(
      (person) => person?.name?.toLowerCase().includes(searchString)
    );
    setFilteredCharacters(filteredCharacters?.slice(0, 6) as Person[]);
  };

  useEffect(() => {
    setFilteredCharacters(allPeople?.slice(0, displayedCards) as Person[]);
  }, [allPeople, displayedCards]);

  const handleLoadMore = () => {
    setDisplayedCards((current) => current + 6);
  };

  return (
    <div className="w-full">
      <div className="bg-black/70 px-8 py-16 md:px-20 xl:pl-36">
        <h1 className="text-4xl font-black text-white">
          Find your Star Wars character
        </h1>
        <div className="max-w-[870px] text-center">
          <Input
            type="text"
            placeholder="Search character"
            inputClassName="p-6 rounded-xl bg-white"
            className="my-12"
            onChange={handleCharacterSearch}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
            onClick={handleLoadMore}
            className="mt-20 text-white"
          >
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
