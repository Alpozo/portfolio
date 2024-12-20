import './Cell.css';

export const Cell = ({titleJSX, subtitle}) => {
  return (
      <div className='cell-wrapper'>
         {titleJSX}
         <p className='text-small-regular'>{subtitle}</p>
      </div>
  )
}