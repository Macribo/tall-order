$(document).ready(function () {

    /*update keyboard appearance
    according to dm is speaking or not.
    player-can-type = false;

    listen for green keypress

    */
    let userGender;
   let prevStoryStep = 'inbound from cookie || null'
   let localStoryStep = 0;

   let dmAgCainnt = false;
   let justListen = false;
   let dmGeaga = [
    // <form><radial btn><Herr></radial btn></radial>
    `<div id="who-you"  class="align-middle">
        <h2 class="greets">
            Guten Tag
        </h2> 
        <br>  
        <button type="button" class="btn btn-secondary btn-lg" id="herr">
            Herr
        </button>
        <button type="button" class="btn btn-secondary btn-lg" id="frau">
            Frau
        </button>
        <br/>
        <br/>
        <h2>Auslander</h2>
        <br/>
        <img id='aussie'src="./images/0.png">
    </div>`,
    `
    <h2>    Hier Learnt Man Komputer Irish</h2>
    <button id"okay"£ type="button" class="btn btn-outline-light">
        Okay
    </button>
    <br/>
    <button type="button" class="btn btn-outline-light">
    <<
    </button>`
    ,
    `<h2 class="greets">is ainm dom</h2>`,`
        <div id="who-you"  class="align-middle">1</div>

    `,``,``
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
    if(localStoryStep === 0){
        $('#output').html(`${dmGeaga[0]}`);
        setTimeout(function(){
            $('#who-you').fadeIn();
        },2000)
        $('#herr').on('click', function(){
        userGender = "masculine";
        $('#who-you').fadeOut();
            // alert('who-you gone?');
    
})
$('#frau').on('click', function(){
    userGender = "feminine";
    $('#who-you').fadeOut();

})

    }
if(localStoryStep === 1){
$('#keyboard-container').fadeIn();
$('#hero-keyboard').fadeOut();
$('#okay').on('click', function(){
    localStoryStep++;
    render();
})
// alert(localStoryStep);
    $('#output').html(`${dmGeaga[1]}`);
render();
}
}

render();




/*EASCA KEYBOARD */

let keyPressed;

let keysToShow = [];
showWhatKeys=(keyPressed)=>{
    switch(keyPressed){
        case 'a': keysToShow.push('a');
                keysToShow.push('á');
                keysToShow.push('A');
                break;
        

                case 'b': keysToShow.push('b');
                keysToShow.push('ḃ');
                keysToShow.push('B');
                break;
        
                case 'c': keysToShow.push('c');
                keysToShow.push('ċ');
                keysToShow.push('C');
                break;
        
                case 'd': keysToShow.push('d');
                keysToShow.push('ḋ');
                keysToShow.push('D');
                break;
        
                case 'e': keysToShow.push('e');
                keysToShow.push('é');
                keysToShow.push('E');
                break;
        
                case 'f': keysToShow.push('f');
                keysToShow.push('ḟ');
                keysToShow.push('F');
                break;
        
                case 'g': keysToShow.push('g');
                keysToShow.push('ġ');
                keysToShow.push('G');
                break;
        
                case 'h': keysToShow.push('h');
                keysToShow.push('H');
                break;
        
                case 'i': keysToShow.push('i');
                keysToShow.push('í');
                keysToShow.push('I');
                break;
        
                case 'l': keysToShow.push('l');
                keysToShow.push('L');
                break;
        
                case 'm': keysToShow.push('m');
                keysToShow.push('ṁ');
                keysToShow.push('M');
                break;
        
                case 'n': keysToShow.push('n');
                keysToShow.push('N');
                break;
        
                case 'o': keysToShow.push('o');
                keysToShow.push('ó');
                keysToShow.push('O');
                break;
        
                case 'p': keysToShow.push('p');
                keysToShow.push('ṗ');
                keysToShow.push('P');
                break;
        
                case 'r': keysToShow.push('r');
                keysToShow.push('ꞃ');
                keysToShow.push('R');
                break;
        
                case 's': keysToShow.push('s');
                keysToShow.push('ṡ');
                keysToShow.push('S');
                break;
        
                case 't': keysToShow.push('t');
                keysToShow.push('ṫ');
                keysToShow.push('T');
                break;
        
                case 'u': keysToShow.push('u');
                keysToShow.push('ú');
                keysToShow.push('U');
                break;
        
        

        default: break;
    }

}


$('#fada-mode').hide();
$('#caps-keyboard-container').hide();
capsMode=false;


toggleCapsMode = ()=>{
if (capsMode===true){
$('#keyboard-container').show();
$('#caps-keyboard-container').hide();
capsMode=false;
}
else{
    $('#keyboard-container').hide();
    $('#alt-keyboard-container').hide();
$('#caps-keyboard-container').show();

capsMode=true;

}
;

}
fadaMode = ()=>{

    $('#keyboard-container').hide();
    $('#fada-mode').show();

    $('.btn').on( 'touchend' , function(e) {
        if (keyPressed != "Ᵹ"){
        $('#keyboard-container').show();
        $('#fada-mode').hide();}
    })
}
// 	else{
// 		$('#keyboard-container').show();
// 	$('#alt-keyboard-container').hide();
// 	fadaMode=false;
// 	}
// }


function holdKeyDown() {
// alert(keyPressed);
if($('#hero-keyboard').is('hidden')){

// alert(keysToShow)
for (let i = 0; i<keysToShow.length; i++){
    let newButton = `<button id=`+keysToShow[i]+` onclick = "				$('#output').append(this.id);
    " type="button" class="btn btn-right-logo btn-outline-dark">`+keysToShow[i]+`</button>`
    
    $('#j-line').append(newButton)	
}

$('#j-line').fadeIn();
let newLeft = $('#'+keyPressed).offset().left;
let newTop = $('#'+keyPressed).offset().top -50;
$('#j-line').css({"left": newLeft});
$('#j-line').css({"top": newTop});
setTimeout(function(){
    $('#j-line').fadeOut();
    // alert("removed");
},2000
)
}
}
$('.btn').on('touchstart', function(){
    $('#j-line').empty();
    keyPressed = (this.innerHTML);
    keysToShow=[];

    showWhatKeys(keyPressed);

    myVar = setTimeout(holdKeyDown, 600);

})
    $('.btn').on( 'touchend' , function(e) {
        clearTimeout(myVar)
            var id = this.id
            if (keyPressed=== "Ᵹ"){
                fadaMode();
                // alert('alt')
            }
            else if(
                
                (this.id === "copy")
            ){
                // toggleCapsMode()

                
            }
            else
            if (id ==='undo'){
                var temp = $('#output').text();
                temp.toString();
                // alert(temp)
            str=	temp.substring(0, temp.length - 1);
            // alert(str)
            $('#output').text(str) ;
            }
            else if( $('#j-line').is(':hidden')){
                // alert("hidden")
            $('#deir-user').append(keyPressed);
    keysToShow= [];}

        });
        // if (id === 'undo'){
        // 	let temp = document.getElementById('#output');
        // 	alert(temp)
        // }
});
