import { ThemeOptions } from '@mui/material';

export const componentsFactory = (
  container?: HTMLDivElement
): ThemeOptions['components'] => {
  const popoverDefaultProps = { container };
  const commonMuiDefaultProps = {
    size: 'small' as const,
    variant: 'outlined' as const,
    fullWidth: true,
  };

  return {
    MuiTextField: {
      defaultProps: { ...commonMuiDefaultProps },
    },
    MuiPopper: {
      defaultProps: popoverDefaultProps,
    },
    MuiPopover: {
      defaultProps: popoverDefaultProps,
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none',
        },
      },
    },
  };
};
