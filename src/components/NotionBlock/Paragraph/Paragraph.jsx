import './Paragraph.css';

export const Paragraph = ({ textGroup }) => {
    const mappedText = textGroup.map(({ annotations, text, id }) => {
        const fontWeightStyles = !!annotations?.bold ? 'bold' : ''
        return (
            text.link ?
                <a href={text.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`link ${fontWeightStyles}`}
                    key={id}
                >
                    {text.content}
                </a >
                :
                <span className={fontWeightStyles} key={id}>
                    {text.content}
                </span>
        )


    })

    return (<p className="paragraph">{mappedText}</p>)
}