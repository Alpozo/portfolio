import './Projects.css';
import React, { useEffect, useState } from "react";

import { Cell } from '../../../components/Cell/Cell';
import { ProjectsSkeleton } from './ProjectsSkeleton';

import { fetchArticles } from '../../../api/fetchArticles';
import { addQueryParam } from '../../../utils/queryParams'
import { isMobile } from '../../../utils/mediaquery'


import Insights from '../../../assets/projects/insights.mp4'
import Wondo from '../../../assets/projects/wondo-cover.mp4'

import Whim from '../../../assets/projects/whim-cover.mp4'
import Doctor24 from '../../../assets/projects/doctor24-cover.mp4'

export const Projects = ({ onHoverItem, onLeaveImage, handleIsModalOpen, setArticle }) => {

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

    "189aa0de-144d-80d3-832e-da1876c62d50": { video: Wondo },
    "189aa0de-144d-80c2-886e-f4e799c7fbc9": { video: Insights },
    "18aaa0de-144d-80ba-a1ac-ddbcc0967237": { video: Whim },
    "18aaa0de-144d-809b-aa59-da968c100c14": { video: Doctor24 },
  }

  const articlesList = articles.map(({ id, properties }) => {
    return {
      id,
      queryParam: properties?.ID.rich_text[ 0 ]?.text?.content,
      title: properties?.Name.title[ 0 ]?.text?.content,
      subtitle: properties?.Tags.rich_text[ 0 ]?.text?.content,
      file: properties?.Cover?.files[ 0 ]?.file?.url,
      fileType: properties?.Cover?.files[ 0 ]?.name?.split('.')?.[ 1 ],
      date: properties?.Date?.date?.start,  // Extraemos la fecha aquí
      localFile: ASSETS[ id ],
    }
  });

  // Ordenar por fecha (más reciente primero)
  const sortedArticles = [ ...articlesList ].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;  // Orden descendente
  });

  const openModal = (currentArticle) => {
    setArticle(currentArticle)
    handleIsModalOpen(true)
  }

  const onClickArticle = (article) => {
    openModal(article)
    addQueryParam("post", article?.id)
  }

  const IS_MOBILE = isMobile()

  return (
    <>
      <div className="list-wrapper">
        {sortedArticles.length ? sortedArticles.map((item, index) => (
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
          <ProjectsSkeleton />
        }
      </div>
    </>
  );
};