import "./App.css"
import TagInput from "./components/TagInput"
import MultiselectCheckbox from './components/MultiselectCheckbox'
import LimitedWordTextarea from "./components/LimitedWordTextarea"
import {Tabs, TabItem} from "./components/Tabs"
import {Accordion, AccordionItem} from "./components/Accordion"
import StarRating from "./components/StarRating"
import Select from "./components/Select"
import Toggle from "./components/Toggle"
import PasswordRevealer from "./components/PasswordRevealer"

function App() {
  // options for MultiselectCheckbox Component
  const options = [{ label: 'Item One' }, { label: 'Item Two' }];
  // choices for Select Component
  const choices = [
    ['grapefruit', 'Grapefruit'],
    ['lime', 'Lime'],
    ['coconut', 'Coconut'],
    ['mango', 'Mango'],
  ];

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
      <div>
        <p>StarRating:</p>
        <StarRating value={2} />
      </div>
      <div>
        <p>Select:</p>
        <Select
          values={choices}
          selectedValue="lime"
          onValueChange={val => console.log(val)}
        />
      </div>
      <div>
        <p>Toggle:</p>
        <Toggle />
      </div>
      <div>
        <p>PasswordRevealer:</p>
        <PasswordRevealer />
      </div>
    </div>
  );
}

export default App;
