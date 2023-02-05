import React from 'react'
import UserTile from '../user/UserTile';
import SkillsChip from './SkillsChip';
import './Technology.css';
import TechnologyTile from './TechnologyTile';

const TechnologyPage = () => {
    const userInfo = [
        {
            img: 'assets/user.png',
            name: 'Dmitry Nozhenko',
            created: 'Jan 28, 2019',
            time: '10 min read',
            shareIcons: true
        }
    ];

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

    const skills = [
        'React', 'Javascript', 'Animations'
    ];

    return (
        <>
            <div className='technology-container'>
                <div className='technology-page'>
                    <div className='technology-left'>
                        <div>
                            <img src="assets/likes.png" alt="empty"/>
                            <span>9.3K</span>
                        </div>

                        <div>
                            <img src="assets/share.png" alt="empty"/>
                            <span>Share this article</span>
                        </div>
                    </div>

                    <div className='technology-right'>
                        <span class="react-heading">5 Ways to animate a React app</span>

                        <UserTile props={userInfo}/>

                        <img className="animation-react-image" src="assets/animation-react.png" alt="empty"/>

                        <p className='react-context'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them</p>

                        <img src="assets/react-code.png" alt="empty" className='react-code'/>

                        <div className='skills-chip'>
                            <SkillsChip props={skills}/>
                        </div>

                        <div>
                            <img src="assets/likes.png" alt="empty"/>
                            <span>9.3K</span>
                        </div>

                        <div>
                            <hr/>

                            <UserTile props={userInfo}/>

                            <hr/>
                        </div>
                    </div>
                </div>

                <span>More from the Siren</span>

                <hr/>

                <div className='bollywoodTile'>
                    <TechnologyTile props={technologyTile}/>
                </div>
            </div>
        </>

    )
}

export default TechnologyPage