import React from 'react';

import UpgradeExperience from '../common/components/UpgradeExperience';

export default {
  title: 'Components/UpgradeExperience',
  component: UpgradeExperience,
  argTypes: {
    data: {
      control: 'array'
    },
  },
};

const Component = (args) => {
  return <UpgradeExperience storySettings={{ locale: args.locale, open: true }} {...args} />
};

export const Default = Component.bind({});
Default.args = {
  data: [
    {
      icon: 'coding',
      label: 'Intro to coding',
      src: '/intro-to-coding',
      status: 'trial',
      starting_at: '2022-11-29T00:00:00.000Z',
      ending_at: '2022-11-29T22:17:00.000Z',
    },
    {
      icon: 'data-science',
      label: 'Data Science',
      src: '/data-science',
      status: 'paid',
      starting_at: '2022-11-29T00:00:00.000Z',
      ending_at: '2022-12-02T00:00:00.000Z',
    },
    {
      icon: 'brain',
      label: 'A.I & Machine Learning',
      src: '/ai-machine-learning',
      status: 'trial',
      starting_at: '2022-11-29T00:00:00.000Z',
      ending_at: '2022-12-03T00:00:00.000Z',
    },
    {
      icon: 'coding',
      label: 'Intro to Git & Github',
      src: '/intro-to-git-github',
      status: 'finished',
      starting_at: '2022-11-29T00:00:00.000Z',
      ending_at: '2022-12-03T00:00:00.000Z',
    }
  ],
};
