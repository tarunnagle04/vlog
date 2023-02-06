import React from 'react'
import BollywoodTile from './BollywoodTile';
import './Bollywood.css';

const Bollywood = ({props}) => {

  const bollywoodTile = [
    {
      img: 'https://imgs.search.brave.com/Se6LVO_QBavkTA3O1jgj56dUkHeAQhRqdc93t57bFzA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2luZW1hZXhw/cmVzcy5jb20vdXBs/b2Fkcy91c2VyL2lt/YWdlbGlicmFyeS8y/MDIzLzEvMjUvb3Jp/Z2luYWwvcGF0aGFh/bl9tb3ZpZV9yZXZp/ZXcuanBn',
      title: 'Jhoome Jo Pathaan',
      description: 'Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films. The fourth instalment in the YRF Spy Universe, it stars Shah Rukh Khan, Deepika Padukone, and John Abraham, alongside Dimple Kapadia and Ashutosh Rana',
      releaseDate: '20 Feb 2023'
    },
    {
      img: 'https://imgs.search.brave.com/4n0pbBa4ViXh9Vnl2811wOG58vCpprjqBF3OlpVHQ5Y/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9X/OEw3bk41Z3V6QS9t/YXhyZXNkZWZhdWx0/LmpwZw',
      title: 'TERE NAAM',
      description: ' 2003 Indian Hindi-language romantic tragedy film directed by Satish Kaushik. Written by Bala and Jainendra Jain, the film stars Salman Khan and Bhumika Chawla in her Hindi film debut. It is a remake of Bala"s own Tamil film',
      releaseDate: '11 January 2019'
    },
    {
        img: 'https://imgs.search.brave.com/nzzF4gy5WhGMZcYDYlK9v_o56P7SIxDqzXmpRrLP39Y/rs:fit:1007:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/UnJ2QmRjZGFTdXZS/NjBMNFFYVldRSGFE/ZiZwaWQ9QXBp',
        title: 'RACE',
        description: 'Race 2 is a 2013 Indian Hindi-language crime-thriller action film directed by Abbas–Mustan and written by Kiran Kotrial and Shiraz Ahmed. The film was produced by Ramesh S. Taurani under the Tips Industries banner, with UTV Motion Pictures serving as distributor and presenter.',
        releaseDate: '16 November 2024'
    }
];

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Bollywood Stories</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <BollywoodTile props={bollywoodTile}/>
      </div>
    </div>
  )
}

export default Bollywood