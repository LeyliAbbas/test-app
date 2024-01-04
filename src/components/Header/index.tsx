import React from 'react';
import classes from './style.module.css';
import Image from 'next/image';

export const Header = (): JSX.Element => {
  return (
    <div className={classes.frameHeader}>
      <div className={classes.container}>
        <Image
          className={classes['logo-instance']}
          alt='Illustration'
          src='/logo.svg'
          width={154}
          height={24}
        />
        <div className={classes.group}>
          <div className={classes['heading-name']}>
            <div className={classes['label-wrapper']}>
              <div className={classes.label}>Home</div>
            </div>
            <div className={classes['label-wrapper']}>
              <div className={classes['text-wrapper']}>Service</div>
            </div>
            <div className={classes['label-wrapper']}>
              <div className={classes['text-wrapper']}>Feature</div>
            </div>
            <div className={classes['label-wrapper']}>
              <div className={classes['text-wrapper']}>Product</div>
            </div>
            <div className={classes['label-wrapper']}>
              <div className={classes['text-wrapper']}>Testimonial</div>
            </div>
            <div className={classes['label-wrapper']}>
              <div className={classes['text-wrapper']}>FAQ</div>
            </div>
          </div>
        </div>
        <div className={classes.login}>
          <button className={classes.linkButton}>Login </button>
          <button className={classes.button}>Sign up</button>
        </div>
      </div>
    </div>
  );
};
