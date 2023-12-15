import styles from './button.module.css';
import IButtonArgs from '../../model/IButtonArgs';

const Button = (args: IButtonArgs) => {
    return <>
        <div style={{padding: args.padding}}>
            <a href={args.href} className={`${styles.button} ${args.isPrimary ? styles.primary : styles.secondary}`}>
                {args.text}
            </a>
        </div>
    </>
}

export default Button;