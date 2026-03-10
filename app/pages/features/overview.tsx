// ============ Overview feature of the dashboard============
import { useState, useRef, useEffect } from 'react';
import { Bell, MessageSquare, X } from 'lucide-react';

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
// The user's health metrics
const healthMetrics = [
  { label: 'Health Status', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { label: 'Sleep Quality', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { label: "Today's Mood", options: ['😊 Happy', '😐 Neutral', '😔 Sad', '😤 Stressed'] },
  { label: 'Energy Level', options: ['High', 'Medium', 'Low'] },
  { label: 'Medication Taken', options: ['Yes', 'No', 'Partial'] },
];

export default function Overview(){
  const [showChatBot, setShowChatBot] = useState(false);        //Showing full user details
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
  const [metrics, setMetrics] = useState<Record<string, string>>({});   //Setting the user's health metrics
  const [showBellDropdown, setShowBellDropdown] = useState(false);      //Displaying the notifications dropdown
  //   Classifying tasks as upcoming soon or not,depending on the due time
  const upcomingSoon = sampleUpcomingTasks.filter(
    t => t.date.getTime() - Date.now() <= TWELVE_HOURS && t.date.getTime() > Date.now()
  );
  const bellCount = upcomingSoon.length;        //Attaching the number of upcoming tasks to the bell icon
// Setting the date formats for both upcoming and historical tasks
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };
  return (
      <div className="overviewSection min-h-screen bg-[url('./images/overview_back.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Header of the overview page */}
          <div className="blurBackground inset-0 bg-[rgba(0,0,0,0.4)] h-[100vh]">
          <header className="overviewHeader flex items-center justify-between py-[20px] pl-[32px] border-b-[2px]">
              <div className="welcomeMessage font-[16px] text-[rgbs(0,0,0,0.7)] items-center justify-center">
                Welcome back <strong className="text-black font-[18px]">{profile.fullname.toUpperCase()}</strong>
              </div>
              <div className="notificationIcon mr-[3dvw] grid grid-cols-1">
                   <button onClick={() => setShowBellDropdown(!showBellDropdown)} className="cursor-pointer text-black p-[4px]">
                  <Bell size={30} />
                  {bellCount > 0 && (
                    <span className="absolute flex items-center justify-center top-[2.5dvh] right-[3dvw] bg-[rgba(255,0,0,0.8)] text-white rounded-lg w-[18px] h-[18px] font-[5px] font-200">{bellCount}</span>
                  )}
                </button>
                {/* Bell dropdown */}
                {showBellDropdown && (
                  <div className="absolute top-[5dvh] right-[5.5dvw] bg-[rgba(0,0,0,0.9)] border-[1px] rounded-lg w-[300px] z-100">
                    <div className="p-[16px] border-b border-1 border-['#2a2a2a']">
                      <span style={{ fontWeight: 600, fontSize: '14px' }}>Upcoming in 12 hours</span>
                    </div>
                    {upcomingSoon.length === 0 ? (<div style={{ padding: '16px', color: '#9ca3af', fontSize: '13px' }}>No upcoming tasks</div>) : (
                      upcomingSoon.map(task => (
                        <div key={task.id} style={{ padding: '12px 16px', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px' }}>{task.description}</span>
                          <span style={{ fontSize: '11px', color: '#c0392b', fontWeight: 600 }}>{formatDate(task.date)}</span>
                        </div>
                      ))
                    )}
              </div>
                )}
              </div>
          </header>
          {/* Container for the main content of the overview page */}
          <div className="overviewContent grid grid-cols-1 gap-2 mt-[8dvh] w-[95%] mx-[2.5%]">
              <div className="healthMetrics bg-black/50 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 px-2 border-black border-2 h-[14dvh] rounded-lg">    {/*Health matrics of the user */}
                  {healthMetrics.map(metric => (
                    <div key={metric.label} className='flex-1 min-w-[140px] h-[800px]'>
                      <div className="font-15px text-['#9ca3af'] mb-[8px] font-500">{metric.label}</div>
                      <select
                        value={metrics[metric.label] || ''}
                        onChange={e => setMetrics(prev => ({ ...prev, [metric.label]: e.target.value }))}
                        className="w-[100%] py-[10px] px-[12px] bg-['#111111'] border-['#3a3a3a'] border-1 rounded-[8px] cursor-pointer font-[13px]"
                        style={{
                         
                          borderRadius: '8px', color: metrics[metric.label] ? '#ffffff' : '#6b7280',
                          outline: 'none',
                        }}
                      >
                        <option value="" disabled>Select...</option>
                        {metric.options.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>
              {/* Container for the upcoming and historical events */}
              <div className="tasksContainer mt-10 flex flex-col-2 gap-[4dvw] h-[50dvh]">
                  <div className="upcomingTasks bg-black/50 border-black border-2 w-[50%] rounded-lg overflow-y">       {/*Upcoming tasks container */}
                      <h3 className="text-center text-[20px] font-600 mt-[16px] text-white">Upcoming Tasks</h3>
                      <div className="flex justify-between pb-[8px] border-b-1 border-b-['#2a2a2a'] mb-[12px] px-5">
                        <span className="font-[13px] text-white">Description</span>
                        <span className="font-[13px] text-white">Date</span>
                      </div>
                      {sampleUpcomingTasks.map(task => (
                        <div key={task.id} className="flex justify-between items-center py-[8px] px-5 border-b border-black">
                          <span style={{ fontSize: '13px', color: '#e5e7eb' }}>{task.description}</span>
                          <span style={{ fontSize: '12px', color: task.date.getTime() - Date.now() <= TWELVE_HOURS ? '#c0392b' : '#9ca3af', fontWeight: task.date.getTime() - Date.now() <= TWELVE_HOURS ? 600 : 400 }}>
                            {/* {formatDate(task.date)} */}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="hisoricalTasks bg-black/50 border-black border-2 w-[50%] rounded-lg">       {/*Historical tasks container */}
                      <h3 className="text-center text-[20px] font-600 mt-[16px] text-white">History</h3>
                      <div className="flex justify-between pb-[8px] border-b-1 border-b-['#2a2a2a'] mb-[12px] px-5">
                        <span className="font-[13px] text-white">Description</span>
                        <span className="font-[13px] text-white">Date</span>
                      </div>
                      {sampleHistory.map(item => (
                          <div key={item.id} className="flex justify-between items-center py-[8px] px-5 border-b border-black">
                            <span style={{ fontSize: '13px', color: '#e5e7eb' }}>{item.description}</span>
                          </div>
                      ))}
                  </div>
                  {/* Container for the chatbot */}
                  {showChatBot && (
                    <div className="chatBotContainer fixed h-[100dvh] inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50 overflow-y">
                      <div className="closeChatBot w-[50vw] p-[24px] rounded-[16px] bg-black/90 relative">   {/*Container for the icon to close the modal */}
                        <button onClick={() => setShowChatBot(false)} className="closeChatBotBtn absolute top-2 right-2 p-[4px] rounded-full
                         cursor-pointer hover:bg-[rgba(255,255,255,0.1)]">
                          <X size={20} />     {/*Icon to close the chatbot */}
                        </button>
                        <h2 className="chatBotTitle text-[28px] font-bold mb-[16px] text-white">AI Assisstant</h2>
                        <div className="messageContainer">
                          fg
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              <div className="chatbotIcon flex justify-end">
                  <button onClick={() => setShowChatBot(true)} className="chatbot cursor-pointer text-black">
                      <MessageSquare size={35}/>
                  </button>
              </div>
          </div>
          </div>
      </div>
  )
}
