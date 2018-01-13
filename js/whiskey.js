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

//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi Lo Fr Ba Tn Ph AT
var segments = [["wbp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vbp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wap", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vap", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wrp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vrp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wpp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],
                ["vpp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],
                ["wvp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
                ["vvp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
                ["wup", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],
                ["vup", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],
                ["wgp", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An D1 Do Hi L1 Fr Ba Tn Ph AT
                ["vbn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vln", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["van", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 2, 0, 0, 1, 1, 0, 0, 1, 0, 1],
                ["vrn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1],
                ["vpn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 2, 1, 2, 0, 0, 0, 1],
                ["vvn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 2, 1, 0, 2, 0, 0, 1],
                ["vun", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vbr", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["var", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vur", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vlt", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vat", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vrt", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["wbf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vbf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wlf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vlf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wdf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vdf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["waf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vaf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wrf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vrf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wqf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vqf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 1, 1, 1, 1, 0, 1],
                ["wpf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1],
                ["vpf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],
                ["wvf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 1],
                ["vvf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 1],
                ["wuf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
                ["vuf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1],
                ["wff", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 0],
                ["vff", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 0],
                ["wgf", 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vgf", 2, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["waz", 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vaz", 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vla", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vaa", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vra", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
                ["vpa", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 2, 0, 0, 0, 1],
                ["vva", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 1, 2, 0, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["val", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 0, 0, 1],
                ["vrl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
                ["vpl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 2, 2, 0, 0, 1],
                ["vvl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vpz", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 1],
                ["wvz", 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
                ["vvz", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["wl2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 2, 1, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1],
                ["wa2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 1],
                ["va2", 2, 0, 0, 2, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 1],
                ["wq2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1],
                ["vq2", 2, 0, 0, 2, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1],
                ["wv2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],
                ]

for (var i = 0; i < segments.length; i++) {
  for (var j = 0; j < segments[i].length; j++) {
    switch (segments[i][j]) {
      case 0:
      case 1:
        segments[i][j] = "m";
        break;
//      case 1:
//        segments[i][j] = "0";
//        break;
      case 2:
        segments[i][j] = "p";
        break;
      case 3:
        segments[i][j] = "b";
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
    } else if (fuckvalue == "0") {
      output.push("&plusmn; " + features[i][1]);
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
    var seg = document.getElementById(segments[i][0]);

    seg.style.visibility = "visible";
  }

  for (var i = 0; i < segments.length; i++) {
    for (var j = 0; j < features.length; j++) {
      var seg = document.getElementById(segments[i][0]);
      if (!(features[j][2] === "0")) {
        if (!(segments[i][j + 1] === "b")) {
          if (!(features[j][2] === segments[i][j + 1])) {
            console.log("hidden");
            seg.style.visibility = "hidden";
          }
        }
      }
    }
  }
}

update();
