export interface VLPaginatorProps {
    totalRows: number;
    rowsPerPage?: number;
    rowsPerPageOptions: number[];
    onPaginationChange?: (page: number, limit: number) => void;
}
