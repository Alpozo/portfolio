import React from 'react';

// Asegúrate de usar un nombre de componente en mayúsculas
export const RightProblem = () => {
  return (
    <div className="article-wrapper font-body-regular">
      <div>
        <h2>Find the right problem to solve</h2>
        <h3>Email campaign, Copywriting</h3>
      </div>
      <img
        className="article-cover"
        src={require('../../assets/articles/rightProblem-cover.png')}
        alt="Illustration of a farmer digging up vegetables."
      />
      <div className="article-summary">
        <h4>Quick summary • 5 min reading</h4>
        <p>
          I was tasked with introducing a filter to highlight exclusive
          listings. However, through data analysis and strategic thinking, I
          identified a more effective approach by uncovering the underlying
          problem beyond the stakeholders' initial concerns.
        </p>
      </div>

      <div>
        <h4>Context</h4>
        <p>
          During my time at Boopos, a US marketplace for online businesses
          specializing in subscription-based companies, I was assigned to a
          project focused at adding a filter to the for-sale page that would
          prioritize our exclusive listings, enhancing their visibility. This
          initiative was suggested by a stakeholder who wanted to ensure our
          exclusive offerings stood out.
        </p>
      </div>
      <div>
        <h4>Framing the Problem</h4>
        <p>
          The first question that came to mind was: Do our buyers really care
          whether a business is exclusively listed with us or another broker? Is
          this one of their primary decision-making factors? Frankly, I doubted
          it.
        </p>
        <p>
          After discussing the issue in more detail with the COO, who was the
          stakeholder for this project, I learned that the core problem he
          wanted to address was increasing engagement with our listings.
        </p>
        <p>
          Our for-sale page displayed listings chronologically, and since we
          posted fewer exclusive listings compared to other sources, they often
          got buried and became difficult to find. Promoting our exclusive
          listings was crucial, not only because we earned higher commissions
          from these sales but also because sellers had entrusted us with their
          businesses. It was essential for us to ensure their success.
        </p>
      </div>
      <div>
        <h5>Project Scope</h5>
        <p>
          During the meeting, we agreed that the project's scope would focus on
          increasing the number of inquiries for our exclusive listings. With
          other metrics like favorites added and unique visits also noted as
          potential areas for improvement.
        </p>
      </div>
      <div>
        <h5>Deepening the Understanding</h5>
        <p>
          With a clear problem in mind, I gathered extensive data using Posthog
          and Google Sheets connected with BigQuery and set up a Miro board to
          prepare for a workshop. Here are some key insights I discovered:
        </p>
      </div>

      <img
        src={require('../../assets/articles/rightProblem-chart.png')}
        alt="Page views chart"
      />

    </div>
  );
};