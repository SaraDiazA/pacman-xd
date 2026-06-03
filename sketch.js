// Clase Table (Mesa)
class Table {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    // Dibujar mesa desde perspectiva topdown
    rect(-this.width / 2, -this.height / 2, this.width, this.height);
    pop();
  }
}

// Clase Chair (Silla)
class Chair {
  constructor(x, y, scale, rotation, color) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.rotation = rotation; // en radianes
    this.color = color;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    scale(this.scale);
    
    // Dibujar silla desde perspectiva topdown
    // Asiento (cuadrado pequeño)
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    rect(-15, -15, 30, 30);
    
    // Respaldos (líneas gruesas a los lados)
    strokeWeight(3);
    line(-15, -18, -15, -35);
    line(15, -18, 15, -35);
    
    pop();
  }
}

let mesa;
let silla1, silla2, silla3, silla4;

function setup() {
  createCanvas(600, 600);
  
  // Crear una mesa en el centro
  mesa = new Table(300, 300, 150, 100, color(139, 69, 19)); // marrón
  
  // Crear 4 sillas alrededor de la mesa
  silla1 = new Chair(300, 150, 1, 0, color(255, 100, 100)); // roja
  silla2 = new Chair(450, 300, 1, PI / 2, color(100, 255, 100)); // verde
  silla3 = new Chair(300, 450, 1, PI, color(100, 100, 255)); // azul
  silla4 = new Chair(150, 300, 1, -PI / 2, color(255, 255, 100)); // amarilla


  silla5 = new Chair(200, 170, 1.1, PI / 6, color(255, 0, 0));
}

function draw() {
  background(200);
  
  // Dibujar mesa y sillas
  mesa.display();
  silla1.display();
  silla2.display();
  silla3.display();
  silla4.display();
  silla5.display();
}
