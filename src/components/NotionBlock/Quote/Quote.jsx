import './Quote.css';

export const Quote = ({ textGroup }) => {
    return (
        <div className='quote-wrapper'>
            <p className='secondary-text quote-title'>{textGroup[ 0 ]?.text?.content}</p>
            <p className='primary-text quote'>{textGroup[ 1 ]?.text?.content}</p>
        </div>
    )
}