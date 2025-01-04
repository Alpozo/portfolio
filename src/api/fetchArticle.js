export const fetchArticle = async (pageId) => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/blocks/${pageId}/children`;

    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
    });

    const responseText = await response.text(); // Lee el texto completo para depuración

    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status} - ${responseText}`);
    // }

    const data = JSON.parse(responseText);
    console.log("@@@:", data);

    return data.results;
};