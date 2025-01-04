export const transformBlocks = (blocks) => {
  const transformedBlocks = [];
  let currentBulletedList = [];
  let currentNumberedList = [];

  blocks.forEach((block) => {
    if (block.type === "bulleted_list_item") {
      if (currentNumberedList.length > 0) {
        transformedBlocks.push({
          type: "numbered_list",
          numbered_list: currentNumberedList,
        });
        currentNumberedList = [];
      }
      currentBulletedList.push(block);
    } else if (block.type === "numbered_list_item") {
      if (currentBulletedList.length > 0) {
        transformedBlocks.push({
          type: "bulleted_list",
          bulleted_list: currentBulletedList,
        });
        currentBulletedList = [];
      }
      currentNumberedList.push(block);
    } else {
      if (currentBulletedList.length > 0) {
        transformedBlocks.push({
          type: "bulleted_list",
          bulleted_list: currentBulletedList,
        });
        currentBulletedList = [];
      }
      if (currentNumberedList.length > 0) {
        transformedBlocks.push({
          type: "numbered_list",
          numbered_list: currentNumberedList,
        });
        currentNumberedList = [];
      }
      transformedBlocks.push(block);
    }
  });

  if (currentBulletedList.length > 0) {
    transformedBlocks.push({
      type: "bulleted_list",
      bulleted_list: currentBulletedList,
    });
  }
  if (currentNumberedList.length > 0) {
    transformedBlocks.push({
      type: "numbered_list",
      numbered_list: currentNumberedList,
    });
  }

  return transformedBlocks;
};