import os
import re

file_path = "app.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add Daily Diary to Sidebar
sidebar_addition = """<div class="nav-section">Daily Operations</div>
            <div class="nav-item" onclick="switchView('diary',this)"><i class="fas fa-calendar-day"></i> Daily Diary <span class="nav-badge" id="navDiaryCount">0</span></div>"""
content = content.replace('<div class="nav-section">Lead Management</div>', sidebar_addition + '\n            <div class="nav-section">Lead Management</div>')

# 2. Add Diary View HTML
diary_view_html = """
        <!-- DIARY VIEW -->
        <div id="diaryView" class="view">
            <div class="page-title">Daily Diary</div>
            <div class="page-sub">AutoHUB-style Executive Deal Cards for today's follow-ups</div>
            <div style="margin-bottom: 16px; display: flex; justify-content: space-between;">
                <div style="color: var(--text-muted); font-size: 13px;">Follow-ups scheduled for today (or past due).</div>
            </div>
            <div id="diaryContainer" style="display: flex; flex-direction: column; gap: 16px;">
                <!-- Diary Cards rendered via JS -->
            </div>
        </div>
"""
content = content.replace('<div id="leadsView" class="view">', diary_view_html + '\n        <div id="leadsView" class="view">')

# 3. Update seedData
seed_data_search = r"function seedData\(\) \{(.*?)\saveDB\(\);\s*\}"
seed_replacement = """function seedData() {
    db.leads = [
        {id:1001,agent:'Rudi',customer:'Thabo Mokwena',phone:'0821234567',vehicle:'GAC GS3 Emzoom 1.5T Elite DCT',source:'Walk-in',temperature:'Hot',score:90,dealHeat:'Stage 1: Hot Money',stage:'enquiry',gp:0,created:new Date().toISOString(),followUpDate:new Date().toISOString().split('T')[0],nextAction:'Call to confirm test drive.',waSnapshot:'Customer requested address.',applicationDate:null,bankedDate:null,lostDate:null,noteHistory:[{date:new Date().toISOString(), text:'Lead accepted. Automatic greeting sent.', type:'auto'}, {date:new Date().toISOString(), text:'Customer requested address.', type:'wa'}],financeData:{},qualData:null,quoteData:null,applicationData:null},
        {id:1002,agent:'Lesedi',customer:'Sarah van der Merwe',phone:'0729876543',vehicle:'Suzuki Swift GLX CVT',source:'Phone',temperature:'Warm',score:65,dealHeat:'Stage 2: Active',stage:'application',gp:0,created:new Date(Date.now()-86400000).toISOString(),followUpDate:new Date().toISOString().split('T')[0],nextAction:'Follow up on payslips.',waSnapshot:'Awaiting documents.',applicationDate:new Date(Date.now()-86400000).toISOString(),bankedDate:null,lostDate:null,noteHistory:[],financeData:{},qualData:null,quoteData:null,applicationData:null},
        {id:1003,agent:'Tiisetso',customer:'John Ndlovu',phone:'0834567890',vehicle:'Renault Kiger Intens',source:'Website',temperature:'Warm',score:15,dealHeat:'Stage 5: Inactive',stage:'banked',gp:18500,created:new Date(Date.now()-172800000).toISOString(),followUpDate:new Date(Date.now()+86400000).toISOString().split('T')[0],nextAction:'None.',waSnapshot:'Delivered.',applicationDate:new Date(Date.now()-259200000).toISOString(),bankedDate:new Date(Date.now()-172800000).toISOString(),lostDate:null,noteHistory:[],financeData:{},qualData:null,quoteData:null,applicationData:null}
    ];
    saveDB();
}"""
content = re.sub(seed_data_search, seed_replacement, content, flags=re.DOTALL)

# 4. Enhance CC Modal with Score & ERA features
cc_header_old = """<div class="cc-info"><h2 id="ccName">—</h2><span id="ccSub">—</span></div>"""
cc_header_new = """<div class="cc-info"><h2 id="ccName" style="display:flex;align-items:center;gap:10px;">— <span id="ccScoreBadge" style="font-size:11px;padding:3px 8px;border-radius:4px;background:var(--accent-red);color:#fff;">Score: 0%</span></h2><span id="ccSub">—</span></div>"""
content = content.replace(cc_header_old, cc_header_new)

# Modify tabs to add Dual-Log Form to notes panel
notes_panel_old = """<div id="ccPanel-notes" class="cc-panel"></div>"""
notes_panel_new = """<div id="ccPanel-notes" class="cc-panel">
                <div class="card" style="margin-bottom: 16px; background: rgba(0, 212, 255, 0.05); border: 1px solid var(--accent-cyan);">
                    <div class="card-title" style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-bolt"></i> Dual-Logging Action Form</div>
                    <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 12px;">Logs touchpoint to ERA master file and moves diary follow-up date simultaneously.</div>
                    <textarea id="dualLogNote" class="input" style="height: 60px; margin-bottom: 10px;" placeholder="Call outcome / Note..."></textarea>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div>
                            <div style="font-size:10px; color:var(--text-muted); margin-bottom:4px;">Next Follow-up</div>
                            <input type="date" id="dualLogDate" class="input" style="width: 140px;">
                        </div>
                        <div style="flex:1;">
                            <div style="font-size:10px; color:var(--text-muted); margin-bottom:4px;">New Heat Score (0-100)</div>
                            <input type="number" id="dualLogScore" class="input" style="width: 100px;" min="0" max="100">
                        </div>
                        <button class="btn btn-primary" onclick="executeDualLog()" style="margin-top: 14px;"><i class="fas fa-save"></i> Execute Action</button>
                    </div>
                </div>
                <div id="notesHistoryList"></div>
            </div>"""
content = content.replace(notes_panel_old, notes_panel_new)

# 5. Add renderDiary and Dual Logging JS Functions
js_additions = """
// ============================================================
// DIARY & AUTOHUB FEATURES
// ============================================================
function renderDiary() {
    const container = document.getElementById('diaryContainer');
    container.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];
    
    // Filter leads scheduled for today or earlier (past due)
    const diaryLeads = db.leads.filter(l => l.followUpDate && l.followUpDate <= today && l.stage !== 'banked' && l.stage !== 'lost');
    diaryLeads.sort((a,b) => (b.score||0) - (a.score||0)); // Sort by Heat Score DESC
    
    document.getElementById('navDiaryCount').textContent = diaryLeads.length;
    
    if (diaryLeads.length === 0) {
        container.innerHTML = '<div class="empty-state">No follow-ups scheduled for today. You are caught up!</div>';
        return;
    }
    
    diaryLeads.forEach(l => {
        const heatColor = (l.score >= 75) ? 'var(--accent-red)' : ((l.score >= 40) ? 'var(--accent-orange)' : 'var(--text-muted)');
        const hist = l.noteHistory || [];
        const lastNote = hist.length > 0 ? hist[hist.length-1] : null;
        const timelineHtml = lastNote 
            ? `<div style="font-size:11px; margin-top:8px;"><strong>⏱️ Last Touchpoint (${fmtDate(lastNote.date)}):</strong> ${lastNote.text}</div>`
            : '';
            
        container.innerHTML += `
            <div class="card" style="border-left: 4px solid ${heatColor}; cursor: pointer; transition: 0.2s;" onclick="openCC(${l.id})">
                <div style="display:flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <div style="font-size: 16px; font-weight: 700; display:flex; align-items:center; gap:8px;">
                            👤 ${l.customer} 
                            <span style="font-size:10px; background:${heatColor}; color:#fff; padding:2px 6px; border-radius:4px;">🔥 ${l.dealHeat || 'Unscored'} (Score: ${l.score || 0})</span>
                        </div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">📞 ${l.phone}</div>
                        <div style="font-size: 12px; color: var(--accent-cyan); margin-top: 2px;">🚗 ${l.vehicle || 'No vehicle'}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openWhatsApp()"><i class="fab fa-whatsapp"></i> Chat</button>
                </div>
                <div style="margin-top: 12px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 6px;">
                    <div style="font-size: 11px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">🎯 RECOMMENDED ACTION:</div>
                    <div style="font-size: 12px; color: var(--accent-green);">👉 ${l.nextAction || 'Contact customer'}</div>
                </div>
                <div style="font-size:11px; margin-top:8px; display:flex; align-items:center; gap:6px;">
                    <i class="fab fa-whatsapp" style="color:var(--accent-green);"></i> <strong>Snapshot:</strong> ${l.waSnapshot || 'No recent WA interaction.'}
                </div>
                ${timelineHtml}
            </div>
        `;
    });
}

function executeDualLog() {
    const text = document.getElementById('dualLogNote').value.trim();
    const targetDate = document.getElementById('dualLogDate').value;
    const score = parseInt(document.getElementById('dualLogScore').value);
    
    if (!text || !targetDate) { showToast('Please enter note and next date.'); return; }
    
    const lead = db.leads.find(l => l.id === ccState.id);
    if (!lead) return;
    
    if (!lead.noteHistory) lead.noteHistory = [];
    lead.noteHistory.push({
        date: new Date().toISOString(),
        text: text,
        type: 'manual'
    });
    
    lead.followUpDate = targetDate;
    if (!isNaN(score)) {
        lead.score = score;
        if (score >= 80) lead.dealHeat = 'Stage 1: Hot Money';
        else if (score >= 60) lead.dealHeat = 'Stage 2: Active';
        else if (score >= 40) lead.dealHeat = 'Stage 3: Information';
        else lead.dealHeat = 'Stage 4: Cold';
    }
    
    saveDB();
    showToast('Touchpoint Dual-Logged to ERA & Diary moved.');
    
    document.getElementById('dualLogNote').value = '';
    
    // Refresh UI
    populateNotesTab(lead);
    if (document.getElementById('diaryView').classList.contains('active')) {
        renderDiary();
    }
}

function populateNotesTab(lead) {
    const hist = lead.noteHistory || [];
    let html = '';
    [...hist].reverse().forEach(n => {
        const icon = n.type === 'wa' ? '<i class="fab fa-whatsapp" style="color:var(--accent-green);"></i>' : '<i class="fas fa-history" style="color:var(--text-muted);"></i>';
        html += `<div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--border);">
            <div style="font-size: 10px; color: var(--text-muted); margin-bottom: 4px;">${icon} ${fmtDate(n.date)}</div>
            <div style="font-size: 13px;">${n.text}</div>
        </div>`;
    });
    if (!html) html = '<div class="empty-state">No notes found.</div>';
    document.getElementById('notesHistoryList').innerHTML = html;
}
"""

content = content.replace('// UI HELPERS', js_additions + '\n// UI HELPERS')

# 6. Bind to openCC
opencc_update = """
    if (lead.score !== undefined) {
        document.getElementById('ccScoreBadge').textContent = `Score: ${lead.score}%`;
        document.getElementById('ccScoreBadge').style.background = (lead.score >= 75) ? 'var(--accent-red)' : 'var(--text-muted)';
    }
"""
content = content.replace("document.getElementById('ccCallLink').href = 'tel:' + lead.phone;", "document.getElementById('ccCallLink').href = 'tel:' + lead.phone;" + opencc_update)

# Update switchCCTab to handle 'notes' correctly
tab_patch_find = "if (name === 'details') populateDetailsPanel(lead);"
tab_patch_repl = """if (name === 'details') populateDetailsPanel(lead);
    if (name === 'notes') populateNotesTab(lead);"""
content = content.replace(tab_patch_find, tab_patch_repl)

# Update switchView to trigger renderDiary()
switch_patch_find = "if (id === 'agents') renderAgents();"
switch_patch_repl = """if (id === 'agents') renderAgents();
    if (id === 'diary') renderDiary();"""
content = content.replace(switch_patch_find, switch_patch_repl)

# 7. Add lead count badges logic inside renderLeads & renderDiary to init dashboard properly
init_patch_find = "renderLeads();"
init_patch_repl = "renderLeads(); renderDiary();"
content = content.replace(init_patch_find, init_patch_repl)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
