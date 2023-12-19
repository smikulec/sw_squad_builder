'use client';
import { SearchCharacterSection } from '@/components/SearchCharacterSection';
import { CreateSquadForm, SquadList, Wrapper } from '@/components/SquadSection';
import {
  useAllPeopleSuspenseQuery,
  useSquadsForUserQuery,
} from '@/graphql/generated/schema';

const Dashboard = () => {
  const {
    data: { allPeople },
  } = useAllPeopleSuspenseQuery();

  const squadListProps = useSquadsForUserQuery();

  const handleCreateSquad = () => {
    squadListProps.refetch();
  };

  return (
    <div className="w-full lg:flex ">
      <SearchCharacterSection data={allPeople} />
      <div className="grow">
        <Wrapper>
          <CreateSquadForm data={allPeople} onCreateSquad={handleCreateSquad} />
          <SquadList {...squadListProps} />
        </Wrapper>
      </div>
    </div>
  );
};

export default Dashboard;
