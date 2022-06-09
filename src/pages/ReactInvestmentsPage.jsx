import Header from "../components/Header";
import Investment from "../components/Investment";
import Investments from "../components/Investments";
import Main from "../components/Main";
import { allInvestmentsData } from "../data/investments";

export default function ReactInvestmentsPage() {
  function sortInvest(allData) {
    return allData.sort(function (a, b) {
      if (a.month < b.month) return -1;
      else if (a.month > b.month) return 1;
      else return 0;
    });
  }

  return (
    <div>
      <Header>react-investments</Header>
      <Main>
        <Investments>
          {allInvestmentsData.investments.map((investmentType) => {
            const investmentReports = sortInvest(
              allInvestmentsData.reports.filter(
                (x) => x.investmentId === investmentType.id
              )
            );
            return (
              <Investment
                title={investmentType.description}
                key={investmentType.id}
                data={investmentReports}
              ></Investment>
            );
          })}
        </Investments>
      </Main>
    </div>
  );
}
