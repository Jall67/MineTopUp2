function pilihGame(game){
    document.getElementById("game").value = game;
}

function checkout(){

    let game =
    document.getElementById("game").value;

    let id =
    document.getElementById("playerid").value;

    let nominal =
    document.getElementById("nominal").value;

    if(game === ""){
        alert("Pilih game dulu");
        return;
    }

    if(id === ""){
        alert("Masukkan ID Game");
        return;
    }

    alert(
    "Pesanan berhasil dibuat\n\n" +
    "Game: " + game + "\n" +
    "ID: " + id + "\n" +
    "Nominal: " + nominal + "\n" +
    "Pembayaran: " + payment
);
}
function searchGame(){

let input =
document.getElementById("searchGame")
.value.toLowerCase();

let cards =
document.querySelectorAll(".game-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

function loadHistory(){

let history =
JSON.parse(
localStorage.getItem("history")
) || [];

let container =
document.getElementById("history");

if(!container) return;

container.innerHTML="";

history.forEach(item=>{

container.innerHTML += `
<div class="history-item">
🎮 ${item.game}<br>
🆔 ${item.id}<br>
💎 ${item.nominal}
</div>
`;

});

}

loadHistory();