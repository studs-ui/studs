export const size = {
  size: {
    control: { type: 'select', defaultValue: 'medium' },
    options: ['small', 'medium', 'large'],
    defaultValue: { summary: 'medium' },
  },
};
export const contentDirection = {
  contentDirection: {
    control: { type: 'select' },
    options: ['horizontal', 'vertical'],
  },
};
export const icon = {
  icon: {
    control: {
      type: 'text',
    },
    description: `Define display icon (class) of the button component using html svg or font icon`,
  },
  iconPosition: {
    control: { type: 'select' },
    options: ['start', 'end'],
  },
};
export const variants = ({
  name = 'variant',
  options = [],
}: {
  name?: string;
  options?: string[];
}) => {
  return {
    [name]: {
      control: { type: 'select' },
      options: ['primary', 'secondary', ...options],
    },
  };
};
export const position = {
  position: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'],
  },
};
export const arrowPosition = {
  arrowPosition: {
    control: { type: 'select' },
    options: ['start', 'center', 'end'],
  },
};
