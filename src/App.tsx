import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Header from "./components/Header";
import CardsBlock from "./components/CardsBlock/CardsBlock";

import headerItems from "./data/headerItems";
import { servicesItems } from "./data/serviceItems";

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

      <CardsBlock
        title='Our services'
        description='We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health'
        button={<Button isPrimary={false} text='Learn more' href="#" padding="72px 0px 0px 0px"/>}
        items={servicesItems}>
      </CardsBlock>
    </>
  )
}

export default App;
