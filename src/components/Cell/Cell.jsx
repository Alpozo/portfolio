import './Cell.css';

export const Cell = ({title, subtitle, link}) => {
  return (
      <a className='cell-wrapper' href={link}>
         <p className='text-body-regular'>{title}</p>
         <p className='text-small-regular'>{subtitle}</p>
      </a>
  )
}