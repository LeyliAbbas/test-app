'use client';
import classes from './style.module.css';

export const InfoSection = (): JSX.Element => {
  return (
    <div className={classes.frame}>
      <div className={classes.container}>
        <p className={classes['let-nextcent-do-the']}>
          Pellentesque suscipit fringilla libero eu.
        </p>
        <button className={classes.button}>Get a Demo</button>
      </div>
    </div>
  );
};
