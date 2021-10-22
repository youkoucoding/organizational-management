export const CardTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="shadow-lg bg-gray-100 rounded px-6 py-2 font-semibold text-xl">
      {title}
    </h3>
  );
};
