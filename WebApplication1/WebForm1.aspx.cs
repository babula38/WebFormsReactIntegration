using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication1.Models;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        readonly Part[] _parts = new Part[]
    {
            new Part { Id = 1, Name = "Part 1", Price = 1 },
            new Part { Id = 2, Name = "Part 2", Price = 2 },
            new Part { Id = 3, Name = "Part 3", Price = 3 }
    };
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["Data"] = _parts;
        }

        [WebMethod(EnableSession = true)]
        public static IEnumerable<Part> GetValue(string page, string method, object data)
        {
            return (Part[])HttpContext.Current.Session["Data"];
        }

        [WebMethod(EnableSession = true)]
        public static IEnumerable<Part> PostValue(string page, string method, Part data)
        {
            var parts = (HttpContext.Current.Session["Data"] as IEnumerable<Part>).ToList();
            parts.Add(data);

            HttpContext.Current.Session["Data"] = parts.ToArray();

            return HttpContext.Current.Session["Data"] as Part[];
        }
    }
}