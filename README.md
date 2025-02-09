# PWA Expense Tracker

A **Progressive Web App (PWA)** for tracking expenses using **HTML, CSS, and JavaScript**, with **Local Storage** for offline support. This app allows users to record their expenses and download them as Excel or CSV files.

## Features 🚀
- **Offline Support**: Works without an internet connection.
- **Local Storage**: Saves data in the browser with no external server.
- **PWA Installable**: Can be added to home screens on mobile and desktop.
- **Expense Tracking**: Easily record expenses with amount, category, and payment method.
- **Export Data**: Download expenses as **CSV/Excel**.
- **Mobile-Friendly UI**: Works smoothly on any device.

---
## Installation 📲

### **1️⃣ Run Locally**
1. Clone the repository:
   ```bash
   git clone https://praveenpra.github.io/expense-tracker-pwa.git
   cd expense-tracker-pwa
   ```
2. Open `index.html` in a browser.

### **2️⃣ Host for Free**
- Use **GitHub Pages**, **Netlify**, or **Vercel** to deploy.
- For GitHub Pages, enable it under **Settings → Pages**.

---
## Usage 📝

### **1️⃣ Add Expenses**
- Enter amount, category, date, and payment method and other details.
- Click **"Add Expense"** to save it.

### **2️⃣ View Expenses**
- Expenses are listed on the page.
- Data persists even after refresh.

### **3️⃣ Export Data**
- Click **"Download CSV"** or **"Download Excel"**.
- Data will be saved as a file for external use.

### **4️⃣ Install as PWA**
- Open the app in **Chrome/Edge (mobile or desktop)**.
- Click **"Add to Home Screen"** or **"Install App"**.
- The app will launch in fullscreen like a native app.

---
## Technical Details 🛠️

### **Service Worker (Offline Support)**
- A **service worker** caches necessary files.
- Ensures the app loads even without internet.

### **Local Storage (Data Persistence)**
- Expenses are stored in `localStorage`.
- Data is never sent to external servers.

### **Manifest File (PWA Installation)**
- Defines app name, icons, and start URL.

```json
{
  "name": "Expense Tracker",
  "short_name": "Expenses",
  "start_url": "index.html",
  "display": "standalone",
  "icons": [
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---
**Enjoy your Expense Tracker! 🎉**

