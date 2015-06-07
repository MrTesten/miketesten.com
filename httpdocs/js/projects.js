function onGalleryClick(event) {
	event = event || window.event;
	var target = event.target || event.srcElement,
	link = target.src ? target.parentNode : target,
	options = {index: link, event: event},
	links = this.getElementsByTagName('a');
	blueimp.Gallery(links, options);
};

document.getElementById('dfsport-optimizer-links').onclick = function(event) {
	onGalleryClick(event);
};
blueimp.Gallery(
	[
		{ href: "static/dfsport-optimizer/dfsport-optimizer-1.png", title:"Team List" },
		{ href: "static/dfsport-optimizer/dfsport-optimizer-2.png", title:"Player List" },
		{ href: "static/dfsport-optimizer/dfsport-optimizer-3.png", title:"Sorted Player List" }
	],
	{
		container: '#dfsport-optimizer-carousel',
		carousel: true
	}
);

document.getElementById('yellow-links').onclick = function(event) {
	onGalleryClick(event);
};
blueimp.Gallery(
	[
		{ href: "static/yellow/yellow-1.png", title: "Grey" },
		{ href: "static/yellow/yellow-2.png", title: "Red" },
		{ href: "static/yellow/yellow-3.png", title: "Green" },
		{ href: "static/yellow/yellow-4.png", title: "Yellow" },
		{ href: "static/yellow/yellow-5.png", title: "Victory" }
	],
	{
		container: '#yellow-carousel',
		carousel: true
	}
);

document.getElementById('honey-links').onclick = function(event) {
	onGalleryClick(event);
};
blueimp.Gallery(
	[
		{ href: "static/honey/honey-1.png", title: "Map Overview" },
		{ href: "static/honey/honey-2.png", title: "Blue Pollen Pick-up" },
		{ href: "static/honey/honey-3.png", title: "Red Pollen Pick-up" },
		{ href: "static/honey/honey-4.png", title: "Blooming Flower" },
		{ href: "static/honey/honey-5.png", title: "Web" },
		{ href: "static/honey/honey-6.png", title: "Spider Death" },
		{ href: "static/honey/honey-7.png", title: "Wasp Nest" },
		{ href: "static/honey/honey-8.png", title: "Victory" }
	],
	{
		container: '#honey-carousel',
		carousel: true
	}
);