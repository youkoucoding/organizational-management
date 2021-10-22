interface StatusProps {
  value: string;
}

export const StatusPill = ({ value }: StatusProps) => {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={`px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm
        ${status.startsWith("activated") ? "bg-green-100 text-green-600" : null}
        ${
          status.startsWith("inactivated")
            ? "bg-yellow-100 text-yellow-600"
            : null
        }`}
    >
      {status}
    </span>
  );
};
