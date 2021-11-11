const um8 = document.getElementById('um8').addEventListener("click", function () {
    claculateMemoryTotal(0);
});
const um16 = document.getElementById('um16').addEventListener("click", function () {
    claculateMemoryTotal(180);
});
const ssd256 = document.getElementById('ssd256').addEventListener("click", function () {
    claculateStorageTotal(0);
});
const ssd512 = document.getElementById('ssd512').addEventListener("click", function () {
    claculateStorageTotal(100);
});
const ssd1 = document.getElementById('ssd1').addEventListener("click", function () {
    claculateStorageTotal(180);
});
const dsc = document.getElementById('dsc').addEventListener("click", function () {
    claculateShippingTotal(0);
});
const ex = document.getElementById('ex').addEventListener("click", function () {
    claculateShippingTotal(20);
});

function claculateMemoryTotal(val) {
    const bp = document.getElementById('bp');
    const tp = document.getElementById('tp');
    const emc = document.getElementById('emc');
    const esc = document.getElementById('esc');
    const finalTotal = document.getElementById('final-total');
    emc.innerText = val;
    tp.innerText = parseInt(bp.innerText) + parseInt(emc.innerText) + parseInt(esc.innerText) + parseInt(dc.innerText);
    // console.log(tp.innerText);
    finalTotal.innerText = tp.innerText;
}
// calculate storage total
function claculateStorageTotal(val) {
    const bp = document.getElementById('bp');
    const tp = document.getElementById('tp');
    const emc = document.getElementById('emc');
    const esc = document.getElementById('esc');
    const finalTotal = document.getElementById('final-total');

    esc.innerText = val;
    tp.innerText = parseInt(bp.innerText) + parseInt(emc.innerText) + parseInt(esc.innerText) + parseInt(dc.innerText);
    // console.log(tp.innerText);
    finalTotal.innerText = tp.innerText;
}
//  calculate shipping total
function claculateShippingTotal(val) {
    const bp = document.getElementById('bp');
    const tp = document.getElementById('tp');
    const emc = document.getElementById('emc');
    const esc = document.getElementById('esc');
    const dc = document.getElementById('dc');
    const finalTotal = document.getElementById('final-total');

    dc.innerText = val;
    tp.innerText = parseInt(bp.innerText) + parseInt(emc.innerText) + parseInt(esc.innerText) + parseInt(dc.innerText);
    finalTotal.innerText = tp.innerText;
}
function promoCode() {
    //console.log("stevekaku");
    const finalTotal = document.getElementById('final-total');
    const pc = document.getElementById('pc').value;
    if (pc == 'stevekaku') {
        finalTotal.innerText = parseFloat(finalTotal.innerText) - parseFloat(finalTotal.innerText * 0.2);
        document.getElementById('pc').value = " ";
    }
}

