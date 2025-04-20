import userInfo from 'pages/api/user';
import React from 'react';
import InformationCard from './InformationCard';
import ListProgress from './ListProgress';
import { Education } from './Education';


const LeftMenu = () => (
    <div className="container left-menu">

        {/* Information */}
        <div className='left-menu__section1'><InformationCard name={userInfo.name} avatar={userInfo.avatar} title={userInfo.title} socials={userInfo.socials} /></div><hr />

        <div className='left-menu__section3'><Education /></div><hr />
        
        {/* Skills */}
        <div className='left-menu__section2'><ListProgress {...userInfo.skills} /></div><hr />

        {/* Languages */}
        <div className='left-menu__section6'><ListProgress {...userInfo.languages} /></div><hr />
    </div>
);

export default LeftMenu;