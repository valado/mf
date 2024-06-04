import ReactJson from 'react-json-view';
import { useConfig } from '../../useConfig';
import { FC } from 'react';
import { useThemeContext } from '../../../infra/ThemeContext';

export const ConfigViewer: FC = () => {
  const { config } = useConfig();
  const { isDark } = useThemeContext();
  return (
    <ReactJson
      src={config}
      theme={isDark ? 'summerfruit' : 'summerfruit:inverted'}
    />
  );
};
