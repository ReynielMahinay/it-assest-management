# it-assest-management
Odin project to enhance my skill on express and postgreSQL

# 🖥️ IT Asset Inventory System

An internal tool for managing company hardware (e.g., laptops, monitors, peripherals) and software licenses. Built for IT departments to track asset assignments, status, software licenses, and maintenance history.

## 🚀 Features

- Add/edit/delete IT assets (e.g., laptops, monitors)
- Assign assets to employees
- Track asset status: Available, Assigned, In Repair, Retired, Lost
- Filter and search assets, employees, and licenses
- Simple dashboard with counts and summaries

---

## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS 

**Backend:**
- Node.js
- Express.js

**Database:**
- PostgreSQL

---

## 🗃️ Database Schema Overview

### Entities & Relationships

- `employees` (IT users/employees)
- `assets` (hardware inventory)
- `assignments` (linking assets to employees)
- `licenses` (software licenses tied to asset or employee)
- `maintenance_logs` (repair/maintenance history for each asset)


## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/it-asset-inventory-system.git
cd it-asset-inventory-system

