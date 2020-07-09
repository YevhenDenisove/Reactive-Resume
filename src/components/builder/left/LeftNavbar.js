import { Link } from 'gatsby';
import React, { memo } from 'react';
import sections from '../../../data/leftSections';
import Avatar from '../../shared/Avatar';
import Logo from '../../shared/Logo';
import SectionIcon from '../../shared/SectionIcon';
import styles from './LeftNavbar.module.css';

const LeftNavbar = () => (
  <div className={styles.container}>
    <Link to="/app/dashboard">
      <Logo size="40px" />
    </Link>

    <hr className="my-6" />

    <div className="grid grid-cols-1 gap-4 text-primary-400">
      {sections.map((x) => (
        <SectionIcon
          key={x.id}
          section={x}
          containerId="LeftSidebar"
          tooltipPlacement="right"
        />
      ))}
    </div>

    <hr className="mt-auto my-6" />

    <Avatar />
  </div>
);

export default memo(LeftNavbar);
