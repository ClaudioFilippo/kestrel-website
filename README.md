# kestrel-website

Sito web della **Kestrel Intelligence**.

---

## 🚀 Deploy in produzione

Per effettuare il deploy in produzione:


1. **Sincronizza il progetto su GitHub**
   ```bash
   git add .
   git commit -m "Aggiornamento progetto"
   git push


2. **Accedi alla macchina virtuale**
    ```bash
    ssh nome_utente@indirizzo_server


3. **Esegui lo script di deploy**
    ```bash
    deploy_kestrel_website.sh


📦 Note

Assicurati di avere i permessi necessari sulla macchina virtuale.

Lo script deploy_kestrel_website.sh gestisce automaticamente il pull del codice e il riavvio del servizio web.

