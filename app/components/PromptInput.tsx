import { useCallback, useMemo } from "react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function PromptInput({
  prompt,
  setPrompt,
  isGenerating,
  onGenerate,
}: PromptInputProps) {
  const handlePromptChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPrompt(e.target.value);
    },
    [setPrompt]
  );

  const handleGenerate = useCallback(() => {
    if (isGenerating || !prompt) return;
    onGenerate();
  }, [isGenerating, prompt, onGenerate]);

  const isButtonDisabled = useMemo(() => {
    return isGenerating || !prompt;
  }, [isGenerating, prompt]);

  const charCount = useMemo(() => {
    return prompt.length;
  }, [prompt]);

  const buttonText = isGenerating ? "Generating..." : "Generate Art";

  return (
    <div className="mb-6">
      <label htmlFor="prompt" className="block text-sm font-medium mb-2">
        Describe your artwork
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={handlePromptChange}
        className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="A serene landscape with mountains and a lake at sunset..."
      />
      <div className="text-sm text-gray-500 mt-1">Characters: {charCount}</div>
      <button
        onClick={handleGenerate}
        disabled={isButtonDisabled}
        className="w-full mt-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </div>
  );
}
