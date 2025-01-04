import './NumberedList.css';

export const NumberedListItem = ({ textGroup }) => {
    return (
        <li className='numbered-list-item'>
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