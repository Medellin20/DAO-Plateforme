#!/bin/bash

# Vérifie si un message de commit a été fourni
if [ -z "$1" ]; then
  echo "❌ Tu dois fournir un message de commit."
  echo "Exemple : ./gitpush.sh \"Mon message de commit\""
  exit 1
fi

# Ajout des fichiers
git add .

# Commit avec le message donné
git commit -m "$1"

# Push vers la branche main (change si nécessaire)
git push origin main

echo "✅ Modifications poussées sur GitHub avec succès."
