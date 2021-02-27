import TagInput from "./components/TagInput"
import MultiselectCheckbox from './components/MultiselectCheckbox'
import "./App.css"

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
      
    </div>
  );
}

export default App;
