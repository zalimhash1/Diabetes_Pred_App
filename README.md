# Diabetes Prediction System

A web-based Machine Learning application that predicts whether a person is likely to have diabetes based on medical parameters. The application is built using Flask for the backend and a responsive HTML, CSS, and JavaScript frontend.

## Project Overview

This project uses a trained K-Nearest Neighbors (KNN) classification model to predict diabetes. User inputs are processed through the same StandardScaler used during model training to ensure consistent and accurate predictions.

The application provides an intuitive user interface with real-time form validation, progress tracking, prediction confidence, and health recommendations.

## Features

- Predicts diabetes using a trained KNN classifier
- Uses StandardScaler for preprocessing
- Responsive and modern user interface
- Dark mode support
- Real-time form completion progress bar
- Input validation with allowed ranges
- Prediction confidence score
- Health recommendations based on prediction
- Scroll-to-top functionality
- Flask backend with error handling
- Deployed on PythonAnywhere

## Machine Learning

### Algorithm

- K-Nearest Neighbors (KNN Classifier)

### Preprocessing

- StandardScaler

### Model Files

- Trained Model
- StandardScaler

Both are stored together inside:

```
diabetes_data.pkl
```

## Technologies Used

### Backend

- Python
- Flask
- NumPy
- Scikit-learn
- Pickle

### Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome

## Project Structure

```
Diabetes_Pred_App/
│
├── app.py
├── diabetes_data.pkl
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   ├── script.js
│   └── images/
│
└── screenshots/
```

## Input Features

The model uses the following medical parameters:

- Pregnancies
- Glucose
- Blood Pressure
- Skin Thickness
- Insulin
- Body Mass Index (BMI)
- Diabetes Pedigree Function
- Age

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/Diabetes_Pred_App.git
```

Move into the project

```bash
cd Diabetes_Pred_App
```

Create a virtual environment

```bash
python -m venv venv
```

Activate the virtual environment

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the application

```bash
python app.py
```

Open your browser and visit

```
http://127.0.0.1:5000
```

## Deployment

The project is deployed using PythonAnywhere.

Deployment workflow:

1. Push changes to GitHub
2. Pull updates on PythonAnywhere
3. Reload the web application

## Future Improvements

- Support additional machine learning models
- Compare multiple algorithms
- User authentication
- Database integration
- Medical history storage
- Prediction history
- Interactive charts and analytics
- REST API support

## Author

**Muhammad Din**
