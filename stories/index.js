import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/common/button';

storiesOf('Buttons', module)
  .add('Primary', () => (
    <Button onClick={action('clicked')} primary>
      Primary Button
    </Button>
  ))
  .add('Default', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        Default button👍 💯
      </span>
    </Button>
  ));
