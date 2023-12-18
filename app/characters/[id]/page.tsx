'use client';

import { useGetPersonByIdQuery } from '@/graphql/generated/schema';
import { ArrowLeftCircleIcon } from 'lucide-react';
import Link from 'next/link';

const DetailsCard = ({
  title,
  text,
}: {
  title: string;
  text: string | number;
}) => {
  return (
    <div className="text-black">
      <h3 className="pb-1 text-lg font-bold">{title}</h3>
      <p className="text-base">{text}</p>
    </div>
  );
};

const CategoryCard = ({
  title,
  categoryTitle,
  categorySubtitle,
  category,
}: {
  title: string;
  categoryTitle: string;
  categorySubtitle: string;
  category?: Array<any> | null;
}) => {
  return (
    <div className="pb-4">
      <h2 className="pb-1 text-lg font-bold text-red-500">{title}</h2>

      <div className="flex gap-12">
        <div>
          <h3 className="text-lg font-bold">{categoryTitle}</h3>

          {category && category.length > 0 ? (
            category.map((item) => (
              <p className="p-1 text-base">
                {item[categoryTitle.toLowerCase()]}
              </p>
            ))
          ) : (
            <p>-</p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold">{categorySubtitle}</h3>
          {category && category.length > 0 ? (
            category.map((item) => (
              <p className="p-1 text-base">
                {item[categorySubtitle.toLowerCase()]}
              </p>
            ))
          ) : (
            <p>-</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { data, loading } = useGetPersonByIdQuery({
    variables: {
      personId: id,
    },
  });

  const person = data?.person;

  return (
    <div className="bg-black/70 p-6 sm:p-8 sm:pl-20 lg:p-16 lg:pl-36">
      <Link href="/dashboard" className="mb-6 block text-white">
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
