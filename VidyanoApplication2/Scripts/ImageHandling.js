$(document).ready(function () {
    var Base64String = "";
    var plateAPIUrl = "localhost:8001/plate/identify"

    $("#fileUpload").on('change', function () {
        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var image_holder = $("#image-holder");
        image_holder.empty();
        if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof (FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("<img />", {
                            "src": e.target.result,
                            "class": "thumb-image img-fluid"
                        }).appendTo(image_holder);
                    }
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            alert("Pls select only images");
        }
    });

    function readFile() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.addEventListener("load", function (e) {
                Base64String = e.target.result.split(',')[1] +"";

                document.getElementById("b64").innerHTML = Base64String;
            });
            FR.readAsDataURL(this.files[0]);
        }
    }
    document.getElementById("fileUpload").addEventListener("change", readFile);


    $("#send").on('click', function () {
        AjaxcallPlateApi(Base64String);
    });


    function AjaxcallPlateApi(Base64String) {
        $.ajax({
            url: plateAPIUrl,
            type: 'POST',
            cache: false,
            dataType: "json",
            data: {
                "image": Base64String
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('failed');
                console.log(jqXHR, textStatus, errorThrown);
            },
            success: function (data) {
                var resultaat = data.results;
                Console.log(resultaat);
                alert(resultaat);
            }
        });
    }

});