import 'App.css';
import axios from 'axios';
import Counter from 'components/Counter';
import KanyeQuote from 'components/KanyeQuote';
import OfficeQuote from 'components/OfficeQuote';
import RonQuote from 'components/RonQuote';
import useCounter from 'hooks/useCounter';

export default function App() {
  const [count, increment] = useCounter(0);


  return (
    <div className="App">
      <Counter start={0} />
      <div>
        <button onClick={increment}>Toggle</button>
        {(!(count % 2)) &&
          < ul >
            <KanyeQuote />
            <OfficeQuote />
            <RonQuote/>
          </ul>
        }
      </div>
    </div >
  );
}