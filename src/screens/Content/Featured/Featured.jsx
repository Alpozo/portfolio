import './Featured.css';
import React, { useEffect, useState } from "react";

// Components
import { Cell } from '../../../components/Cell/Cell';
import { Article } from '../../../screens/Article/Article'

import { fetchArticles } from '../../../api/fetchArticles';
import { addQueryParam } from '../../../utils/queryParams'

export const Featured = ({ onHoverItem, onLeaveImage }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ article, setArticle ] = useState('')
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      if (data) {
        setArticles(data.results);
      }
    });
  }, []);

  const articlesList = articles.map(({ id, properties }) => {
    return {
      id,
      title: properties?.Name.title[ 0 ]?.text?.content,
      subtitle: properties?.Tags.rich_text[ 0 ]?.text?.content,
      file: properties?.Cover?.files[ 0 ]?.file?.url,
      fileType: properties?.Cover?.files[ 0 ]?.name?.split('.')?.[ 1 ],
    }
  })

  const openModal = (currentArticle) => {
    setArticle(currentArticle)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setArticle(undefined)
  }

  const onClickArticle = (article) => {
    openModal(article)
    addQueryParam("article", article.id)
  }

  return (
    <>
      <Article article={article}
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />

      <div className="list-wrapper">
        {articlesList.map((item, index) => (
          <div key={index} onMouseEnter={() => onHoverItem(item)} onMouseLeave={onLeaveImage} onClick={() => onClickArticle(item)}>
            <Cell title={item.title} subtitle={item.subtitle} interactive={true} />
          </div>
        ))}
      </div>

      <div className="list-wrapper">
        {articlesList.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div >
    </>
  );
};
