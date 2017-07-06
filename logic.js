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
      dets: "One of my first attempts at using React. Uses Local Storage to allow clients to create their own recipe lists."
    },
    "game-of-life": {
      link: "https://codepen.io/pjtopping/full/EmmRRv/",
      dets: "A graphic demonstrating the Game of life 'game' devised by mathematician John Conway"
    },
    "dungeon-crawler": {
      link: "https://codepen.io/pjtopping/full/gWzjoL/",
      dets: "A dungeon-crawler game. Pick up health & weapons and defeat all enemies to win."
    },
    "heat-map": {
      link: "https://pjtopps.github.io/heat-map",
      dets: "A color-scaled graph showing the change in glabal temperatures"
    },
    "national-contiguity": {
      link: "https://pjtopps.github.io/national-contiguity",
      dets: "A network graphic which shows how countries are connected by their shared borders. Built using a D3 forceSimulation"
    },
    "meteorite": {
      link: "https://pjtopps.github.io/meteorite-map",
      dets: "Displays the location of meteorite hits on a world map"
    },
    "tictactoe": {
      link: "https://pjtopps.github.io/tictactoe",
      dets: "A tic-tac-toe (Noughts & Crosses) game. Uses an algorithm to ensure the computer cannot be beaten in hard mode. Styled for both PC's and mobiles."
    },
    "wiki-viewer": {
      link: "https://pjtopps.github.io/wiki-viewer",
      dets: "Uses the wikipedia API to display summaries of wikepedia articles. Styled for both PC's and mobiles."
    },
    "calculator": {
      link: "https://pjtopps.github.io/calculator",
      dets: "A functioning calculator! Does all basic mahematical operations and deals with operation precedence. Styled using bootstrap for PC's and mobiles"
    },
    "header-parser": {
      link: "https://fcc-header-parser.glitch.me/",
      dets: "Uses node.js and Express. Parses header information from the client to return their IP address etc."
    },
    "timestamp": {
      link: "https://fcc-timestamp-pjt.glitch.me/",
      dets: "My first attempt at using node.js and Express. Returns a date object corresponding to the date or unix timestamp given in the URL."
    },
    "url-shortener": {
      link: "https://fcc-urlshortener.glitch.me/",
      dets: "My first attempt using MongoDB. Also uses node.js and Express. Client gives a url as a parameter and the site returns a shortened url which can then be used instead."
    }
  };

  var current;

  $('.picture').hover(function() {
    current = document.getElementById(this.id);
    var id = this.id;
    current.firstChild.innerHTML = details[this.id].dets;
    current.firstChild.style["background-color"] = "rgba(0, 0, 0, 0.7)";
  }, function() {
    current.firstChild.innerHTML = "";
    current.firstChild.style["background-color"] = "rgba(0, 0, 0, 0)";
  });

  $('.picture').click(function() {
    window.open(details[this.id].link);
  });

});
