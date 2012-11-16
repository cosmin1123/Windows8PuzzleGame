// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

var empty = 9;
score = 1000
gameRun = true;

function time() {
    if (gameRun)
        score--;

    if (score < 0) {
        score = 0
        gameRun = false
        document.getElementById("10").innerHTML = "Loooser";

    }
    document.getElementById("timeS").innerHTML = score

}

function move(a) {
    if (gameRun) {
        var aux;
        score -= 10;
        if (a == empty - 1 && (empty != 1 && empty != 4 && empty != 7)) {


            aux = document.getElementById(a).innerHTML;

            document.getElementById(a).innerHTML = document.getElementById(empty).innerHTML;
            document.getElementById(empty).innerHTML = aux;

            empty = a;

        }

        if (a == empty + 1 && (empty != 3 && empty != 6 && empty != 9)) {


            aux = document.getElementById(a).innerHTML;

            document.getElementById(a).innerHTML = document.getElementById(empty).innerHTML;
            document.getElementById(empty).innerHTML = aux;

            empty = a;

        }

        if (a == empty - 3) {


            aux = document.getElementById(a).innerHTML;

            document.getElementById(a).innerHTML = document.getElementById(empty).innerHTML;
            document.getElementById(empty).innerHTML = aux;

            empty = a;

        }

        if (a == empty + 3) {


            aux = document.getElementById(a).innerHTML;

            document.getElementById(a).innerHTML = document.getElementById(empty).innerHTML;
            document.getElementById(empty).innerHTML = aux;

            empty = a;

        }

        win();
    }
}
function win() {
    var i = new Array;
    p = 1
    for (j = 1; j < 10; j++) {
        if (document.getElementById(j).innerHTML)
            i[j] = document.getElementById(j).innerHTML
    }
    for (k = 1; k < 9; k++)
        if (i[k] != k)
            p = 0

    if (p == 1) {
        document.getElementById("10").innerHTML = "Congratualations, you win"
        gameRun = false;
    }
}

function reset() {
    v = new Array
    u = new Array
    ok = 10
    j = 1;
    while (j != 9) {
        a = Math.floor(Math.random() * 100) % 8 + 1
        if (v[a] != a) {
            document.getElementById(j).innerHTML = a
            v[a] = a
            j++
        }
    }
    document.getElementById(9).innerHTML = " ";
    empty = 9
    score = 1000
    gameRun = true
    document.getElementById("10").innerHTML = "&nbsp"

}

