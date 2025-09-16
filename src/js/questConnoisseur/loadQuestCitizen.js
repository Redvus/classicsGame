function loadCitizenReady_1() {
    let loadCitizenReady_1_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_1')),
        loadCitizenReady_1_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_2')),
        loadCitizenReady_1_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_3')),
        loadCitizenReady_1_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_4')),
        loadCitizenReady_1_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_5')),
        loadCitizenReady_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1'))
    ;

    if (loadCitizenReady_1_1 === 0) {
        questionCitizenCat_1_1();
    } else if (loadCitizenReady_1_2 === 0 &&
                loadCitizenReady_1_1 === 1) {
        questionCitizenCat_1_2();
    } else if (loadCitizenReady_1_3 === 0 &&
                loadCitizenReady_1_1 === 1 &&
                loadCitizenReady_1_2 === 1) {
        questionCitizenCat_1_3();
    } else if (loadCitizenReady_1_4 === 0 &&
                loadCitizenReady_1_1 === 1 &&
                loadCitizenReady_1_2 === 1 &&
                loadCitizenReady_1_3 === 1) {
        questionCitizenCat_1_4();
    } else if (loadCitizenReady_1_5 === 0 &&
                loadCitizenReady_1_1 === 1 &&
                loadCitizenReady_1_2 === 1 &&
                loadCitizenReady_1_3 === 1 &&
                loadCitizenReady_1_4 === 1) {
        questionCitizenCat_1_5();
    }
}

function loadCitizenReady_2() {
    let loadCitizenReady_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        loadCitizenReady_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        loadCitizenReady_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        loadCitizenReady_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        loadCitizenReady_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5')),
        loadCitizenReady_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'))
    ;

    if (loadCitizenReady_2_1 === 0) {
        questionCitizenCat_2_1();
    } else if (loadCitizenReady_2_2 === 0 &&
        loadCitizenReady_2_1 === 1) {
        questionCitizenCat_2_2();
    } else if (loadCitizenReady_2_3 === 0 &&
        loadCitizenReady_2_1 === 1 &&
        loadCitizenReady_2_2 === 1) {
        questionCitizenCat_2_3();
    } else if (loadCitizenReady_2_4 === 0 &&
        loadCitizenReady_2_1 === 1 &&
        loadCitizenReady_2_2 === 1 &&
        loadCitizenReady_2_3 === 1) {
        questionCitizenCat_2_4();
    } else if (loadCitizenReady_2_5 === 0 &&
        loadCitizenReady_2_1 === 1 &&
        loadCitizenReady_2_2 === 1 &&
        loadCitizenReady_2_3 === 1 &&
        loadCitizenReady_2_4 === 1) {
        questionCitizenCat_2_5();
    }
}

function loadCitizenReady_3() {
    let loadCitizenReady_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        loadCitizenReady_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        loadCitizenReady_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        loadCitizenReady_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        loadCitizenReady_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5')),
        loadCitizenReady_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'))
    ;

    if (loadCitizenReady_3_1 === 0) {
        questionCitizenCat_3_1();
    } else if (loadCitizenReady_3_2 === 0 &&
        loadCitizenReady_3_1 === 1) {
        questionCitizenCat_3_2();
    } else if (loadCitizenReady_3_3 === 0 &&
        loadCitizenReady_3_1 === 1 &&
        loadCitizenReady_3_2 === 1) {
        questionCitizenCat_3_3();
    } else if (loadCitizenReady_3_4 === 0 &&
        loadCitizenReady_3_1 === 1 &&
        loadCitizenReady_3_2 === 1 &&
        loadCitizenReady_3_3 === 1) {
        questionCitizenCat_3_4();
    } else if (loadCitizenReady_3_5 === 0 &&
        loadCitizenReady_3_1 === 1 &&
        loadCitizenReady_3_2 === 1 &&
        loadCitizenReady_3_3 === 1 &&
        loadCitizenReady_3_4 === 1) {
        questionCitizenCat_3_5();
    }
}

function loadCitizenReady_4() {
    let loadCitizenReady_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        loadCitizenReady_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        loadCitizenReady_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        loadCitizenReady_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        loadCitizenReady_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5')),
        loadCitizenReady_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'))
    ;

    if (loadCitizenReady_4_1 === 0) {
        questionCitizenCat_4_1();
    } else if (loadCitizenReady_4_2 === 0 &&
        loadCitizenReady_4_1 === 1) {
        questionCitizenCat_4_2();
    } else if (loadCitizenReady_4_3 === 0 &&
        loadCitizenReady_4_1 === 1 &&
        loadCitizenReady_4_2 === 1) {
        questionCitizenCat_4_3();
    } else if (loadCitizenReady_4_4 === 0 &&
        loadCitizenReady_4_1 === 1 &&
        loadCitizenReady_4_2 === 1 &&
        loadCitizenReady_4_3 === 1) {
        questionCitizenCat_4_4();
    } else if (loadCitizenReady_4_5 === 0 &&
        loadCitizenReady_4_1 === 1 &&
        loadCitizenReady_4_2 === 1 &&
        loadCitizenReady_4_3 === 1 &&
        loadCitizenReady_4_4 === 1) {
        questionCitizenCat_4_5();
    }
}

function loadCitizenReady_5() {
    let loadCitizenReady_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        loadCitizenReady_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        loadCitizenReady_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        loadCitizenReady_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        loadCitizenReady_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5')),
        loadCitizenReady_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'))
    ;

    if (loadCitizenReady_5_1 === 0) {
        questionCitizenCat_5_1();
    } else if (loadCitizenReady_5_2 === 0 &&
        loadCitizenReady_5_1 === 1) {
        questionCitizenCat_5_2();
    } else if (loadCitizenReady_5_3 === 0 &&
        loadCitizenReady_5_1 === 1 &&
        loadCitizenReady_5_2 === 1) {
        questionCitizenCat_5_3();
    } else if (loadCitizenReady_5_4 === 0 &&
        loadCitizenReady_5_1 === 1 &&
        loadCitizenReady_5_2 === 1 &&
        loadCitizenReady_5_3 === 1) {
        questionCitizenCat_5_4();
    } else if (loadCitizenReady_5_5 === 0 &&
        loadCitizenReady_5_1 === 1 &&
        loadCitizenReady_5_2 === 1 &&
        loadCitizenReady_5_3 === 1 &&
        loadCitizenReady_5_4 === 1) {
        questionCitizenCat_5_5();
    }
}

function loadCitizenReady_6() {
    let loadCitizenReady_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        loadCitizenReady_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        loadCitizenReady_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        loadCitizenReady_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        loadCitizenReady_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5')),
        loadCitizenReady_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'))
    ;

    if (loadCitizenReady_6_1 === 0) {
        questionCitizenCat_6_1();
    } else if (loadCitizenReady_6_2 === 0 &&
        loadCitizenReady_6_1 === 1) {
        questionCitizenCat_6_2();
    } else if (loadCitizenReady_6_3 === 0 &&
        loadCitizenReady_6_1 === 1 &&
        loadCitizenReady_6_2 === 1) {
        questionCitizenCat_6_3();
    } else if (loadCitizenReady_6_4 === 0 &&
        loadCitizenReady_6_1 === 1 &&
        loadCitizenReady_6_2 === 1 &&
        loadCitizenReady_6_3 === 1) {
        questionCitizenCat_6_4();
    } else if (loadCitizenReady_6_5 === 0 &&
        loadCitizenReady_6_1 === 1 &&
        loadCitizenReady_6_2 === 1 &&
        loadCitizenReady_6_3 === 1 &&
        loadCitizenReady_6_4 === 1) {
        questionCitizenCat_6_5();
    }
}

function loadCitizenReady_7() {
    let loadCitizenReady_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        loadCitizenReady_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        loadCitizenReady_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        loadCitizenReady_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        loadCitizenReady_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5')),
        loadCitizenReady_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'))
    ;

    if (loadCitizenReady_7_1 === 0) {
        questionCitizenCat_7_1();
    } else if (loadCitizenReady_7_2 === 0 &&
        loadCitizenReady_7_1 === 1) {
        questionCitizenCat_7_2();
    } else if (loadCitizenReady_7_3 === 0 &&
        loadCitizenReady_7_1 === 1 &&
        loadCitizenReady_7_2 === 1) {
        questionCitizenCat_7_3();
    } else if (loadCitizenReady_7_4 === 0 &&
        loadCitizenReady_7_1 === 1 &&
        loadCitizenReady_7_2 === 1 &&
        loadCitizenReady_7_3 === 1) {
        questionCitizenCat_7_4();
    } else if (loadCitizenReady_7_5 === 0 &&
        loadCitizenReady_7_1 === 1 &&
        loadCitizenReady_7_2 === 1 &&
        loadCitizenReady_7_3 === 1 &&
        loadCitizenReady_7_4 === 1) {
        questionCitizenCat_7_5();
    }
}

function loadCitizenReady_8() {
    let loadCitizenReady_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        loadCitizenReady_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        loadCitizenReady_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        loadCitizenReady_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        loadCitizenReady_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5')),
        loadCitizenReady_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'))
    ;

    if (loadCitizenReady_8_1 === 0) {
        questionCitizenCat_8_1();
    } else if (loadCitizenReady_8_2 === 0 &&
        loadCitizenReady_8_1 === 1) {
        questionCitizenCat_8_2();
    } else if (loadCitizenReady_8_3 === 0 &&
        loadCitizenReady_8_1 === 1 &&
        loadCitizenReady_8_2 === 1) {
        questionCitizenCat_8_3();
    } else if (loadCitizenReady_8_4 === 0 &&
        loadCitizenReady_8_1 === 1 &&
        loadCitizenReady_8_2 === 1 &&
        loadCitizenReady_8_3 === 1) {
        questionCitizenCat_8_4();
    } else if (loadCitizenReady_8_5 === 0 &&
        loadCitizenReady_8_1 === 1 &&
        loadCitizenReady_8_2 === 1 &&
        loadCitizenReady_8_3 === 1 &&
        loadCitizenReady_8_4 === 1) {
        questionCitizenCat_8_5();
    }
}

function loadCitizenReady_9() {
    let loadCitizenReady_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        loadCitizenReady_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        loadCitizenReady_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        loadCitizenReady_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        loadCitizenReady_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5')),
        loadCitizenReady_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'))
    ;

    if (loadCitizenReady_9_1 === 0) {
        questionCitizenCat_9_1();
    } else if (loadCitizenReady_9_2 === 0 &&
        loadCitizenReady_9_1 === 1) {
        questionCitizenCat_9_2();
    } else if (loadCitizenReady_9_3 === 0 &&
        loadCitizenReady_9_1 === 1 &&
        loadCitizenReady_9_2 === 1) {
        questionCitizenCat_9_3();
    } else if (loadCitizenReady_9_4 === 0 &&
        loadCitizenReady_9_1 === 1 &&
        loadCitizenReady_9_2 === 1 &&
        loadCitizenReady_9_3 === 1) {
        questionCitizenCat_9_4();
    } else if (loadCitizenReady_9_5 === 0 &&
        loadCitizenReady_9_1 === 1 &&
        loadCitizenReady_9_2 === 1 &&
        loadCitizenReady_9_3 === 1 &&
        loadCitizenReady_9_4 === 1) {
        questionCitizenCat_9_5();
    }
}

function loadCitizenReady_10() {
    let loadCitizenReady_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        loadCitizenReady_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        loadCitizenReady_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        loadCitizenReady_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        loadCitizenReady_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5')),
        loadCitizenReady_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'))
    ;

    if (loadCitizenReady_10_1 === 0) {
        questionCitizenCat_10_1();
    } else if (loadCitizenReady_10_2 === 0 &&
        loadCitizenReady_10_1 === 1) {
        questionCitizenCat_10_2();
    } else if (loadCitizenReady_10_3 === 0 &&
        loadCitizenReady_10_1 === 1 &&
        loadCitizenReady_10_2 === 1) {
        questionCitizenCat_10_3();
    } else if (loadCitizenReady_10_4 === 0 &&
        loadCitizenReady_10_1 === 1 &&
        loadCitizenReady_10_2 === 1 &&
        loadCitizenReady_10_3 === 1) {
        questionCitizenCat_10_4();
    } else if (loadCitizenReady_10_5 === 0 &&
        loadCitizenReady_10_1 === 1 &&
        loadCitizenReady_10_2 === 1 &&
        loadCitizenReady_10_3 === 1 &&
        loadCitizenReady_10_4 === 1) {
        questionCitizenCat_10_5();
    }
}