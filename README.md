# Villa Paradiso

Website for Villa Paradiso, a private estate with a consecrated frescoed chapel in Aquapendente (VT), Italy, available for weddings and for film and photo shoots.

It is a plain static site (HTML, CSS and a little JavaScript, with no build step), hosted free on GitHub Pages at **villaparadisotuscia.it**.

```
index.html          English page
it/index.html       Italian page
assets/css/         styles
assets/js/          menu, gallery viewer and enquiry form
assets/img/         photos (named by subject, e.g. chapel-exterior.jpg)
```

## Changing a photo

Replace the file in `assets/img/` with a new one of the same name. Keep photos about 2000px wide and under ~500 KB.

## Enquiry form (Formspree)

1. Create a free account at https://formspree.io using the email address that should receive enquiries.
2. Create a new form. Formspree gives you an ID like `xayzabcd`.
3. In both `index.html` and `it/index.html`, replace `YOUR_FORM_ID` with that ID.

The free plan covers 50 enquiries a month. The email address never appears on the website.

## Going live

1. In the GitHub repo, open **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/ (root)`, and save. The site appears at `https://jseime.github.io/villa_paradiso/`.
2. In the same page, enter `villaparadisotuscia.it` as the **Custom domain** and save. GitHub adds a `CNAME` file to the repo.
3. At Dynadot, open the domain's **DNS settings**, choose custom DNS records, and add:

| Type  | Host  | Value                |
|-------|-------|----------------------|
| A     | (@)   | 185.199.108.153      |
| A     | (@)   | 185.199.109.153      |
| A     | (@)   | 185.199.110.153      |
| A     | (@)   | 185.199.111.153      |
| AAAA  | (@)   | 2606:50c0:8000::153  |
| AAAA  | (@)   | 2606:50c0:8001::153  |
| AAAA  | (@)   | 2606:50c0:8002::153  |
| AAAA  | (@)   | 2606:50c0:8003::153  |
| CNAME | www   | jseime.github.io     |

4. Wait for DNS to update (usually under an hour, sometimes up to a day). Then go back to **Settings → Pages** and tick **Enforce HTTPS**.
