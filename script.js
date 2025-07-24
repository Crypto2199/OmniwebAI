
let apiKey = "";

function startChat() {
  apiKey = document.getElementById('apiKey').value.trim();
  if (!apiKey.startsWith('sk-')) {
    alert("يرجى إدخال مفتاح OpenAI صالح!");
    return;
  }
  document.getElementById('chatContainer').style.display = 'block';
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;
  appendToChat("أنت", message);
  input.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "حدث خطأ!";
    appendToChat("OmniAI", reply);
  } catch (error) {
    appendToChat("OmniAI", "فشل الاتصال بـ OpenAI.");
  }
}

function appendToChat(sender, message) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKey(event) {
  if (event.key === "Enter") sendMessage();
}
