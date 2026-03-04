# SCoUT website — GitHub repo and Pages setup

This folder is the source for **https://scout-comm.github.io**. Follow these steps to create the GitHub repository and publish the site.

## Prerequisites

- A GitHub account with permission to create the `scout-comm` organization (or use an existing org).
- Git installed locally.

---

## Step 1: Create the GitHub organization (if needed)

1. Go to [GitHub → Create organization](https://github.com/organizations/plan).
2. Create an organization named **`scout-comm`** (free plan is fine).
3. Add yourself (and any co-authors) as members.

---

## Step 2: Create the website repository

1. In the **scout-comm** organization, click **New repository**.
2. Set:
   - **Repository name:** `scout-comm.github.io` (exact name required for org Pages).
   - **Visibility:** Public.
   - **Do not** initialize with a README (you already have local files).
3. Create the repository.

---

## Step 3: Push this folder to the new repo

From your machine, in the folder that contains `index.html`, `imgs/`, and `static/` (e.g. your project’s `scout-comm.github.io` directory):

```bash
cd /path/to/scout-comm.github.io

git init
git add .
git commit -m "Initial commit: SCoUT project website"

git remote add origin https://github.com/scout-comm/scout-comm.github.io.git
git branch -M main
git push -u origin main
```

If the repo was created with a README, clone it first and then copy your files in:

```bash
git clone https://github.com/scout-comm/scout-comm.github.io.git
cd scout-comm.github.io
# Copy your index.html, imgs/, static/ into this directory (overwrite as needed)
git add .
git commit -m "Initial commit: SCoUT project website"
git push -u origin main
```

Use **HTTPS** if you use a personal access token (PAT), or **SSH** if you use keys:

```bash
git remote add origin git@github.com:scout-comm/scout-comm.github.io.git
```

**Do not** put your PAT in the remote URL (e.g. `https://user:ghp_xxx@github.com/...`). If Git needs a password, run `git push` and when prompted for password, paste the PAT. Or use the Git credential helper so it’s stored once.

**Large push (many GIFs) failing with HTTP 400?** Increase the buffer and try again:
```bash
git config http.postBuffer 524288000
git push -u origin main
```
If the repo has debug `.npz` files in `imgs/`, remove them from tracking (they don’t belong on the site): `git rm --cached imgs/*.npz` and add `*.npz` to `.gitignore`.

---

## Step 4: Enable GitHub Pages

1. In the repo **scout-comm/scout-comm.github.io**, go to **Settings → Pages**.
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch.
   - **Branch:** `main` (or `master`) — **/ (root)**.
3. Save. After a minute or two, the site will be live at **https://scout-comm.github.io**.

---

## Step 5 (optional): Create the code repository

To have the “Code” button point to **https://github.com/scout-comm/scout**:

1. In the **scout-comm** organization, create a new repository named **`scout`**.
2. Push your SCoUT code (e.g. from your local `scout/` or the contents you prepared for release) to that repo:

```bash
cd /path/to/your/scout/code
git init
git add .
git commit -m "Initial commit: SCoUT code"
git remote add origin https://github.com/scout-comm/scout.git
git branch -M main
git push -u origin main
```

---

## After submission: add paper and BibTeX

When the paper is on arXiv and/or OpenReview:

1. **Paper button:** In `index.html`, set the Paper link:
   - Replace `href="#"` on the Paper button with your arXiv URL (e.g. `https://arxiv.org/abs/XXXX.XXXXX`).
2. **BibTeX:** In the BibTeX section, replace the placeholder with your full citation and arXiv URL.

---

## Summary

| Item | URL / name |
|------|------------|
| Website repo | `scout-comm/scout-comm.github.io` |
| Live site | https://scout-comm.github.io |
| Code repo (optional) | `scout-comm/scout` → https://github.com/scout-comm/scout |
