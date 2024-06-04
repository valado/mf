import { FC } from 'react';
import { useSlides } from '../../useSlides';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const SlidesNavigation: FC = () => {
  const { slides } = useSlides();
  return (
    <Box>
      {slides.map((slide) => (
        <NavLink
          key={slide.slideId}
          to={`/presentation/${slide.slideId}`}
          style={{ textDecoration: 'none' }}
        >
          {({ isActive }) => (
            <Box
              sx={(theme) => ({
                width: '100%',
                padding: theme.spacing(1),
                color: isActive
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
                textDecoration: 'none',
                backgroundColor: isActive
                  ? theme.palette.primary.main
                  : 'transparent',
              })}
            >
              {slide.title}
            </Box>
          )}
        </NavLink>
      ))}
    </Box>
  );
};
