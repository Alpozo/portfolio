import './Callout.css'

export const Callout = ({ textGroup, icon }) => {
    const readingTime = textGroup[ 2 ]?.text?.content?.split('-')?.[ 1 ]

    return (
        !!readingTime ? <div className='article-summary-container'>
            <p className='font-small-regular article-summary-title'>
                <span>{textGroup[ 0 ]?.text?.content}</span>
                {readingTime && (
                    <>
                        <span> • </span>
                        <span>{readingTime}</span>
                    </>
                )}
            </p>
            <p className='font-body-regular article-summary-description'>{textGroup[ 1 ]?.text?.content}</p>
        </div> :
            <div className='callout-container'>
                <p>{textGroup[ 0 ]?.text?.content}</p>
                <p>{textGroup[ 1 ]?.text?.content}</p>
            </div>
    )
}