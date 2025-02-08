import './Quote.css';


export const Quote = ({ textGroup }) => {
    return (
        <div className='quote-wrapper'>
            <p className='font-small-regular quote-title'>{textGroup[ 0 ]?.text?.content}</p>
            <p className='font-body-regular quote'>{textGroup[ 1 ]?.text?.content}</p>
        </div>
    )
}