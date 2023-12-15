import style from './footer.module.css';

const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.footer__column}>
            <div className={style.logo}>
                <div className={style.logo__item}>{'T'}</div>
                <div className={style.logo__text}>{'HealthCare'}</div>
            </div>
            <div>
                HealthCare provides progressive, and affordable healthcare, accessible on mobile and online
            </div>
            <div>
                ©HealthCare PTY LTD 2023. All rights reserved
            </div>
        </div>
        <div className={style.footer__column}>
            <div className={style.column__title}>Company</div>
            <a href='#'>About</a>
            <a href='#'>Testimonials</a>
            <a href='#'>Find a doctor</a>
            <a href='#'>Apps</a>
        </div>
        <div className={style.footer__column}>
            <div className={style.column__title}>Region</div>
            <a href='#'>Indonesia</a>
            <a href='#'>Singapore</a>
            <a href='#'>Hongkong</a>
            <a href='#'>Canada</a>
        </div>
        <div className={style.footer__column}>
            <div className={style.column__title}>Help</div>
            <a href='#'>Help center</a>
            <a href='#'>Contact support</a>
            <a href='#'>Instructions</a>
            <a href='#'>How it works</a>
        </div>
    </footer>
}

export default Footer;
