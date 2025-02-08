const router = require('express').Router()
const admin = require('firebase-admin');
const multer = require("multer");
const upload = multer();
// Initialize Firebase Admin SDK
const serviceAccount = require('../firebase-service-account.json'); // Downloaded from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// API to send notification
router.post('/sendNotification',upload.none(), async (req, res) => {
    const { token, title, body } = req.body;
    const message = {
      notification: {
        title,
        body,
      },
      token,
    };
  
    try {
      const response = await admin.messaging().send(message);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send({ success: false, error: error.message });
    }
  });

  module.exports = router