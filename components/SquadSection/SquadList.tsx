'use client';

import { SquadsForUserQueryHookResult } from '@/graphql/generated/schema';
import { SquadListItem } from './SquadListItem';
import { Button } from '../ui';
import { useState } from 'react';

const SquadList = ({ data, error, loading }: SquadsForUserQueryHookResult) => {
  const [displayedCards, setDisplayedCards] = useState(3);
  const loadedData = data?.squads.slice(0, displayedCards);

  return (
    <div>
      <h2 className="mb-4 py-6 text-4xl font-black">Your squads</h2>

      {error ? (
        <p className="text-red-500">
          There was an error fetching data. Please try again.
        </p>
      ) : loading ? (
        <p>Loading...</p>
      ) : loadedData && loadedData.length > 0 ? (
        <div>
          <div>
            {loadedData.map((squad) => (
              <SquadListItem key={squad?.id} data={squad} />
            ))}
          </div>
          <div className="w-full text-center">
            <Button
              variant="outline"
              onClick={() => setDisplayedCards((current) => current + 3)}
              className="mt-10 border-black"
            >
              Load more
            </Button>
          </div>
        </div>
      ) : (
        <p>No squads yet.</p>
      )}
    </div>
  );
};

export default SquadList;
