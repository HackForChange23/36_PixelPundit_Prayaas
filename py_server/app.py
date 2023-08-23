from flask import Flask, request, jsonify
import cv2
import numpy as np
import tensorflow as tf
import os
import tempfile
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the pre-trained model
filepath = 'model.h5'
model = tf.keras.models.load_model(filepath)

diseases = [
    {
        "name": "Tomato - Bacterial Spot Disease",
        "description": "Bacterial spot is caused by Xanthomonas species bacteria...",
        "pesticides": ["Copper-based fungicides", "Streptomycin"],
        "prevention": ["Crop rotation", "Avoiding overhead irrigation", "Spacing between plants", "Removing infected debris"]
    },
    {
        "name": "Tomato - Early Blight Disease",
        "description": "Early blight is caused by the fungus Alternaria solani...",
        "pesticides": ["Chlorothalonil-based fungicides", "Mancozeb-based fungicides", "Copper-based fungicides"],
        "prevention": ["Drip irrigation", "Mulching", "Proper plant spacing", "Regular removal of affected leaves"]
    },
    {
        "name": "Tomato - Healthy and Fresh",
        "description": "This category represents disease-free tomato plants.",
        "pesticides": [],
        "prevention": []
    },
    {
        "name": "Tomato - Late Blight Disease",
        "description": "Late blight is caused by Phytophthora infestans...",
        "pesticides": ["Chlorothalonil-based fungicides", "Copper-based fungicides"],
        "prevention": ["Avoid overhead watering", "Proper plant spacing", "Prompt removal of infected parts"]
    },
    {
        "name": "Tomato - Leaf Mold Disease",
        "description": "Leaf mold is caused by the fungus Passalora fulva...",
        "pesticides": ["Chlorothalonil-based fungicides", "Mancozeb-based fungicides"],
        "prevention": ["Good air circulation", "Avoiding overhead irrigation", "Removing lower leaves"]
    },
    {
        "name": "Tomato - Septoria Leaf Spot Disease",
        "description": "Septoria leaf spot is caused by the fungus Septoria lycopersici...",
        "pesticides": ["Chlorothalonil-based fungicides", "Copper-based fungicides"],
        "prevention": ["Good sanitation", "Removing infected leaves", "Proper plant spacing"]
    },
    {
        "name": "Tomato - Target Spot Disease",
        "description": "Target spot is caused by Corynespora cassiicola...",
        "pesticides": ["Chlorothalonil-based fungicides", "Mancozeb-based fungicides", "Azoxystrobin-based fungicides"],
        "prevention": ["Removing affected leaves", "Ensuring good airflow", "Avoiding overhead watering"]
    },
    {
        "name": "Tomato - Tomato Yellow Leaf Curl Virus Disease",
        "description": "Caused by a virus transmitted by whiteflies...",
        "pesticides": ["Insecticides (neonicotinoids, insecticidal soaps)"],
        "prevention": ["Reflective mulch", "Removing infected plants", "Controlling whitefly populations"]
    },
    {
        "name": "Tomato - Tomato Mosaic Virus Disease",
        "description": "Tomato mosaic virus causes mosaic patterns...",
        "pesticides": [],
        "prevention": ["Using virus-resistant tomato varieties", "Controlling aphids", "Practicing good hygiene"]
    },
    {
        "name": "Tomato - Two-Spotted Spider Mite Damage",
        "description": "Spider mites are tiny arachnids that suck sap...",
        "pesticides": ["Insecticidal soaps", "Neem oil", "Horticultural oils"],
        "prevention": ["Increasing humidity", "Using predatory insects", "Maintaining plant hydration"]
    }
]

@app.route('/predict', methods=['POST'])
def predict_disease():
    try:
        # Get image data from request
        image_file = request.files['image']
        image_data = image_file.read()

        # Save the uploaded image temporarily
        temp_image = tempfile.NamedTemporaryFile(delete=False, suffix='.jpg')
        image_path = temp_image.name

        with open(image_path, 'wb') as temp_file:
            temp_file.write(image_data)

        # Load and preprocess the image
        tomato_plant = cv2.imread(image_path)
        test_image = cv2.resize(tomato_plant, (128, 128))
        test_image = tf.keras.preprocessing.image.img_to_array(test_image) / 255
        test_image = np.expand_dims(test_image, axis=0)

        # Make prediction
        result = model.predict(test_image)
        pred = int(np.argmax(result, axis=1)[0])

        # Prepare response
        response = {
            "disease_name": diseases[pred]["name"],
            "description": diseases[pred]["description"],
            "pesticides": diseases[pred]["pesticides"],
            "prevention": diseases[pred]["prevention"]
        }
        print(response)
        # Clean up the temporary image
        # os.remove(image_path)

        return_data = jsonify(response)
        return return_data

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='localhost', port=5001)
