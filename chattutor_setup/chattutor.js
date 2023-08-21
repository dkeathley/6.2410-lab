const embed_mode = true;

const clear = get('.clear-btn');
const clearContainer = get('.clear-btn-container')
const mainArea = get('.msger')
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://static.thenounproject.com/png/2216285-200.png";
const PERSON_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png";
const BOT_NAME = "ChatTutor";
const PERSON_NAME = "Student";

const prodAskURL = new URL("https://chattutor-393319.ue.r.appspot.com/ask")
const debugAskURL = new URL("http://127.0.0.1:5000/ask")

var conversation = []
var original_file = ""

if(embed_mode){
  const minimize = get('.msger-minimize');
  const expand = get('.msger-expand');
  minimize.addEventListener('click', ()=> {
    mainArea.classList.toggle('minimized')
  });

  expand.addEventListener('click', ()=> {
      mainArea.classList.toggle('minimized')
  });

  const download_original = document.querySelectorAll('[title="Download source file"]')[0];
  original_file = download_original.getAttribute("href")
  original_file = original_file.slice(original_file.lastIndexOf("/") + 1)
}

clear.addEventListener('click', () => {
  conversation = [];
  localStorage.setItem("conversation", JSON.stringify([]));

  var childNodes = msgerChat.childNodes;
  for(var i = childNodes.length - 3; i >= 2; i--){
      var childNode = childNodes[i];
      childNode.parentNode.removeChild(childNode);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  conversation = JSON.parse(localStorage.getItem("conversation"))
  if(conversation){
    conversation.forEach(message => {addMessage(message["role"], message["content"], false)})
  }
  else conversation = []
});

msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;

  addMessage("user", msgText, true);
  msgerInput.value = "";
  queryGPT();
});

function queryGPT() {
  args = {
    "conversation": conversation,
    "collection": "QuantumSystems"
  }
  if(embed_mode) args.from_doc = original_file

  fetch(prodAskURL, {
    method: 'POST',
	  headers: {
		  'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(args)
  })
    .then(response => response.text())
    .then(text => {
      addMessage("assistant", text, true);
    })
}

function addMessage(role, message, updateConversation) {

  if(role === "assistant") {
    role_name = BOT_NAME;
    img = BOT_IMG;
    side = "left";
  }
  else {
    role_name = PERSON_NAME;
    img = PERSON_IMG;
    side = "right";
  }

  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${role_name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${message}</div>
      </div>
    </div>
  `;

  clearContainer.insertAdjacentHTML("beforebegin", msgHTML);
  msgerChat.scrollTop += 500;
  if(updateConversation){
    conversation.push({"role": role, "content": message})
    localStorage.setItem("conversation", JSON.stringify(conversation))
  }
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}