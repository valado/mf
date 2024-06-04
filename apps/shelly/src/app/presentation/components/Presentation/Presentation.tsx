import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { SlidesContent } from '../SlidesContent';
import { SlidesNavigation } from '../SlidesNavigation';

export const Presentation = () => {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={20} minSize={20} style={{ paddingTop: '1rem' }}>
        <SlidesNavigation />
      </Panel>
      <PanelResizeHandle style={{ border: 'solid 1px grey' }} />
      <Panel minSize={30}>
        <SlidesContent />
      </Panel>
    </PanelGroup>
  );
};
