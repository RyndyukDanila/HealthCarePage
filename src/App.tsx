import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Header from "./components/Header";

import headerItems from "./data/headerItems";

import illustration_1 from './assets/images/illustrations/illustration_1.png';

function App() {
  return (
    <>
      <Header 
        items={headerItems}/>

      <Block
        title='Virtual healthcare for you'
        subtitle='Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
        button={<Button isPrimary={true} text="Consult Today" href={"#"} padding={'48px 0px 0px 0px'}/>}
        illustration={illustration_1}
        isReverse={true}
        haveDivider={false}/>
    </>
  )
}

export default App;
