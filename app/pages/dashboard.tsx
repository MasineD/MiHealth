// ===========Dashboard page, containing a summary of user details and navigation to other features=============
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Users, Stethoscope, Building2, LogOut, Pencil, X, Send, Heart, Plus, Check } from 'lucide-react';
import "../app.css";
import Profile from '../images/profile.jpg'
// Import the features
import Overview from './features/overview';
import Diagnostics from './features/diagnostics';
import HealthAccess from './features/healthAccess';
import Socialize from './features/socialize';

// Constant array of features
const navItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: Stethoscope, label: 'Diagnostics', active: false },
  { icon: Building2, label: 'Health Access', active: false },
  { icon: Users, label: 'Socialize', active: false },
];

export default function Dashboard() {
    // Navigating across the features
    const [activeNav, setActiveNav] = useState('Overview');
    const [showEditProfile, setShowEditProfile] = useState(false);        //Showing full user details
    const [profile, setProfile] = useState({        //The user profile details
    fullname: 'Donald Masine',     //TODO: Replace with details from the database
    email: 'donald@example.com',    
    phone: '+27 734 567 8900',       
    dateOfBirth: '1985-06-15',
    nextOfKin: 'Jane',
    nextOfKinPhone: '+27 734 567 8901',
    province: 'Gauteng',
    city: 'Johannesburg',
    suburb: 'Sandton',  
    });
    const [editForm, setEditForm] = useState({ ...profile });       //Form for editting the user profile
    const navigate = useNavigate();

    // Saving the user's profile details
    // TODO: Send the details to the database
    const handleSaveProfile = () => {
    setProfile({ ...editForm });
    setShowEditProfile(false);
    };
    return(
        <div className="mainContainer flex min-h-screen max-h-screen fixed">
            <aside className="sideBar bg-black w-[18vw]"> {/*Sidebar for nagivating across features */}
                <div className="sdHeader flex items-center justify-center h-[10%]">      {/*The header of the sidebar */}
                    <span className="text-[30px] font-heading font-bold text-white">MiHealth</span>
                </div>
                <div className="userProfile flex items-center justify-center h-[25%] flex-1 flex-col border-b">
                    <div className="profilePhoto flex items-center justify-center w-[9dvw] h-[18dvh] bg-white rounded-[55px] text-black">
                        <img src={Profile} className="w-[100%] h-[100%] rounded-[55px]"alt="profile photo" />
                    </div>
                    {/* A pencil icon to assist with editting the user profile */}
                    <button onClick={() => setShowEditProfile(true)} className="editProfileIcon w-[27px] h-[28px] rounded-full bg-[#ffffff] 
                    border-2 border-[#111111] flex items-center justify-center cursor-pointer p-0 absolute ml-[8.5dvw] mt-[5dvh]">
                        <Pencil size={18} color="#000000" />
                    </button>
                    <h3 className="userFullName mt-1 text-[20px]">{profile.fullname}</h3>
                </div>
                <div className="features">      {/*Navigation for the sideBar */}
                    <nav className="sideBarNavigation flex flex-col py-[16px]">
                        {navItems.map(({ icon: Icon, label }) => (        
                            <button
                              key={label}
                              onClick={() => setActiveNav(label)} className="flex items-center gap-[12px] w-[100%] py-[12px] px-[20px] bg-transparent
                               cursor-pointer"
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
                    <button className="text-white cursor-pointer text-[20px] font-600 flex items-center justify-center gap-[8px] w-[80%] 
                        mt-[25dvh] py-[10px] mx-[16px] rounded-lg hover:-translate-y-1" onClick={() => navigate('/login')}
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
                {/* Edit Profile Modal */}
                {/* TODO: Send the details to the database when the user clicks' Save Changes' button */}
                {showEditProfile && (
                  <div className="editProfileContainer fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50 overflow-y">
                    <div className="closeProfileEdit w-[50vw] p-[24px] rounded-[16px] bg-black/90 relative">   {/*Container for the icon to close the modal */}
                      <button onClick={() => setShowEditProfile(false)} className="closeProfileBtn absolute top-2 right-2 p-[4px] rounded-full
                       cursor-pointer hover:bg-[rgba(255,255,255,0.1)]">
                        <X size={20} />
                      </button>
                      <h2 className="editProfileTitle text-[28px] font-bold mb-[16px] text-white">Edit Profile</h2>
                        <div className="profileForm flex flex-col gap-[12px]">      {/*Container for the profile form */}
                            <fieldset className="border border-white/20 p-2 rounded-lg">    {/*Fieldset for the personal information of the user */}
                                <legend className="text-lg font-semibold px-2">Personal Information</legend>
                                <div className="personalDetails grid grid-cols-2 gap-4 items-center justify-center">
                                    <input type="text" placeholder="First Name" value={editForm.fullname} onChange={e => setEditForm(prev => ({ ...prev, firstname: e.target.value }))}
                                        className=" userFirstname editProfileInput"/>
                                    <input type="email" placeholder="Email" value={editForm.email} onChange={e => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                                        className="userEmail editProfileInput"/>
                                    <input type="text" placeholder="Phone" value={editForm.phone} onChange={e => setEditForm(prev => ({ ...prev, phone: e.target.value }))}
                                        className="userPhone editProfileInput"/>
                                    <input type="date" placeholder="Date of Birth" value={editForm.dateOfBirth} onChange={e => setEditForm(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                                        className="userDateOfBirth editProfileInput"/>
                                </div>
                            </fieldset>
                            <fieldset className="border border-white/20 p-2 rounded-lg">    {/*Fieldset for the home address of the user */}
                                <legend className="text-lg font-semibold px-2">Home Address</legend>
                                <div className="homeAddress grid grid-cols-3 gap-4 items-center justify-center">
                                     <input type="text" placeholder="Province" value={editForm.province} onChange={e => setEditForm(prev => ({ ...prev, province: e.target.value }))}
                                        className="userProvince editProfileInput"/>
                                    <input type="text" placeholder="City" value={editForm.city} onChange={e => setEditForm(prev => ({ ...prev, city: e.target.value }))}
                                        className="userCity editProfileInput"/>
                                    <input type="text" placeholder="Suburb" value={editForm.suburb} onChange={e => setEditForm(prev => ({ ...prev, suburb: e.target.value }))}
                                        className="userSuburb editProfileInput"/>
                                </div>
                            </fieldset>
                            <fieldset className="border border-white/20 p-2 rounded-lg">    {/*Fieldset for the next of kin details of the user */}
                                <legend className="text-lg font-semibold px-2">Next of Kin Details</legend>
                                <div className="nextOfKinDetails grid grid-cols-2 gap-4  items-center justify-center">
                                    <input type="text" placeholder="Next of Kin Name" value={editForm.nextOfKin} onChange={e => setEditForm(prev => ({ ...prev, nextOfKin: e.target.value }))}
                                        className="userNextOfKin editProfileInput"/>
                                    <input type="text" placeholder="Next of Kin Phone" value={editForm.nextOfKinPhone} onChange={e => setEditForm(prev => ({ ...prev, nextOfKinPhone: e.target.value }))}
                                        className="userNextOfKinPhone editProfileInput"/>
                                </div>
                            </fieldset>
                            {/* Button to save changes made to the profile */}
                            <button onClick={handleSaveProfile} className="saveProfileChangesBtn w-[100%] py-[10px] px-[12px] bg-[#3b82f6] 
                                rounded-[8px] text-white font-[13px] cursor-pointer mt-[12px] hover:bg-[#2563eb] hover:translate-y-[-2px]">
                                Save Changes
                            </button>
                        </div>
                    </div>
                  </div>
                )}
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