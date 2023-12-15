import { ReactElement } from "react";

interface IBlockArgs {
    title: string,
    subtitle: string,
    button: ReactElement,
    illustration: string,
    isReverse: boolean,
    haveDivider: boolean,
}

export default IBlockArgs;
