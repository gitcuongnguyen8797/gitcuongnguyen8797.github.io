import userInfo from 'data/user';
import React from 'react';
import InformationCard from './InformationCard';
import ListProgress from './ListProgress';


const LeftMenu = () => (
    <div className="container left-menu">

        {/* Information */}
        <div className='left-menu__section1'><InformationCard name={userInfo.name} avatar={userInfo.avatar} title={userInfo.title} socials={userInfo.socials} /></div><hr />

        {/* Languages */}
        <div className='left-menu__section3'><ListProgress {...userInfo.languages} /></div><hr />

        {/* Skills */}
        <div className='left-menu__section2'><ListProgress {...userInfo.skills} /></div><hr />

        {/* Downloads */}
        <div className='left-menu__section6'> </div>
    </div>
);

export default LeftMenu;