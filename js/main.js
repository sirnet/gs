
    var burgerList = document.getElementById("burger__List");
    var firstItem = document.getElementById("first");
    var secondItem = document.getElementById("second");
    var thirdItem = document.getElementById("third");
    var fourthItem = document.getElementById("fourth");
    var i=0;
    burgerList.onclick =  function(){
        if (i ==0) {
            firstItem.classList.add("visually-hidden");
            secondItem.classList.add("second--active");
            thirdItem.classList.add("third--active");
            fourthItem.classList.add("visually-hidden");
            i=1;
        }
        else {
            firstItem.classList.remove("visually-hidden");
            secondItem.classList.remove("second--active");
            thirdItem.classList.remove("third--active");
            fourthItem.classList.remove("visually-hidden");
            i=0;
        }
    } 

    $(function(){
        let filter = $("[data-menu]");
        console.log(filter);

        filter.on("click", function(event){
            event.preventDefault();

            let menu = $(this).data('menu');
            console.log(menu);

            $("[data-section]").each(function(){
                let workSection = $(this).data('section');
                console.log(workSection);

                if (workSection != menu) {
                    $(this).addClass('hide');
                    console.log(workSection);
                } else {
                    $(this).removeClass('hide');
                }
            })
        })

    })
