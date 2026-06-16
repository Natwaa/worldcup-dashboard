<<<<<<< HEAD
# 🏆 FIFA World Cup 2026 Predictor Dashboard

ระบบจัดอันดับการทายผลฟุตบอลโลก 2026 แบบ Real-time

ผู้ใช้งานสามารถส่งไฟล์ Excel ทายผลการแข่งขันเข้าระบบ และ Dashboard จะคำนวณคะแนนพร้อมแสดงอันดับผู้เล่นอัตโนมัติ

---

## ✨ Features

* 📊 ตารางคะแนนผู้ทายผล
* 🏆 แสดงอันดับ (Ranking)
* 🎯 คำนวณคะแนนอัตโนมัติจากผลการแข่งขันจริง
* 📈 รองรับการติดตามอันดับที่เพิ่มขึ้นหรือลดลง
* 🌍 แสดงทีมที่ถูกเลือกเป็นแชมป์มากที่สุด
* ⚽ รองรับการแข่งขันฟุตบอลโลก 2026

---

## 📂 Project Structure

```text
worldcup-dashboard/
│
├── app.py
├── score_engine.py
│
├── data/
│   └── results.csv
│
├── uploads/
│   ├── player1.xlsx
│   ├── player2.xlsx
│   └── ...
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── dashboard.js
│
├── templates/
│   └── dashboard.html
│
└── README.md
```

---

## ⚙️ Requirements

* Python 3.10+
* Flask
* Pandas
* OpenPyXL

---

## 🚀 Installation

### 1. Clone Project

```bash
git clone <repository-url>
cd worldcup-dashboard
```

---

### 2. Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

หากสำเร็จจะเห็น

```bash
(venv)
```

อยู่ด้านหน้าบรรทัดคำสั่ง

---

### 3. Install Dependencies

```bash
pip install flask pandas openpyxl
```

หรือ

```bash
pip install -r requirements.txt
```

---

### 4. Prepare Match Results

สร้างไฟล์

```text
data/results.csv
```

ตัวอย่าง

```csv
match_no,home_score,away_score,status
1,2,0,FINISHED
2,2,1,FINISHED
3,1,1,FINISHED
```

---

### 5. Add Prediction Files

นำไฟล์ Excel ของผู้เล่นแต่ละคนใส่ใน

```text
uploads/
```

ตัวอย่าง

```text
uploads/
├── The seer.xlsx
├── John.xlsx
├── Alice.xlsx
```

---

### 6. Run Application

```bash
python app.py
```

หากสำเร็จจะแสดง

```text
* Running on http://127.0.0.1:5000
```

---

### 7. Open Dashboard

เปิด Browser

```text
http://127.0.0.1:5000
```

---

## 🏅 Scoring Rules

คะแนนต่อการแข่งขันสูงสุด 7 คะแนน

| เงื่อนไข               | คะแนน |
| ---------------------- | ----- |
| ทายผลแพ้/ชนะ/เสมอถูก   | 3     |
| ทายสกอร์ทีมเจ้าบ้านถูก | 2     |
| ทายสกอร์ทีมเยือนถูก    | 2     |
| คะแนนเต็มต่อแมตช์      | 7     |

### ตัวอย่าง

ผลจริง

```text
Germany 3 - 1 Japan
```

ผู้เล่นทาย

```text
Germany 3 - 0 Japan
```

คะแนน

```text
ทายผลถูก = 3
เจ้าบ้านถูก = 2
ทีมเยือนผิด = 0

รวม = 5 คะแนน
```

---

## 📊 Dashboard

Dashboard ประกอบด้วย

* Ranking Leaderboard
* Current Leader
* Highest Score
* Most Picked Champion
* Ranking Trend

---

## 👨‍💻 Developed With

* Python
* Flask
* Pandas
* OpenPyXL
* HTML
* CSS
* JavaScript

---

## 📜 License

Educational Project

For FIFA World Cup 2026 Prediction Competition
=======
# worldcup-dashboard
>>>>>>> 9f8cd1cf64052dfd981720c4af1fe769f516dcfc
