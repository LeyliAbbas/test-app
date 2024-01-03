'use client';
import classes from "./style.module.css";
import { Button } from "../ui/Button";

export const InfoSection = (): JSX.Element => {
  return (
    <div className={classes.frame}>
      <p className={classes["let-nextcent-do-the"]}>Pellentesque suscipit fringilla libero eu.</p>
      <Button
        className={classes["button-instance"]}
        divClassName={classes["design-component-instance-node"]}
        icon={false}
        size="medium"
        state="default"
        text="Get a Demo"
        type="primary"
      />
    </div>
  );
};
