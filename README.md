````markdown
# Synapso Web (React + Vite)

The **Synapso Web** app is the React-based frontend for the Synapso note-taking and AI assistant platform. It communicates with the [Synapso API](../synapso-api) to authenticate users, manage notes, and eventually integrate advanced features like voice note recording and AI summaries.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Project Layout](#project-layout)
- [Using the App](#using-the-app)
- [Further Documentation](#further-documentation)

---

## Overview

This React/Vite project provides a clean interface for users to:

- Sign up, Log in, Log out (using cookies managed by Axios)
- View, create, edit, and delete their notes
- (Planned) Tag or search notes
- (Planned) Record voice notes and request AI-generated summaries (GPT)
- (Planned) Chat or get daily planning suggestions from an AI

It’s designed as a single-page application (SPA) with React Router for navigation.

---

## Features

- **Login/Signup Flow**: Connects to `/sessions` and `/users` in the Rails backend
- **Cookie-Based Auth**: Axios is configured to send `withCredentials = true`
- **Protected Routes**: Pages that require a valid user session
- **Note Management**: Basic CRUD (list, create, edit, delete) via the Rails API
- **React Router**: Logical route structure (`/login`, `/signup`, `/notes`, etc.)

---

## Tech Stack

- **React**: 18.x
- **Vite**: For fast bundling and dev server
- **React Router DOM**: For front-end routing
- **Axios**: For API requests (with cookie support)
- **CSS**: (Tailwind, Bootstrap, or plain CSS—depending on your choice)

---

## Requirements

- **Node.js**: 14+ (preferably 16+)
- **npm** or **yarn**: for installing dependencies
- A running instance of the [Synapso API](../synapso-api) on `localhost:3000` (or your chosen port)

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/synapso-web.git
   cd synapso-web
   ```
````
