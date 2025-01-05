import './Featured.css';
import React, { useEffect, useState } from "react";

// Components
import { Cell } from '../../../components/Cell/Cell';
import { Article } from '../../../screens/Article/Article'

import { fetchArticles } from '../../../api/fetchArticles';
import { addQueryParam, removeQueryParam } from '../../../utils/queryParams'

export const Featured = ({ onHoverItem, onLeaveImage }) => {
  const params = new URLSearchParams(window.location.search);
  const postURL = params.get("post");

  const [ isModalOpen, setIsModalOpen ] = useState(!!postURL)
  const [ article, setArticle ] = useState('')
  const [ articles, setArticles ] = useState([]);
  const [ hoveredIndex, setHoveredIndex ] = useState(null);

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
      queryParam: properties?.ID.rich_text[ 0 ]?.text?.content,
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
    removeQueryParam("post")
  }

  const onClickArticle = (article) => {
    openModal(article)
    addQueryParam("post", article?.id)
  }

  return (
    <>
      <Article article={article}
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />

      <div className="list-wrapper">
        {articlesList.map((item, index) => (
          <div key={index} onMouseEnter={() => {
            setHoveredIndex(index)
            onHoverItem(item)
          }} onMouseLeave={() => {
            onLeaveImage()
            setHoveredIndex(null);
          }} onClick={() => onClickArticle(item)}>
            <Cell title={item.title} subtitle={item.subtitle} interactive={true} isHovered={hoveredIndex === index} />
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
