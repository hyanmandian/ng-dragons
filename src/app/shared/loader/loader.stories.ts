import { storiesOf } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material';

import { LoaderComponent } from './loader.component';

storiesOf('Loader', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatProgressSpinnerModule]
    })
  )
  .add('default', () => ({
    component: LoaderComponent,
  }));
