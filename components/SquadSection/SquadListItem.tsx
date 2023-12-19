import { Squad } from '@/graphql/generated/schema';

export const SquadListItem = ({ data }: { data: Squad | null }) => {
  return (
    <div className="my-2 flex items-center rounded-lg bg-white p-2">
      <div>
        <h3 className="pb-1 text-xl font-bold">{data?.name}</h3>
        <div className="flex flex-wrap gap-3">
          {data?.characters?.map((character) => (
            <img
              key={character?.id}
              src={character?.image ?? ''}
              alt={character?.name ?? ''}
              className=" rounded-full"
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
