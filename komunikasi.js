let filterarray = [];
let galleryarray = [
  {
    //1
    id: 1,
    name: "Nama",
    src: "./image/Kata/IMG_1116.MOV",
  },
  {
    //2
    id: 2,
    name: "Kamu",
    src: "./image/Kata/IMG_1117.MOV",
  },
  {
    //3
    id: 3,
    name: "Siapa",
    src: "./image/Kata/IMG_1120.MOV",
  },
  {
    //4
    id: 4,
    name: "Saya",
    src: "./image/Kata/IMG_1121.MOV",
  },
  {
    //5
    id: 5,
    name: "Rumah",
    src: "./image/Kata/IMG_1122.MOV",
  },
  {
    //6
    id: 6,
    name: "Di",
    src: "./image/Kata/IMG_1123.MOV",
  },
  {
    //7
    id: 7,
    name: "Mana",
    src: "./image/Kata/IMG_1125.MOV",
  },
  {
    //8
    id: 8,
    name: "Selamat",
    src: "./image/Kata/IMG_1126.MOV",
  },
  {
    //9
    id: 9,
    name: "Pagi",
    src: "./image/Kata/IMG_1127.MOV",
  },
  {
    //10
    id: 10,
    name: "Sore",
    src: "./image/Kata/IMG_1128.MOV",
  },
  {
    //11
    id: 11,
    name: "Malam",
    src: "./image/Kata/IMG_1129.MOV",
  },
  {
    //12
    id: 12,
    name: "Hai",
    src: "./image/Kata/IMG_1130.MOV",
  },
  {
    //13
    id: 13,
    name: "Apa",
    src: "./image/Kata/IMG_1131.MOV",
  },
  {
    //14
    id: 14,
    name: "Kabar",
    src: "./image/Kata/IMG_1133.MOV",
  },
  {
    //15
    id: 15,
    name: "Sedang",
    src: "./image/Kata/IMG_1134.MOV",
  },
  {
    //16
    id: 16,
    name: "Sakit",
    src: "./image/Kata/IMG_1135.MOV",
  },
  {
    //17
    id: 17,
    name: "Salam",
    src: "./image/Kata/IMG_1136.MOV",
  },
  {
    //18
    id: 18,
    nick: "kenal",
    name: "Kenal",
    src: "./image/Kata/IMG_1138.MOV",
  }
];

showKata(galleryarray);

function showKata(currarray) {
    document.getElementById("kartu").innerText = "";
    
    for (var i = 0; i < currarray.length; i++) {
    document.getElementById("kartu").innerHTML += `
            <div class="col-md-4 mb-5 justify-content-center">
                <video width="439" height="251" controls muted class="rounded mx-auto d-block mb-2">
                    <source src="${currarray[i].src}" class="rounded mx-auto d-block mb-1" alt="Col1" style="max-width: 50%; width: 439px; height: 251px;">
                </video>
                <div class="card mx-auto" style="border-radius: 10px; background: #546C5E; color: #fff; width: 341px; height: 82px;">
                    <div class="card-body" style="font-size: 25px;">
                    <p class="card-text" id="carikata">${currarray[i].name}</p>
                    </div>
                </div>
            </div>
        `;
  }
}


// Live Search

document.getElementById("find").addEventListener("keyup",function(){
    let text = document.getElementById("find").value;

    filterarray = galleryarray.filter(function(a){
        if (a.name.toLowerCase().includes(text)) {
            return a.name;
        }
    });
    if (this.value == "") {
        showKata(galleryarray);
    }
    else {
        if (filterarray == "") {
            //document.getElementById("petunjuk").style.display = 'block';
            document.getElementById("kartu").innerHTML = "";
        }
        else {
            showKata(filterarray);
            //document.getElementById("petunjuk").style.display = 'none';
        }
    }
})