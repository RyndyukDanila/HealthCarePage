import ICardsBlockArgs from '../../model/ICardsBlockArgs';
import Card from '../Card/Card';
import styles from './cards_block.module.css'

const CardsBlock = (args: ICardsBlockArgs) => {
    const children = args.items.map((item, index) => {
        return <Card
          key={`card_${index}`}
          image={item.image}
          title={item.title}
          description={item.description}
          href="#"/>
      })

    return <>
        <section className={styles.cardsBlock}>
            <div className={styles.cardsBlock__title}>
                {args.title}
            </div>
            <hr/>
            <div className={styles.cardsBlock__description}>
                {args.description}
            </div>
            <div className={styles.cardsBlock__cards}>
                {children}
            </div>
            {args.button}
        </section>
    </>
}

export default CardsBlock;
