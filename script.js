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
// #endregion
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
// #endregion
// #region favourite functionality

function defineFavs() {
    for (let i=1; i<10; i++) {
        let variableName = "fav" + i;
        window[variableName] = 0;
    }
}
defineFavs()

function defineSelectors() {
    for (let i=1; i<10; i++) {
        let svgName = "star" + i
        let pathName = "star" + i +"Path"
        let deleteNum = "delete" + i
        let cardNum  = "card" + i
        window[svgName] = document.querySelector("." + svgName)
        window[pathName] = document.querySelector("." + pathName)
        window[deleteNum] = document.querySelector("." + deleteNum)
        window[cardNum] = document.querySelector("." + cardNum)
    }
}
defineSelectors();

let functions = {};
function defineEventListeners() {
    for (let i=1; i<10; i++) {
        let code = `
        functions.func${i} = function () {
            if (fav${i}) {
                star${i}Path.setAttribute("d", "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z")
                star${i}.setAttribute("fill", "")
                fav${i}=0
            }
            else {
            star${i}Path.setAttribute("d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")
            star${i}.setAttribute("fill", "rgb(255, 183, 0)")
            fav${i} = 1
            }
        }`
        eval(code);

        let code2 = `star${i}.addEventListener('click', functions.func${i})`
        eval(code2);

        let code3 = `delete${i}.addEventListener('click', e => card${i}.remove())`
        eval(code3);
    }
    
}
defineEventListeners();

 
 



































