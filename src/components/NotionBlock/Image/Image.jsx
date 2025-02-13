import './Image.css'

export const Image = ({ image, captionGroup }) => {

    const borderBottom = !!captionGroup?.length ? 'image-with-caption' : 'image-without-caption'

    return (
        <>
            <img className={`image ${borderBottom}`} src={image} alt="Logo" />
            {!!captionGroup?.length &&
                <span className='caption-margin-bottom'>{captionGroup.map(({ annotations, text, id, href }) => {
                    const fontWeightStyles = !!annotations?.bold ? 'bold' : ''

                    return !!href ?
                        <a href={text.link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`secondary-text link-caption ${fontWeightStyles}`}
                            key={id}
                        >
                            {text.content}
                        </a >
                        :
                        <span className="secondary-text image-caption">
                            {text?.content}
                        </span>

                }
                )}
                </span>
            }
        </>
    )
}