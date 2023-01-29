import Header from "./components/Header/Header";
import '../src/lib/dayjs'
import SummaryTable from "./components/SummaryTable/SummaryTable";
import "./styles/global.css";
import { generateDatesFromYearBeginning } from "./utils/generate-Dates";
import '../src/styles/global.css';

generateDatesFromYearBeginning()


function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header/>
        <SummaryTable/>
      </div>
    </div>
  );
}

export default App;
