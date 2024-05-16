import { VLInputRuleType } from '../utils/types';

export interface VLFileInputErrorEvent {
    file?: string;
    size?: number;
    count?: number;
    type?: string;
    message: string;
}
export interface VLFileInputProps {
    name?: string;
    label: string;
    placeholder?: string;
    error?: string;
    helpText?: string;
    required?: boolean;
    disabled?: boolean;
    accept?: string;
    multiple?: boolean;
    acceptedTypes?: string[];
    maxFileSize?: number;
    fileLimit?: number;
    rules?: VLInputRuleType[];
    onError?: (error: VLFileInputErrorEvent) => void;
}
