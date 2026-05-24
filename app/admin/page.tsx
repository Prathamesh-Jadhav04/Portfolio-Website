/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { playClickSound, playHoverSound } from "@/utils/sounds";
import PremiumBackground from "@/components/PremiumBackground";

type Tab = "PROJECTS" | "SKILLS" | "EXPERIENCE" | "PROFILE" | "RESUME";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  
  const [activeTab, setActiveTab] = useState<Tab>("PROJECTS");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingRepoName, setEditingRepoName] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(d => setData(d));
      
    fetch("/api/github")
      .then(res => res.json())
      .then(d => setGithubProjects(d.projects || []))
      .catch(() => console.error("Admin: failed to fetch github projects"));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    if (passcode === "admin") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("ACCESS DENIED. INVALID CREDENTIALS.");
      setPasscode("");
    }
  };

  const handleSaveToDB = async () => {
    playClickSound();
    setIsSaving(true);
    setSaveStatus("DEPLOYING CHANGES...");
    try {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSaveStatus("CHANGES DEPLOYED SUCCESSFULLY.");
      } else {
        setSaveStatus("ERROR DEPLOYING CHANGES.");
      }
    } catch {
      setSaveStatus("NETWORK ERROR.");
    }
    setIsSaving(false);
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setSaveStatus("ERROR: FILE EXCEEDS 5MB LIMIT.");
      setTimeout(() => setSaveStatus(""), 3000);
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    
    setSaveStatus("UPLOADING RESUME...");
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setSaveStatus("RESUME UPLOADED SUCCESSFULLY.");
      } else {
        setSaveStatus("ERROR UPLOADING RESUME.");
      }
    } catch (error) {
      setSaveStatus("NETWORK ERROR.");
    }
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const startEditing = (index: number, item: Record<string, any>) => {
    playClickSound();
    setEditingIndex(index);
    setFormData(item);
  };

  const addNew = () => {
    playClickSound();
    const newItems: Record<Tab, any> = {
      PROJECTS: { title: "", desc: "", tech: "" },
      SKILLS: { name: "", progress: "██████░░░░", percent: "60%" },
      EXPERIENCE: { id: `commit ${Math.random().toString(16).slice(2,8)}`, role: "", company: "", duration: "", desc: "" },
      PROFILE: {}, // Not handled as array
      RESUME: {}
    };
    
    if (!data) return;
    const tabData = data[activeTab.toLowerCase()];
    setEditingIndex(tabData ? tabData.length : 0);
    setFormData(newItems[activeTab]);
  };

  const deleteItem = (index: number) => {
    playClickSound();
    if (!data) return;
    let key = activeTab.toLowerCase();
    if (key === "profile") key = "profileData";
    
    const newData = { ...data };
    if (key !== "profileData") {
      newData[key] = [...data[key]];
      newData[key].splice(index, 1);
    }
    setData(newData);
  };

  const saveForm = () => {
    playClickSound();
    if (!data) return;
    
    const newData = { ...data };
    
    if (editingRepoName) {
      newData.projectOverrides = newData.projectOverrides ? { ...newData.projectOverrides } : {};
      newData.projectOverrides[editingRepoName] = {
        title: formData.title,
        desc: formData.desc,
        tech: formData.tech
      };
      
      const updatedGithub = githubProjects.map(p => {
        if (p.repoName === editingRepoName) {
          return { ...p, title: formData.title, desc: formData.desc, tech: formData.tech };
        }
        return p;
      });
      setGithubProjects(updatedGithub);
      setEditingRepoName(null);
    } else {
      let key = activeTab.toLowerCase();
      if (key === "profile") key = "profileData";
      
      if (key === "profileData") {
        newData.profileData = { ...formData };
      } else {
        newData[key] = data[key] ? [...data[key]] : [];
        newData[key][editingIndex!] = formData;
      }
      setEditingIndex(null);
    }
    
    setData(newData);
  };

  const cancelForm = () => {
    playClickSound();
    setEditingIndex(null);
    setEditingRepoName(null);
  };

  const startEditingGithub = (item: any) => {
    playClickSound();
    setEditingRepoName(item.repoName);
    setEditingIndex(null);
    setFormData(item);
  };

  const toggleHold = (repoName: string) => {
    playClickSound();
    if (!data) return;
    
    const newData = { ...data };
    let hidden = newData.hiddenProjects ? [...newData.hiddenProjects] : [];
    
    if (hidden.includes(repoName)) {
      hidden = hidden.filter((name: string) => name !== repoName);
    } else {
      hidden.push(repoName);
    }
    
    newData.hiddenProjects = hidden;
    setData(newData);
    
    // Optimistically update githubProjects state to immediately reflect UI change
    const updatedGithub = githubProjects.map(p => {
      if (p.repoName === repoName) {
        return { ...p, isHidden: !p.isHidden };
      }
      return p;
    });
    setGithubProjects(updatedGithub);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4 admin-panel relative">
        <PremiumBackground />
        <motion.div 
          className="border border-gray-800 bg-black/80 p-8 max-w-md w-full shadow-[0_0_30px_rgba(255,0,0,0.1)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
            <div className="w-3 h-3 bg-red-900/50"></div>
            <p className="ml-4 font-vt323 text-gray-500 text-sm">MISSION CONTROL LOGIN</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="font-vt323 text-gray-400 text-xl">ENTER PASSCODE:</label>
            <input 
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="bg-transparent border border-gray-700 text-white font-press text-sm p-3 focus:outline-none focus:border-red-500 transition-colors"
              autoFocus
            />
            {error && <p className="font-vt323 text-red-500 text-lg">{error}</p>}
            <button 
              type="submit" 
              className="mt-4 border border-gray-700 p-3 font-press text-xs text-gray-300 hover:bg-white hover:text-black transition-all"
              onMouseEnter={playHoverSound}
            >
              [ AUTHENTICATE ]
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const renderList = () => {
    const key = activeTab.toLowerCase();
    const items = data?.[key] || [];

    if (activeTab === "RESUME") {
      return (
        <div className="border border-gray-800 p-6 bg-[#050505] font-vt323 flex flex-col gap-4">
          <p className="text-white text-xl border-b border-gray-800 pb-2">UPLOAD NEW RESUME (PDF, MAX 5MB)</p>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleResumeUpload}
            className="text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-700 file:text-sm file:font-press file:bg-black file:text-white hover:file:bg-white hover:file:text-black hover:file:cursor-pointer transition-all"
          />
        </div>
      );
    }

    if (activeTab === "PROFILE") {
      const pData = data?.profileData;
      return (
        <div className="border border-gray-800 p-4 mb-4 bg-[#050505] font-vt323">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white text-xl mb-2">{pData?.name}</p>
              <p className="text-gray-500">{pData?.tagline}</p>
              <p className="text-gray-600 mt-2">{pData?.established}</p>
            </div>
            <button 
              onClick={() => { setEditingIndex(0); setFormData(pData); setActiveTab("PROFILE"); }}
              className="text-yellow-500 hover:text-white px-3 py-1 border border-gray-800"
            >
              EDIT
            </button>
          </div>
        </div>
      );
    }

    if (activeTab === "PROJECTS") {
      return (
        <div className="flex flex-col gap-4">
          <div className="mb-4 text-gray-400 font-vt323 border-l-2 border-[var(--primary-color)] pl-3 bg-black/50 p-2 border border-gray-800">
            {">"} NOTE: Projects are synced LIVE from GitHub. Use HOLD to hide a project from the public portfolio without deleting it.
          </div>
          {githubProjects.length > 0 ? githubProjects.map((item: any, idx: number) => (
            <div key={idx} className={`border p-4 bg-[#050505] flex justify-between items-center group transition-all ${item.isHidden ? 'border-orange-900/50 opacity-60' : 'border-gray-800'}`}>
              <div>
                <p className={`text-lg ${item.isHidden ? 'text-gray-500 line-through' : 'text-white'}`}>{item.title}</p>
                <p className="text-gray-600 text-sm mt-1">{item.tech}</p>
                {item.isHidden && <span className="text-orange-500 text-xs mt-2 inline-block">[ CURRENTLY ON HOLD ]</span>}
              </div>
              <div className="flex gap-2 opacity-100 sm:opacity-50 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => startEditingGithub(item)}
                  className="px-3 py-2 border text-sm text-yellow-500 border-yellow-900/50 hover:border-yellow-500 hover:bg-yellow-900/20 transition-colors"
                  onMouseEnter={playHoverSound}
                >
                  [ EDIT ]
                </button>
                <button 
                  onClick={() => toggleHold(item.repoName)}
                  className={`px-3 py-2 border text-sm transition-colors ${item.isHidden ? 'text-green-500 border-green-900/50 hover:bg-green-900/20' : 'text-orange-500 border-orange-900/50 hover:bg-orange-900/20'}`}
                  onMouseEnter={playHoverSound}
                >
                  {item.isHidden ? "[ UNHOLD ]" : "[ HOLD ]"}
                </button>
              </div>
            </div>
          )) : (
            <p className="text-gray-500">LOADING GITHUB REPOSITORIES...</p>
          )}
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {items.map((item: Record<string, any>, idx: number) => (
          <div key={idx} className="border border-gray-800 p-4 bg-[#050505] flex justify-between items-center group">
            <div>
              <p className="text-white text-lg">{item.title || item.name || item.role}</p>
              <p className="text-gray-500 text-sm mt-1">{item.desc || item.company || item.percent}</p>
            </div>
            <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => startEditing(idx, item)}
                className="text-yellow-500 hover:text-white px-3 py-1 border border-gray-800 hover:border-yellow-500 transition-colors"
                onMouseEnter={playHoverSound}
              >
                EDIT
              </button>
              <button 
                onClick={() => deleteItem(idx)}
                className="text-red-500 hover:text-white px-3 py-1 border border-gray-800 hover:border-red-500 transition-colors"
                onMouseEnter={playHoverSound}
              >
                DEL
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderForm = () => {
    if (!formData) return null;
    
    return (
      <div className="border border-green-900/50 p-6 bg-[#050505] shadow-[0_0_20px_rgba(0,255,0,0.05)]">
        <h3 className="text-white text-xl mb-6 border-b border-gray-800 pb-2">
          {editingRepoName ? `EDITING GITHUB PROJECT: ${editingRepoName}` :
           (editingIndex !== null && (activeTab === "PROFILE" ? data?.profileData : data?.[activeTab.toLowerCase()]?.[editingIndex]) ? "EDITING" : "NEW")} {activeTab}
        </h3>
        <div className="flex flex-col gap-4">
          {Object.keys(formData).map((key) => {
            // Ignore internal API fields when editing github project overrides
            if (editingRepoName && (key === 'repoName' || key === 'isHidden' || key === 'github' || key === 'demo')) return null;
            return (
              <div key={key} className="flex flex-col gap-2">
              <label className="text-gray-500 uppercase">{key}:</label>
              {key === 'desc' ? (
                <textarea
                  name={key}
                  value={formData[key]}
                  onChange={handleFormChange}
                  rows={4}
                  className="bg-black border border-gray-800 text-white p-3 font-vt323 text-xl focus:border-green-500 outline-none resize-none"
                />
              ) : (
                <input
                  type="text"
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleFormChange}
                  className="bg-black border border-gray-800 text-white p-3 font-vt323 text-xl focus:border-green-500 outline-none"
                />
              )}
            </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-8">
          <button 
            onClick={saveForm}
            className="flex-1 border border-green-500 bg-green-500/10 text-green-500 py-3 hover:bg-green-500 hover:text-black transition-colors"
            onMouseEnter={playHoverSound}
          >
            [ SAVE_LOCAL ]
          </button>
          <button 
            onClick={cancelForm}
            className="flex-1 border border-gray-700 text-gray-500 py-3 hover:bg-gray-800 hover:text-white transition-colors"
            onMouseEnter={playHoverSound}
          >
            [ CANCEL ]
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-300 p-4 md:p-8 font-vt323 admin-panel relative">
      <PremiumBackground />
      <div className="max-w-6xl mx-auto border border-gray-800 bg-black/80 p-6 md:p-10 shadow-[0_0_50px_rgba(0,255,0,0.05)] relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-gray-800 pb-6 gap-4">
          <div>
            <h1 className="font-press text-xl md:text-3xl text-white">MISSION CONTROL</h1>
            <p className="text-gray-500 text-lg mt-2">GUI_MODE: ACTIVE</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button 
              onClick={handleSaveToDB}
              disabled={isSaving}
              onMouseEnter={playHoverSound}
              className="border border-green-900/50 bg-green-900/20 text-green-400 px-6 py-3 font-press text-xs hover:bg-green-400 hover:text-black transition-all disabled:opacity-50"
            >
              [ DEPLOY CHANGES TO REPO ]
            </button>
            {saveStatus && <p className={`text-sm ${saveStatus.includes("ERROR") ? "text-red-500" : "text-green-500"}`}>{saveStatus}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 border-r border-gray-800 pr-0 lg:pr-8 flex flex-col gap-2">
            {(["PROFILE", "PROJECTS", "EXPERIENCE", "SKILLS", "RESUME"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setEditingIndex(null); setEditingRepoName(null); playClickSound(); }}
                className={`text-left px-4 py-3 font-press text-xs transition-colors ${activeTab === tab ? "bg-white text-black" : "text-gray-500 hover:text-white hover:bg-gray-900"}`}
                onMouseEnter={playHoverSound}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            {(editingIndex !== null || editingRepoName !== null) ? (
              renderForm()
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl text-white border-l-2 border-[var(--primary-color)] pl-4">
                    MANAGING: {activeTab}
                  </h2>
                  {activeTab !== "PROFILE" && activeTab !== "RESUME" && (
                    <button 
                      onClick={addNew}
                      className="border border-gray-700 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
                      onMouseEnter={playHoverSound}
                    >
                      + ADD NEW
                    </button>
                  )}
                </div>
                {data ? renderList() : <p>LOADING DATABASE...</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
