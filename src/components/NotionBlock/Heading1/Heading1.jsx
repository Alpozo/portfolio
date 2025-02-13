import './Heading1.css';

export const Heading1 = ({ textGroup }) => {
    const mappedText = textGroup?.map(({ text }) =>
        <h1 className='secondary-text heading-1'>{text?.content}</h1>
    )
    return mappedText
}