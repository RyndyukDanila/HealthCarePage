import style from "./card.module.css";
import ICardArgs from "../../model/ICardArgs";

const Card = (args: ICardArgs) => {
    return <>
        <div className={style.card}>
            <div className={style.card__image}>
                <img alt={args.title} src={args.image}/>
            </div>
            <div className={style.card__content}>
                <div className={style.card__title}>
                    {args.title}
                </div>
                {args.description}
            </div>
        </div>
    </>
}

export default Card;
