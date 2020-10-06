document.addEventListener("DOMContentLoaded", () => {
    let unicycle = new UnicycleRangeSlider("#unicycle1");
  }
);
  
class UnicycleRangeSlider {
  constructor(el) {
    this.wheel = document.querySelector(`${el} input[type=range]`);
    this.marker = document.querySelector(`${el} .unicycle__marker`);
    this.flag = document.querySelector(`${el} .unicycle__flag`);
  
    this.updateBodyPos();
    this.wheel.addEventListener("input", () => { this.updateBodyPos(); });
  }
  updateBodyPos() {
    let max = this.wheel.max,
      min = this.wheel.min,
      realValue = this.wheel.value,
      ticks = max - min,
      relValue = realValue - min,
      percent = relValue / ticks,
      revs = 1,
      left = percent * 100,
      emAdjust = percent * 1.5,
      pedalRot = percent * (360 * revs),
      period = 1 / (ticks / revs / 2) * relValue * Math.PI,
      rightLegRot = -22.5 * Math.sin(period + 1.85 * Math.PI) - 22.5,
      rightLowerLegRot = 45 * Math.sin(period + 0 * Math.PI) + 45,
      leftLegRot = -22.5 * Math.sin(period + 2.85 * Math.PI) - 22.5,
      leftLowerLegRot = 45 * Math.sin(period + 1 * Math.PI) + 45,
      cssVars = {
        "--pedalRot": `${pedalRot}deg`,
        "--rightLegRot": `${rightLegRot}deg`,
        "--rightLowerLegRot": `${rightLowerLegRot}deg`,
        "--leftLegRot": `${leftLegRot}deg`,
        "--leftLowerLegRot": `${leftLowerLegRot}deg`
      };
  
    // position stick figure and unicycle body
    this.marker.style.left = `calc(${left}% - ${emAdjust}em)`;
    // update the variables in CSS
    for (let v in cssVars)
      this.marker.style.setProperty(v, cssVars[v]);
    // number in the flag
    this.flag.innerHTML = realValue;
    
    var nameY;
    var nameG;
    var nameP;
    var nameW;
    switch(realValue){
      case '1': nameY = "KRISTOFF Alexander";
                nameG = "KRISTOFF Alexander";
                nameP = "GRELLIER Fabien";
                nameW = "PEDERSEN Mads";break;
      case '2': nameY = "ALAPHILIPPE Julian";
                nameG = "KRISTOFF Alexander";
                nameP = "COSNEFROY Benoît";
                nameW = "HIRSCHI Marc";break;
      case '3': nameY = "ALAPHILIPPE Julian";
                nameG = "SAGAN Peter";
                nameP = "COSNEFROY Benoît";
                nameW = "HIRSCHI Marc";break;
      case '4': nameY = "ALAPHILIPPE Julian";
                nameG = "SAGAN Peter";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '5': nameY = "YATES Adam";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '6': nameY = "YATES Adam";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '7': nameY = "YATES Adam";
                nameG = "SAGAN Peter";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '8': nameY = "YATES Adam";
                nameG = "SAGAN Peter";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '9': nameY = "ROGLIČ Primož";
                nameG = "SAGAN Peter";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '10': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '11': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '12': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "BERNAL Egan";break;
      case '13': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '14': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '15': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '16': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "COSNEFROY Benoît";
                nameW = "POGAČAR Tadej";break;
      case '17': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "POGAČAR Tadej";
                nameW = "POGAČAR Tadej";break;
      case '18': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "CARAPAZ Richard";
                nameW = "POGAČAR Tadej";break;
      case '19': nameY = "ROGLIČ Primož";
                nameG = "BENNETT Sam";
                nameP = "CARAPAZ Richard";
                nameW = "POGAČAR Tadej";break;
      case '20': nameY = "POGAČAR Tadej";
                nameG = "BENNETT Sam";
                nameP = "POGAČAR Tadej";
                nameW = "POGAČAR Tadej";break;
      case '21': nameY = "POGAČAR Tadej";
                nameG = "BENNETT Sam";
                nameP = "POGAČAR Tadej";
                nameW = "POGAČAR Tadej";break;
      default: break;
    }
    document.getElementById("YJ").innerHTML = nameY;
    document.getElementById("GJ").innerHTML = nameG;
    document.getElementById("PJ").innerHTML = nameP;
    document.getElementById("WJ").innerHTML = nameW;
  }
}