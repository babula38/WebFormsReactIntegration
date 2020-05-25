<%@ Page Title="React WebForm 1" Language="C#" 
    AutoEventWireup="true" CodeBehind="PartsWebForm.aspx.cs" Inherits="WebApplication1.PartsWebForm" 
%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <!-- This is where the React application will be rendered -->
    <div id="root"></div>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PageScripts" runat="server">
    <!-- We are passing the baseUrl to React. All Urls will be based on that. Helps as web app installation Url may vary -->
    <script>
        window.baseUrl = '<%= ResolveUrl ("~") %>';
    </script>
    <script src="React/dist/parts.bundle.js" type="text/javascript"></script>
</asp:Content>