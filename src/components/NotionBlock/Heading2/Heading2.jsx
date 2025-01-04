import './Heading2.css';

export const Heading2 = ({ textGroup }) => {
    const mappedText = textGroup.map(({ text, id }) => <p className='heading-2' key={id}>{text.content}</p>)
    return mappedText
}