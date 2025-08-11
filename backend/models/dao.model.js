const mongoose = require('mongoose');

const TacheSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  progression: { type: Number, min: 0, max: 100, default: 0 },
  commentaire: String,
  applicable: { type: Boolean, default: true }
});

const DAOSchema = new mongoose.Schema({
  numeroListe: String,
  objet: String,
  reference: String,
  autoriteContractante: String,
  dateDepot: Date,
  progressionGlobale: { type: Number, default: 0 },
  equipeMontage: {
    chefEquipe: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    membres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  taches: [TacheSchema],
  statut: { type: String, enum: ['vert', 'rouge', 'bleu', 'gris'], default: 'bleu' }
}, { timestamps: true });

module.exports = mongoose.model('DAO', DAOSchema);