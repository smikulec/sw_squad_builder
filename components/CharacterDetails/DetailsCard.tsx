export const DetailsCard = ({
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
