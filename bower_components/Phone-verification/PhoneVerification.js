function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function setCursorPositionTwo(postwo, elemtwo) {
    elemtwo.focus();
    if (elemtwo.setSelectionRange) elemtwo.setSelectionRange(postwo, postwo);
    else if (elemtwo.createTextRange) {
        var rangetwo = elemtwo.createTextRange();
        rangetwo.collapse(true);
        rangetwo.moveEnd("character", postwo);
        rangetwo.moveStart("character", postwo);
        rangetwo.select()
    }
}

var len = 0;

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/[_\d]/g, function(a) {
        return i < val.length ? val.charAt(i++) : a
    });
    i = this.value.indexOf("_");
    if (val.length < len) i = this.value.lastIndexOf(val.substr(-1)) + 1;
    if (i != -1) {
        i < 5 && (i = 3);
        this.value = this.value.slice(0, i);
    }

    len = val.length;
};

var lenTwo = 0;

function maskTwo(eventTwo) {
    if (this.selectionStart < 3) eventTwo.preventDefault();
    var matrixTwo = "8 (___) ___ ____",
        itwo = 0,
        defTwo = matrixTwo.replace(/\D/g, ""),
        valTwo = this.value.replace(/\D/g, "");

    if (defTwo.length >= valTwo.length) valTwo = defTwo;
    this.value = matrixTwo.replace(/[_\d]/g, function(a) {
        return itwo < valTwo.length ? valTwo.charAt(itwo++) : a
    });
    itwo = this.value.indexOf("_");
    if (valTwo.length < lenTwo) itwo = this.value.lastIndexOf(valTwo.substr(-1)) + 1;
    if (itwo != -1) {
        itwo < 4 && (itwo = 3);
        this.value = this.value.slice(0, itwo);
    }
    lenTwo = valTwo.length;
};



var oldFirstNumber = "";


$('.phoneVerification').focus(function() {
    var val;
    $(this).val(function(i, val) {
        return val.replace(/[^\d]+/g, '');
    });
    if (val != oldFirstNumber) {
        oldFirstNumber = val;
        if (event.keyCode == 56) {
            $('input').on("input", maskTwo);
        } else {
            $('input').on("input", mask);
        }
    }
});