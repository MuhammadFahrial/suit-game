function getPilihanComputer(){
    const comp = Math.round(Math.random()*2);

    if (comp > 1) return 'gunting';
    if (comp == 1) return 'kertas';
    return 'batu';
    }

function getHasil(comp, player){
    if (player == comp) return'SERI';
    if (player == 'gunting') return (comp == 'kertas') ? 'MENANG' : 'KALAH';
    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH' : 'MENANG';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH' : 'MENANG';
    }

const pilihan = document.querySelectorAll('.areaPlayer img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){

        const pilihanComp = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComp, pilihanPlayer);

            const imgComp = document.querySelector('.img-comp');

            imgComp.setAttribute('src', 'img/' + pilihanComp + '.svg');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        
    });
});

