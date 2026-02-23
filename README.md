# 🌍 Countries Explorer

A modern React application that allows users to explore countries around the world using real data from the REST Countries API.

Users can search by country name, filter by region, and view key country information in a clean Bootstrap-based UI.

---

## ✨ Features

* 🔍 Search countries by name
* 🌍 Filter by region
* ⚡ Real-time data from REST Countries API
* 🧭 Loading and error handling
* 📱 Responsive Bootstrap layout
* 🎨 Clean and modern UI
* 🛡 Safe handling of missing fields

---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd countries-explorer
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

or (if using Create React App):

```bash
npm start
```

### 4️⃣ Open in browser

Visit:

```
http://localhost:3000
```

or the port shown in your terminal.

---

## 🔌 API Endpoints Used

This project uses the **REST Countries API** (no API key required).

### Get all countries

```
https://restcountries.com/v3.1/all
```

### Search by country name

```
https://restcountries.com/v3.1/name/{name}
```

### Filter by region

```
https://restcountries.com/v3.1/region/{region}
```

### Optimized fields used

```
?fields=name,flags,region,population,cca3
```

---

## 🖼 Screenshots

### 🏠 Home Page

![Home Page](https://github.com/Parvaneh-Yaghoubi/Countries-Explorer/blob/main/screenshots/home.png)

---

### 🔎 Search / Filter Results

![Results](https://github.com/Parvaneh-Yaghoubi/Countries-Explorer/blob/main/screenshots/results.png)

---

## 🛠 Tech Stack

* React (JavaScript)
* Bootstrap 5
* Lucide Icons
* REST Countries API

---

## 📌 Notes

* The app properly handles loading and error states.
* Search is triggered when the input length is ≥ 2 characters.
* The UI is fully responsive.
* Keys are safely handled to prevent React warnings.

---

## 👩‍💻 Author

Built with ❤️ by Parvaneh!
