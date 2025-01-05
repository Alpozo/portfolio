import { Skeleton } from "../../components/Skeleton/Skeleton"
import './ArticleSkeleton.css'

export const ArticleSkeleton = () => {
  return (
    <div className="article-skeleton-wrapper">
      <Skeleton type="paragraph" label="Loading information from Notion..." />
      <Skeleton type="image" />
      <Skeleton type="line" />
    </div>
  )
}