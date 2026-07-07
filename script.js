window.addEventListener("load", () => {

    const button = document.getElementById("messageButton");

    // Wait until Crisp is fully loaded
    $crisp.push([
        "on",
        "session:loaded",
        function () {

            console.log("Crisp Loaded!");

            button.addEventListener("click", function (e) {

                e.preventDefault();

                $crisp.do("chat:toggle");

            });

        }
    ]);

});
