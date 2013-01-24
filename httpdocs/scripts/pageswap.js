
$(document).ready(function()
{
	var content = $("#content");
	var menu = $("#pages li");

	content.load("pages/home.html");
	var displayedPage = "home";

	menu.click(function()
	{
		var requestedPage = this.id;
		if(displayedPage != requestedPage)
		{
			content.fadeOut(200, function()
			{
				var pagePath = "pages/"+requestedPage+".html";
				content.load(pagePath, function()
				{
					content.fadeIn(200);
				});
			});
			displayedPage = requestedPage;
		}
	});
});