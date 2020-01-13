import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/investing/">Investing</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/passive-income/">Passive Income</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/decentralized-finance/">Decentralized Finance</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
