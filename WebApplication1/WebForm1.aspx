<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form runat="server" id="main">
    </form>
    <div id="root"></div>
    <script>
        window.baseUrl = '<%= ResolveUrl ("~") %>';
    </script>
    <script src="React/dist/parts.bundle.js" type="text/javascript"></script>
</body>
</html>
