'use client';
import React from 'react';
import Image from 'next/image';
import classes from './style.module.css';

export const HeroSection = (): JSX.Element => {
  return (
    <div className={classes['hero-section']}>
      <div className={classes.container}>
        <div className={classes['frame']}>
          <div className={classes['text']}>
            <p className={classes['lessons-and-insights']}>
              <span className={classes['text-wrapper']}>
                Lessons and insights{' '}
              </span>
              <span className={classes['span']}>from 8 years</span>
            </p>
            <p className={classes.note}>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button className={classes.button}>Register</button>
        </div>
        <Image
          className={classes['illustration']}
          alt='Illustration'
          src='/illustration.svg'
          width={391}
          height={407}
        />
        <Image
          className={classes['dots']}
          alt='dots'
          src='/dots.svg'
          width={46}
          height={10}
        />
      </div>
    </div>
  );
};
