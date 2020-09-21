import React, { useEffect, useState } from 'react';

function SponsorList(): React.ReactElement {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect((): (() => void) => {
    if (!window) return () => {};
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="sponsor_list">
      <img src={windowDimensions.width > 400 ? '/media/sponsor_logos/logo_banner.png' : '/media/sponsor_logos/logo_banner_mobile.png'} id="sponsor-logos" alt="Sponsors" />
    </div>
  );
}

export default SponsorList;
