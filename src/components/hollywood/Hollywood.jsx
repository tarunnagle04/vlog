import React from 'react';
import HollywoodTile from './HollywoodTile';
import './Hollywood.css';
import Advertisement from '../advertisement/Advertisement';
// import 'index.css'

const Hollywood = ({props}) => {
  const hollywoodTile = [
    {
      img: 'https://imgs.search.brave.com/HUA1J4E4_EW30EF7gLAzH2bgSK5IkMJMw5k1pwmw1QA/rs:fit:1200:700:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDEvSGFycnktUG90/dGVyLTIuanBn',
      title: 'Harry Potter',
      description: 'A famous Magic MOvie',
      directedBy: 'The Warner Brothers '
    },
    {
      img: 'https://imgs.search.brave.com/ztA2Sxj_MSva7tz5pIojzn9JYs4WeAMREnl-g_01rk4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/c3JnY2RuLmNvbS9l/L1oyOUlaakZZTmtz/M01GbHNOVE5RTjBn/NFUza3VhbkJuLmpw/Zw',
      title: 'TITANIC',
      description: ' Directed by James Cameron. With Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang. A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      directedBy: 'The Warner Brothers '
    },
    {
      img: 'https://imgs.search.brave.com/a4Gh34yjVHp4mZoSTLJou0jNOZUECvAWdtheAGin0V8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vbWljaGFl/bG1heS51cy8xMGJs/b2cvMDEvMDEwMV9h/dmF0YXIuanBn',
      title: 'AVATAR',
      description: ' Avatar: Directed by James Cameron. With Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang. A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      directedBy: 'The  Brothers '
    }
];

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Hollywood Stories</span>
        <hr class="underline"/>
      </div>

      <div className='hollywood-advertisement'>
        <div className='hollywoodTile'>
          <HollywoodTile props={hollywoodTile}/>
        </div>
        
        <div className="advertisement">
          <div className="hollyadd">
          <Advertisement/>
          {/* <p >Advertisement</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hollywood