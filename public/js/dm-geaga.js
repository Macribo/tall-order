$(document).ready(function () {
// alert();
let prevStoryStep = 'inbound from cookie || null'
let localStoryStep = 0;
let dmGeaga = [

    `<button>Cé tú féin? </button><button> Cé tusa?</button>`,``,``,``
];
$('#shout').on('touchend', function(){

   begin();
        // alert('kungfu')
    $('#hero-keyboard').fadeOut();
    
}
);
begin = () =>{
    localStoryStep++;
    // $('#output').html(dmGeaga[1]);
    // alert('dmGeaga[1]');
    render();
}



render=()=>{

if(localStoryStep === 1){
$('#keyboard-container').fadeIn();
// alert(localStoryStep);
    $('#output').html(`${dmGeaga[0]}`);

}
}

render();
});
