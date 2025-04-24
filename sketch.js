function setup() { 
  // 設定函數，設定初始值的地方
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight); // 建立畫布
  // 使用HSB顏色模式
  colorMode(HSB, 360, 100, 100);
  // 設定背景顏色為白色
  background(255);
}

function draw() { 
  // 畫圖函數，畫圖的地方
  // 根據滑鼠的 X 座標動態調整色相，範圍從 0 到 360
  let hue = map(mouseX, 0, windowWidth, 0, 360);

  // 根據滑鼠的 Y 座標動態調整亮度，範圍從 0 到 100
  let brightness = map(mouseY, 0, windowHeight, 100, 0);

  // 設定圓的顏色
  fill(hue, 100, brightness);
  noStroke();

  // 繪製圓形，寬高為 200px
  ellipse(mouseX, mouseY, 200, 200);
}
