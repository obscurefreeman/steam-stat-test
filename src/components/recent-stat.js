import { formatRecentlyPlayedGamesName } from "../helpers.js";
import { renderRecentGamesImages } from "./recent-games-images.js";
import { renderRecentGames } from "./recent-games.js";

export function renderRecentStatCard(profileStats, recentGames) {
  const {
    nickname,
    steamProfileUrl,
    avatarMedium,
    recentPlayHours,
    recentlyPlayedGamesName,
    personaState,
  } = profileStats;

// export function convertnicknameColor(nicknameColor) {
//   let mynamecolor;
//   if (personaMap === 0) {
//     mynamecolor = "white";
//   } else if (personaMap === 1) {
//     mynamecolor = "blue";
//   } else if (personaMap === 2) {
//     mynamecolor = "green";
//   } else {
//     mynamecolor = "white";
//   }
//   return mynamecolor;
// }

let nicknameColor;
if (personaState === "在线") {
  nicknameColor = "green";
} else if (personaState === "离开") {
  nicknameColor = "white";
} else {
  nicknameColor = "black"; // 默认颜色
}

  return `
    <svg width="360" height="255" viewBox="0 0 360 255" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            .header {
            font: 600 14px "Segoe UI", Ubuntu, Sans-Serif;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            fill: ${nicknameColor};
            }

            .game-header {
            font: 600 12px "Motiva Sans", "Segoe UI", Ubuntu, Sans-Serif;
            fill: #bcbab8;
            }

            .stat {
            font: 400 12px "Motiva Sans", Ubuntu, "Helvetica Neue", Sans-Serif;
            fill: #bcbab8;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            
            .stagger {
            opacity: 0;
            animation: fadeInAnimation 0.3s ease-in-out forwards;
            }

            .bold {
            font-weight: 700;
            }
            
            @keyframes fadeInAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
            }
        </style>
        undefined
        <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#E4E2E2" width="99%" fill="#171a21" stroke-opacity="1" />

        <g transform="translate(15, 30)">
            <g transform="translate(0, 0)">
              <image x="0" y="-15" href="${avatarMedium}" style="animation: fadeInAnimation 0.8s ease-in-out forwards;" width="45" height="45"/>
              <a href="${steamProfileUrl}">
                  <text x="53" y="-3" class="header">${nickname}</text>
              </a>
              <text x="53" y="14" class="stat">
                  最近在玩 
                  <tspan font-weight="bold">
                  ${formatRecentlyPlayedGamesName(recentlyPlayedGamesName)}
                  </tspan>
              </text>
              <text x="53" y="28" class="stat">状态： ${personaState}</text> 
            </g>
        </g>
        
        <line x1="10" y1="67" x2="350" y2="67" style="stroke:#bcbab8;animation: fadeInAnimation 1s ease-in-out forwards;" />

        <g transform="translate(0, 75)">
            <svg x="0" y="0">
            ${renderRecentGames(recentGames)}
            </svg>
        </g>
    </svg>

  `;
}
