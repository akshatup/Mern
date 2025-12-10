// before currying output show undefined

// function MailSender(to, sub, body){
//     console.log(`Mail send to ${to} with subject ${sub} and body ${body}`)
// }

// MailSender("abc@gmail.com", "hello") //output:- Mail send to abc@gmail.com  with
//                                              // subject hello and body "undefined".

// by currying approach

function mailSender(to) {
  return function (sub) {
    return function (body) {
      console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
    };
  };
}
mailSender("abc@gmail.com")("sub")("hi!!!");                                             