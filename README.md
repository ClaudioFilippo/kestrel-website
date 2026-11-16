# kestrel-website

Sito web della **Kestrel Intelligence** — [kestrelintelligence.it](https://kestrelintelligence.it)

Single-page app in **React 19** + **React Router 7**, buildata con **Vite 6**, layout con React-Bootstrap.
Il form contatti invia le email tramite **EmailJS** (nessun backend).

---

## 🧰 Requisiti

- **Node.js 20.x oppure ≥ 22** (Node 21 non è supportato da Vite 6)

## 💻 Sviluppo in locale

```bash
npm install        # installa le dipendenze (solo la prima volta o dopo modifiche a package.json)
npm start          # server di sviluppo su http://localhost:3000
npm run build      # build di produzione nella cartella build/
npm run preview    # serve la build di produzione in locale
```

> ⚠️ Il form contatti invia email **reali** anche in locale.

---

## 🚀 Deploy in produzione

Lo script sul server prende il codice **da GitHub**: tutto ciò che non è stato pushato **non** va in produzione.

1. **Sincronizza il progetto su GitHub**
   ```bash
   git add .
   git commit -m "Aggiornamento progetto"
   git push
   ```

2. **Verifica che non ci sia nulla di non pushato**
   ```bash
   git status
   ```
   Deve indicare `Your branch is up to date with 'origin/main'` e `nothing to commit`.
   Se compare `Your branch is ahead of 'origin/main'`, esegui di nuovo `git push`.

3. **Accedi al server**
   ```bash
   ssh root@indirizzo_server
   ```

4. **Esegui lo script di deploy** (si trova nella home `/root`)
   ```bash
   ./deploy_kestrel.sh
   ```

5. **Verifica il sito** su https://kestrelintelligence.it (ricarica con `Ctrl+F5`).

### 📦 Cosa fa lo script

1. `git pull` del repository in `/root/react-projects/kestrel`
2. `npm ci` (installa le dipendenze esatte di `package-lock.json`)
3. `npm run build` (genera la cartella `build/`)
4. copia `build/` in `/var/www/react/kestrel` e ricarica Nginx

Se la build fallisce, lo script si ferma prima di toccare i file pubblicati: il sito resta online con la versione precedente.
