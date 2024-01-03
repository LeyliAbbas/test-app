'use client';
// import { Logo } from "./Logo";
// import { Send } from "./Send";
// import { SocialIcons } from "./SocialIcons";
// import { StyleWhiteSocialDribbble } from "./StyleWhiteSocialDribbble";
// import { StyleWhiteSocialTwitter } from "./StyleWhiteSocialTwitter";
// import { StyleWhiteSocialYoutube } from "./StyleWhiteSocialYoutube";
import classes from './style.module.css';

export const FooterBig = (): JSX.Element => {
  return (
    <div className={classes['footer-big']}>
      <div className={classes['company-info']}>
        {/* <Logo
          className={classes['logo-instance']}
          iconColor='white'
          iconStyleOverrideClassName={classes['design-component-instance-node']}
          nexcent={logoNexcent}
          nexcentClassName={classes['logo-2']}
        /> */}
        <div className={classes['copyright']}>
          <p
            className={`${classes['text-wrapper']} ${classes['text-wrapper-1']}`}
          >
            Copyright © 2020 Nexcent ltd.
          </p>
          <div className={classes['div']}>All rights reserved</div>
        </div>
        <div className={classes['social-links']}>
          {/* <SocialIcons className={classes['social-icons']} />
          <StyleWhiteSocialDribbble className={classes['social-icons']} />
          <StyleWhiteSocialTwitter className={classes['social-icons']} />
          <StyleWhiteSocialYoutube className={classes['social-icons']} /> */}
        </div>
      </div>
      <div className={classes['links']}>
        <div className={classes['col']}>
          <div
            className={`${classes['text-wrapper-2']} ${classes['text-wrapper-3']}`}
          >
            Company
          </div>
          <div className={classes['list-items']}>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              About us
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Blog
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Contact us
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Pricing
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Testimonials
            </div>
          </div>
        </div>
        <div className={classes['col']}>
          <div
            className={`${classes['text-wrapper-2']} ${classes['text-wrapper-3']}`}
          >
            Support
          </div>
          <div className={classes['list-items']}>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Help center
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Terms of service
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Legal
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Privacy policy
            </div>
            <div
              className={`${classes['text-wrapper-3']} ${classes['text-wrapper-4']}`}
            >
              Status
            </div>
          </div>
        </div>
        <div className={classes['col-2']}>
          <div
            className={`${classes['text-wrapper-2']} ${classes['text-wrapper-3']}`}
          >
            Stay up to date
          </div>
          <div className={classes['email-input-field']}>
            <div className={classes['overlap-group']}>
              <div className={classes['input-field-BG']} />
              {/* <Send className={classes['essential-icons-send']} /> */}
              <div
                className={`${classes['text-wrapper-5']} ${classes['text-wrapper-6']}`}
              >
                Your email address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
