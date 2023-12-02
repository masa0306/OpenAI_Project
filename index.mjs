import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

var character = $("#role").val();
console.log(character);

var messages =[{role:"system",content:character}]

async function start() {
  const completion = await openai.chat.completions.create({ //chat.completions.create関数
    messages:messages,
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
}


async function messagesCreate(){
  const text = $("#text").val()
  messages.push({role:"user",content:text})
  const completion = await openai.chat.completions.create({ //chat.completions.create関数
    messages: messages,
    model: "gpt-3.5-turbo",
  });
  const responce = completion.choices[completion.length][messages][content]
  console.log(responce);
  let html=`
  <div class = "responce"><p>${responce}<p></div>
  `
  $("#answer").html(html)
}

$(document).ready(function() {
  start();
  $("#submit").on("click",messagesCreate)
});
