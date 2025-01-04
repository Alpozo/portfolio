export const fetchArticles = async () => {
    const API_URL = "https://notion-api-tan.vercel.app/api/notion"

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            databaseId: process.env.REACT_APP_NOTION_DATABASE_ID,
            query: { page_size: 10 },
        }),
    });

    const responseText = await response.text();

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${responseText}`);
    }

    const data = JSON.parse(responseText);
    return data;
};