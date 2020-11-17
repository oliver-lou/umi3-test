import React from 'react';
import styles from './index.less';
import { NavLink } from 'umi';

export default () => {
    return (
        <ul>
            <li>
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/test">test</NavLink>
            </li>
        </ul>
    );
};
