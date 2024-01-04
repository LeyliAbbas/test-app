'use client';
import Image from 'next/image';
import classes from './style.module.css';

export const CommunityUpdates = (): JSX.Element => {
  return (
    <div className={classes['community-updates']}>
      <div className={classes['community']}>
        <p className={classes['section-title']}>Caring is the new marketing</p>
        <p className={classes['description']}>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&#39;s joining the community, read
          about how our community are increasing their membership income and
          lot&#39;s more.​
        </p>
      </div>
      <div className={classes['frame']}>
        <div className={classes['element']}>
          <Image
            className={classes['image']}
            alt='Illustration'
            src='/image-18.png'
            width={368}
            height={286}
          />
          <div className={classes['content']}>
            <p className={classes['text-wrapper']}>
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className={classes['div']}>
              <div className={classes['text-wrapper-2']}>Readmore</div>
              <Image alt='arrow' src='/arrow.svg' width={24} height={24} />
            </div>
          </div>
        </div>
        <div className={classes['element']}>
          <Image
            className={classes['image']}
            alt='Illustration'
            src='/image-19.png'
            width={368}
            height={286}
          />
          <div className={classes['content']}>
            <p className={classes['text-wrapper']}>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <div className={classes['div']}>
              <div className={classes['text-wrapper-2']}>Readmore</div>
              <Image alt='arrow' src='/arrow.svg' width={24} height={24} />
            </div>
          </div>
        </div>
        <div className={classes['element']}>
          <Image
            className={classes['image']}
            alt='Illustration'
            src='/image-20.png'
            width={368}
            height={286}
          />
          <div className={classes['content']}>
            <p className={classes['text-wrapper']}>
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className={classes['div']}>
              <div className={classes['text-wrapper-2']}>Readmore</div>
              <Image alt='arrow' src='/arrow.svg' width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
