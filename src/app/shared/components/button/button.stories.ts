import { storiesOf, moduleMetadata } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

storiesOf("Button", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add("default", () => ({
    template: `
      <app-button appearance="default">Content</app-button>
    `
  }))
  .add("ghost", () => ({
    template: `
      <app-button appearance="ghost">Content</app-button>
    `
  }));
