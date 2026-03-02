// ===========Dashboard page, containing a summary of user details and navigation to other features=============
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Users, Stethoscope, Building2, LogOut, Bell, MessageSquare, Pencil, X, Send, Heart, Plus, Check } from 'lucide-react';
import "../app.css";
// Import the features
import Overview from './features/overview';
import Diagnostics from './features/diagnostics';
import HealthAccess from './features/healthAccess';
import Socialize from './features/socialize';

const TWELVE_HOURS = 12 * 60 * 60 * 1000;
// Sample data for upcoming tasks
// TODO: Replace with data from the database
const sampleUpcomingTasks = [
  { id: 1, description: 'Take morning medication', date: new Date(Date.now() + 2 * 60 * 60 * 1000) },
  { id: 2, description: 'Blood pressure check', date: new Date(Date.now() + 5 * 60 * 60 * 1000) },
  { id: 3, description: 'Doctor appointment', date: new Date(Date.now() + 8 * 60 * 60 * 1000) },
  { id: 4, description: 'Evening walk', date: new Date(Date.now() + 15 * 60 * 60 * 1000) },
  { id: 5, description: 'Take evening medication', date: new Date(Date.now() + 18 * 60 * 60 * 1000) },
];
// Sample historical data
// TODO: Replace with data from the database
const sampleHistory = [
  { id: 1, description: 'Took morning medication', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
  { id: 2, description: 'Blood pressure check', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  { id: 3, description: 'Vitamin D supplement', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
  { id: 4, description: 'Doctor appointment', date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
];
// Constant array of features
const navItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: Stethoscope, label: 'Diagnostics', active: false },
  { icon: Building2, label: 'Health Access', active: false },
  { icon: Users, label: 'Socialize', active: false },
];
// The user's health metrics
const healthMetrics = [
  { label: 'Health Status', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { label: 'Sleep Quality', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { label: "Today's Mood", options: ['😊 Happy', '😐 Neutral', '😔 Sad', '😤 Stressed'] },
  { label: 'Energy Level', options: ['High', 'Medium', 'Low'] },
  { label: 'Medication Taken', options: ['Yes', 'No', 'Partial'] },
];

export default function Dashboard() {
    // Navigating across the features
    const [activeNav, setActiveNav] = useState('Overview');
    const navigate = useNavigate();
    return(
        <div className="mainContainer flex min-h-screen">
            <aside className="sideBar bg-black w-[18vw]"> {/*Sidebar for nagivating across features */}
                <div className="sdHeader flex items-center justify-center h-[10%]">      {/*The header of the sidebar */}
                    <span className="text-xl font-heading font-bold text-white">MiHealth</span>
                </div>
                <div className="userProfile h-[25%] flex-1 flex-col">
                    <div className="profilePhoto w-[38%] h-[50%] bg-white rounded-[50%]">
                        <img src="#" alt="User's profile photo" className='w-[50%] h-[50%]'/>
                    </div>
                    <h3 className="userFullName">Donald Masine</h3>
                </div>
                <div className="features">      {/*Navigation for the sideBar */}
                    <nav className="sideBarNavigation flex flex-col py-[16px]">
                        {navItems.map(({ icon: Icon, label }) => (        
                            <button
                              key={label}
                              onClick={() => setActiveNav(label)} className="flex items-center gap-[12px] w-[100%] py-[12px] px-[20px] bg-transparent cursor-pointer"
                              style={{
                                color: activeNav === label ? '#ffffff' : '#9ca3af',
                                borderLeft: activeNav === label ? '5px solid #23d2cc' : '5px solid transparent',
                                transition: 'all 0.1s',
                              }}
                            >
                              <Icon size={20} />
                              <span style={{ fontSize: '18px', fontWeight: activeNav === label ? 600 : 400 }}>{label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="logout">
                    <button className="text-white cursor-pointer text-[20px] font-600 flex items-center justify-center gap-[8px] w-[80%] mt-[25dvh] py-[10px] mx-[16px] rounded-lg hover:-translate-y-1" onClick={() => navigate('/login')}
                    style={{backgroundColor: '#7B1818',transition: 'background-color 0.2s'}}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9B2020')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B1818')}
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </aside>
            <main className="mainSection bg-blue-500 w-[82vw]">      {/*Container for the main content */}
                {activeNav==='Overview' &&(
                    < Overview />
                )}
                {activeNav==='Diagnostics'  &&(
                    < Diagnostics />
                )}
                {activeNav==='Health Access'  &&(
                    < HealthAccess />
                )}
                {activeNav==='Socialize'  &&(
                    < Socialize />
                )}
            </main>
        </div>
    )
}