import { 
    PromptInput, 
    PromptInputMessage, 
    PromptInputSubmit, 
    PromptInputTextarea 
} from "@/components/ai-elements/prompt-input";
import { UI_MESSAGES } from "@/lib/consts";

interface GameInputProps {
    input: string;
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (message: PromptInputMessage, e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const GameInput = ({input, onInputChange, onSubmit, isLoading}: GameInputProps) => {

    const inputTrimmed = input.trim();
    const inputSubmitIsDisabled = isLoading || inputTrimmed === '';

    return (
        <PromptInput onSubmit={onSubmit} className="flex items-center relative pr-8">
            <PromptInputTextarea 
                placeholder={UI_MESSAGES.PLACEHOLDERS.INPUT} 
                value={input} 
                onChange={onInputChange} 
                disabled={isLoading}
            />
            <PromptInputSubmit disabled={inputSubmitIsDisabled} className="absolute bottom-2 right-2" />
        </PromptInput>
    )
}