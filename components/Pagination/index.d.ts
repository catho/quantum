import { FC } from 'react';

export interface PaginationProps {
    tabIndex?: number;
    ariaLabel?: string;
    activePage?: number;
    activePageAriaLabel?: string;
    totalPages: number;
    nextButtonText?: string;
    pageAriaLabel?: string;
    pageHref?: (page?: number) => void;
    prevButtonText?: string;
    onPageClick?: (page?: number) => void;
    infoFormatter?: (activePage?: number, lastPage?: number) => void;
    followOnlyFirstPage?: boolean;
    hideLastPagination?: boolean;
}

declare const Pagination: FC<PaginationProps>;
export default Pagination;
