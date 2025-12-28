export interface FilterFormData {
    company: string;
    sector: string;
    minScore: number;
    sortBy: 'Name' | 'Rating' | 'ReviewCount';
    sortOrder: 'asc' | 'desc';
}

export const defaultFilters: FilterFormData = {
    company: '',
    sector: '',
    minScore: 0,
    sortBy: 'Rating',
    sortOrder: 'desc',
};
