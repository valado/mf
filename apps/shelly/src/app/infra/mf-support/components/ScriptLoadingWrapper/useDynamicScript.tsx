import { useEffect, useReducer } from 'react';

enum ActionType {
  RESET,
  SUCCESS,
  FAIL,
}

interface Action {
  type: ActionType;
  url?: string;
}

interface ScriptLoadingState {
  loading: boolean;
  failed: boolean;
}

const loadedScriptsCache = new Set();
const initialState = { loading: true, failed: false };
const stateReducer = (
  _state: ScriptLoadingState,
  action: Action
): ScriptLoadingState => {
  switch (action.type) {
    case ActionType.RESET:
      return initialState;
    case ActionType.SUCCESS:
      loadedScriptsCache.add(action.url);
      return { loading: false, failed: false };
    case ActionType.FAIL:
      return { loading: false, failed: true };
  }
};

interface Props {
  url: string;
}

const useDynamicScript = ({ url }: Props): ScriptLoadingState => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const dispatchAction = (type: ActionType, url?: string) => {
    dispatch({ type, url });
  };

  useEffect(() => {
    dispatchAction(ActionType.RESET);

    if (!url) {
      dispatchAction(ActionType.FAIL);
      console.error(
        `Failed to load dynamic script: ${url}; error: INVALID_URL`
      );
      return;
    }

    const scriptAlreadyLoaded = loadedScriptsCache.has(url);
    if (scriptAlreadyLoaded) {
      console.log(`Dynamic script was already loaded: ${url}`);
      dispatchAction(ActionType.SUCCESS, url);
      return;
    }

    const successHandler = () => {
      console.log(`Dynamic script loaded: ${url}`);
      dispatchAction(ActionType.SUCCESS, url);
    };

    const errorHandler = (event: any) => {
      console.error(`Failed to load dynamic script: ${url}; error:`, event);
      dispatchAction(ActionType.FAIL);
    };

    const remoteScript = document.createElement('script');
    remoteScript.onload = successHandler;
    remoteScript.onerror = errorHandler;
    remoteScript.type = 'text/javascript';
    remoteScript.async = true;
    remoteScript.src = url;
    document.head.appendChild(remoteScript);
  }, [url]);

  return state;
};

export default useDynamicScript;
