import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from joblib import load, dump
import sys

def suggestions(age, gender):
    model = load('trained.joblib')
    result = model.predict([[age, gender]])
    return result[0]

print(suggestions(int(sys.argv[1]),int(sys.argv[2])))
sys.stdout.flush()

