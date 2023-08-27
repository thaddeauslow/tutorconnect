# tutorconnect
<a name="readme-top"></a>


[![MIT License][license-shield]][license-url]

<br />
<div align="center">

<h2 align="center">TutorConnect</h2>

  <p align="center">
    A mobile app that connects university students, particularly from SMU, with underserved secondary school and junior college students, and offering personalised services not limiting to academic subjects.
    <br />
    <a href="https://github.com/thaddeauslow/tutorconnect"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-background">Project Background</a>
    </li>
    <li>
      <a href="#project-description">Product Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Usage</a></li>
      </ul>
    </li>
</ol>
</details>

<!-- Project Background -->

## Project Background

Singaporean students are known for their rigorous academic curriculum, and there's a demand for personalised and flexible tutoring services to supplement their learning. This also empowers secondary school and junior college students within these communities to access not just academic knowledge, but also valuable practical skills that can enhance their personal growth and future prospects.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Product Description -->

## Product Description

Our project uses React-Native framework for frontend as well as Flask framework for our backend.
Our project feature includes a <b>personalised matching, shared teaching material and rating and review system</b>. On top of that, what differentiates our app from other existing job-matching app is that we are able to provide <b>tailored recommendations</b> based on the detailed information we collected on students' preferences such as subjects of interest and learning style. Furthermore, our app involve <b>verification process</b> to ensure that data privacy in our app is strictly secured.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Flask][Flask]][Flask-url] [![Python][Python]][Python-url] ![HTML5] ![JavaScript] [![React-Native.JS][React-Native]][React-Native-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

These are the required softwares installed

```
- Python 3.9.5
- Yarn 4.0.0-rc.50
```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/thaddeauslow/tutorconnect
   ```
2. Flask installation:
   <br>
   Step 1: Navigate to 'backend' folder
   ```sh
    cd backend
   ```
   Step 2. Create a python Virtual Environment:
   ```bash
    python -m venv venv
   ```
   Step 3. Activate virtual environment:
   <br>
   ```bash
   MacOS/Linux: source venv/bin/activate
   Windows: venv\Scripts\activate
   ```
   Step 4. Install required packages
   ```sh
   pip install -r requirements.txt
   ```
    <br>
3. React.js Installation
   <br>
   Step 1. Download the Yarn package maanger:
   ```
   https://classic.yarnpkg.com/en/docs/install#windows-stable
   ```
   Step 2. Download the expo package using yarn:
   ```
   yarn add expo
   ```
   Step 3. In a new terminal, install the Expo Commandline
   ```shell
   yarn global add expo-cli
   ```
   Step 4. Navigate to the `Frontend` folder
   ```
   cd frontend
   ```
   Step 5. Install all the prerequisite dependencies in package.json
   ```
   yarn install
   ```
4. Expo Go Installation
   <br>
   Step 1. Install the Expo Go App from AppStore or PlayStore.
   
   Step 2. Create an account if you have not have created an account.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Flask

   > **Caution:** Make sure you are in the `Backend` folder before running the following commands. And `source` the correct Python environment.

   ```bash
   cd backend

   MacOS/Linux: source venv/bin/activate
   Windows: venv\Scripts\activate

   python app.py
   ```

2. React-Native

   > **Caution:** Make sure you are in the `Frontend` folder before running the following commands.

   Compiles and hot-reloads for development

   ```
   cd frontend
   npx expo start
   ```
3. Expo Go

   Opens the mobile app on your mobile device.

   Step 1. Log in to the Expo Go.

   Step 2. For iOS user, open your camera and scan the QR code./ For Andriod user, open the Expo Go app and scan the QR code using the in-built QR code scanner.
   
   
Customize configuration

- See [Configuration Reference](https://github.com/react-native-community/cli).


[license-shield]: https://img.shields.io/github/license/DerrickLJH/EmotionBasedMusicRecommender.svg?style=for-the-badge
[license-url]: https://github.com/thaddeuaslow/tutorconnect/blob/main/LICENSE
[Flask]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/
[Python]: https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[React-Native]: https://img.shields.io/badge/React%20Native-0A0A0A?style=for-the-badge&logo=react&logoColor=blue
[React-Native-url]: https://reactnative.dev/docs/getting-started
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black

