var features = [[ "cons",     "Consonantal", "0"],
                [  "son",        "Sonorant", "0"],
                [ "syll",        "Syllabic", "0"],
                ["voice",           "Voice", "0"],
                [   "sg",              "SG", "0"],
                [   "cg",              "CG", "0"],
                [ "cont",      "Continuant", "0"],
                [  "str",        "Strident", "0"],
                [  "lat",         "Lateral", "0"],
                [  "del", "Delayed Release", "0"],
                [  "nas",           "Nasal", "0"],
                [  "lab",          "Labial", "0"],
                [  "rnd",         "Rounded", "0"],
                [  "cor",         "Coronal", "0"],
                [  "ant",        "Anterior", "0"],
                [ "dist",     "Distributed", "0"],
                [ "dors",          "Dorsal", "0"],
                [ "high",            "High", "0"],
                [  "low",             "Low", "0"],
                ["front",           "Front", "0"],
                [ "back",            "Back", "0"],
                ["tense",           "Tense", "0"],
                [ "phar",      "Pharyngeal", "0"],
                [  "atr",             "ATR", "0"]];

//don't forget to add an extra feature for FRONT
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi Lo Fr Ba Tn Ph AT
var segments = [["wbp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vbp", 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wap", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vap", 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wrp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vrp", 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1]
               ];

for (var i = 0; i < segments.length; i++) {
  for (var j = 0; j < segments[i].length; j++) {
    switch (segments[i][j]) {
      case 0:
        segments[i][j] = "m";
        break;
      case 1:
        segments[i][j] = "0";
        break;
      case 2:
        segments[i][j] = "p";
        break;
    }
  }
}

function update() {
  var groups = document.getElementsByClassName("group");
  var output = [];

  for (var i = 0; i < features.length; i++) {
    var value = document.querySelector('input[name = ' + features[i][0] + ']:checked').value;
    var fuckvalue = value[value.length - 1];

    features[i][2] = value;

    var name = groups[i].className.split(" ")[1];
    switch (fuckvalue) {
      case "m":
        groups[i].style.background = "#ffd0d0";
        break;
      case "0":
        groups[i].style.background = "#ffffff";
        break;
      case "p":
        groups[i].style.background = "#d0ffd0";
        break;
    }

    if (fuckvalue == "m") {
      output.push("&minus; " + features[i][1]);
    } else if (fuckvalue == "p") {
      output.push("&plus; " + features[i][1]);
    }
  }

  showBox(output);
  showChart(output);
}

function showBox(output) {
  box = document.getElementById("box");
  box.innerHTML = "<p>";

  if (output.length > 0) {
    for (var i = 0; i < output.length; i++) {
      box.innerHTML += output[i] + "<br />";
    }
  } else {
    box.innerHTML += "&plusmn; All";
  }

  box.innerHTML += "</p>";
}

function showChart() {
  for (var i = 0; i < segments.length; i++) {
    for (var j = 0; j < features.length; j++) {
      var seg = document.getElementById(segments[i][0]);
      if (features[j][2] === "0") {
        seg.style.visibility = "visible";
      } else {
        console.log(features[j][2] + " " + segments[i][j + 1]);
        if (features[j][2] === segments[i][j + 1]) {
          console.log("visible");
          seg.style.visibility = "visible";
        } else {
          console.log("hidden");
          seg.style.visibility = "hidden";
        }
      }
    }
  }
}

update();
