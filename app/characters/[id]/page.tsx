'use client';

import { CategoryCard, DetailsCard } from '@/components/CharacterDetails';
import { useGetPersonByIdQuery } from '@/graphql/generated/schema';
import { ROUTES } from '@/routes';
import { ArrowLeftCircleIcon } from 'lucide-react';
import Link from 'next/link';

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { data, loading } = useGetPersonByIdQuery({
    variables: {
      personId: id,
    },
  });

  const person = data?.person;

  return (
    <div className="bg-black/70 p-6 sm:p-8 sm:pl-20 lg:p-16 lg:pl-36">
      <Link href={ROUTES.DASHBOARD_URL} className="mb-6 block text-white">
        <ArrowLeftCircleIcon size={32} />
      </Link>
      <h1 className="text-4xl font-black text-white">
        Star Wars character details
      </h1>
      {loading ? (
        <div className="py-16">
          <p className="h- text-white">Loading character data...</p>
        </div>
      ) : (
        <div className="mt-14 w-fit rounded-xl bg-white p-5 sm:p-10 lg:flex lg:px-16 lg:py-14">
          {person?.image && (
            <div className="pr-9">
              <img
                src={person?.image}
                alt={`${person?.name} image`}
                className="rounded-full "
                width={110}
                height={110}
              />
            </div>
          )}
          <div>
            <h2 className="py-4 text-xl font-extrabold">{person?.name}</h2>
            <div className="gap-24 lg:flex">
              <div>
                <h2 className="pb-1 text-lg font-bold text-red-500">
                  Personal info
                </h2>
                <div className="grid grid-cols-3 gap-3 pb-4">
                  <DetailsCard title="Name" text={person?.name ?? '-'} />
                  <DetailsCard title="Mass" text={person?.mass ?? '-'} />
                  <DetailsCard
                    title="Hair color"
                    text={person?.hairColor ?? '-'}
                  />
                  <DetailsCard
                    title="Birth year"
                    text={person?.birthYear ?? '-'}
                  />
                  <DetailsCard
                    title="Skin color"
                    text={person?.skinColor ?? '-'}
                  />
                  <DetailsCard title="Height" text={person?.height ?? '-'} />
                  <DetailsCard
                    title="Eye color"
                    text={person?.eyeColor ?? '-'}
                  />
                  <DetailsCard title="Gender" text={person?.gender ?? '-'} />
                  <DetailsCard
                    title="Species"
                    text={person?.species?.name ?? '-'}
                  />
                </div>
                <CategoryCard
                  title="Homeworld"
                  categoryTitle="Name"
                  categorySubtitle="Population"
                  category={person?.homeworld ? [person?.homeworld] : []}
                />
              </div>
              <div>
                <CategoryCard
                  title="Films"
                  categoryTitle="Title"
                  categorySubtitle="Director"
                  category={person?.films}
                />
                <CategoryCard
                  title="Starships"
                  categoryTitle="Name"
                  categorySubtitle="Model"
                  category={person?.starships}
                />
                <CategoryCard
                  title="Vehicles"
                  categoryTitle="Name"
                  categorySubtitle="Model"
                  category={person?.vehicles}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
