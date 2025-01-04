export const fetchArticle = async (pageId) => {
    const API_URL = `https://notion-api-tan.vercel.app/api/notion?pageId=${pageId}`;

    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const responseText = await response.text(); // Lee el texto completo para depuración

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${responseText}`);
    }

    const data = JSON.parse(responseText);
    console.log("@@@:", data);

    return data.results;
};