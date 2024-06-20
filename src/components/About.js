import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Waste Management System!</h1>
      <p>This platform helps you manage your waste efficiently and reduce your environmental impact.</p>

      {/* Waste Sorting Guide */}
      <section className="waste-sorting-guide">
        <h2>Waste Sorting Guide</h2>
        <p>Learn how to properly sort your waste for recycling and disposal.</p>
        <button>Explore Sorting Guide</button>  {/* Link to dedicated sorting guide page */}
      </section>

      {/* Waste Pickup Scheduling */}
      <section className="waste-pickup-scheduling">
        <h2>Schedule a Waste Pickup</h2>
        <p>Schedule a convenient pickup for your recyclable and non-recyclable waste.</p>
        <button>Schedule Pickup</button>  {/* Link to scheduling form/page */}
      </section>

      {/* Recycling Center Locator */}
      <section className="recycling-center-locator">
        <h2>Find a Recycling Center Near You</h2>
        <p>Locate a nearby recycling center to drop off your recyclable materials.</p>
        <button>Find Recycling Center</button>  {/* Link to map/search functionality */}
      </section>

      {/* Waste Reduction Tips */}
      <section className="waste-reduction-tips">
        <h2>Reduce Your Waste Footprint</h2>
        <ul>
          <li>Reduce your consumption of single-use items.</li>
          <li>Reuse items whenever possible.</li>
          <li>Recycle and compost diligently.</li>
        </ul>
      </section>

      {/* Educational Resources */}
      <section className="educational-resources">
        <h2>Learn More About Waste Management</h2>
        <p>Explore resources to deepen your understanding of waste management practices.</p>
        <ul>
          <li>
            <a href="https://www.epa.gov/recycle/reducing-waste-home">EPA's Reduce Waste at Home</a>  {/* Link to external resource */}
          </li>
          <li>
            <a href="https://www.recycleNation.com/">Recycle Nation: Recycling and Waste Reduction Tips</a>  {/* Link to external resource */}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;