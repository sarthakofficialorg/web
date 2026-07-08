import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  getActivities, 
  createActivity, 
  updateActivity, 
  deleteActivity, 
  getJoinSubmissions, 
  getContactSubmissions,
  Activity,
  JoinSubmission,
  ContactSubmission
} from '../lib/firebase';
import { 
  Lock, 
  ShieldCheck, 
  Plus, 
  Edit2, 
  Trash2, 
  Users, 
  Mail, 
  FileText, 
  Activity as ActIcon, 
  Eye, 
  X, 
  ChevronRight, 
  LogOut, 
  ArrowLeft,
  Calendar,
  MapPin,
  Award,
  ListFilter,
  CheckCircle2
} from 'lucide-react';

interface AdminPortalProps {
  onBackToSite: () => void;
  onActivitiesChange?: (activities: Activity[]) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToSite, onActivitiesChange }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Loaded database items
  const [activities, setActivities] = useState<Activity[]>([]);
  const [joinSubmissions, setJoinSubmissions] = useState<JoinSubmission[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);

  // Sync activities change to parent immediately if callback is available
  useEffect(() => {
    if (onActivitiesChange) {
      onActivitiesChange(activities);
    }
  }, [activities, onActivitiesChange]);

  // Navigation tab in admin
  const [activeTab, setActiveTab] = useState<'dashboard' | 'activities' | 'volunteers' | 'contacts'>('dashboard');

  // Edit / Add Activity Modal States
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null); // null means "Add New"
  const [activityForm, setActivityForm] = useState({
    title: '',
    category: 'Education',
    date: '',
    location: '',
    imageUrl: '',
    goalReached: '',
    description: '',
    details: ''
  });
  const [formError, setFormError] = useState('');
  const [formSaving, setFormSaving] = useState(false);

  // Viewer states
  const [viewingJoin, setViewingJoin] = useState<JoinSubmission | null>(null);
  const [viewingContact, setViewingContact] = useState<ContactSubmission | null>(null);

  // Preset Image Options for Activities (Unsplash) to make it easy for Admin to pick a high-quality photo!
  const PRESET_IMAGES = [
    { name: "Education", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" },
    { name: "Children / Group", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" },
    { name: "Support Group", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" },
    { name: "Healthcare", url: "https://images.unsplash.com/photo-1504813184591-015578f1c3f5?auto=format&fit=crop&w=800&q=80" },
    { name: "Food Drive", url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80" },
    { name: "Donation Boxes", url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&w=800&q=80" }
  ];

  const loadAllData = async () => {
    setLoading(true);
    try {
      const acts = await getActivities();
      const joins = await getJoinSubmissions();
      const contacts = await getContactSubmissions();
      setActivities(acts);
      setJoinSubmissions(joins);
      setContactSubmissions(contacts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === '10112') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode.');
    }
  };

  const handleOpenActivityModal = (activity: Activity | null) => {
    setEditingActivity(activity);
    if (activity) {
      setActivityForm({
        title: activity.title,
        category: activity.category,
        date: activity.date,
        location: activity.location,
        imageUrl: activity.imageUrl,
        goalReached: activity.goalReached || '',
        description: activity.description,
        details: activity.details || ''
      });
    } else {
      // Setup blank form
      setActivityForm({
        title: '',
        category: 'Education',
        date: new Date().toISOString().split('T')[0],
        location: '',
        imageUrl: PRESET_IMAGES[0].url,
        goalReached: '',
        description: '',
        details: ''
      });
    }
    setFormError('');
    setIsActivityModalOpen(true);
  };

  const handleSaveActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityForm.title || !activityForm.date || !activityForm.location || !activityForm.description) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSaving(true);

    try {
      if (editingActivity) {
        // Update mode
        await updateActivity(editingActivity.id, activityForm);
      } else {
        // Create mode
        await createActivity(activityForm);
      }
      setIsActivityModalOpen(false);
      await loadAllData();
    } catch (err) {
      setFormError('Failed to save activity to cloud.');
      console.error(err);
    } finally {
      setFormSaving(false);
    }
  };

  const handleDeleteActivity = async (id: string) => {
    if (confirm('Are you sure you want to delete this activity entry? This action is irreversible.')) {
      try {
        await deleteActivity(id);
        await loadAllData();
      } catch (err) {
        alert('Failed to delete activity.');
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Top Admin Branding Banner */}
      <header className="bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center font-bold font-serif text-lg text-white">
            S
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">SARTHAK Admin Hub</h2>
            <p className="text-xs text-rose-400 font-mono">NGO Management Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="btn-back-to-website"
            onClick={onBackToSite}
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            View Website
          </button>
          {isAuthenticated && (
            <button
              id="btn-logout"
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center justify-center p-2.5 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 rounded-xl transition-all cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Main Container Area */}
      {!isAuthenticated ? (
        // Passcode Entrance screen
        <div className="flex-grow flex items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center"
          >
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-rose-600 mx-auto mb-6 border border-pink-100">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Admin Security Access</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
              This space manages volunteer forms, contact queries, and activities content.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              {authError && (
                <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3.5 rounded-xl font-medium">
                  {authError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                  Portal Passcode
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter administrator code"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white font-mono tracking-widest transition-colors text-center"
                  required
                />
              </div>

              <div className="bg-rose-50/50 border border-pink-100 text-rose-800 text-xs p-3.5 rounded-xl leading-relaxed text-center">
                This area is restricted to authorized representatives of the SARTHAK Foundation.
              </div>

              <button
                id="btn-login-submit"
                type="submit"
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-xl cursor-pointer shadow-md shadow-pink-100 hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                Unlock Administrator Console
                <ShieldCheck className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        // Authenticated Dashboard
        <div className="flex-grow flex flex-col md:flex-row">
          
          {/* Admin Sidebar Navigation */}
          <aside className="w-full md:w-64 bg-white border-r border-gray-200 shrink-0">
            <nav className="p-4 space-y-1.5">
              <button
                id="tab-dashboard"
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4.5 h-4.5 shrink-0" />
                  Overview Dashboard
                </div>
                <ChevronRight className={`w-4 h-4 opacity-55 transition-transform ${activeTab === 'dashboard' ? 'rotate-90 text-rose-600' : ''}`} />
              </button>

              <button
                id="tab-activities"
                onClick={() => setActiveTab('activities')}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'activities'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ActIcon className="w-4.5 h-4.5 shrink-0" />
                  Manage Activities ({activities.length})
                </div>
                <ChevronRight className={`w-4 h-4 opacity-55 transition-transform ${activeTab === 'activities' ? 'rotate-90 text-rose-600' : ''}`} />
              </button>

              <button
                id="tab-volunteers"
                onClick={() => setActiveTab('volunteers')}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'volunteers'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4.5 h-4.5 shrink-0" />
                  Join Applications ({joinSubmissions.length})
                </div>
                <ChevronRight className={`w-4 h-4 opacity-55 transition-transform ${activeTab === 'volunteers' ? 'rotate-90 text-rose-600' : ''}`} />
              </button>

              <button
                id="tab-contacts"
                onClick={() => setActiveTab('contacts')}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'contacts'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 shrink-0" />
                  Support Inquiries ({contactSubmissions.length})
                </div>
                <ChevronRight className={`w-4 h-4 opacity-55 transition-transform ${activeTab === 'contacts' ? 'rotate-90 text-rose-600' : ''}`} />
              </button>
            </nav>
          </aside>

          {/* Admin Workspace Content */}
          <main className="flex-grow p-6 md:p-8 max-w-6xl">
            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400">
                <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-sm font-mono uppercase tracking-wider">Syncing database...</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                
                {/* 1. OVERVIEW DASHBOARD */}
                {activeTab === 'dashboard' && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">NGO Overview Dashboard</h3>
                      <p className="text-sm text-gray-500">Live statistics and summaries of form registrations.</p>
                    </div>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Stat Card 1 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Activities</p>
                          <h4 className="text-3xl font-extrabold text-gray-900">{activities.length}</h4>
                        </div>
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                          <ActIcon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Stat Card 2 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Volunteer Forms</p>
                          <h4 className="text-3xl font-extrabold text-gray-900">{joinSubmissions.length}</h4>
                        </div>
                        <div className="w-12 h-12 bg-pink-50 text-rose-600 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Stat Card 3 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Queries</p>
                          <h4 className="text-3xl font-extrabold text-gray-900">{contactSubmissions.length}</h4>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Activity & Submissions Split Panel */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                      {/* Recent Registrants */}
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-96">
                        <div className="px-6 py-4.5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                          <h4 className="font-sans font-bold text-gray-900 flex items-center gap-2">
                            <Users className="w-5 h-5 text-rose-600" />
                            Recent Volunteer Joins
                          </h4>
                          <button onClick={() => setActiveTab('volunteers')} className="text-xs font-semibold text-rose-600 hover:underline">
                            View All
                          </button>
                        </div>
                        <div className="flex-grow overflow-y-auto divide-y divide-gray-100 p-2">
                          {joinSubmissions.length === 0 ? (
                            <p className="p-6 text-center text-sm text-gray-400">No applicants yet.</p>
                          ) : (
                            joinSubmissions.slice(0, 5).map((sub) => (
                              <div key={sub.id} className="p-4 flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors">
                                <div>
                                  <p className="font-sans font-semibold text-gray-800 text-sm">{sub.name}</p>
                                  <p className="font-sans text-xs text-rose-600 font-medium">{sub.skills}</p>
                                </div>
                                <span className="font-mono text-[10px] text-gray-400">
                                  {sub.submittedAt ? sub.submittedAt.split('T')[0] : 'Today'}
                                </span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Recent Inquiries */}
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-96">
                        <div className="px-6 py-4.5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                          <h4 className="font-sans font-bold text-gray-900 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-600" />
                            Recent Contact Messages
                          </h4>
                          <button onClick={() => setActiveTab('contacts')} className="text-xs font-semibold text-rose-600 hover:underline">
                            View All
                          </button>
                        </div>
                        <div className="flex-grow overflow-y-auto divide-y divide-gray-100 p-2">
                          {contactSubmissions.length === 0 ? (
                            <p className="p-6 text-center text-sm text-gray-400">No messages yet.</p>
                          ) : (
                            contactSubmissions.slice(0, 5).map((sub) => (
                              <div key={sub.id} className="p-4 flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="max-w-[70%]">
                                  <p className="font-sans font-semibold text-gray-800 text-sm">{sub.name}</p>
                                  <p className="font-sans text-xs text-gray-500 line-clamp-1">{sub.subject}</p>
                                </div>
                                <span className="font-mono text-[10px] text-gray-400 shrink-0">
                                  {sub.submittedAt ? sub.submittedAt.split('T')[0] : 'Today'}
                                </span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. MANAGE ACTIVITIES */}
                {activeTab === 'activities' && (
                  <motion.div
                    key="activities"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Manage Activities</h3>
                        <p className="text-sm text-gray-500">Add, edit, or delete the activity entries showcased on the website.</p>
                      </div>
                      <button
                        id="btn-add-activity"
                        onClick={() => handleOpenActivityModal(null)}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-pink-100 hover:shadow-none transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Create New Activity
                      </button>
                    </div>

                    {/* Activities List Cards / Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activities.length === 0 ? (
                        <div className="col-span-full bg-white p-12 text-center rounded-2xl border border-gray-100 text-gray-400">
                          No activities registered. Click 'Create New Activity' to start.
                        </div>
                      ) : (
                        activities.map((act) => (
                          <div key={act.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                            <div className="h-40 w-full relative bg-gray-100">
                              <img src={act.imageUrl} alt={act.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="p-5 flex-grow flex flex-col justify-between">
                              <div>
                                <h4 className="font-sans font-bold text-gray-900 text-lg line-clamp-1 mb-2">{act.title}</h4>
                                <div className="flex items-center gap-3 text-xs text-gray-500 font-mono mb-4">
                                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-rose-500" /> {act.date}</span>
                                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-500" /> {act.location}</span>
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">{act.description}</p>
                              </div>

                              <div className="flex items-center gap-2 border-t border-gray-100 pt-4 mt-2">
                                <button
                                  id={`btn-edit-act-${act.id}`}
                                  onClick={() => handleOpenActivityModal(act)}
                                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg transition-colors cursor-pointer"
                                >
                                  <Edit2 className="w-3.5 h-3.5 text-blue-500" />
                                  Edit Content
                                </button>
                                <button
                                  id={`btn-delete-act-${act.id}`}
                                  onClick={() => handleDeleteActivity(act.id)}
                                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-100 rounded-lg transition-colors cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                                  Delete Entry
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 3. VOLUNTEER SUBMISSIONS */}
                {activeTab === 'volunteers' && (
                  <motion.div
                    key="volunteers"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">Volunteer Submissions</h3>
                      <p className="text-sm text-gray-500">Detailed list of individuals who completed the 'Join with Us' form.</p>
                    </div>

                    {/* Registrations Table */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse font-sans">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                              <th className="px-6 py-4">Full Name</th>
                              <th className="px-6 py-4">Email</th>
                              <th className="px-6 py-4">Phone</th>
                              <th className="px-6 py-4">Skills / Interest</th>
                              <th className="px-6 py-4">Date Applied</th>
                              <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            {joinSubmissions.length === 0 ? (
                              <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">No join applications stored.</td>
                              </tr>
                            ) : (
                              joinSubmissions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                                  <td className="px-6 py-4 font-bold text-gray-900">{sub.name}</td>
                                  <td className="px-6 py-4 font-mono text-xs">{sub.email}</td>
                                  <td className="px-6 py-4">{sub.phone}</td>
                                  <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 bg-pink-50 border border-pink-100 text-rose-700 text-xs font-semibold rounded-lg">
                                      {sub.skills}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-mono text-xs">
                                    {sub.submittedAt ? sub.submittedAt.split('T')[0] : 'N/A'}
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <button
                                      id={`btn-view-join-${sub.id}`}
                                      onClick={() => setViewingJoin(sub)}
                                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition-colors"
                                    >
                                      <Eye className="w-3.5 h-3.5" />
                                      Review
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. CONTACT INQUIRIES */}
                {activeTab === 'contacts' && (
                  <motion.div
                    key="contacts"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">Support Inquiries</h3>
                      <p className="text-sm text-gray-500">Messages sent by visitors through the general contact form.</p>
                    </div>

                    {/* Messages Table */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse font-sans">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                              <th className="px-6 py-4">Sender</th>
                              <th className="px-6 py-4">Email</th>
                              <th className="px-6 py-4">Subject</th>
                              <th className="px-6 py-4">Message</th>
                              <th className="px-6 py-4">Date Sent</th>
                              <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            {contactSubmissions.length === 0 ? (
                              <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">No contact submissions stored.</td>
                              </tr>
                            ) : (
                              contactSubmissions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                                  <td className="px-6 py-4 font-bold text-gray-900">{sub.name}</td>
                                  <td className="px-6 py-4 font-mono text-xs">{sub.email}</td>
                                  <td className="px-6 py-4 font-semibold text-gray-850 line-clamp-1 max-w-[200px]">{sub.subject}</td>
                                  <td className="px-6 py-4 text-gray-500 line-clamp-1 max-w-[250px]">{sub.message}</td>
                                  <td className="px-6 py-4 font-mono text-xs">
                                    {sub.submittedAt ? sub.submittedAt.split('T')[0] : 'N/A'}
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <button
                                      id={`btn-view-contact-${sub.id}`}
                                      onClick={() => setViewingContact(sub)}
                                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition-colors"
                                    >
                                      <Eye className="w-3.5 h-3.5" />
                                      Read
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            )}
          </main>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-auto bg-gray-900 border-t border-gray-800 py-6 px-6 text-center text-xs text-gray-400">
        <p>© 2026 SARTHAK NGO Management Suite. Secured Cloud Firestore Active.</p>
      </footer>

      {/* DIALOG MODAL: ADD / EDIT ACTIVITY */}
      <AnimatePresence>
        {isActivityModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-150 my-8"
            >
              <div className="bg-rose-600 text-white p-6 flex justify-between items-center">
                <h4 className="font-sans text-xl font-bold tracking-tight">
                  {editingActivity ? 'Modify Activity Entry' : 'Register New Activity'}
                </h4>
                <button
                  id="btn-close-act-form"
                  onClick={() => setIsActivityModalOpen(false)}
                  className="text-white/80 hover:text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveActivity} className="p-6 md:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
                {formError && (
                  <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3 rounded-xl font-medium">
                    {formError}
                  </div>
                )}

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Activity Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Special Education Kits Giveaway"
                    value={activityForm.title}
                    onChange={(e) => setActivityForm({...activityForm, title: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white"
                  />
                </div>

                {/* Date Conducted */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Date Conducted *</label>
                  <input
                    type="date"
                    required
                    value={activityForm.date}
                    onChange={(e) => setActivityForm({...activityForm, date: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white"
                  />
                </div>

                {/* Location & Impact Badge Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Rural Outskirts"
                      value={activityForm.location}
                      onChange={(e) => setActivityForm({...activityForm, location: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Goal / Impact Achieved (Optional)</label>
                    <input
                      type="text"
                      placeholder="E.g., 200 bags distributed"
                      value={activityForm.goalReached}
                      onChange={(e) => setActivityForm({...activityForm, goalReached: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Image URL, File Upload & Presets */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase">Cover Image *</label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Option A: Paste Image URL */}
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-150 space-y-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Option A: Paste Image URL</span>
                      <input
                        type="url"
                        placeholder="https://example.com/photo.jpg"
                        value={activityForm.imageUrl.startsWith('data:image/') ? '' : activityForm.imageUrl}
                        onChange={(e) => setActivityForm({...activityForm, imageUrl: e.target.value})}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-rose-500 focus:bg-white"
                      />
                    </div>

                    {/* Option B: Local File Upload */}
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-150 space-y-2 flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Option B: Upload Local Image</span>
                      <label className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-750 rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-all text-center">
                        <Plus className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Choose Local Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            
                            if (file.size > 800 * 1024) {
                              alert("The selected image file is too large! Please choose an image under 800KB to ensure smooth storage inside Cloud Firestore.");
                              return;
                            }

                            const reader = new FileReader();
                            reader.onloadend = () => {
                              if (typeof reader.result === 'string') {
                                setActivityForm(prev => ({ ...prev, imageUrl: reader.result }));
                              }
                            };
                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Active Selection Image Preview */}
                  {activityForm.imageUrl && (
                    <div className="bg-rose-50/30 p-3 rounded-2xl border border-pink-100 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-gray-150">
                        <img 
                          src={activityForm.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=100&q=80";
                          }}
                        />
                      </div>
                      <div className="text-left space-y-1">
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase font-mono">Image Selected</span>
                        <p className="text-[11px] text-gray-500 font-mono line-clamp-1 max-w-[320px]">
                          {activityForm.imageUrl.startsWith('data:image/') ? 'Uploaded Base64 File' : activityForm.imageUrl}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Preset helpers */}
                  <div className="mt-2 flex flex-wrap gap-1.5 items-center pt-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase mr-1">Quick Presets:</span>
                    {PRESET_IMAGES.map((img) => (
                      <button
                        key={img.name}
                        type="button"
                        onClick={() => setActivityForm({...activityForm, imageUrl: img.url})}
                        className={`px-2.5 py-1 border text-[10px] font-semibold rounded-lg cursor-pointer transition-colors ${
                          activityForm.imageUrl === img.url
                            ? 'bg-rose-500 border-rose-500 text-white'
                            : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-650'
                        }`}
                      >
                        {img.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brief Summary (Line clamp on website) */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Summary Outline *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Provide a 2-3 sentence overview that appears on the card..."
                    value={activityForm.description}
                    onChange={(e) => setActivityForm({...activityForm, description: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white resize-none"
                  />
                </div>

                {/* Detailed Writing */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Detailed Writing / In-depth Works (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Provide a comprehensive write-up of the event. Explain the timeline, feedback, background, and results. This will show up inside the 'Read More' detail modal..."
                    value={activityForm.details}
                    onChange={(e) => setActivityForm({...activityForm, details: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex gap-3 justify-end">
                  <button
                    id="btn-cancel-act"
                    type="button"
                    onClick={() => setIsActivityModalOpen(false)}
                    className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    id="btn-save-act"
                    type="submit"
                    disabled={formSaving}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white text-sm font-semibold rounded-xl shadow-md cursor-pointer transition-all"
                  >
                    {formSaving ? 'Saving Changes...' : 'Save Activity'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DIALOG MODAL: VOLUNTEER REVIEW */}
      <AnimatePresence>
        {viewingJoin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="bg-gray-900 text-white p-6 flex justify-between items-center border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-rose-500" />
                  <h4 className="font-sans text-lg font-bold tracking-tight">Review Application</h4>
                </div>
                <button
                  id="btn-close-view-join"
                  onClick={() => setViewingJoin(null)}
                  className="text-gray-400 hover:text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Applicant Name</p>
                    <p className="font-sans text-sm font-extrabold text-gray-900">{viewingJoin.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Focus Expertise</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-pink-50 border border-pink-100 text-rose-700 text-xs font-semibold rounded-lg">
                      {viewingJoin.skills}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Email Address</p>
                    <p className="font-sans text-sm font-semibold text-gray-800 font-mono break-all">{viewingJoin.email}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Phone Number</p>
                    <p className="font-sans text-sm font-semibold text-gray-800">{viewingJoin.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Motivation & Goals</p>
                  <p className="font-sans text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100 whitespace-pre-wrap">
                    {viewingJoin.message}
                  </p>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>Registered: {viewingJoin.submittedAt || 'N/A'}</span>
                  <button
                    id="btn-close-view-join-footer"
                    onClick={() => setViewingJoin(null)}
                    className="px-4 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DIALOG MODAL: CONTACT MESSAGE REVIEW */}
      <AnimatePresence>
        {viewingContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="bg-gray-900 text-white p-6 flex justify-between items-center border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <h4 className="font-sans text-lg font-bold tracking-tight">Support Message</h4>
                </div>
                <button
                  id="btn-close-view-contact"
                  onClick={() => setViewingContact(null)}
                  className="text-gray-400 hover:text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Sender Name</p>
                    <p className="font-sans text-sm font-extrabold text-gray-900">{viewingContact.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Subject</p>
                    <p className="font-sans text-sm font-bold text-gray-800 line-clamp-1">{viewingContact.subject}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Email Address</p>
                    <p className="font-sans text-sm font-semibold text-gray-800 font-mono break-all">{viewingContact.email}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Phone Number</p>
                    <p className="font-sans text-sm font-semibold text-gray-800">{viewingContact.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Message Detail</p>
                  <p className="font-sans text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100 whitespace-pre-wrap">
                    {viewingContact.message}
                  </p>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>Received: {viewingContact.submittedAt || 'N/A'}</span>
                  <button
                    id="btn-close-view-contact-footer"
                    onClick={() => setViewingContact(null)}
                    className="px-4 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
