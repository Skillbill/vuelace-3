import { SlAfterShowEvent, SlHideEvent, SlShowEvent, SlAfterHideEvent } from '../utils/types';

export interface VLExpansionCardProps {
    title?: string;
    onShow?: (evt: SlShowEvent) => void;
    onHide?: (evt: SlHideEvent) => void;
    onAfterShow?: (evt: SlAfterShowEvent) => void;
    onAfterHide?: (evt: SlAfterHideEvent) => void;
}
