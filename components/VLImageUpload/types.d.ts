import { VLInputRuleType } from '../utils/types';
import { VLFileInputErrorEvent } from '../VLFileInput';

export interface VLImageUploadProps {
    class?: string;
    name?: string;
    label: string;
    placeholder?: string;
    error?: string;
    helpText?: string;
    clearable?: boolean;
    required?: boolean;
    disabled?: boolean;
    imgStyle?: string;
    rules?: VLInputRuleType[];
    onError?: (error: VLFileInputErrorEvent) => void;
}
