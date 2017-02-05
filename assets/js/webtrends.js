switch (document.location.host.toLowerCase()) {
				case "insideto.toronto.ca":
					dcsid_var = "dcs8y7wyi38nrlws2mbuv8n3q_2y8o";
					wt_load = "//www1.toronto.ca/wcmAsset/js/web_analytics/webtrendsload.js";
					wt_file = "//www1.toronto.ca/wcmAsset/js/web_analytics/webtrends.js";
			break;
				case "insideto-search.toronto.ca":
					dcsid_var = "dcs8y7wyi38nrlws2mbuv8n3q_2y8o";
					wt_load = "//www1.toronto.ca/wcmAsset/js/web_analytics/webtrendsload.js";
					wt_file = "//www1.toronto.ca/wcmAsset/js/web_analytics/webtrends.js";
			break;			
				case "insideto-qa.toronto.ca":
					dcsid_var = "dcsc5wive28nrlk3f9y588n3q_6x8b";
					wt_load = "//qaportal-delivery-lbvip.inet.toronto.ca/wcmAsset/js/web_analytics/webtrendsload.js";
					wt_file = "//qaportal-delivery-lbvip.inet.toronto.ca/wcmAsset/js/web_analytics/webtrends.js";
			break;
				case "STAGING.DOMAIN":
					dcsid_var = "dcsg4mt1x38nrlst0iavt8n3q_7s2d";
					wt_load = "//stgportal-delivery-lbvip.inet.toronto.ca/wcmAsset/js/web_analytics/webtrendsload.js";
					wt_file = "//stgportal-delivery-lbvip.inet.toronto.ca/wcmAsset/js/web_analytics/webtrends.js";
			break;
				case "insideto-dev.toronto.ca":
					dcsid_var = "dcs4vqx0h28nrlst0iavt8n3q_6s6x";
					wt_load = "//urania-a3.corp.toronto.ca/wcmAsset/js/web_analytics/webtrendsload.js";
					wt_file = "//urania-a3.corp.toronto.ca/wcmAsset/js/web_analytics/webtrends.js";
			break;
		}

document.write ('<scr'+'ipt type="text/javascript" '+'dcsid_var="' + dcsid_var + '"></scr'+'ipt>');
document.write ('<scr'+'ipt type="text/javascript" '+'src="' + wt_load + '"></scr'+'ipt>');
document.write ('<scr'+'ipt type="text/javascript" '+'src="' + wt_file + '"></scr'+'ipt>');	