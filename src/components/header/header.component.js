import React from 'react';
import './header.styles.scss';

import { APPLICATION_TITLE } from '../../app-config/app-config';

export default function Header() {
    return (
        <div className='header'>            
            <span className='header__title'>{APPLICATION_TITLE}</span>
        </div>
    )
}
