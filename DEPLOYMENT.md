# AutoAI Dealership Platform

## 🚀 Quick Start

**Single File. No Dependencies. Ready to Deploy.**

This is a production-ready call centre agent tool built as a single `bb-hatfield.html` file. It works offline, stores all data in localStorage, and is optimized for Cloudflare Pages.

### Files
- **`bb-hatfield.html`** - The entire application (72KB, 1,720 lines)
- Drop it anywhere, open in browser, start using immediately

## 📋 Features

### For Agents
- **My Dashboard** - Personal KPIs: active leads, conversions, GP, avg deal value
- **My Leads Pipeline** - All your leads by stage (enquiry → application → banked → lost)
- **Pre-Qualification Tool** - NCA-grade calculator (gross income, DTI, deemed expenses)
- **Vehicle Finder** - Catalog of 12+ vehicles with specs and pricing
- **Sales Scripts** - Proven scripts for enquiry, application, banked, and lost leads
- **Activity Log** - Track all your leads, closed deals, and conversion rate

### Data Management
- **Snapshots** - Save up to 10 snapshots of your data to restore later
- **Export/Import** - Backup all leads as JSON, restore anytime
- **Agent Selector** - Switch between agents (Rudi, Lesedi, Tiisetso) to see their data

### Tech Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- Chart.js from CDN (gracefully degrades if offline)
- localStorage for all data persistence
- No backend required
- Works in any modern browser (Chrome, Firefox, Safari, Edge)

---

## 🌐 Deployment

### Option 1: Cloudflare Pages (Recommended)
```bash
# 1. Push to GitHub
git push origin feature/unified-app

# 2. Create new Cloudflare Pages site
# - Connect to your repo
# - Build command: (leave empty)
# - Publish directory: /

# 3. Done! Your app is live
```

### Option 2: Self-Hosted
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or Node.js
npx http-server

# Or Docker
docker run -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx

# Open http://localhost:8000/bb-hatfield.html
```

### Option 3: Manual
1. Copy `bb-hatfield.html` to your web server
2. Access via browser: `https://yourdomain.com/bb-hatfield.html`

---

## 💾 Data Storage

All data is stored in **localStorage** (no server needed):

| Storage Key | Content | Limit |
|---|---|---|
| `bbh_app_data_v1` | All leads, history | ~5MB per domain |
| `bbh_snapshots_v1` | Up to 10 snapshots | ~1MB per domain |
| `bbh_current_agent` | Selected agent name | <1KB |

**No data leaves your browser.** Everything is private, offline, and under your control.

---

## 🔑 Using the App

### 1. Select Your Agent
On startup, choose your name from the dropdown (Rudi, Lesedi, or Tiisetso). Your selection is saved.

### 2. Dashboard
- See your KPIs at a glance
- Quick action buttons to start workflows
- Hot leads table shows urgent follow-ups

### 3. Add Leads
Click "Add New Lead" to:
- Enter customer name, phone, agent
- Set vehicle interest and temperature (Hot/Warm/Cold)
- Auto-set stage to "enquiry"

### 4. Pre-Qualify
Run prospects through the pre-qual calculator:
- Gross monthly income
- Net income and expenses
- Vehicle price and finance terms
- Credit score
- Get instant qualification verdict (Qualified / Refer to Manager / Not Qualified)

### 5. Look Up Vehicles
Browse 12+ vehicles:
- Suzuki (Swift, Baleno, Celerio, Fronx, Grand Vitara)
- Renault (Kwid, Kiger, Triber)
- Mahindra (XUV 3XO, Scorpio-N)
- GAC MOTOR (EMKOO, GS3 Emzoom)

### 6. Get Sales Scripts
Scripts for each lead stage:
- **Enquiry**: Opener, qualifying questions, objection handling
- **Application**: Documentation checklist, bank submission flow
- **Banked**: Delivery checklist, upsell opportunities, referral ask
- **Lost**: Recovery scripts, feedback questions, win-back strategy

### 7. Track Your Leads
- Move leads through stages (edit any lead to change stage)
- Add GP (gross profit) when deal closes
- See your conversion rate and performance metrics

### 8. Snapshots
Save snapshots of your data at any point:
- "Before campaign"
- "End of week"
- "Before major change"

Restore any snapshot instantly-reverts all leads and history to that moment.

---

## 📊 Pre-Qualification Calculator

The calculator implements **NCA compliance** with:
- **Deemed Expenses** (sliding scale based on income)
- **DTI Ratio** (Debt-to-Income, max 50%)
- **Net Surplus** (discretionary income after all expenses)
- **Interest Rate** calculation based on credit score
- **Monthly Installment** with balloon calculation

**Qualification Logic:**
- ✓ QUALIFIED: All metrics pass
- ⚡ REFER TO MANAGER: Borderline (high DTI but qualifies)
- ✗ NOT QUALIFIED: Income too low, poor credit, or metrics fail

---

## 🎨 UI/UX

- **Dark theme** with cyan accents (optimized for call centre environments)
- **Responsive design** (works on phone, tablet, desktop)
- **Fast interactions** (all calculations instant, no loading)
- **Clear data hierarchy** (most important info first)
- **Micro-interactions** (smooth transitions, confirmations)

---

## ⚙️ Advanced

### Export Data
Click "Export Data" to download JSON of all your leads:
```json
{
  "leads": [
    {"id": 1001, "name": "Thabo Mokwena", "agent": "Rudi", ...},
    ...
  ],
  "exported": "2024-04-15T10:30:00Z"
}
```

Import into another browser or share with team.

### Snapshots API
Snapshots are stored as JSON in localStorage:
```json
{
  "created": "2024-04-15T10:30:00Z",
  "label": "End of Month",
  "data": [
    {"id": 1001, "name": "...", ...}
  ]
}
```

Max 10 snapshots per domain. Oldest automatically removed when limit reached.

---

## 🐛 Troubleshooting

| Issue | Solution |
|---|---|
| Data not saving | Check browser allows localStorage (not in private/incognito) |
| Charts not showing | Check internet (Chart.js CDN required) or refresh page |
| Agent selector empty | Refresh page, select agent again |
| Slow performance | Clear localStorage if >50 leads: DevTools > Application > Clear Storage |
| Lost data | Check snapshots-restore previous snapshot if needed |

---

## 📱 Mobile Support

The app is mobile-friendly but optimized for desktop/tablet use (call centre agent workflows). On mobile:
- All features work
- Navigation sidebar slides in/out
- Charts scale to screen size
- Touch-friendly buttons

---

## 🔐 Security & Privacy

- **No network requests** (except Chart.js CDN)
- **No tracking, analytics, or logging**
- **Data never sent anywhere**
- **All processing happens in-browser**
- **Safe to use on shared computers** (each browser tab has separate localStorage)

---

## 📈 Future Enhancements

Potential additions (without changing core file):
- SMS integration (WhatsApp template button)
- Call recording notes
- Document upload for pre-qual
- Multi-user syncing (via GitHub Gist or Firebase)
- Advanced reporting (PDF export)
- Lead scoring/AI recommendations

---

## 💬 Support

Issues or questions? Check:
1. Browser console (F12 → Console) for errors
2. Verify localStorage isn't disabled
3. Try clearing cache and reloading
4. Check file size (should be ~72KB)

---

## 📄 License

This tool is for AutoAI internal use.

---

**Ready to go!** Drop `bb-hatfield.html` anywhere and start working. 🚀
