# Siwon Lee

Academic homepage for Siwon Lee, a PhD Candidate in Economics at Washington University in St. Louis. Research interests include international trade, international finance, asset pricing, portfolio theory, and machine learning.

Website: [siwon-lee.com](https://siwon-lee.com/)

## Files

- `index.html`: profile, education, conference proceedings, working papers, work in progress, and reviewing.
- `presentations.html`: selected research presentations, workshops, and conference attendance.
- `teaching.html`: teaching and tutoring experience.
- `awards.html`: awards, academic honors, and competition distinctions.
- `scholarships.html`: scholarships and doctoral funding.
- `memberships.html`: professional memberships.
- `academic.css`: shared responsive styles and navigation for the academic pages.
- `Profile.html`: compatibility redirect for the original profile URL.
- `CV.pdf`: downloadable CV served by the homepage.
- `math-notes.html`: preserved mathematics-note landing page, omitted from the homepage navigation.
- `PROGRESS.md`: refresh sequence and remaining content decisions.

## Preview and update

Serve the repository with `python -m http.server 8766 --bind 127.0.0.1`, then open `http://127.0.0.1:8766/`.

Replace `CV.pdf` only with a new PDF supplied by Siwon Lee. Keep the existing download URL. TeX sources are maintained locally and excluded from this public repository. The homepage includes the contact email; phone and LinkedIn are omitted. The contents of the supplied CV are preserved.

Keep paper titles, status labels, and presentation details consistent between the homepage and the CV. Mark future attendance explicitly as planned.

The main page keeps education first, followed by research and reviewing. Other academic activities have separate pages accessible from every sidebar. Retain the 1,440px overall maximum width and 940px main-content maximum width when updating the shared layout.

Official reports linked from the activity pages:

- [SKKU–KEIO symposium](https://ecostat.skku.edu/ecostat/news.do?articleNo=170736&mode=view): the April 4, 2024 university report describes the January 2024 symposium and lists the movie-industry paper.
- [2022 SKKU ACE](https://ecostat.skku.edu/ecostat/news.do?articleNo=139474&mode=view): the September 20, 2022 report names Siwon Lee and the inflation-forecasting paper as the top-prize recipient, and dates the award ceremony and presentations to September 2022. The CV lists the award in August 2022; distinguish that date from the ceremony rather than changing the supplied PDF. Use the official event name, SKKU ACE (Annual Conference on Economics).

Personal award and scholarship details follow the supplied CV. Link general event or program information under a clearly descriptive label; do not present it as confirmation of an individual award. Professional membership links lead to the organizations' official websites.

The current content and downloadable `CV.pdf` follow the supplied CV dated October 23, 2026. The PDF is copied unchanged. The automated-trading paper uses its current title, “Homogeneity, Systemic Risk, and the Regulation of Automated Trading,” and links to SSRN abstract 7652479, verified on the author's live SSRN page and the paper's abstract page. For papers available on SSRN, show the authors and link to the corresponding abstract page. Show confirmed presentation venues below the corresponding paper; the household-portfolio working paper is linked to the ZUEL workshop as requested. Display workshop and conference dates as month and year.

## Hosting

This repository uses the existing GitHub Pages deployment. `CNAME` retains the custom domain `siwon-lee.com`. Merging changes into the configured deployment branch makes them eligible for publication; verify the deployed page after a merge.

The original course-note pages and their assets are preserved. No copies are allowed without permission.
