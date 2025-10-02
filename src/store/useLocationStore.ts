import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LocationType = 'storage' | 'ams' | 'printer';

export interface Location {
    id: string;
    name: string;
    type: LocationType;
    parentId?: string;
    capacity?: number;
    printerName?: string;
    slotNumber?: number;
    notes?: string;
    creationDate: string;
    lastUseDate: string;
}