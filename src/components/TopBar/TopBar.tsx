import React from 'react';

function TopBar(): React.ReactElement {

    function handleLogoClick(e) {
        document.body.scrollIntoView(true);
    }

    return (
        <div>
            <a onClick={handleLogoClick} className="top" id="top">
                <div className="logo" id="logo"></div>
                <h3> PHILLY YOUTH FILM FESTIVAL </h3>
            </a>
            <div className="headerspace"></div>
        </div>
    );
}

export default TopBar;