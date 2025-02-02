var selector = {
    goDate: {
        startDate: "#mainLayer > a:nth-child(4) > img",
        goOut: "#contents > div:nth-child(1) > div.mb > table:nth-child(16) > tbody > tr:nth-child(2) > td > a",
        set: "#contents > div:nth-child(1) > p > a.button.select_pink",
        back: "#contents > div:nth-child(1) > p > a",
        finishDate: "#next_link_img",
    },
    ramdonTalk: {
        nextTalk: "#contents > div.txt_12.frame_cloth_center.center > div:nth-child(2) > div.center.pb > a.button.select_pink_middle.ml"
    },
    randomLike: {
        like: "#good_button > a",
        next: "#contents > div.center > div:nth-child(4) > a.button.select_pink_middle.ml",
    }
}
var norTime = 3000;
var dTime = 1000 * 60 * 20;
/// switch frame
var frame = document.querySelector("#center").contentWindow;
var querySelector = (id) => frame.document.querySelector(id);
var sleep = async (ms) => new Promise(Resolve => setTimeout(Resolve, ms));
var click = async (step) => { try { querySelector(step.id).click(); await sleep(step.dur); } catch { } }

// var talk = async () => {
//     step = { id: selector.ramdonTalk.nextTalk, dur: norTime }

//     for (let index = 0; index < 999; index++) {
//         await myFunc.click(step);
//     }
//     console.log('end talk');
// }
// var like = async () => {
//     var steps = [{ id: selector.randomLike.like, dur: norTime }, { id: selector.randomLike.next, dur: norTime }]

//     for (let index = 0; index < 999; index++) {
//         await myFunc.click(steps[0]);
//         await myFunc.click(steps[1]);
//     }
//     console.log('end like');
// }
// var date = async () => {
//     steps = [
//         { id: selector.goDate.startDate, dur: norTime },
//         { id: selector.goDate.goOut, dur: norTime },
//         { id: selector.goDate.set, dur: norTime },
//         { id: selector.goDate.back, dur: dTime },
//         { id: selector.goDate.finishDate, dur: norTime },
//         { id: selector.goDate.back, dur: norTime },
//     ]
//     for (let index = 1; index !== 0; index) {
//         await click(steps[0]);
//         await click(steps[1]);
//         await click(steps[2]);
//         await click(steps[3]);
//         await click(steps[4]);
//         await click(steps[5]);
//     }
// }
