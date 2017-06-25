$(document).ready(function() {

  //this does nothing...?
  $("html, body").animate({scrollTop: $("body").offset().top}, 0);

  document.getElementById('about').style.minHeight = (0.85 * (window.innerHeight - 60)) + "px";

  //scrolling features
  $("#get-about").click(function() {
    $("html, body").animate({scrollTop: $("body").offset().top}, 1000);
  });
  $("#get-projects").click(function() {
    $("html, body").animate({scrollTop: $("#all-projects").offset().top -90}, 1000);
  });
  $("#get-contact").click(function() {
    $("html, body").animate({scrollTop: $("#contact").offset().top -90}, 1000);
  });


  var details = {
    "recipe-box": {
      link: "https://codepen.io/pjtopping/full/VbPvpa/",
      dets: "waffling goes here"
    },
    "game-of-life": {
      link: "https://codepen.io/pjtopping/full/EmmRRv/",
      dets: "more waffling"
    },
    "dungeon-crawler": {
      link: "https://codepen.io/pjtopping/full/gWzjoL/",
      dets: ""
    },
    "heat-map": {
      link: "https://codepen.io/pjtopping/full/MmdwaK/",
      dets: "A color-scaled graph showing the change in glabal temperatures"
    },
    "national-contiguity": {
      link: "https://codepen.io/pjtopping/full/eWaELY/",
      dets: "Using a D3 forceSimulation to show the network of borders between all countries"
    },
    "meteorite": {
      link: "https://codepen.io/pjtopping/full/MoWEJP/",
      dets: "Displays the location of meteorite hits on a world map"
    },
    "tictactoe": {
      link: "https://codepen.io/pjtopping/full/PpXJgw/",
      dets: "A tic-tac-toe game which includes an unbeatable hard level"
    },
    "wiki-viewer": {
      link: "https://pjtopps.github.io/wiki-viewer",
      dets: "Uses the wikipedia API"
    },
    "calculator": {
      link: "https://codepen.io/pjtopping/full/YZYBdB/",
      dets: "Uses JQuery. A basic functioning calculator. Styled using bootstrap."
    },
    "header-parser": {
      link: "https://fcc-header-parser.glitch.me/",
      dets: "Uses node.js and Express.Parses header information from the client to return their IP address etc."
    },
    "timestamp": {
      link: "https://fcc-timestamp-pjt.glitch.me/",
      dets: "My first attempt at using node.js and Express. Returns a date object based on the date or unix timestamp given in the url."
    }
  };

  var current;

  $('.picture').hover(function() {
    current = document.getElementById(this.id);
    var id = this.id;
    current.firstChild.innerHTML = details[this.id].dets;
    current.firstChild.style["background-color"] = "rgba(0, 0, 0, 0.6)";
  }, function() {
    current.firstChild.innerHTML = "";
    current.firstChild.style["background-color"] = "rgba(0, 0, 0, 0)";
  });

  $('.picture').click(function() {
    window.open(details[this.id].link);
  });

});
