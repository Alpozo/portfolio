const { Client } = require("@notionhq/client");

// Inicializa el cliente de Notion
const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });

async function getArticles(databaseId) {

    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
        },
    });

    // const response = await notion.databases.query({ database_id: databaseId });

    return response.results.map((page) => ({
        id: page.id,
        title: page.properties.Name.title[ 0 ].text.content,
        content: page.properties.Content.rich_text[ 0 ]?.text.content || "",
    }));
}

module.exports = { getArticles };