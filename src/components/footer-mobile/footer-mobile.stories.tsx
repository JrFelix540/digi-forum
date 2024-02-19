import type { Meta, StoryObj } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import { FooterMobile as FooterMobileComponent } from "./footer-mobile";

const customViewports = {
  mobile1: {
    name: "Small mobile",
    styles: {
      height: "568px",
      width: "320px",
    },
    type: "mobile",
  },
  mobile2: {
    name: "Large mobile",
    styles: {
      height: "896px",
      width: "414px",
    },
    type: "mobile",
  },
};
const meta = {
  title: "layouts/FooterMobile",
  component: FooterMobileComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: customViewports,
      //👇 Your own default viewport
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    // <div className="w-96">
    <FooterMobileComponent />
    // </div>
  ),
} satisfies Meta<typeof FooterMobileComponent>;

export default meta;

export const FooterMobile: StoryObj<typeof meta> = {};
