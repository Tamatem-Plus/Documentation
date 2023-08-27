function showList(e, divID) {
  e.stopPropagation();
  let arrowImg;
  if (e.target.tagName === "IMG") {
    arrowImg = e.target.closest(".downArrow")
  } else {
   arrowImg = e.target.childNodes[1];
  }
 const isRotated = arrowImg.classList.contains("rotate")
  if (!isRotated) {
    arrowImg.classList.add("rotate");
  } else {
    arrowImg.classList.remove("rotate")
  }
  let Id = divID.toString();
  let list = document.getElementById(Id);
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function getCurrentYear()
{
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("currentYear").innerHTML = year.toString();
}
//! Main Navigation Function
function navigate(e, url) {
  const container = document.getElementById('viewPage');
  //! Grabbing all the navigation links to remove active class
  const navLinks = document.querySelectorAll(".navItem");
  navLinks.forEach(link => {
    link.classList.remove("active-link");
  })
  //! Adding class active to the event target
  const activeLink = e.target;
  if(activeLink.classList.contains('navItem')) {
    activeLink.classList.add("active-link");
  }

  window.scrollTo(0, 0);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response Error');
      }
      return response.clone().text();
    })
    .then(content => {
      container.innerHTML = content;
      Prism.highlightAll();
    })
    .catch(error => {
      console.error(error);
    });
}

function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("incorrectCredentials").innerHTML;

  // Select the text field
  copyFunction.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
//! Copy Content of dev
// const myTimeout = setTimeout(myGreeting, 1000);
function copyDivToClipboard(id,buttonId) {
  
  try {
    const range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    if(document.execCommand("copy")){
      const button = document.getElementById(buttonId)
      const prevContent = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #009900"></i>'
      setTimeout(() => {
        button.innerHTML = prevContent;
      }, 3000)
    }
    window.getSelection().removeAllRanges();// to deselect 
  } catch (error) {
    console.error(error)
  }
}
function showNavBar(){
  document.getElementById("sideNavBar").style.display='block';
  document.getElementById("showNavBarBtn").style.display='none';
  document.getElementById("hideNavBarBtn").style.display='block';
  document.getElementById("invisible").style.display='block';
  document.getElementById("viewPage").style.height = '100%';
  document.getElementById("viewPage").style.overflow = 'hidden';



}
function hideNavBar(){
  document.getElementById("sideNavBar").style.display='none';
  document.getElementById("showNavBarBtn").style.display='block';
  document.getElementById("hideNavBarBtn").style.display='none';
  document.getElementById("invisible").style.display='none';
  document.getElementById("viewPage").style.height = 'auto';
  document.getElementById("viewPage").style.overflow = 'scroll';
  // document.getElementById("viewPage").style;

}