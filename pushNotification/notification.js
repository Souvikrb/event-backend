const router = require('express').Router();
const admin = require('firebase-admin');
const multer = require("multer");
const upload = multer();
// Initialize Firebase Admin SDK
const serviceAccount = require('../firebase-service-account.json'); // Downloaded from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// API to send notification
router.post('/sendNotification', upload.none(), async (req, res) => {
  const { token, title, body } = req.body;
  let tokens = [];

  tokens.push(token);
  tokens.push("eC0Wz7K7Az-nb31NDuRO5b:APA91bEARZhWMFPzHVe5PJqbVIKrfOdXD13RMbM_vtEv0vZqKe_EURIxERt-KE6q37wHkFh4c0E_cvYiUIgnuD5T48eAnfZEiQAztsd95J7Io26zCU6BvL4");

  const message = {
    notification: {
      title,
      body,
    },
    tokens, // ✅ Use "tokens" instead of "token"
  };
  console.log(tokens);
  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    res.status(200).send({ success: true, response });
  } catch (error) {
    console.error("FCM Error:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});


  module.exports = router