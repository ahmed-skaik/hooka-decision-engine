function notifyHuda() {
  return "📞 Calling Huda...\nHello Huda, your husband is doing suspicious hooka activities 🚨";
}

function evaluateDecision() {
  const choice = document.querySelector('input[name="choice"]:checked');
  const resultDiv = document.getElementById("result");

  if (!choice) {
    resultDiv.innerText = "Error: No decision selected.";
    return;
  }

  let output = "";

  if (choice.value === "alone") {
    output = "Error, You Must share it with Abu Anwar";
  } else if (choice.value === "abuAnwar") {
    output = "hell yes you can do that 😎";
  } else if (choice.value === "other") {
    output =
      "FATAL ERROR:\n" +
      "internet will be unplugged\n" +
      "you will be kicked out of the apartment\n" +
      "all debts are now due immediately\n\n" +
      notifyHuda();
  } else {
    output =
      "undefined behavior detected...\n" +
      "hooka privileges revoked\n\n" +
      notifyHuda();
  }

  resultDiv.innerText = output;
}
