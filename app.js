const drums = new Howl({
    
        "src": [
          "./drums/drums.webm",
          "./drums/drums.mp3"
        ],
        "sprite": {
          "Clap": [
            0,
            160.11337868480726
          ],
          "Crash": [
            2000,
            3866.122448979592
          ],
          "HighHit": [
            7000,
            430.7709750566895
          ],
          "Kick": [
            9000,
            386.03174603174574
          ],
          "LowHit": [
            11000,
            1433.8321995464848
          ],
          "Snare": [
            14000,
            664.1723356009077
          ]
        }
      }
);

const drumkit = document.querySelector(".drumkit");
const pad1= document.querySelector(".pad");

document.addEventListener("keypress",
      function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
      }
)
drumkit.addEventListener('click', () => {
    if(event.target.classList.contains('pad')){
        let soundPlay= event.target.dataset.sound;
        drums.play(soundPlay);
    }
 });
 drumkit.addEventListener("keypress", ()=>{
        var key= event.key;
        if(key=='r'){
            drums.play("Clap");
        }
});


function makeSound(key){
  switch(key){

    case "r":
      drums.play("Clap");
      break;
      case "t":
        drums.play("Snare");
        break;
        case "y":
          drums.play("Crash");
          break;
          case "f":
      drums.play("HighHit");
      break;
      case "g":
      drums.play("LowHit");
      break;
      case "h":
      drums.play("Kick");
      break;

  }
}
const handleVolume= (e) =>{
  Audio.volume= e.target.value;
}
const vol = document.querySelector(".volume input");
vol.addEventListener("input", handleVolume());

