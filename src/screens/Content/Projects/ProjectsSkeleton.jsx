import { Skeleton } from "../../../components/Skeleton/Skeleton"
import './ProjectsSkeleton.css'

export const ProjectsSkeleton = () => {
  return (
    <div className="projects-skeleton-wrapper">
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
      <Skeleton type="paragraph" />
    </div>
  )
}