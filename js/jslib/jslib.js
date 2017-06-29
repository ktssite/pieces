/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var js = {}; // it all starts with a small first step
/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var js = js || {};
//_____________________________________________________________________________

js.get_cookie = function(name)
{
	var arr = document.cookie.split(';');

	for(var i = 0; i < arr.length; i++)
	{
		var c = arr[i], p = -1; while(c.charCodeAt(++p) < 33);
		
		if(c.indexOf(name+'=', p) == p) return c.substr(p + name.length + 1);
	}
};//___________________________________________________________________________

js.set_cookie = function(name, val, days, path) // (name, "", -1) to delete a cookie
{
	var enc = encodeURIComponent, v = enc(val);
	
	if(days)
	{
		var d = new Date(); d.setDate(d.getDate() + days);

		v += '; expires=' + d.toUTCString();
	}

	if(path) v += '; path=' + enc(path);

	document.cookie = enc(name) + '=' + v; // + '; Secure'
};//___________________________________________________________________________

