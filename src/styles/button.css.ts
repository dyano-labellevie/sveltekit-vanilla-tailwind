import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const button = style({
  background: vars.color.primary,
  color: vars.color.white,
  padding: '10px 30px',
  borderRadius: '5px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  display: 'block',
  transition: 'background 0.4s',

  selectors: {
    '&:hover': {
      background: vars.color.primaryHover,
    },
  },
});
