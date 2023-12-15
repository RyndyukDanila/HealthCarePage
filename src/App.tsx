import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Header from "./components/Header";
import CardsBlock from "./components/CardsBlock/CardsBlock";

import headerItems from "./data/headerItems";
import { servicesItems } from "./data/serviceItems";

import illustration_1 from './assets/images/illustrations/illustration_1.png';
import illustration_2 from './assets/images/illustrations/illustration_2.png';
import illustration_3 from './assets/images/illustrations/illustration_3.png';

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
        isReverse={false}
        haveDivider={false}
        isDividerCentered={true}/>

      <CardsBlock
        title='Our services'
        description='We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health'
        button={<Button isPrimary={false} text='Learn more' href="#" padding="72px 0px 100px 0px"/>}
        items={servicesItems}>
      </CardsBlock>

      <Block
        title='Leading healthcare providers'
        subtitle='We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
        button={<Button isPrimary={false} text='Learn more' href="#" padding="70px 0px 100px 0px"/>}
        illustration={illustration_2}
        isReverse={true}
        haveDivider={true}
        isDividerCentered={false}/>

      <Block
        title='Download our mobile apps'
        subtitle='Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
        button={<Button isPrimary={false} text='Download  ↓' href="#" padding="40px 0px 0px 0px"/>}
        illustration={illustration_3}
        isReverse={false}
        haveDivider={true}
        isDividerCentered={false}/>
    </>
  )
}

export default App;
