import React from 'react';
import TechnologyTile from './TechnologyTile';

const Technology = ({props}) => {
  const technologyTile = [
    {
    img: 'https://imgs.search.brave.com/1oMRM4Ot2jtWMu22rU-vdTgoaTVz54O7yOL9tVKseLk/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9f/NWRodjhhN18zVS9t/YXhyZXNkZWZhdWx0/LmpwZw',
    title: 'RUST',
    description: 'The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.',
    developer: 'Unknown'
},
{
    img: 'https://imgs.search.brave.com/BWAPiGejYkq-HspxHr3hXq7BdIVQYmk-n5pBAjOr9-A/rs:fit:1200:1126:1/g:ce/aHR0cHM6Ly93d3cu/ZmlsZXBpY2tlci5p/by9hcGkvZmlsZS9T/VkZRWlFBeVJwcUoz/MWY2TE5HZQ',
    title: 'REACT',
    description: 'React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.',
    developer: 'META ∞'
},
{
    img: 'https://imgs.search.brave.com/dxd0HDWNJNmgXwcKob0uUirY__0vYdp6AKW_kGH0jpg/rs:fit:1098:577:1/g:ce/aHR0cHM6Ly9tbWEu/cHJuZXdzd2lyZS5j/b20vbWVkaWEvNTk5/MDUzL01vbmdvREJf/TG9nby5qcGc_cD1m/YWNlYm9vaw',
    title: 'MongoDB',
    description: '- Get your ideas to market faster with a developer data platform built on the leading modern database. MongoDB makes working with data easy..',
    developer: 'Microsoft'
}
  ];

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Technology</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <TechnologyTile props={technologyTile}/>
      </div>
    </div>
  )
}

export default Technology