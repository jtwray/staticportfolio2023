const jtwray = "../images/jtwray-headshot.webp";
const artificialartist_preview = "../images/artificialartist-preview.webp";
const kanyes8ball_preview = "../images/kanyes8ball-preview.webp";
const rventure_preview = "../images/rventure-preview.webp";
const twittercardapi_preview = "../images/twittercardapi-preview.webp";
const tuckerwraymetwittercard_preview = "../images/tuckerwray-metwittercard-preview.webp";
const wonderwomen_preview = "../images/wonderwomen.webp";


const projectsDiv = document.querySelector("section#projects");

let projects = [
  {
    name: "WonderWomen of the World Cup -- GoogleTrends",
    imgUrl:
      wonderwomen_preview ||
      "https://mibvv.sse.codesandbox.io/wonderwomen.11bba937.webp",
    deployedAt: "https://womens-world-cup-google-trends.now.sh/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/womensWorldCupGoogleTrends"
  },
  {
    name: "Kanyes Quotes",
    imgUrl:
      kanyes8ball_preview ||
      "https://mibvv.sse.codesandbox.io/kanyes8ball-preview.2e14a639.webp",
    deployedAt: "https://kanyes-magic-8ball.netlify.app/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/ReactReduxThunk"
  },

  {
    name: "TheArtificialArtist",
    imgUrl:
      artificialartist_preview ||
      "https://mibvv.sse.codesandbox.io/artificialartist-preview.b1de9bf7.webp",
    deployedAt: "https://theArtificialArtist.com/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/artificial-artist-fe"
  },
  {
    name: "rVenture",
    imgUrl:
      rventure_preview ||
      "https://mibvv.sse.codesandbox.io/rventure-preview.794d6141.webp",
    deployedAt: "https://rventuren.herokuapp.com/api",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos:netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/Build-Week-RVAirBnB/Backend"
  },
  {
    name: "twittercardPreviews",
    imgUrl:
      twittercardapi_preview ||
      "https://mibvv.sse.codesandbox.io/twittercardapi-preview.7c7d5c5f.webp",
    deployedAt: "https://twittercardpreview.netlify.app/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos:netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo:
      "https://github.com/jtwray/firebase-serverless-function--socialCards-api"
  }
];

function createProjectCards(projectsArr) {
  let card,
    cardImage,
    cardTitle,
    projectDeployedLink,
    projectDeployedIcon,
    projectRepo,
    projectRepoIcon,
    projectInfoBlock;
  projectsArr.map((project) => {
    (card = document.createElement("div")),
      card.classList.add("card"),
      (cardImage = document.createElement("img")),
      (cardImage.src = project.imgUrl),
      card.appendChild(cardImage),
      (cardTitle = document.createElement("h3")),
      cardTitle.classList.add("cardTitle"),
      (cardTitle.style.fontSize = "2rem"),
      (cardTitle.textContent = project.name),
      card.appendChild(cardTitle),
      (projectDeployedLink = document.createElement("a")),
      (projectDeployedIcon = document.createElement(project.deployedIcon.type)),
      projectDeployedIcon.classList.add([project.deployedIcon.class]),
      projectDeployedIcon.setAttribute(
        "data-icon",
        `${project.deployedIcon[`data-icon`]}`
      ),
      projectDeployedIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectRepoIcon = document.createElement(project.repoIcon.type)),
      projectRepoIcon.classList.add([project.repoIcon.class]),
      projectRepoIcon.setAttribute(
        "data-icon",
        `${project.repoIcon[`data-icon`]}`
      ),
      projectRepoIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectDeployedLink.textContent = `Demo `),
      (projectDeployedLink.href = project.deployedAt),
      projectDeployedLink.setAttribute("target", "_blank"),
      (projectRepo = document.createElement("a")),
      (projectRepo.textContent = `Github `),
      projectRepo.setAttribute("target", "_blank"),
      (projectRepo.href = project.githubRepo),
      (projectInfoBlock = document.createElement("div")),
      projectInfoBlock.appendChild(projectDeployedLink),
      projectDeployedLink.appendChild(projectDeployedIcon),
      projectInfoBlock.appendChild(projectRepo),
      projectRepo.appendChild(projectRepoIcon),
      projectInfoBlock.classList.add("projectInfoBlock"),
      card.appendChild(projectInfoBlock),
      projectsDiv.appendChild(card);
  });

  return projectsDiv
}

 createProjectCards(projects);

