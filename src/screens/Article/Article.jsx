
import { useEffect, useState } from "react";

import './Article.css';
import { Modal } from '../../components/Modal/Modal'
import { Loader } from '../../components/Loader/Loader'
import { NotionBlock } from "../../components/NotionBlock/NotionBlock";
import { fetchArticle } from '../../api/fetchArticle';
import { transformBlocks } from "../../utils/notion";


export const Article = ({ article, isModalOpen, onCloseModal }) => {
    const [ blocks, setBlocks ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if (!article?.id) return
        setIsLoading(true);

        fetchArticle(article.id).then((data) => {
            if (data) {

                setBlocks(data);
                const uniqueTypes = [ ...new Set(data?.map((item) => item.type)) ];
                console.log({ data })
                console.log({ uniqueTypes })
            }
        }).finally(() => {
            setIsLoading(false);
        });;
    }, [ article?.id ]);

    if (!blocks) return

    const processedBlocks = transformBlocks(blocks);

    return (
        <Modal key={article?.id} isOpen={isModalOpen} onClose={onCloseModal}>
            {isLoading ?
                <div className="loading-wrapper"><Loader /></div>
                :
                <div className="article-wrapper">
                    <h1>{article?.title}</h1>
                    <p className="subtitle">{article?.subtitle}</p>
                    {processedBlocks?.map((block) => <NotionBlock {...block} />)}
                </div>}
        </Modal>

    )
}