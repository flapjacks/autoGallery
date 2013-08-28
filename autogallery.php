<!DOCTYPE html>
<html>
	<head>
		<title>test page</title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
		<script type="text/javascript" src="autogallery.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
			$('#one').autoGallery({imgPerFrame: 3, seed: '.testSeed'})
		})
		</script>
		<link rel="stylesheet" type="text/css" href="autogallery.css" />
		<style type="text/css">
			#one {
				width: 1000px;
			}
		</style>
	</head>
	
	<body>
		<div id="wrapper">
			<div id="one">
				<img src="http://www.oryxwebstudio.com/images/portfolio/saloncruz.png" alt="cruz" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/alyssa-citorik.png" alt="alyssa" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/imgbump.png" alt="imgbump" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/toonuvagames.png" alt="toonuva" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/z-interiors.png" alt="z-interiors" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/imgbump.png" alt="imgbump" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/toonuvagames.png" alt="toonuva" class="autoItemImg testSeed" />
				<img src="http://www.oryxwebstudio.com/images/portfolio/z-interiors.png" alt="z-interiors" class="autoItemImg testSeed" />
				<div class="testSeed">
					testSeed1
					<div>
						look more text!
					</div>
				</div>
				<div class="testSeed">
					testSeed2
					<div>
						look more text!
					</div>
				</div>
				<div class="testSeed">
					testSeed3
					<div>
						look more text!
					</div>
				</div>
				<div class="testSeed">
					testSeed4
					<div>
						look more text!
					</div>
				</div>
				<div class="testSeed">
					testSeed5
					<div>
						look more text!
					</div>
				</div>
				<!--
				<div class="pg_hdr">
					See for yourself...
				</div>
				<div id="autoScroller">
					<div class="autoItemWrapper">
						<div class="autoItemWrapperTitle">
							<a href="http://www.portfolio.oryxwebstudio.com/SalonCruz">Salon Cruz</a>
						</div>
						<div class="autoItemWrapperImg">
							<a href="http://www.portfolio.oryxwebstudio.com/SalonCruz">
								<img src="images/portfolio/saloncruz.png" alt="cruz" class="autoItemImg" />
							</a>
						</div>
						<div class="autoItemWrapper_txt">
							This site was tailor made for a local salon. Developed custom image gallery to display the salon's portfolio. Constructed desktop and mobile versions.
						</div>
					</div>
				</div>
				-->
			</div>
		</div>
	</body>
</html>

