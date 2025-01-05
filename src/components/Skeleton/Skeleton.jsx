import './Skeleton.css';

export const Skeleton = ({ type, label }) => {
  const SKELETON_TYPES = {
    paragraph: 'paragraph-skeleton',
    line: 'line-skeleton',
    image: 'image-skeleton',
  }

  return <div className={`skeleton ${SKELETON_TYPES[ type ]}`}>
    <p className='skeleton-label'>
      {label}
    </p>
  </div>
}