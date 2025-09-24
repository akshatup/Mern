function makesachwich(raw, cd){
    console.log("take a Bread");
    cd();
}

function fill_stuff(cd){
    console.log("Poatao, chesse, and corn");
    cd();

}

function grill_process(cd){
    console.log("bread is in process");
    cd();
}

function final(cd){
    setTimeout(()=> {
         console.log("sandwich is ready");
    }    
    , 3000)
    cd();
  

}

makesachwich("raw", function(){
    fill_stuff(function() {
        grill_process(function() {
            final(function() {
                console.log("sandwich is ready to serve");
            });
        });
    });
});


