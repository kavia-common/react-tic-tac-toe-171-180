# Tic Tac Toe (React)

A classic web-based Tic Tac Toe game built with React. This project delivers the familiar 3x3 grid experience, allowing two players to take turns marking X and O, with automatic win and draw detection, live turn indicator, and a clean modern UI. The light-themed interface features primary accents in #3b82f6 and success highlights in #06b6d4, providing a crisp, responsive, and enjoyable gaming session without requiring backend services.

## Features

- **3x3 interactive game board:** Play by clicking cells to mark X or O.
- **Local two-player support:** Take turns as X and O on the same device.
- **Turn indicator & game status:** See whose turn it is, or if the game is over.
- **Win/draw detection:** Instantly detects and displays when someone wins, or if the game ends in a draw.
- **Reset/New Game control:** Restart a fresh game at any time with one click.
- **Modern, responsive UI:** Usable on desktop and mobile, with stylish, themed visuals.

## Tech Stack

- **Frontend:** React (JavaScript)
- **Platform:** Web (runs locally in browser, no backend needed)

## Project Structure

- **Frontend Container:** `tic_tac_toe_frontend/` (React project)
  - Main app code, assets, and scripts are inside this folder.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Switch to the frontend directory:
    ```bash
    cd react-tic-tac-toe-171-180/tic_tac_toe_frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn
    ```

### Running Locally

- Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
- The development preview system auto-starts the frontend on port **3000** in your environment.  
  **Please note:** If running in a managed preview or CI system, the preview is handled automatically; do not run `npm start` manually unless developing locally.

## Available Scripts

- `start` – Run the app in development mode.
- `build` – Build the app for production.
- `test` – Run available tests (if implemented).

## Configuration (Environment Variables)

You may set environment variables in a `.env` file at the root of `tic_tac_toe_frontend/`.  
For pure local gameplay, **none are strictly required**. These are for advanced scenarios or deployment setups:

| Variable                          | Description                                       | Required  |
|------------------------------------|---------------------------------------------------|-----------|
| REACT_APP_API_BASE                 | Base URL for APIs (not required; no backend used) | No        |
| REACT_APP_BACKEND_URL              | Backend URL (not required; frontend only)         | No        |
| REACT_APP_FRONTEND_URL             | Public URL of the frontend                        | No        |
| REACT_APP_WS_URL                   | WebSocket URL (not required)                      | No        |
| REACT_APP_NODE_ENV                 | Node environment (`development`/`production`)     | No        |
| REACT_APP_NEXT_TELEMETRY_DISABLED  | Disable telemetry (`true`/`false`)                | No        |
| REACT_APP_ENABLE_SOURCE_MAPS       | Enable source maps (`true`/`false`)               | No        |
| REACT_APP_PORT                     | Port to run the local dev server                  | No        |
| REACT_APP_TRUST_PROXY              | Trust proxy setting                               | No        |
| REACT_APP_LOG_LEVEL                | Logging verbosity                                 | No        |
| REACT_APP_HEALTHCHECK_PATH         | Health endpoint path                              | No        |
| REACT_APP_FEATURE_FLAGS            | Comma-separated feature flags                     | No        |
| REACT_APP_EXPERIMENTS_ENABLED      | Enable experimental features (`true`/`false`)     | No        |

*Tip: For normal play, you can skip configuring these!*

## How to Play

1. **Each player takes turns:** X always goes first.
2. **Click an empty square** to place your mark.
3. **Alternate turns** until a player wins or the grid is full (draw).
4. The app displays the current status at the top.
5. Press the **Reset** or **New Game** button to start over at any time.

## UI & Design Notes

- **Theme:** Light, modern, visually clear layout.
- **Colors:**  
  - Primary: `#3b82f6` (blue)  
  - Success/accent: `#06b6d4` (cyan)  
  - Secondary: `#64748b` (gray)
- **Layout:**  
  - Status and turn indicator at the top (centered)
  - Board grid in the middle (centered, even spacing)
  - Reset/new game button below the board

Designed for keyboard and mouse/touch accessibility and optimized for all device sizes.

## Roadmap / Future Improvements

- Highlight the winning line on victory
- Add move history and undo capability
- Single-player mode with basic AI opponent
- Fun animations and sound effects on moves and wins

## License

_MIT_ (or TBD based on repository policy)
