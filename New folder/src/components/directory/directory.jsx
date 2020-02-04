import React from 'react';

import MenuItem from '../menu-items/menu-items';

import '../directory/directory-styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1 , 
          linkUrl  : 'hatss',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl  : '',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl  : '',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl  : '',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl  : '',
        }
      ]
    };
  }

  render() {
    return (
      // <div className='directory-menu'>
      //   {this.state.sections.map(({ title, imageUrl, id, size }) => (
      //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      //   ))}
      // </div>
      // above code does same job as this one only diff in this is written in ES6 snytax using spread opertor to access array elements
      <div className='directory-menu'>
        {this.state.sections.map((id , ...SectionProps) => (
          <MenuItem key={id} {...SectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;