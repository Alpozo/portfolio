# Empowering Buyers & Sellers with Intuitive Business Insights

Date: October 1, 2023

![image.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image.png)

<aside>
✂️ **Quick summary**
At Boopos I revamped its business insights dashboard to enhance buyer experience. The redesign focused on clearer organization, removing confusing elements, and optimizing for mobile. This led to a 150% increase in user engagement and positive user feedback, making it easier for buyers to make informed decisions.

1,119 palabras - 5 min reading

</aside>

# Context

[Boopos](https://www.boopos.com/), a US marketplace for online businesses specializing in SaaS companies, aims to empower buyers by providing lending solutions that facilitate business acquisitions. In our ongoing efforts to enhance user experience and provide valuable insights for sellers and buyers, we embarked on a project to revamp the business insights dashboard using data from business connectors and the underwriting analysis performed by our team. Our primary goal was to simplify the dashboard to make it easy for buyers to find the right business for them.

![Previous business valuation and insights tab. The valuation section was only displayed to sellers not to buyers.](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image%201.png)

Previous business valuation and insights tab. The valuation section was only displayed to sellers not to buyers.

# Problem Framing

![image2.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image2.png)

The sales team, who were in constant contact with sellers and buyers, collected feedback on our behalf. They reported that users were struggling with the insights tab, indicating a need for a simpler and more user-friendly interface. We also utilized Posthog recordings and data to analyze user behavior, confirming the issues reported by the sales team.

Upon analyzing the existing dashboard, we found that the challenge was not the overwhelming amount of information but rather the organization and inconsistency in how metrics were displayed.

Previously, metrics lacked a cohesive logic, with some presented as percentiles and others as raw numbers, making it difficult for users to quickly understand trends and detect the strengths and weaknesses of the business.

Additionally, I identified a potential color scheme issue while watching a Posthog recording. The old dashboard used green, yellow, and red, which could potentially cause confusion. Seeing something red could push buyers back from inquiring about the listing, even though red didn’t necessarily mean bad. All our businesses were analyzed carefully by our underwriting team, ensuring a minimum quality threshold.

![image3.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image3.png)

During the problem framing phase, I conducted a diverge workshop using Miro with key stakeholders to gain deeper insights into their expectations and brainstorm potential solutions. 

The stakeholders provided a wealth of data types, including numerous charts from our underwriting spreadsheets that buyers and sellers could be interested in. The most complex part after this session was determining which charts were the most crucial and figuring out the best way to represent them. Many charts were designed for a technical audience and were difficult for non-technical users to interpret. This step was crucial in ensuring that the final dashboard would be both informative and accessible and was the part that I enjoyed most. 

![Blurred screenshot of some of the data & charts from the underwriting team I used as a base to work with](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image%202.png)

Blurred screenshot of some of the data & charts from the underwriting team I used as a base to work with

# 3 Iterations

After framing the problem, aligning expectations with stakeholders, and doing a bit of diverge on my own, I finally made a design proposal split into 3 iterations:

1. **Review of the seller’s flow to provide additional context to what they can expect from us.** Before this, it wasn’t clear how sellers could get their business valuation and insights report before even thinking about selling the business with us.
    1. **Remove red and yellow colors**: Use green for outstanding percentiles and gray for those below 60, reflecting a more consistent and less confusing visual representation (Assumption was that red and yellow was scaring some buyers to move forward some deals).
2. **Simplify business insights and emphasize 4 key metrics:** Revenue Growth, Quality of Revenues, Profitability, and Marketing Spend. Display all metrics as percentiles, providing immediate clarity and allowing users to understand performance at a glance. We also removed the generic Product/Business Score, as it was potentially misleading buyers into wrong assumptions. 
3. **Detailed Metric Analysis**: Add zoom-in options on each of these metrics for a deeper understanding of the business.

Stakeholders were highly engaged with the solution I proposed and expressed strong enthusiasm for the direction from the outset.

### **The Four Key Indicators**

[Charts-Business-Insights.mp4](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/Charts-Business-Insights.mp4)

I suggested a tab navigation to zoom-in to each of the four key metrics.

**1. Revenue Growth**

To illustrate Revenue Growth, I suggested a simple line chart displaying revenues over the last 24 months on a trailing twelve-month (TTM) basis. This visualization shows trends and patterns in revenue performance over time, helping potential buyers quickly identify periods of growth or decline and understand the business’ revenue trajectory.

![image.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image%203.png)

**2. Quality of Revenues**

For SaaS businesses, we displayed revenue and customer retention cohorts. These charts provide a visual representation of customer retention over time, which is crucial for understanding long-term revenue stability and customer loyalty. For other business types, a message explains how the quality of revenues was calculated, ensuring transparency and clarity.

![image5.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image5.png)

**3. Profitability**

Profitability was displayed using a profit margin (SDE) metric on a TTM basis, along with a bar chart showing the profit margin (SDE) and cost of goods sold (COGS) as a percentage of revenues. This detailed breakdown allows users to understand the business’s profitability dynamics and evaluate its financial health and efficiency.

![image.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image%204.png)

**4. Marketing Spend**

For Marketing Spend, we showcased advertising costs as a percentage of revenues. This metric, coupled with detailed data, enables users to analyze the relationship between marketing expenditures and revenue growth, helping assess the effectiveness of marketing strategies.

![image.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image%205.png)

### Mobile Optimization

![image8.png](Empowering%20Buyers%20&%20Sellers%20with%20Intuitive%20Busines%20dce5de0dd4dc4b4695d8f685b2e9f852/image8.png)

Given the importance of mobile usability, I focused on ensuring was fully adaptable to mobile interfaces, working hand by hand with the Front-end developer to take into account technical effort and limitations.

# Data Analysis

- **User Engagement**: The average time spent on the business insights tab rose by 150% (from 2 min to almost 5 min).
- **User Feedback**: The sales team reported positive feedback from users regarding the new insights.
- **Listing Inquiries**: There was a 5% increase in listing inquiries, indicating enhanced user engagement (but this could be also due to other side initiatives)

# Conclusion

By focusing on key metrics and providing detailed charts for deeper analysis, we enhanced the user experience, improved engagement, and facilitated scanning business better. 

Simplifying is often the best approach. Removing unnecessary elements until you reach the minimum but offering maximum value is one of the most complex tasks a designer can undertake.