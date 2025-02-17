$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 200, 300, 20);
    createPlatform(1350, 400, 50, 50,);
    createPlatform(600,600,300,20);     
    createPlatform(1000,600,300,20);
    createPlatform(300,700,300,20);
    createPlatform(400,500,300,20);
    createPlatform(300,400,300,20);
    createPlatform(600,300,300,20);
    createPlatform(500,100,300,20);
    createPlatform(300,100,300,20);
    createPlatform(800,100,300,20);
    createPlatform(1100,100,300,20);
    createPlatform(1000,300,300,20);
    createPlatform(400,300,300,20);



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50) ;
    createCollectable('diamond', 200, 170, 0.5, 0.7);
    createCollectable("steve", 950, 40) ;
    createCollectable('diamond', 500, 170, 0.5, 0.7);
    createCollectable("steve", 350, 20) ;
    createCollectable("database", 800,300);
    

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("left", 300, 3000 )

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
