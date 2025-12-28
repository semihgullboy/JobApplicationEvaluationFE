import { create } from 'zustand';
import { apiClient, API_ENDPOINTS } from '@/config/api';

interface Sector {
    id: number;
    name: string;
}

interface ApiResponse {
    statusCode: number;
    data: Sector[];
    success: boolean;
    message: string;
}

interface SectorStore {
    sectors: Sector[];
    loading: boolean;
    error: string | null;
    fetchSectors: () => Promise<void>;
    setSectors: (sectors: Sector[]) => void;
}

export const useSectorStore = create<SectorStore>((set) => ({
    sectors: [],
    loading: false,
    error: null,

    fetchSectors: async () => {
        set({ loading: true, error: null });
        try {
            const response = await apiClient.get<ApiResponse>(API_ENDPOINTS.SECTOR_GET_ALL);

            if (response.data.success && response.data.data) {
                set({ sectors: response.data.data, loading: false });
            } else {
                set({ error: response.data.message || 'Sektörler yüklenemedi', loading: false });
            }
        } catch (error) {
            set({ error: 'Sektörler yüklenirken hata oluştu', loading: false });
            console.error('Sektör hatası:', error);
        }
    },

    setSectors: (sectors) => set({ sectors }),
}));
