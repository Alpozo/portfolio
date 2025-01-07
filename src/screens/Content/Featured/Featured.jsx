import './Featured.css';
import React, { useEffect, useState } from "react";

// Components
import { Cell } from '../../../components/Cell/Cell';
import { Article } from '../../../screens/Article/Article'
import { FeaturedSkeleton } from './FeaturedSkeleton';

import { fetchArticles } from '../../../api/fetchArticles';
import { addQueryParam, removeQueryParam } from '../../../utils/queryParams'
import { isMobile } from '../../../utils/mediaquery'

import RighthProblem from '../../../assets/featured/right-problem-cover.png'
import Insights from '../../../assets/featured/insights.mp4'
import Wondo from '../../../assets/featured/wondo.mp4'
import Ontruck from '../../../assets/featured/illustration.gif'

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

  const ASSETS = {
    "dc47a7af-7524-4fd6-8b07-3c1b2ccff2c5": { image: RighthProblem },
    "dce5de0d-d4dc-4b46-95d8-f685b2e9f852": { video: Insights },
    "30f01715-c8b9-4480-b2d7-279a10da3af7": { video: Wondo },
    "c1445b97-84aa-47ab-a256-63a7de787dc5": { image: Ontruck }
  }

  const articlesList = articles.map(({ id, properties }) => {
    return {
      id,
      queryParam: properties?.ID.rich_text[ 0 ]?.text?.content,
      title: properties?.Name.title[ 0 ]?.text?.content,
      subtitle: properties?.Tags.rich_text[ 0 ]?.text?.content,
      file: properties?.Cover?.files[ 0 ]?.file?.url,
      fileType: properties?.Cover?.files[ 0 ]?.name?.split('.')?.[ 1 ],
      localFile: ASSETS[ id ]
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


  const IS_MOBILE = isMobile()

  return (
    <>
      <Article article={article}
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />

      <div className="list-wrapper">
        {articlesList.length ? articlesList.map((item, index) => (
          <div key={index} onMouseEnter={
            () => {
              if (IS_MOBILE) return
              setHoveredIndex(index)
              onHoverItem(item)
            }}
            onMouseLeave={() => {
              if (IS_MOBILE) return
              onLeaveImage()
              setHoveredIndex(null);
            }}
            onClick={() => onClickArticle(item)}>
            <Cell title={item.title} subtitle={item.subtitle} interactive={true} isHovered={hoveredIndex === index} />
          </div>
        ))
          :
          <FeaturedSkeleton />
        }
      </div>
    </>
  );
};
