
ResBook  Εφαρμογή Κρατήσεων Εστιατορίων

Η ResBook είναι μια εφαρμογή Android που επιτρέπει σε χρήστες να εγγράφονται, να συνδέονται και να κάνουν κρατήσεις σε εστιατόρια. Χρησιμοποιεί React Native για το frontend, Node.js για το backend και MariaDB ως βάση δεδομένων.

Προαπαιτούμενα

[Node.js](https://nodejs.org/)
[Git](https://git-scm.com/)
[Java JDK 17](https://adoptium.net/)
[Android Studio](https://developer.android.com/studio)
[MariaDB](https://mariadb.org/)

Εγκατάσταση Backend

1. Άνοιξε τερματικό και μπες στον φάκελο:
bash
cd backend

2. Εγκατέστησε τα πακέτα:
bash
npm install

3. Δημιούργησε αρχείο .env βασισμένο στο .env.example:
env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Ο_ΚΩΔΙΚΟΣ_ΣΟΥ
DB_NAME=resbook
JWT_SECRET=ΚΡΥΦΟ_ΚΛΕΙΔΙ

4. Εκκίνησε το backend:
bash
npm start

Βάση Δεδομένων (MariaDB)

1. Άνοιξε το MariaDB και δημιούργησε τη βάση:
sql
CREATE DATABASE resbook;

2. Εκτέλεσε το αρχείο `schema.sql` για να δημιουργηθούν οι πίνακες.

Εκκίνηση Frontend (React Native)

1. Πήγαινε στον φάκελο της εφαρμογής:
bash
cd reservationApp

2. Εγκατέστησε τα πακέτα:
bash
npm install

3. Εκκίνησε τον Metro bundler:
bash
npx react-native start --reset-cache

4. Σε νέο τερματικό, τρέξε:
bash
npx react-native run-android

Λειτουργίες της Εφαρμογής

Εγγραφή και Σύνδεση Χρηστών
Προβολή Διαθέσιμων Εστιατορίων
Δημιουργία Κρατήσεων
Έλεγχος Πρόσβασης με JWT Tokens

Χρήσιμες Οδηγίες
Σιγουρέψου ότι τα περιβάλλοντα `JAVA_HOME` και `ANDROID_HOME` έχουν οριστεί σωστά.
Για debugging χρησιμοποίησε:
bash
adb logcat


