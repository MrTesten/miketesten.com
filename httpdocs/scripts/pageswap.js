
$(document).ready(function()
{
	var content = $("#content");
	//var menu = $("#pages td");

	content.load("pages/home.php");
	var displayedPage = "home";

	/*menu.click(function()
	{
		switch(this.id)
		{
			case "home":
				if (displayedPage != "home")
				{
					content.fadeOut(200, function()
					{
						content.load("pages/home.php", function()
						{
							content.fadeIn(200);
						});
					});
					displayedPage = "home";
				}
				break;
			case "projects":
				if (displayedPage != "projects")
				{
					content.fadeOut(200, function()
					{
						content.load("pages/projects.php", function()
						{
							content.fadeIn(200);
						});
					});
					displayedPage = "projects";
				}
				break;
			default:
				break;
		}
	});*/
});