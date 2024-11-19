import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { gsap } from 'gsap';

    function BrandPage({ name, taglines, story, logo, mockups, next, prev }) {
      const navigate = useNavigate();
      const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
      const [showMockups, setShowMockups] = useState(false);
      const [lightboxImage, setLightboxImage] = useState(null);

      useEffect(() => {
        gsap.fromTo('.brand-logo', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo('.brand-story', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
      }, []);

      useEffect(() => {
        gsap.fromTo('.brand-tagline', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'bounce.out' });
      }, [currentTaglineIndex]);

      const showNextTagline = () => {
        if (currentTaglineIndex < taglines.length - 1) {
          setCurrentTaglineIndex(currentTaglineIndex + 1);
        }
      };

      const handleNavigation = (path) => {
        setCurrentTaglineIndex(0); // Reset tagline index when navigating to a new brand
        navigate(path);
      };

      const openLightbox = (image) => {
        setLightboxImage(image);
      };

      const closeLightbox = () => {
        setLightboxImage(null);
      };

      return (
        <div className="brand-page">
          <h2>{name}</h2>
          <img src={logo} alt={`${name} logo`} className="brand-logo" />
          <h3 className="brand-tagline">{taglines[currentTaglineIndex]}</h3>
          <button onClick={showNextTagline} disabled={currentTaglineIndex === taglines.length - 1}>
            Show Next Tagline
          </button>
          <button onClick={() => setShowMockups(true)}>View Mockups</button>
          <div className="brand-story" dangerouslySetInnerHTML={{ __html: story }} />
          <div className="navigation">
            <button onClick={() => handleNavigation(prev)} disabled={!prev}>Previous</button>
            <button onClick={() => handleNavigation(next)} disabled={!next}>Next</button>
          </div>

          {showMockups && (
            <div className="mockup-viewer">
              <button onClick={() => setShowMockups(false)}>Close Mockups</button>
              <div className="mockup-images">
                {mockups.map((mockup, index) => (
                  <img
                    key={index}
                    src={mockup}
                    alt={`Mockup ${index + 1}`}
                    className="mockup-image"
                    onClick={() => openLightbox(mockup)}
                  />
                ))}
              </div>
            </div>
          )}

          {lightboxImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <img src={lightboxImage} alt="Lightbox" className="lightbox-image" />
            </div>
          )}
        </div>
      );
    }

    export default BrandPage;
