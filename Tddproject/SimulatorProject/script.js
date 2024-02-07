

function handleRadioImageChange(radio) {
    var radioImage = radio.closest('.radio-image');
    var allRadioImages = document.querySelectorAll('.radio-image');
    var isChecked = radio.querySelector('input').checked;
    allRadioImages.forEach(function (item) {
        item.classList.remove('checked');
        item.style.backgroundColor = isChecked ? 'white' : '';
    });
    radioImage.classList.add('checked');
    radioImage.style.backgroundColor = isChecked ? '#B7A487' : '';
}




function updateImage(newImageUrl, radioId) {
    if (document.querySelector('input[name="imageSelection"]:checked')) {
        document.getElementById('dynamicImage').src = newImageUrl;
    } else {
        document.getElementById('dynamicImage').src = 'https://suscorpdev.wpenginepowered.com/wp-content/uploads/2023/12/simulator-dev-01.png';
    }

    if (radioId === '7') {

        // document.querySelector('.inputa').style.width = 'border';
        document.getElementById("lengthsecond").style.left = "4%";

    }

    else {
        document.getElementById("lengthsecond").style.left = "22%";
    }
    //      const mediaQuery = window.matchMedia('(max-width: 400px)')
    //   if (radioId === '7' || radioId === '8' || radioId === '9') {


    //   document.getElementById("lengthsecond").style.left="-20%";


    //      }

    //    else {
    //        document.getElementById("lengthsecond").style.left="20%";


    //     }

}


let ID_ = undefined;
function updateValues(changedField) {
    if (ID_ == 6 || ID_ == 7 || ID_ == 8) { return }
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    if (changedField === 'a') {
        document.getElementById("b").value = a - window.differenceAB;
        document.getElementById("c").value = a - window.differenceAC;
    } else if (changedField === 'b') {
        document.getElementById("a").value = b + window.differenceAB;
        document.getElementById("c").value = b - window.differenceBC;
    } else if (changedField === 'c') {
        document.getElementById("a").value = c + window.differenceAC;
        document.getElementById("b").value = c + window.differenceBC;
    } else if (changedField === 'd') {
        document.getElementById("a").value = d + window.differenceAD;
        document.getElementById("b").value = d + window.differenceBD;
    }
}

function changeDifferenceValues(differenceAB, differenceAC, differenceBC, id) {
    ID_ = id;
    if (id == 6 || id == 7 || id == 8) {
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("c").value = ""
    }
    window.differenceAB = differenceAB;
    window.differenceAC = differenceAC;
    window.differenceBC = differenceBC;
    updateValues('a');
}
window.differenceAB = 56;
window.differenceAC = 88;
window.differenceBC = 32;
updateValues('a');


function calculateC() {
    if (ID_ == undefined || ID_ == 8) { return }
    var c = parseFloat(document.getElementById("c").value);
    var a = Math.round(Math.sqrt(Math.pow(c + (26.5 * 2), 2) / 2) + 31.5);
    var b = Math.round(Math.sqrt(Math.pow(c + (26.5 * 2), 2) / 2) + 31.5);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
}

function updateC() {
    if (ID_ == undefined || ID_ == 8) { return }
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = Math.round(Math.sqrt(Math.pow(a - 31.5, 2) + Math.pow(b - 31.5, 2)) - (26.5 * 2));
    document.getElementById("c").value = c;
}

function calculateC8() {
    if (ID_ == undefined || ID_ == 6 || ID_ == 7) { return }
    var c = parseFloat(document.getElementById("c").value);
    var a = Math.round((c + 41) / 1.41421356237 + 7.7);
    var b = a;
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
}

function updateC8() {
    if (ID_ == undefined || ID_ == 6 || ID_ == 7) { return }
    var a = parseFloat(document.getElementById("a").value);
    var b = a;
    var c = Math.round((a - 7.7) * 1.41421356237 - 41);
    document.getElementById("c").value = c;
    document.getElementById("b").value = b;
}
