import { generateDateString } from "../helpers/dateHelper";
import { roundtoBrString } from "../helpers/moneyHelper";
import Item from "./Item";

export default function Investment({
  data = [],
  title = "Tabela de Investimento",
}) {
  const totalMoney = data[data.length - 1].value - data[0].value;
  const totalPercent = parseInt(totalMoney * 100) / data[0].value;

  const colorClass =
    totalPercent > 0
      ? "text-green-500"
      : totalPercent < 0
      ? "text-red-500"
      : "text-black-500";

  console.log(data);

  return (
    <>
      <section className="border p-4 m-5">
        <div className="text-center text-lg font-bold pb-3">{title}</div>
        <div className="text-center font-semibold">
          <span>Rendimento Total:</span>
          <span className={`${colorClass}`}>
            {" "}
            R${roundtoBrString(totalMoney)} ({roundtoBrString(totalPercent)}%)
          </span>
        </div>
        {data.map((x) => {
          const date = generateDateString(x.month, x.year);
          const value = roundtoBrString(x.value);
          const percentalue =
            data.indexOf(x) === 0
              ? roundtoBrString(0)
              : roundtoBrString(
                  ((x.value - data[data.indexOf(x) - 1].value) * 100) /
                    data[data.indexOf(x) - 1].value
                );

          return (
            <Item
              key={x.id}
              date={date}
              moneyValue={value}
              percentalue={percentalue}
            />
          );
        })}
      </section>
    </>
  );
}
