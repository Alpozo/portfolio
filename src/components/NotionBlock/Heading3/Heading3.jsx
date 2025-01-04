import './Heading3.css';

export const Heading3 = ({ textGroup }) => {
    const mappedText = textGroup.map(({ text, id }) => <p className='heading-3' key={id}>{text.content}</p>)
    return mappedText
}