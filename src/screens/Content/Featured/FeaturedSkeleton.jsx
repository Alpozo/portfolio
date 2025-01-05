import { Skeleton } from "../../../components/Skeleton/Skeleton"
import './FeaturedSkeleton.css'

export const FeaturedSkeleton = () => {
  return (
    <div className="featured-skeleton-wrapper">
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
    </div>
  )
}