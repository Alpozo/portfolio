import './BulletedListItem.css';

export const BulletedListItem = ({ textGroup }) => {
    return (
        <li className='bulleted-list-item'>
            {textGroup?.map((text, index) => {
                const { annotations, text: innerText } = text || {};
                const fontWeightStyles = annotations?.bold ? "bold" : "";

                return (
                    <span
                        className={fontWeightStyles}
                        key={index}
                    >
                        {innerText?.content}
                    </span>
                );
            })}
        </li>
    );

};