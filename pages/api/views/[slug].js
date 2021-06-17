import firebase from 'firebase'

export default async (req, res) => {
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_REACT_APP_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }
  const slug = req.query.slug

  const db = firebase.firestore()

  const increment = firebase.firestore.FieldValue.increment(1)

  const viewsRef = db.collection('views').doc(slug)
  const views = await viewsRef.get()

  if (views.exists) {
    await viewsRef.update({ count: increment })
    res.json({ views: views.data().count + 1 })
  } else {
    await viewsRef.set({ count: 1 })
    res.json({ views: 1 })
  }
}
