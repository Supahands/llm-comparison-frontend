export interface AppState {
  selectedModel1: string;
  selectedModel2: string;
  prompt: string;
  responseModel1: string;
  responseModel2: string;
  isPendingModel1: boolean;
  isPendingModel2: boolean;
  isComparingModel: boolean;

  setSelectedModel1: (model: string) => void;
  setSelectedModel2: (model: string) => void;
  setPrompt: (prompt: string) => void;
  setResponseModel1: (response: string) => void;
  setResponseModel2: (response: string) => void;
  setIsPendingModel1: (isPending: boolean) => void;
  setIsPendingModel2: (isPending: boolean) => void;
  setIsComparingModel: (isComparing: boolean) => void;
  reset: () => void;
}