import { create } from 'zustand';
import { apiClient, API_ENDPOINTS } from '@/config/api';

export interface Company {
    id: number;
    name: string;
    city: string;
    sectorName: string;
    averageRating: number;
    reviewCount: number;
}

interface FilterParams {
    name?: string;
    sectorId?: string | number;
    minAverageRating?: number;
    maxAverageRating?: number;
    page?: number;
    pageSize?: number;
    sortBy?: 'Name' | 'Rating' | 'ReviewCount';
    sortDesc?: boolean;
}

interface CompanyResponse {
    items: Company[];
    totalCount: number;
}

interface ApiResponse {
    statusCode: number;
    data: CompanyResponse;
    success: boolean;
    message: string;
}

interface CompanyStore {
    companies: Company[];
    totalCount: number;
    loading: boolean;
    error: string | null;
    filterCompanies: (params: FilterParams) => Promise<void>;
    resetCompanies: () => void;
}

export const useCompanyStore = create<CompanyStore>((set) => ({
    companies: [],
    totalCount: 0,
    loading: false,
    error: null,

    filterCompanies: async (params: FilterParams) => {
        set({ loading: true, error: null });
        try {
            const queryParams = new URLSearchParams();
            if (params.name) queryParams.append('Name', params.name);
            if (params.sectorId) queryParams.append('SectorId', params.sectorId.toString());
            if (params.minAverageRating !== undefined) queryParams.append('MinAverageRating', params.minAverageRating.toString());
            if (params.maxAverageRating !== undefined) queryParams.append('MaxAverageRating', params.maxAverageRating.toString());
            if (params.page !== undefined) queryParams.append('Page', params.page.toString());
            if (params.pageSize !== undefined) queryParams.append('PageSize', params.pageSize.toString());
            if (params.sortBy) queryParams.append('SortBy', params.sortBy);
            if (params.sortDesc !== undefined) queryParams.append('SortDesc', String(params.sortDesc));

            const response = await apiClient.post<ApiResponse>(
                `${API_ENDPOINTS.COMPANY_FILTER}?${queryParams.toString()}`,
                {}
            );

            if (response.data.success && response.data.data) {
                set({
                    companies: response.data.data.items,
                    totalCount: response.data.data.totalCount,
                    loading: false,
                });
            } else {
                set({ error: response.data.message || 'Şirketler yüklenemedi', loading: false });
            }
        } catch (error) {
            set({ error: 'Şirketler yüklenirken hata oluştu', loading: false });
            console.error('Şirket hatası:', error);
        }
    },

    resetCompanies: () => set({ companies: [], totalCount: 0, error: null }),
}));
