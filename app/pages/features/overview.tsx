// ============ Overview feature of the dashboard============
import { useState, useRef, useEffect } from 'react';
import { Bell, MessageSquare } from 'lucide-react';

const TWELVE_HOURS = 12 * 60 * 60 * 1000;
// Sample data for upcoming tasks
// TODO: Replace with data from the database
const sampleUpcomingTasks = [
  { id: 1, description: 'Take morning medication', date: new Date(Date.now() + 2 * 60 * 60 * 1000) },
  { id: 2, description: 'Blood pressure check', date: new Date(Date.now() + 5 * 60 * 60 * 1000) },
  { id: 3, description: 'Doctor appointment', date: new Date(Date.now() + 8 * 60 * 60 * 1000) },
  { id: 4, description: 'Evening walk', date: new Date(Date.now() + 15 * 60 * 60 * 1000) },
  { id: 5, description: 'Take evening medication', date: new Date(Date.now() + 18 * 60 * 60 * 1000) },
  { id: 6, description: 'Take evening medication', date: new Date(Date.now() + 18 * 60 * 60 * 1000) },
  { id: 7, description: 'Take evening medication', date: new Date(Date.now() + 18 * 60 * 60 * 1000) },
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
    const [profile, setProfile] = useState({
    name: 'Donald',     //TODO: Replace with details from the database
    email: 'donald@example.com',    //TODO: Replace with details from the database
    phone: '+1 234 567 8900',       //TODO: Take input from the form,into the database, then use details from the database
    dob: '1985-06-15',      //TODO: Take input from the form,into the database, then use details from the database
  });
   const [metrics, setMetrics] = useState<Record<string, string>>({});   //Setting the user's health metrics
    return (
        <div className="overviewSection min-h-screen bg-blue-500 bg-cover bg-center bg-no-repeat">
            {/* Header of the overview page */}
            <header className="overviewHeader flex items-center justify-between py-[20px] pl-[32px] border-b-[2px]">
                <div className="welcomeMessage font-[16px] text-[rgbs(0,0,0,0.7)] items-center justify-center">
                  Welcome back <strong className="text-black font-[18px]">{profile.name.toUpperCase()}</strong>
                </div>
                <div className="notificationIcon mr-[3dvw] grid grid-cols-1">
                   <button className="cursor-pointer text-black p-[4px]">
                        <Bell size={35} />
                        <span className="absolute flex items-center justify-center ml-5 -mt-10 bg-[rgba(255,0,0,0.8)] text-white rounded-lg w-[18px] h-[18px] font-[5px] font-200">3</span>
                    </button>
                </div>
            </header>
            {/* Container for the main content of the overview page */}
            <div className="overviewContent grid grid-cols-1 gap-2 mt-[8dvh] w-[95%] mx-[2.5%]">
                <div className="healthMetrics grid grid-cols-5 gap-2 px-2 border-black border-2 h-[14dvh] rounded-lg">    {/*Health matrics of the user */}
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
                    <div className="upcomingTasks border-black border-2 w-[50%] rounded-lg scroll-y">       {/*Upcoming tasks container */}
                        <h3 className="text-center text-[20px] font-600 mt-[16px] text-black">Upcoming Tasks</h3>
                        <div className="flex justify-between pb-[8px] border-b-1 border-b-['#2a2a2a'] mb-[12px] px-5">
                          <span className="font-[13px] text-black">Description</span>
                          <span className="font-[13px] text-black">Date</span>
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
                    <div className="hisoricalTasks border-black border-2 w-[50%] rounded-lg">       {/*Historical tasks container */}
                        <h3 className="text-center text-[20px] font-600 mt-[16px] text-black">History</h3>
                        <div className="flex justify-between pb-[8px] border-b-1 border-b-['#2a2a2a'] mb-[12px] px-5">
                          <span className="font-[13px] text-black">Description</span>
                          <span className="font-[13px] text-black">Date</span>
                        </div>
                        {sampleHistory.map(item => (
                            <div key={item.id} className="flex justify-between items-center py-[8px] px-5 border-b border-black">
                              <span style={{ fontSize: '13px', color: '#e5e7eb' }}>{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatbotIcon flex justify-end">
                    <button className="chatbot cursor-pointer text-black">
                        < MessageSquare size={35}/>
                    </button>
                </div>
            </div>
        </div>
    )
}