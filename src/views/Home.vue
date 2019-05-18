<template>
	<div>
		<section class="hero is-fullheight has-background-black" id="home" style="overflow: hidden;">
			<div class="hero-body">
				<div class="container has-text-centered">
					<div class="columns is-centered">
						<div class="column" style="display: block; margin: auto;">
							<h1 class="title is-size-1 has-text-white" data-aos="zoom-in-up" data-aos-delay="150" data-aos-duration="500">
								Hi, I'm Jahel Relova
							</h1>
							<h2 class="subtitle is-size-3 has-text-grey-lighter" data-aos="zoom-out-up" data-aos-delay="150" data-aos-duration="500">
								a Developer
								<i class="icon-keyboard-o"></i>
							</h2>
							<router-link class="button is-medium is-rounded has-text-black is-white" to="/about" style="width: 30%;">About Me</router-link>
						</div>
						<div class="column">
							<h2 class="title is-size-3 has-text-weight-bold has-text-white" style="margin-top: 16px;" data-aos="fade-right" data-aos-delay="150" data-aos-duration="500">
								Latest Project
							</h2>
							<figure class="image" style="width: 100%; display:block; margin: auto; margin-top: 16px;">
								<img src="@/assets/img/portfolio-preview.png">
							</figure>
							<h3 class="title is-size-4 has-text-white" style="margin-bottom: 8px; margin-top: 16px;">
								Portfolio v2
							</h3>
							<h4 class="title is-size-6 has-text-white" style="margin-bottom: 24px;">
								A website to showcase my projects and skills.
							</h4>
							<router-link class="button is-medium is-rounded has-text-white is-success" to="/Websites" style="width: 30%; margin-right: 15px;">Learn more</router-link>
							<router-link class="button is-medium is-rounded has-text-white is-danger" to="/Apps" style="width: 30%;">More Projects</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
