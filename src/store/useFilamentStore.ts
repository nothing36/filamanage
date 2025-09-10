import { create } from 'zustand';

interface Filament {
    // core
    id: string;
    brand: string;
    color: string;
    material: string;
    weight_remaining: number;   // grams

    // useful
    abrasive: boolean;
    last_dried: Date;

    // extras
    purchase_date?: Date;
    purchase_price?: number;
    spool_weight?: number;   // for weight calcs
    notes?: string;
}

interface FilamentStoreState {
    filaments: Filament[];

    // actions
    addFilament: (filament: Filament) => void;
    removeFilament: (id: string) => void;
    updateFilament: (id: string, data: Partial<Filament>) => void;
    getFilamentById: (id: string) => Filament | undefined;
}

const useFilamentStore = create<FilamentStoreState>((set, get) => ({
    filaments: [],

    // interesting...
    // use set((state) => ({ ... })); to update in zustand
    addFilament: (filament) => {
        set((state) => ({
            filaments: [...state.filaments, filament]
        }));
    },

    removeFilament: (id) => {
        set((state) => ({
            filaments: state.filaments.filter(f => f.id !== id)
        }));
    },


    updateFilament: (id, updates) => {
        set((state) => ({
            filaments: state.filaments.map(f =>
                f.id === id ? { ...f, ...updates } : f
            )
        }));
    },

    getFilamentById: (id) => {
        const filament = get().filaments.find(f => f.id === id);
        return filament;
    }
}));

export default useFilamentStore;