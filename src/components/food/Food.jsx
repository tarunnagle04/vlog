import React from 'react';
import FoodTile from './FoodTile';

const Food = ({props}) => {
  const foodTile = [
    {
      img: 'https://im.indiatimes.in/media/content/2015/Mar/phaal-curry_1425389163_725x725.jpg',
      title: 'Phaal Curry',
      description: 'Phaal is an Indian curry dish which originated in Indian restaurants in Birmingham, UK, and is not to be confused with the char-grilled, gravy-less, finger food phall from Bangalore. It is one of the hottest forms of curry regularly available, even hotter than the vindaloo, using a large number of ground standard chilli peppers, or a hotter type of chilli such as scotch bonnet or habanero. Typically, the dish is a tomato-based thick curry and includes ginger and optionally fennel seeds..'
    },
    {
      img: 'https://im.indiatimes.in/media/content/2015/Mar/rista-yummrajdotcom_1425389542_725x725.jpg',
      title: `Rista`,
      description: 'ich in taste and aroma, Rista is a fiery lamb meatball curry prepared in red chilly powder and other spices in a very special manner. The meat for this dish is hand-pounded with huge wooden hammers on a large flat solid wood base. The flavour of fennel seeds makes it unique from other similar looking red curries. This delicious culinary delight is best enjoyed with butter naan and cumin rice. Absolutely divine!'
    },
    {
      img: 'https://im.indiatimes.in/media/content/2015/Mar/kozi-kair-1bpdotblogspot_1425389639_725x725.jpg',
      title: 'Kozi Kari',
      description: 'This dish comes from Kerala and is believed to have been first introduced in India by early Jewish settlers. This is a hot chicken curry made with a combination of hot fresh green chilli peppers and dried ground red chilli peppers. The variety of spices used in this dish make it one of the spiciest curries you’ll ever find in India.'
    },
    {
      img: 'https://im.indiatimes.in/media/content/2015/Mar/piro-aloo-maharjanbijayta_1425389823_725x725.jpg',
      title: 'Piro Allo',
      description: 'Finally, something for the vegetarians. Although this dish originated from Nepal, it has become quite a popular dish in India as well. To put it simply, it’s a Nepalese take of India’s favourite, Dum Aloo. A little drier than its Indian counterpart, it is also at least 10 times spicier. This is a favourite, even for die-hard meat lovers..'
    }
  ];

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
      <span className='latest-bollywood'>Latest Food Stories</span>
      <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <FoodTile props={foodTile}/>
      </div>
    </div>
  )
}

export default Food