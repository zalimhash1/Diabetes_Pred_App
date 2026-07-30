from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)

# ==========================================
# LOAD TRAINED MODEL
# ==========================================

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "diabetes_data.pkl")

with open(MODEL_PATH, "rb") as file:
    saved = pickle.load(file)

model = saved["model"]
scaler = saved["scaler"]


# ==========================================
# HOME PAGE
# ==========================================

@app.route("/")
def home():

    return render_template("index.html")


# ==========================================
# PREDICTION
# ==========================================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        pregnancies = int(request.form["Pregnancies"])
        glucose = float(request.form["Glucose"])
        blood_pressure = float(request.form["BloodPressure"])
        skin_thickness = float(request.form["SkinThickness"])
        insulin = float(request.form["Insulin"])
        bmi = float(request.form["BMI"])
        pedigree = float(request.form["DiabetesPedigreeFunction"])
        age = int(request.form["Age"])

        # =============================
        # RANGE VALIDATION
        # =============================

        if pregnancies < 0 or pregnancies > 20:
            raise ValueError("Pregnancies must be between 0 and 20.")

        if glucose < 0 or glucose > 300:
            raise ValueError("Glucose must be between 0 and 300.")

        if blood_pressure < 0 or blood_pressure > 200:
            raise ValueError("Blood Pressure must be between 0 and 200.")

        if skin_thickness < 0 or skin_thickness > 100:
            raise ValueError("Skin Thickness must be between 0 and 100.")

        if insulin < 0 or insulin > 900:
            raise ValueError("Insulin must be between 0 and 900.")

        if bmi < 0 or bmi > 70:
            raise ValueError("BMI must be between 0 and 70.")

        if pedigree < 0 or pedigree > 3:
            raise ValueError("Diabetes Pedigree Function must be between 0 and 3.")

        if age < 1 or age > 120:
            raise ValueError("Age must be between 1 and 120.")

        # =============================
        # PREPARE INPUT
        # =============================

        data = np.array([[
            pregnancies,
            glucose,
            blood_pressure,
            skin_thickness,
            insulin,
            bmi,
            pedigree,
            age
        ]])

        # Scale input
        data = scaler.transform(data)

        # Predict
        prediction = model.predict(data)[0]

        # Confidence
        confidence = round(
            np.max(model.predict_proba(data)) * 100,
            2
        )

        # =============================
        # RESULT
        # =============================

        if prediction == 1:

            prediction_text = "Diabetic"

            color = "#ef4444"

            icon = "triangle-exclamation"

        else:

            prediction_text = "Non-Diabetic"

            color = "#22c55e"

            icon = "circle-check"

        # =============================
        # RISK LEVEL
        # =============================

        if confidence >= 90:

            risk = "High"

        elif confidence >= 70:

            risk = "Moderate"

        else:

            risk = "Low"

        return render_template(

            "index.html",

            prediction=prediction_text,

            confidence=confidence,

            risk=risk,

            color=color,

            icon=icon

        )

    except Exception as e:

        return render_template(

            "index.html",

            error=str(e)

        )


# ==========================================
# RUN APP
# ==========================================

if __name__ == "__main__":

    app.run(debug=True)