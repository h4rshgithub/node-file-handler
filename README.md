# node-file-handler
Utilize Node.js core modules such as File System, Path, and HTTP to create a simple file management tool that can create, read, and delete files.
# 📁 Node.js File Manager

A simple file management tool built using Node.js core modules — **HTTP**, **File System (fs)**, and **Path**.  
It allows you to **create**, **read**, and **delete** files via a browser or HTTP client like Postman or curl.

---

## 🚀 Features

- ✅ Create a new file with custom content
- 📖 Read contents of an existing file
- ❌ Delete a file

---

## 🧱 Tech Stack

- Node.js (No external packages)
- Core Modules:
  - `fs`
  - `path`
  - `http`
  - `url`

---

## 📂 Project Structure
project-folder/
│
├── file.js # Main Node.js server script
└── files/ # Directory for file operations (auto-created)

---

## ▶️ How to Run

1. **Install Node.js** from [nodejs.org](https://nodejs.org)
2. Open terminal in the project folder
3. Run the app:
   ```bash
   node file.js
🌐 API Endpoints
| Action | Endpoint Example                                                |
| ------ | --------------------------------------------------------------- |
| Create | `http://localhost:3000/create?name=test.txt&content=HelloWorld` |
| Read   | `http://localhost:3000/read?name=test.txt`                      |
| Delete | `http://localhost:3000/delete?name=test.txt`                    |

📦 Notes
All files are stored in the files directory.

Only GET requests are supported (for simplicity).

Directory is auto-created if missing.
---

✍️ Author
Harsh Singh
Feel free to ⭐ the repo or fork for contributions!
Thank You Celebal Team
