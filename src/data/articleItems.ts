import IArticleItem from '../model/IArticleItem';
import article_1 from '../assets/images/articles/article_1.png';
import article_2 from '../assets/images/articles/article_2.png';
import article_3 from '../assets/images/articles/article_3.png';

const articleItems: IArticleItem[] = [
    {
        image: article_1,
        title: 'Disease detection, check up in the laboratory',
        description: 'In this case, the role of the health laboratory is very important to do a disease detection...',
        href: "#",
    },
    {
        image: article_2,
        title: 'Herbal medicines that are safe for consumption',
        description: 'Herbal medicine is very widely used at this time because of its very good for your health...',
        href: "#",
    },
    {
        image: article_3,
        title: 'Natural care for healthy facial skin',
        description: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
        href: "#",
    }
];

export {articleItems};
