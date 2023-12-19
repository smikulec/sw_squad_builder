export const CategoryCard = ({
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
            category.map((item, index) => (
              <p key={index} className="p-1 text-base">
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
            category.map((item, index) => (
              <p key={index} className="p-1 text-base">
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
