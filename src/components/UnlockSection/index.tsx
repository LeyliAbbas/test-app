'use client';
import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import classes from './style.module.css';

export const UnlockSection = (): JSX.Element => {
  return (
    <div className={classes['unlock-section']}>
      <div className={classes.container}>
        <div className={classes['mobile-login-pana']}>
          <Image
            className={classes['illustration']}
            alt='Illustration'
            src='/mobile.svg'
            width={442}
            height={433}
          />
        </div>
        <div className={classes['frame']}>
          <div className={classes['div']}>
            <p className={classes['p']}>
              How to design your site footer like we did
            </p>
            <p className={classes['one-event-calendar']}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <button className={classes.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};
