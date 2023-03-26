function getPilihanComputer(){
  const comp = Math.random();
  if( comp < 0.34 ) return 'gajah';
  if( comp >= 0.34 && comp < 0.67 ) return 'orang';
  return 'semut';
}

function getHasil(comp, p){
  if( p == comp ) return 'SERI!';
  if( p == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
  if( p == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
  if( p == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

let komputerSkor = 0;
let playerSkor = 0;
function infoSkor(hasil){
  if( hasil == 'MENANG!') return playerSkor += 1;
  if( hasil == 'KALAH!') return komputerSkor += 1;
  if( hasil == 'SERI!') return playerSkor, komputerSkor;
}

function putar(){
  const imgComp = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function(){
      if( new Date().getTime() - waktuMulai > 1000){
          clearInterval;
          return;
      }
      imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
      if(i == gambar.length){
          i = 0;
      }
  }, 100)
}

const areaPlayer = document.querySelectorAll('li img');
areaPlayer.forEach(function(pOptions){
  pOptions.addEventListener("click", function(){
      const pilComp = getPilihanComputer();
      const pilPlayer = pOptions.className;
      const hasil = getHasil(pilComp, pilPlayer);
      
      putar();
      infoSkor(hasil);

      setTimeout(function(){
          const imgComp = document.querySelector('.img-komputer');
          imgComp.setAttribute('src', `img/${pilComp}.png`);

          const infoHasil = document.querySelector('.info');
          infoHasil.innerHTML = hasil;

          const skorKomputer = document.querySelector('.skor-komputer');
          skorKomputer.innerHTML = 'SKOR : ' + komputerSkor;
          
          const skorPlayer = document.querySelector('.skor-player');
          skorPlayer.innerHTML = 'SKOR : ' + playerSkor;
      }, 1000);
  });
});