import "./App.css"
import TagInput from "./components/TagInput"
import MultiselectCheckbox from './components/MultiselectCheckbox'
import LimitedWordTextarea from "./components/LimitedWordTextarea"
import {Tabs, TabItem} from "./components/Tabs"
import {Accordion, AccordionItem} from "./components/Accordion"
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
      <div>
        <p>Tabs:</p>
        <Tabs defaultIndex="1">
          <TabItem label="A" index="1">
            Lorem ipsum
          </TabItem>
          <TabItem label="B" index="2">
            Dolor sit amet
          </TabItem>
        </Tabs>
      </div>
      <div>
        <p>Accordion:</p>
        <Accordion defaultIndex="1">
          <AccordionItem label="A" index="1">
            Lorem ipsum
          </AccordionItem>
          <AccordionItem label="B" index="2">
            Dolor sit amet
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
