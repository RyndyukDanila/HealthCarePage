import styles from './block.module.css';
import IBlockArgs from '../../model/IBlockArgs';

const Block = (args: IBlockArgs) => {

    const tile = <>
        <div className={styles.block__tile}>
            <div className={styles.tile__title}>
                {args.title}
            </div>
            {args.haveDivider 
            ? args.isDividerCentered 
                ? <hr style={{margin: '0 auto'}}/> 
                : <hr/>
            : ''}
            <div className={styles.tile__subtitle}>
                {args.subtitle}
            </div>
            {args.button}
        </div>
    </>

    const illustration = <>
        <div className={styles.block__illustration}>
            <img alt='illustration' src={args.illustration}/>
        </div>
    </>

    return <>
        <section className={`${styles.block} ${args.isReverse ? styles.reverse : ''}`}>
            {
                args.isReverse ?
                    <>
                        {illustration}
                        {tile}
                    </>
                    :
                    <>
                        {tile}
                        {illustration}
                    </>
            }
        </section>
    </>
}

export default Block;
