import React from 'react';
import Head from 'next/head';
import TopBar from '../components/TopBar/TopBar';
import Splash from '../components/Splash/Splash';
import Sections from '../components/Sections/Sections';

function Home(): React.ReactElement {
  function onLoad(e) {
    const backUp = document.getElementById('back-up');
    const topBtn = document.getElementById('top');

    document.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        if (backUp !== null) { backUp.classList.add('floating'); }
        if (topBtn !== null) { topBtn.classList.add('small'); }
      } else {
        if (backUp !== null) { backUp.classList.remove('floating'); }

        if (topBtn !== null) {
          if (window.scrollY > 45) {
            topBtn.classList.add('small');
          } else {
            topBtn.classList.remove('small');
          }
        }
      }
    });
  }

  return (
    <div>
      <Head>
        <title>PHYFF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="The Philadelphia Youth Film Festival" />
        <link rel="stylesheet" href="https://use.typekit.net/hwy4xgo.css" />
        <link rel="icon" href="/media/favicon.png" />
      </Head>

      <div onLoad={onLoad}>
        <TopBar />
        <Splash />
        <Sections />
      </div>
    </div>
  );
}

export default Home;
