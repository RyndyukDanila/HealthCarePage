import { ReactElement } from 'react';
import IServiceItem from './IServiceItem';

interface ICardsBlockArgs {
    title: string,
    description: string,
    button: ReactElement,
    items: IServiceItem[],
}

export default ICardsBlockArgs;
    