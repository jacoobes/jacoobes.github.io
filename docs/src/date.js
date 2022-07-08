const DateDiff = {

    inDays: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return Math.floor((t2-t1)/(24*3600*1000));
    }
}


function setDate() {
    const dateStartedApprox = new Date('December, 20, 2020');
    const nowDate = new Date()
    const original = document.querySelector('.paragraph-me').textContent;
    const appendHowLongIBeenCoding = `
    Started programming ${DateDiff.inDays(dateStartedApprox, nowDate)} days ago. `;
    document.querySelector('.paragraph-me').textContent = appendHowLongIBeenCoding + original
}
window.onload = ()=> {
    setDate()
}
