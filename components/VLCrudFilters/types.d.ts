import { VLSelectOptionType } from '../VLSelect';
import { VLCrudInputFieldType, VLCrudInputValueType } from '../VLCrudInput';
import { VLFileInputErrorEvent } from '../VLFileInput';

export interface VLCrudFilterType {
    value: string;
    i18n_key: string;
    label: string;
    input_type: VLCrudInputFieldType;
    options?: VLSelectOptionType[];
    default_value?: VLCrudInputValueType;
    class?: string;
}
export interface VLCrudFiltersProps {
    title?: string;
    filters: VLCrudFilterType[];
    applyLabel?: string;
    resetLabel?: string;
    onApply?: () => void;
    onHide?: () => void;
    onReset?: () => void;
    onShow?: () => void;
    onFiltersApplied?: (filters: any) => void;
    onError?: (error: VLFileInputErrorEvent) => void;
}
