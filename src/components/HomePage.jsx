import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function HomePage() {
      const navigate = useNavigate();

      return (
        <div className="home-page">
          <h1>Welcome to the Future of KZN Hosting</h1>
          <button onClick={() => navigate('/brand1')}>Explore the Brands</button>
        </div>
      );
    }

    export default HomePage;
