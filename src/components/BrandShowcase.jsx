import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import BrandPage from './BrandPage';

    const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

    const brandData = [
      { 
        name: 'CFN (CloudFusion Networks)', 
        taglines: [
          "Seamlessly Connecting Your Cloud Future.",
          "Where Innovation Meets Connectivity.",
          "Fusing Technology and Solutions."
        ],
        story: `
          <ul>
            <li>Focused on a central glowing cloud icon split into two interlocking halves to symbolize "fusion."</li>
            <li>Gradient shades of blue and gray for a modern tech feel.</li>
            <li>Clean, rounded sans-serif typography to complement the smoothness of the cloud.</li>
          </ul>
        `,
        logo: 'https://abcwize.co.za/images/CFN%20(CloudFusion%20Networks).jpg',
        mockups: [
          placeholderImage,
          placeholderImage,
          placeholderImage
        ],
        path: '/brand1'
      },
      { 
        name: 'ECS (EcoConnect Solutions)', 
        taglines: [
          "Connecting Technology with Sustainability.",
          "Eco-Friendly Solutions for a Connected World.",
          "Global Connectivity, Sustainable Innovation."
        ],
        story: `
          <ul>
            <li>Interconnected lines forming a globe with a leaf motif integrated, symbolizing global connectivity and sustainability.</li>
            <li>Earthy greens and blues for a nature-focused, professional look.</li>
            <li>Rounded sans-serif typography for reliability and approachability.</li>
          </ul>
        `,
        logo: 'https://abcwize.co.za/images/ECS%20(EcoConnect%20Solutions).jpg',
        mockups: [
          placeholderImage,
          placeholderImage,
          placeholderImage
        ],
        path: '/brand2'
      },
      { 
        name: 'FGN (Fibre Green Networks)', 
        taglines: [
          "Green Connections for a Sustainable Future.",
          "Networking the World, Saving the Planet.",
          "Eco-Friendly, High-Speed Solutions."
        ],
        story: `
          <ul>
            <li>A fiber optic cable morphing into a green leaf, combining connectivity with eco-friendliness.</li>
            <li>Vibrant green tones for the leaf, with neutral gray for the fiber elements.</li>
            <li>Sleek, italicized typography to suggest speed and modernity.</li>
          </ul>
        `,
        logo: 'https://abcwize.co.za/images/FGN%20(Fibre%20Green%20Networks).jpg',
        mockups: [
          placeholderImage,
          placeholderImage,
          placeholderImage
        ],
        path: '/brand3'
      },
      { 
        name: 'SCS (Solar Cloud Solutions)', 
        taglines: [
          "Harnessing the Power of Solar and Cloud.",
          "Sustainable Energy, Seamless Solutions.",
          "Brightening the Cloud with Solar Innovation."
        ],
        story: `
          <ul>
            <li>A stylized sun partially obscured by a cloud, symbolizing solar energy and cloud services.</li>
            <li>Warm yellows and oranges for the sun, paired with soft blue for the cloud.</li>
            <li>Clean, bold sans-serif typography beneath the icon for a modern look.</li>
          </ul>
        `,
        logo: 'https://abcwize.co.za/images/SCS%20(Solar%20Cloud%20Solutions).jpg',
        mockups: [
          placeholderImage,
          placeholderImage,
          placeholderImage
        ],
        path: '/brand4'
      },
      { 
        name: 'SLS (SkyLink Solutions)', 
        taglines: [
          "Limitless Connections, Boundless Opportunities.",
          "Your Bridge to the Future of Connectivity.",
          "Reaching Higher, Connecting Further."
        ],
        story: `
          <ul>
            <li>Featured bold letters S, L, S, surrounded by a dynamic arc to symbolize the sky and limitless potential.</li>
            <li>Used blue gradients for the arc, transitioning to white for a horizon-like effect.</li>
            <li>Simple, bold sans-serif typography with clean geometric shapes.</li>
          </ul>
        `,
        logo: 'https://abcwize.co.za/images/SLS%20(SkyLink%20Solutions).jpg',
        mockups: [
          placeholderImage,
          placeholderImage,
          placeholderImage
        ],
        path: '/brand5'
      },
    ];

    function BrandShowcase() {
      return (
        <Routes>
          {brandData.map((brand, index) => (
            <Route 
              key={brand.name} 
              path={brand.path} 
              element={
                <BrandPage 
                  name={brand.name} 
                  taglines={brand.taglines} 
                  story={brand.story} 
                  logo={brand.logo} 
                  mockups={brand.mockups}
                  next={brandData[index + 1]?.path} 
                  prev={brandData[index - 1]?.path} 
                />
              } 
            />
          ))}
        </Routes>
      );
    }

    export default BrandShowcase;
