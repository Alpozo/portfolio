import { Image } from './Image/Image';
import { Heading1 } from './Heading1/Heading1';
import { Heading2 } from './Heading2/Heading2';
import { Heading3 } from './Heading3/Heading3';
import { Quote } from './Quote/Quote';
import { Paragraph } from './Paragraph/Paragraph';
import { Callout } from './Callout/Callout';
import { BulletedListItem } from './BulletedList/BulletedList';
import { ColumnList } from './ColumnList/ColumnList';
import { NumberedListItem } from "./NumberedList/NumberedList";

export const NotionBlock = ({ type, image, callout, heading_1, heading_2, heading_3, paragraph, quote, bulleted_list, numbered_list, video }) => {

  const ARTICLE_BLOCKS = {
    'image': <Image image={image?.file?.url}
      captionGroup={image?.caption}
    />,
    'heading_1': <Heading1 textGroup={heading_1?.rich_text} />,
    'heading_2': <Heading2 textGroup={heading_2?.rich_text} />,
    'heading_3': <Heading3 textGroup={heading_3?.rich_text} />,
    'callout': <Callout textGroup={callout?.rich_text} icon={callout?.icon?.external?.url} />,
    'paragraph': <Paragraph textGroup={paragraph?.rich_text} />,
    'bulleted_list': (
      <ul>
        {bulleted_list?.map((item) => (
          <BulletedListItem
            key={item?.id}
            textGroup={item?.bulleted_list_item?.rich_text}
          />
        ))}
      </ul>
    ),
    'numbered_list': (
      <ol>
        {numbered_list?.map((item) => (
          <NumberedListItem
            key={item?.id}
            textGroup={item?.numbered_list_item?.rich_text}
          />
        ))}
      </ol>
    ),
    'column_list': <ColumnList />,
    'quote': <Quote textGroup={quote?.rich_text} />,
    'video': <video className='video' width="600" controls>
      <source src={video?.file?.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  }

  return ARTICLE_BLOCKS[ type ]
}