export default function Item({
  date = "month/year",
  moneyValue = 0,
  percentalue = "0",
}) {
  const colorClass =
    parseInt(percentalue) > 0
      ? "text-green-500"
      : parseInt(percentalue) < 0
      ? "text-red-500"
      : "text-black-500";

  return (
    <div className="border-b-2 flex flex-row items-center p-2">
      <span className="font-mono">{date}</span>
      <span className={`m-0 ml-8 ${colorClass}`}> R${moneyValue}</span>
      <div className={`font-semibold ${colorClass} text-right w-full`}>
        {" "}
        {percentalue}%
      </div>
    </div>
  );
}
