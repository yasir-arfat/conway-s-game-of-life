var c = document.getElementById("can");
var ctx = c.getContext("2d");

var sum = 0;
var n = 150; //numbers of box
var r = c.width / n;

var ran = 0;
var act1 = [],
  act2 = [];

for (i = 0; i < n; i++) {
  act1[i] = [];
  act2[i] = [];
  for (j = 0; j < n; j++) {
    ran = Math.floor(Math.random() * 2);

    act1[i][j] = ran;
    act2[i][j] = 0;
  }
}

function main() {
  for (i = 1; i < n - 1; i++) {
    for (j = 1; j < n - 1; j++) {
      sum = 0;
      if (act1[i - 1][j - 1] == 1) {
        sum++;
      }
      if (act1[i - 1][j] == 1) {
        sum++;
      }
      if (act1[i - 1][j + 1] == 1) {
        sum++;
      }
      if (act1[i][j - 1] == 1) {
        sum++;
      }
      if (act1[i][j + 1] == 1) {
        sum++;
      }
      if (act1[i + 1][j - 1] == 1) {
        sum++;
      }
      if (act1[i + 1][j] == 1) {
        sum++;
      }
      if (act1[i + 1][j + 1] == 1) {
        sum++;
      }

      if (act1[i][j] == 1 && (sum == 2 || sum == 3)) {
        act2[i][j] = 1;
      } else if (act1[i][j] == 1 && sum > 3) {
        act2[i][j] = 0;
      } else if (sum < 2) {
        act2[i][j] = 0;
      } else if (sum == 3) {
        act2[i][j] = 1;
      }

      

      if (act1[i][j] == 1) {
        ctx.beginPath();
      ctx.arc(j * r, i * r, r / 2.7, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#53f293";
        ctx.fill();
      } else {
        ctx.beginPath();
      ctx.arc(j * r, i * r, r / 2.7, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
      }
    }
  }

  for (i = 1; i < n - 1; i++) {
    for (j = 1; j < n - 1; j++) {
      act1[i][j] = act2[i][j];
    }
  }
}

function run() {
  setInterval(function () {
    main();
  }, 0);
}
run();
