import FlagItem from "./FlagItem";

export default function FlagList({ flags }: any) {
  return (
    <div>
      {flags.map((f: any) => (
        <FlagItem key={f.key} flag={f} />
      ))}
    </div>
  );
}
