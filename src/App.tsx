import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import AddFilament from './pages/AddFilament';
import Settings from './pages/Settings';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
    // initialize theme system
    useTheme();

    // items for navbar
    const navItems = [
        { path: '/', label: 'Dashboard', icon: '1'},
        { path: '/inventory', label: 'Inventory', icon: '2'},
        { path: '/add-filament', label: 'Add Filament', icon: '3'},
        { path: '/settings', label: 'Settings', icon: '4'}
    ];

    return (
        <Router>
            <div className="app">
                <Sidebar appName="filaManage" navItems={navItems}></Sidebar>

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