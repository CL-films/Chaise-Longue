# Chaise Longue website

## What is where
- js/content.js : ALL your text. Email, Vimeo links, bios, credits, services, form link. Edit this most.
- assets/logo.png : replace with your logo (same name) to change it everywhere.
- assets/home.mp4 : optional home video. Upload it, then write "assets/home.mp4" next to homeVideo in content.js.
- assets/people/ : put the three portraits here, then write their paths in content.js.
- css/style.css : colours and fonts are the first lines of the file.

## Put it online (one time, about 15 minutes)
1. Make a free account at github.com. Click New repository. Name it chaise-longue. Public. Create.
2. Click "uploading an existing file". Drag in everything from this folder (keep the folders), then Commit.
3. Settings > Pages. Source: Deploy from a branch. Branch: main, folder: / (root). Save.
4. Same page, Custom domain: chaiselonguefilms.com. Save. Tick Enforce HTTPS when it appears.
5. At GoDaddy, DNS for chaiselonguefilms.com: add four A records for @ pointing to
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   and a CNAME for www pointing to YOUR-GITHUB-USERNAME.github.io.
   Delete the old GoDaddy website A record and www record if they exist. Do NOT touch the MX, TXT or Zoho email records.
6. Wait up to an hour. Check the GitHub IPs against docs.github.com (Pages, custom domain) before you enter them.

## Change something later
Open the file on GitHub, click the pencil, edit, Commit. Live in about a minute.
