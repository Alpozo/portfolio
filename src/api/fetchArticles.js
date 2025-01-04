export const fetchArticles = async () => {
    const API_URL = `https://api.notion.com/v1/databases/${process.env.REACT_APP_NOTION_DATABASE_ID}/query`;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });

    const responseText = await response.text();

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${responseText}`);
    }

    const data = JSON.parse(responseText);
    return data;
};