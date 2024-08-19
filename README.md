
## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/steven-piao-dev.git

cd steven-piao-dev
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/BTC415/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Steven Piao",
  profile: "/profile.png",
  designation: "Full-Stack Web and Blockchain Developer",
  description: "An experienced Full Stack developer with blockchain experience, who likes challenges. Had the opportunity to work on various fields of the software engineering, including Frontend and Backend development, CI/CD pipelines, Blockchain Smart Contract development and Web3 integration. Always trying to overcome challenging situations, while continuous learning and continuous development in each day, without skipping.",
  email: "stevenpiao0822@gmail.com",
  address: "Dallas, Texas",
  github: "https://github.com/BTC415",
  linkedIn: "https://www.linkedin.com/in/steven-piao-05933b2b7/",
  devUsername: "stevenpiao0822",
  // resume: "https://drive.google.com/file/d/1rOVbm8-lSt0CNOFGQcB7ZLHTrymAJcV-/view?usp=sharing",
  resume: "https://drive.google.com/file/d/11RzK1i9-vYtCOJY1xAllS3hpY0vO7wl5/view?usp=sharing"
};

```
---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
