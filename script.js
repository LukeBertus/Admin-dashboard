const newButton = document.querySelector(".new")
const uploadButton = document.querySelector(".upload")
const shareButton = document.querySelector(".share")
const notiPath = document.querySelector(".notiPath")
const notiSvg = document.querySelector(".notifications")

newButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")
uploadButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")
shareButton.addEventListener('click', e => window.location.href = "file:///home/vboxuser/repos/admin-dashboard/index.html")

notiSvg.addEventListener('mouseenter', e => notiSvg.setAttribute("fill", "#f55449"));
notiSvg.addEventListener('mouseleave', e => notiSvg.setAttribute("fill", "#000000"));