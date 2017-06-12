$(document).ready(function() {

	Gems = ['assets/images/diamond.png','assets/images/ruby.png','assets/images/emerald.png','assets/images/sapphire.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	Gemstones();
	nextround();

	function Gemstones () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageGems = $('<img>');
			imageGems.attr('data-num', numbers[i]);
			imageGems.attr('src', Gems[i]);
			imageGems.attr('alt', 'Gems');
			imageGems.addClass('GemsImage')
			$('#Gems').append(imageGems);
		}
	}

	function nextround() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.GemsImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   $('#yourScore').text(counter);


		    if (counter == numberToGuess){
		      $('#status').text('You won, trumpet sound and stuff!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#Gems').empty();
		      Gemstones();
		      nextround();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You Lose, these things happen.')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#Gems').empty();
		        Gemstones();
		        nextround();
		    }
		});
	}

});