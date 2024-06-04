import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../routes';
import { slides } from './data/slides';

export const useSlides = () => {
  const { slideId } = useParams();
  const navigate = useNavigate();

  const activeSlideIndex = useMemo(
    () => slides.findIndex((slide) => slide.slideId === slideId),
    [slideId]
  );

  const activeSlide =
    activeSlideIndex >= 0 ? slides[activeSlideIndex] : slides[0];

  const nextSlide = slides[activeSlideIndex + 1];
  const prevSlide = slides[activeSlideIndex - 1];

  return {
    activeSlide,
    slides,
    hasNext: !!nextSlide,
    hasPrevious: !!prevSlide,
    handleNext: () => {
      if (nextSlide) {
        navigate(`${routes.presentation}/${nextSlide.slideId}`);
      }
    },
    handleBack: () => {
      if (prevSlide) {
        navigate(`${routes.presentation}/${prevSlide.slideId}`);
      }
    },
  };
};
