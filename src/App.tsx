import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IconSidebar from './components/common/IconSidebar/IconSidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import AddFilament from './pages/AddFilament';
import Settings from './pages/Settings';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
    // initialize theme system
    useTheme();

    // items for icon sidebar
    const navItems = [
        { path: '/', label: 'Dashboard', icon: '■', tooltip: 'Dashboard' },
        { path: '/inventory', label: 'Inventory', icon: '▦', tooltip: 'Inventory' },
        { path: '/add-filament', label: 'Add Filament', icon: '+', tooltip: 'Add Filament' },
        { path: '/settings', label: 'Settings', icon: '⚙', tooltip: 'Settings' }
    ];

    return (
        <Router>
            <div className="app">
                <IconSidebar items={navItems} />

                <main className="main-content">
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/inventory" element={<Inventory />} />
                            <Route path="/add-filament" element={<AddFilament />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    )
}

export default App;