import './Quote.css';


export const Quote = ({ textGroup }) => {
    const mappedText = textGroup.map(
        ({ text, id }) => <p key={id}>{text?.content}</p>
    )

    return (
        <div className='quote-wrapper'>
            <p className='font-small-regular quote-title'>{textGroup[ 0 ]?.text?.content}</p>
            <p className='font-body-regular quote'>{textGroup[ 1 ]?.text?.content}</p>
        </div>
    )
}