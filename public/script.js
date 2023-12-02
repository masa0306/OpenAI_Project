// public/script.js（jQueryバージョン）
$('#submit').on('click', async function() {
    const userInput = $('#userInput').val();
    const responseDiv = $('#response');

    try {
        const response = await $.ajax({
            url: '/send-to-openai',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text: userInput })
        });

        responseDiv.text(response.reply);
    } catch (error) {
        responseDiv.text('Error: ' + error.message);
    }
});

// var character = $("#role").val();
// console.log(character);

// var messages =[{role:"system",content:character}]

// async function start() {
//   const completion = await openai.chat.completions.create({ //chat.completions.create関数
//     messages:messages,
//     model: "gpt-3.5-turbo",
//   });
//   console.log(completion.choices[0]);
// }


// async function messagesCreate(){
//     $("#submit").on("click",async function(){
//         const userInput = $("#text").val()
//         const responce = 
  
//         messages.push({role:"user",content:text})
//   const completion = await openai.chat.completions.create({ //chat.completions.create関数
//     messages: messages,
//     model: "gpt-3.5-turbo",
//   });
//   const responce = completion.choices[completion.length][messages][content]
//   console.log(responce);
//   let html=`
//   <div class = "responce"><p>${responce}<p></div>
//   `
//   $("#answer").html(html)
// })};

// $(document).ready(function() {
//   start();
//   $("#submit").on("click",messagesCreate)
// });
