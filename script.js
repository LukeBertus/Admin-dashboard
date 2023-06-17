// #region buttons
const newButton = document.querySelector(".new")
const uploadButton = document.querySelector(".upload")
const shareButton = document.querySelector(".share")
newButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")
uploadButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")
shareButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")
// #endregion
// #region notification colors
const notiSvg = document.querySelector(".notifications")
notiSvg.addEventListener('mouseenter', e => notiSvg.setAttribute("fill", "#f55449"));
notiSvg.addEventListener('mouseleave', e => notiSvg.setAttribute("fill", "#000000"));
// #endregion
// #region search icon colors
const searchSvg = document.querySelector(".searchIcon")
searchSvg.addEventListener('mouseenter', e => searchSvg.setAttribute("fill", "#f55449"));
searchSvg.addEventListener('mouseleave', e => searchSvg.setAttribute("fill", "#000000"));
// #endregion
// #region searchIcon functionality
const searchBar = document.querySelector(".search")
searchSvg.addEventListener('click', e => searchBar.focus())
// #region sidebar interactivity
const home = document.querySelector(".home")
home.addEventListener('mouseenter', e => home.style.transform = "scale(1.05) translateX(1rem)");
home.addEventListener('mouseleave', e => home.style.transform = "");
 
const profile = document.querySelector(".profile")
profile.addEventListener('mouseenter', e => profile.style.transform = "scale(1.05) translateX(1rem)");
profile.addEventListener('mouseleave', e => profile.style.transform = "");
 
const messages = document.querySelector(".messages")
messages.addEventListener('mouseenter', e => messages.style.transform = "scale(1.05) translateX(1rem)");
messages.addEventListener('mouseleave', e => messages.style.transform = "");
 
const history = document.querySelector(".history")
history.addEventListener('mouseenter', e => history.style.transform = "scale(1.05) translateX(1rem)");
history.addEventListener('mouseleave', e => history.style.transform = "");
 
const tasks = document.querySelector(".tasks")
tasks.addEventListener('mouseenter', e => tasks.style.transform = "scale(1.05) translateX(1rem)");
tasks.addEventListener('mouseleave', e => tasks.style.transform = "");
 
const communities = document.querySelector(".communities")
communities.addEventListener('mouseenter', e => communities.style.transform = "scale(1.05) translateX(1rem)");
communities.addEventListener('mouseleave', e => communities.style.transform = "");
 
const settings = document.querySelector(".settings")
settings.addEventListener('mouseenter', e => settings.style.transform = "scale(1.05) translateX(1rem)");
settings.addEventListener('mouseleave', e => settings.style.transform = "");
 
const support = document.querySelector(".support")
support.addEventListener('mouseenter', e => support.style.transform = "scale(1.05) translateX(1rem)");
support.addEventListener('mouseleave', e => support.style.transform = "");
 
const privacy = document.querySelector(".privacy")
privacy.addEventListener('mouseenter', e => privacy.style.transform = "scale(1.05) translateX(1rem)");
privacy.addEventListener('mouseleave', e => privacy.style.transform = "");
 
 

 
 



































