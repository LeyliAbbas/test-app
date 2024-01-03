'use client';
import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import classes from './style.module.css';

export const HeroSection = (): JSX.Element => {
  return (
    <div className={classes['hero-section']}>
      <div className={classes['frame']}>
        <div className={classes['text']}>
          <p className={classes['lessons-and-insights']}>
            <span className={classes['text-wrapper']}>Lessons and insights </span>
            <span className={classes['span']}>from 8 years</span>
          </p>
          <p className={classes['div']}>
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <Button
          className={classes['button-instance']}
          divClassName='design-component-instance-node'
          icon={false}
          size='medium'
          state='default'
          text='Register'
          type='primary'
        />
      </div>
      <Image
        className={classes['illustration']}
        alt='Illustration'
        src='/illustration.svg'
        width={391}
        height={407}
      />
    </div>
  );
};
