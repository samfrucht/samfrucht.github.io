# samfrucht.github.io

Personal academic website, built with [Jekyll](https://jekyllrb.com) and hosted free on GitHub Pages.
**Live at:** https://samfrucht.github.io (once Pages is turned on, see below).

Every page's content lives in plain text files. You can edit everything right on github.com:
open a file, click the ✏️ pencil icon, make your change, then click **Commit changes**.
The site rebuilds itself in about a minute.

> Search the repo for `PLACEHOLDER` to find everything that still needs your real content.

---

## Where things live

| I want to change… | Edit this file |
|---|---|
| Name, title, department, sidebar links, email | `_config.yml` |
| Home page (bio, research interests) | `index.md` |
| News items on the home page | `_data/news.yml` |
| Publications | `_data/publications.yml` |
| Talks, posters, conference abstracts | `_data/presentations.yml` |
| CV page summary (education, awards, skills) | `cv.md` |
| The CV PDF | upload over `assets/files/cv.pdf` |
| Research projects | `research.md` (images go in `images/`) |
| Menu items / order | `_data/navigation.yml` |
| Colors and fonts | top of `assets/css/main.css` |

## Common tasks

**Update your CV.** In Overleaf, choose Download → PDF. Rename the file to `cv.pdf`.
On GitHub, go to `assets/files/`, choose **Add file → Upload files**, drop it in, and commit.
It replaces the old file. Then update `cv_updated:` in `_config.yml`.

**Add your photo.** Upload a square-ish photo to `images/` (e.g. `profile.jpg`).
Then in `_config.yml` set `avatar: /images/profile.jpg`.

**Add a publication.** In `_data/publications.yml`, copy an existing block (from `- title:` down
to just before the next `- title:`), paste it at the top, and edit it. `status: published`
puts it under *Peer-reviewed*. `in-review` and `in-prep` get their own sections. Any button
field (`doi`, `pdf`, `code`, `data`, `bibtex`) you leave out simply doesn't show.

**Add a talk or poster.** The same idea, in `_data/presentations.yml`. Entries are grouped by year
automatically. `type` can be `talk`, `poster`, or `invited`.

**Add a news item.** Add a block to the top of `_data/news.yml`.

**Show a "job market" banner on the home page.** Fill in `job_market:` in `_config.yml`.

**Hide a page.** Delete its two lines from `_data/navigation.yml`. The page still exists
but is no longer in the menu. Delete the page file too if you want it gone entirely.

**Hide a sidebar link.** Set its value to `""` in `_config.yml`.

**Change colors.** The palette is the block of `--variables` at the top of
`assets/css/main.css`, with one set for light mode and one for dark mode.

**Use your own domain later** (e.g. samanthafrucht.com). Buy it, then set it in
repo Settings → Pages → Custom domain, and update `url:` in `_config.yml`.

> YAML tip: indentation matters, and text containing a colon `:` needs "quotes".
> If the site stops updating after an edit, check the **Actions** tab for a red ✗.
> It usually points to the line with the typo.

## Turning the site on (one time)

1. Free GitHub accounts can only publish Pages from a **public** repo. Go to Settings → General →
   Danger Zone → Change visibility → Public. (Or get GitHub Pro free through the
   [Student Developer Pack](https://education.github.com/pack) and keep the repo private.
   The website itself is public either way.)
2. Go to Settings → **Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**,
   Branch to **main**, and folder to **/ (root)**. Then click Save.
3. Wait about 1 minute and visit https://samfrucht.github.io.

## Preview on your own computer (optional)

Requires Ruby. Run `bundle install` once, then `bundle exec jekyll serve` and open http://localhost:4000.

## Notes

- Your email is never written out in the page source. It's stored reversed and assembled in
  the visitor's browser, which stops most spam scrapers.
- Icons are from [Font Awesome Free](https://fontawesome.com) (CC BY 4.0) and are embedded in
  `_includes/icon.html`.
