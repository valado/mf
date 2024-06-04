import { FC } from 'react';
import { useSlides } from '../../useSlides';
import { Editor } from '@monaco-editor/react';
import { useThemeContext } from '../../../infra/ThemeContext';

export const SlidesContent: FC = () => {
  const { activeSlide } = useSlides();
  const { isDark } = useThemeContext();

  return (
    <Editor
      defaultLanguage="typescript"
      value={activeSlide.content}
      theme={isDark ? 'vs-dark' : 'light'}
    />
  );
};
