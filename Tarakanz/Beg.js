        function rnd(min, max) {
            return Math.random() * (max - min) + min;
        }
        pic = new Image();
        pic.src = 'na_kone.png';
       
        window.requestAnimationFrame = StartRace;
        function StartRace() {
			var position1 =0,
					position2=0,
					position3=0;
		
            var example = document.getElementById("example"),
                ctx = example.getContext('2d');
            var winner = new Array()
			 
				
						function draw(){
							ctx.beginPath();
							ctx.fillStyle = "green";
							ctx.fillRect(0,0,800,150)
							ctx.beginPath();
							ctx.fillStyle = "yellow";
							ctx.fillRect(0,150,800,150)
							ctx.beginPath();
							ctx.fillStyle = "red";
							ctx.fillRect(0,300,800,150)
	
							ctx.beginPath();
							ctx.drawImage(pic, position1, 0, 150, 150);
							ctx.drawImage(pic, position2, 150, 150, 150);
							ctx.drawImage(pic, position3, 300, 150, 150);
							ctx.closePath();
							ctx.fill();

						

							if (position1 > 700) {
								winner.push(1);
								position1 = 700;
							}

							if (position2 > 700) {
								winner.push(2);
								position2 = 700;
							}

							if (position3 > 700) {
								winner.push(3);
								position3 = 700;
							}
							
							if (position1 <700) position1 += rnd(1, 6);
							if (position2 <700) position2 += rnd(1, 6);
							if (position3 <700) position3 += rnd(1, 6);
								
							
							if (position1 == 700 && position2 == 700 && position3 == 700) {
								document.getElementById("Placez").innerHTML = "Первое место: " + winner[0] + "     Второе место: " + winner[1] + "    Третье место:" + winner[2];
								position1 = 0,
								position2 = 0,
								position3 = 0;
								clearInterval(intervalID)
							}
							
						}
						var intervalID = setInterval(draw, 50);
						
						
						
				
	 }
		