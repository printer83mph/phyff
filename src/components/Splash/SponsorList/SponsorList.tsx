import React, {useEffect, useState} from 'react';

function SponsorList(): React.ReactElement {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="sponsor_list">
            <img src={ windowDimensions.width > 400 ? "sponsor_logos/logo_banner.png" : "sponsor_logos/logo_banner_mobile.png" } id="sponsor-logos" />
        </div>
    );
}

export default SponsorList;