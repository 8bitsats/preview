
document.getElementById('htmlInput').addEventListener('input', function() {
    var htmlContent = this.value;
    var iframe = document.getElementById('htmlPreview');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(htmlContent);
    iframe.contentWindow.document.close();
});
