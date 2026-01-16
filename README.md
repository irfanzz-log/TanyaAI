### Chat AI 

* Step by step build from scratch *

* Setup Frontend
- NPM I (Via terminal)

* Setup Backend
- NPM I (Via terminal)
- Setup port dan server
- Buat endpoint URL
  

### Backend
* Script API
  const stream = await client.responses.stream(
              {
                  model: "gpt-4o-mini",
                  input: [
                      {
                          role: "",
                          content: "",
                      },
                      {
                          role: "",
                          content: "",
                      }
                  ],
              });

              for await (const chunk of stream) {
                  const content = chunk.delta;
                  
                  if (typeof content === "string" && content.length > 0) {
                      res.write(`data: ${JSON.stringify({prompt : content})}\n\n`);
                  }
              }

          res.write(`data: [DONE]\n\n`);
          res.end();

* Set stream header
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");
    res.header("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*");

### Frontend

* UseEffect script 
    useEffect(() => {

          if (!chatID) return;

          const eventSource = new EventSource(`http://localhost:5000/api/users/stream?chatId=${chatID}`);

          eventSource.onmessage = (event) => {

              if (event.data === "[DONE]") return;

              try {
                  const data = JSON.parse(event.data);

                  setMessages((prevMessages) => {
                      const lastMessage = prevMessages[prevMessages.length - 1];
                      return [...prevMessages.slice(0, - 1), lastMessage + data.prompt];
                  });
              }
              catch (error) {
                  console.error("Error parsing SSE data: ", error);
              }
          }

          eventSource.onerror = (error) => {
              console.log("EventSource failed : ", error);
              eventSource.close();
          }

          return () => {
              eventSource.close();
          }
      }, [chatID]);

* Fetch backend
    function handleButton(e) {
          e.preventDefault();

          fetch(`http://localhost:5000/api/users`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ prompt }),
          })
              .then((response) => response.json())
              .then((data) => {
                  setChatID(data.chatId);
                  setQuestion(prev => [...prev, prompt]);
                  setMessages(prev => [...prev, ""]);
                  setPrompt("");
              })
              .catch((error) => {
                  console.error("Error:", error);
              });
      }


* State
    const [prompt, setPrompt] = useState("");
    const [chatID, setChatID] = useState("");
    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState([]);