import './Header.css';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <a href='https://alpozo.github.io/portfolio/'>
        <div>
          <p className="text-header">
            Alejandro del Pozo
          </p>
          <p className="font-small-regular">
            Product Designer
          </p>
        </div>
      </a>
    </div>
  )
}