import styles from './header.module.css'
import IHeaderItem from '../../model/IHeaderItem'

const Header = (args: {items: IHeaderItem[]}) => {

    const getHeaderItems = () => {
        return args.items.map(
            (item, index) => 
            <a key={`header_${index}`} href={item.href} className={item.isOpen ? styles.isOpen : ''}>
                {item.text}
            </a>
        )
    }

    return <nav className={styles.nav}>
        <div className={styles.logo}>
            <div className={styles.logo__item}>{'T'}</div>
            <div className={styles.logo__text}>{'HealthCare'}</div>
        </div>
        <div className={styles.links}>
            {getHeaderItems()}
        </div>
    </nav>
}

export default Header;
