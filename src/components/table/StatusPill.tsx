interface StatusProps {
  value: string;
}

export const StatusPill = ({ value }: StatusProps) => {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={`px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm
        ${status.startsWith("activated") ? "" : null}
        ${status.startsWith("inactivated") ? "" : null}`}
    >
      {status}
    </span>
  );
};
