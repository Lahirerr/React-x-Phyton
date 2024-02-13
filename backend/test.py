import cv2
from deepface import DeepFace

img = cv2.imread('faces/taylor.jpg')

result = DeepFace.analyze(img, actions = ['gender', 'age', 'emotion'])

print(result)