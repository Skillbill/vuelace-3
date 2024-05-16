import { VLInputRuleType } from '../utils/types';
import { VLSelectOptionType } from '../VLSelect';

export interface VLAutocompleteProps {
    options?: VLSelectOptionType[];
    placeholder?: string;
    disabled?: boolean;
    emptySearchMessage?: string;
    optionLabel?: string;
    error?: string;
    label?: string;
    required?: boolean;
    labelClass?: string;
    rules?: VLInputRuleType[];
    onChange?: (evt: any) => void;
    onBlur?: (evt: any) => void;
    onFocus?: (evt: any) => void;
    onItemSelect?: (evt: any) => void;
    onItemUnselect?: (evt: any) => void;
    onDropdownClick?: (evt: any) => void;
    onClear?: (evt: any) => void;
    onComplete?: (evt: any) => void;
    onBeforeShow?: (evt: any) => void;
    onBeforeHide?: (evt: any) => void;
    onShow?: (evt: any) => void;
    onHide?: (evt: any) => void;
}
