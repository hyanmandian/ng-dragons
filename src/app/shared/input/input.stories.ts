import { storiesOf } from "@storybook/angular";

import { InputComponent } from "./input.component";

storiesOf("Input", module)
  .add("default", () => ({
    component: InputComponent,
    props: {

    },
  }));
