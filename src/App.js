import "./App.css"
import TagInput from "./components/TagInput"
import MultiselectCheckbox from './components/MultiselectCheckbox'
import LimitedWordTextarea from "./components/LimitedWordTextarea"

function App() {
  // options for MultiselectCheckbox
  const options = [{ label: 'Item One' }, { label: 'Item Two' }];
  
  return (
    <div className="components">
      <div>
        <p>TagInput:</p>
        <TagInput tags={['Nodejs', 'MongoDB']}/>
      </div>
      <div>
        <p>MultiselectCheckbox:</p>
        <MultiselectCheckbox options={options}/>
      </div>
      <div>
        <p>LimitedWordTextarea:</p>
        <LimitedWordTextarea limit={5} value="Hello there!" />
      </div>
      
    </div>
  );
}

export default App;
